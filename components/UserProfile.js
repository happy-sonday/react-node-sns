import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

// eslint-disable-next-line react/prop-types
const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    //setLoginFl(false);
    dispatch(logoutAction());
  }, []);
  return (
    <>
      <Card
        actions={[
          <div key="twit">
            짹짹
            <br /> 0
          </div>,
          <div key="followings">
            팔로잉
            <br />0
          </div>,
          <div key="follower">
            팔로워
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>SD</Avatar>} title="sonday" />
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
    </>
  );
};

export default UserProfile;
