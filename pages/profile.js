import React, { useEffect, useState, useCallback } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditionForm from "../components/NicknamEditionForm";
import FollowerList from "../components/FollowList";
import { useSelector } from "react-redux";
import Router from "next/router";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "@redux-saga/core";
import useSWR from "swr";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => result.data);

const Profile = () => {
  const { self } = useSelector((state) => state.user);
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);

  const { data: followersData, error: followerError } = useSWR(
    `http://localhost:3065/user/followers?limit=${followersLimit}`,
    fetcher
  );
  const { data: followingsData, error: followingError } = useSWR(
    `http://localhost:3065/user/followings?limit=${followingsLimit}`,
    fetcher
  );

  useEffect(() => {
    if (!(self && self.id)) {
      Router.push("/");
    }
  }, [self && self.id]);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
  }, []);

  if (!self) {
    return "내 정보 로딩중...";
  }

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return <div>팔로잉/팔로워 로딩 중 에러 발생!!</div>;
  }

  return (
    <>
      <Head>
        <title>프로필 | node-sns</title>
      </Head>
      <AppLayout>
        <NicknameEditionForm />
        <FollowerList
          header="팔로잉"
          data={followingsData}
          onClickMore={loadMoreFollowings}
          loading={!followingsData && !followingError}
        />
        <FollowerList
          header="팔로워"
          data={followersData}
          onClickMore={loadMoreFollowers}
          loading={!followersData && !followerError}
        />
      </AppLayout>
    </>
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
    // REQUEST에서 끝나는 것을 방지 SUCCESS할떄까지 기다림
    //NEXT-REDUX ref 참조
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Profile;
