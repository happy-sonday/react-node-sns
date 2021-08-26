import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditionForm from "../components/NicknamEditionForm";
import FollowerList from "../components/FollowList";
import { useSelector } from "react-redux";

const Profile = () => {
  // const followerList = [
  //   { nickname: "sonday" },
  //   { nickname: "happy" },
  //   { nickname: "yeah" },
  // ];
  // const follwingList = [
  //   { nickname: "sonday" },
  //   { nickname: "happy" },
  //   { nickname: "yeah" },
  // ];
  const { self } = useSelector((state) => state.user);
  return (
    <>
      <Head>
        <title>프로필 | node-sns</title>
      </Head>
      <AppLayout>
        <NicknameEditionForm />
        <FollowerList header="팔로잉" data={self.Followings} />
        <FollowerList header="팔로워" data={self.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
