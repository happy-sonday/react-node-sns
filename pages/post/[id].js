// post/1.js

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import AppLayout from "../../components/AppLayout";
import PostCard from "../../components/PostCard";
import Head from "next/head";

import axios from "axios";
import { END } from "@redux-saga/core";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";
import { LOAD_POST_REQUEST } from "../../reducers/post";
import wrapper from "../../store/configureStore";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const { singlePost } = useSelector((state) => state.post);
  return (
    <AppLayout>
      <Head>
        <title>
          {singlePost.User.nickname}
          님의 글
        </title>
        <meta name="description" content={singlePost.content} />
        <meta
          property="og:title"
          content={`${singlePost.User.nickname}님의 게시글`}
        />
        <meta property="og:description" content={singlePost.content} />
        <meta
          property="og:image"
          content={
            singlePost.Images[0]
              ? singlePost.Images[0].src
              : "https://nodebird.com/favicon.ico"
          }
        />
        <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
      </Head>
      <PostCard post={singlePost} />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // 로그인상태를 백엔드와 공유하기 위에 쿠키 전달
    const cookie = context.req ? context.req.headers.cookie : "";
    // NOTE:다른 사용자들과 공유되지 않기 위해 초기화
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_POST_REQUEST,
      data: context.params.id, // context.query.id 동일
    });
    // REQUEST에서 끝나는 것을 방지 SUCCESS할떄까지 기다림
    //NEXT-REDUX ref 참조
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);
export default Post;
