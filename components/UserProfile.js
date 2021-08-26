import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

// eslint-disable-next-line react/prop-types
const UserProfile = () => {
  const dispatch = useDispatch();
  const { self, loggingOutFl } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    //setLoginFl(false);
    dispatch(logoutRequestAction());
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
        <Card.Meta
          avatar={<Avatar>{self?.nickname}</Avatar>}
          title={self.nickname}
        />
        <Button onClick={onLogOut} loading={loggingOutFl}>
          로그아웃
        </Button>
      </Card>
    </>
  );
};

export default UserProfile;
