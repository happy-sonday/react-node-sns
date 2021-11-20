// 특정사용자의 게시글만 가져오는 페이지

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Card } from "antd";

import Head from "next/head";
import { useRouter } from "next/router";

import axios from "axios";
import AppLayout from "../../components/AppLayout";
import PostCard from "../../components/PostCard";
import wrapper from "../../store/configureStore";

import { LOAD_USER_POSTS_REQUEST } from "../../reducers/post";
import { LOAD_MY_INFO_REQUEST, LOAD_USER_REQUEST } from "../../reducers/user";
import { END } from "@redux-saga/core";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    (state) => state.post
  );
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          //마지막 게시글의 id에 접근

          dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            lastId:
              mainPosts[mainPosts.length - 1] &&
              mainPosts[mainPosts.length - 1].id,
            data: id, // 동적 라우팅의 id ( 사용자의 unique id )
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts.length, hasMorePosts, id, loadPostsLoading]);

  // NOTE: getStaticPath에서 fallback이 true일 때 null 값 방지 및 loading으로 대응
  // if (router.isFallback) {
  //   return <div>로딩 중....</div>;
  // }

  return (
    <AppLayout>
      {userInfo && (
        <Head>
          <title>
            {userInfo.nickname}
            님의 글
          </title>
          <meta
            name="description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:title"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:description"
            content={`${userInfo.nickname}님의 게시글`}
          />
          <meta
            property="og:image"
            content="https://nodebird.com/favicon.ico"
          />
          <meta property="og:url" content={`https://nodebird.com/user/${id}`} />
        </Head>
      )}
      {userInfo ? (
        <Card
          actions={[
            <div key="twit">
              작성글
              <br />
              {userInfo.Posts}
            </div>,
            <div key="following">
              팔로잉
              <br />
              {userInfo.Followings}
            </div>,
            <div key="follower">
              팔로워
              <br />
              {userInfo.Followers}
            </div>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
            title={userInfo.nickname}
          />
        </Card>
      ) : null}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};
// export async function getStaticPaths() {
//   //NOTE: html로 미리 만들어놓을 만한 페이지만 작성한다
//   return {
//     paths: [{ params: { id: "1" } }],
//     //true인 경우 404페이지는 아니지만 null 값이 발생
//     fallback: true,
//   };
// }

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: context.params.id,
    });

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch({
      type: LOAD_USER_REQUEST,
      data: context.params.id,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    console.log("getState", context.store.getState().post.mainPosts);
    return { props: {} };
  }
);

export default User;
