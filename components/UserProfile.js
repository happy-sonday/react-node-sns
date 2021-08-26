import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

// eslint-disable-next-line react/prop-types
const UserProfile = () => {
  const dispatch = useDispatch();
  const { self, logOutLoading } = useSelector((state) => state.user);

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
            <br /> {self.Posts.length}
          </div>,
          <div key="followings">
            팔로잉
            <br />
            {self.Followings.length}
          </div>,
          <div key="follower">
            팔로워
            <br />
            {self.Followers.length}
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{self?.nickname}</Avatar>}
          title={self.nickname}
        />
        <Button onClick={onLogOut} loading={logOutLoading}>
          로그아웃
        </Button>
      </Card>
    </>
  );
};

export default UserProfile;
