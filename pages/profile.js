import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditionForm from "../components/NicknamEditionForm";
import FollowerList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "sonday" },
    { nickname: "happy" },
    { nickname: "yeah" },
  ];
  const follwingList = [
    { nickname: "sonday" },
    { nickname: "happy" },
    { nickname: "yeah" },
  ];
  return (
    <>
      <Head>
        <title>프로필 | node-sns</title>
      </Head>
      <AppLayout>
        <NicknameEditionForm />
        <FollowerList header="팔로잉 목록" data={follwingList} />
        <FollowerList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
