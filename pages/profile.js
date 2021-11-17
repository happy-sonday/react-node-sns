import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditionForm from "../components/NicknamEditionForm";
import FollowerList from "../components/FollowList";
import { useSelector } from "react-redux";
import Router from "next/router";
import { useDispatch } from "react-redux";
import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_MY_INFO_REQUEST,
} from "../reducers/user";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "@redux-saga/core";

const Profile = () => {
  const dispatch = useDispatch();
  /*   const followerList = [
    { nickname: "sonday" },
    { nickname: "happy" },
    { nickname: "yeah" },
  ];
  const followingList = [
    { nickname: "sonday" },
    { nickname: "happy" },
    { nickname: "yeah" },
  ]; */
  const { self } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    });
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (!(self && self.id)) {
      Router.push("/");
    }
  }, [self && self.id]);
  if (!self) {
    return null;
  }

  return (
    <>
      <Head>
        <title>프로필 | node-sns</title>
      </Head>
      <AppLayout>
        <NicknameEditionForm />
        <FollowerList header="팔로잉" data={self.Followings} />
        <FollowerList header="팔로워" data={self.Followers} />
        {/* <FollowerList header="팔로잉" data={followerList} />
        <FollowerList header="팔로워" data={followingList} /> */}
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
