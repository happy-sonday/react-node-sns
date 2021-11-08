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
} from "../reducers/user";

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

export default Profile;
