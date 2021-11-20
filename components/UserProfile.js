import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";
import Link from "next/link";

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
            <Link href={`/user/${self.id}`}>
              <a>
                작성글
                <br /> {self.Posts.length}
              </a>
            </Link>
          </div>,
          <div key="followings">
            <Link href="/profile">
              <a>
                팔로잉
                <br />
                {self.Followings?.length}
              </a>
            </Link>
          </div>,
          <div key="follower">
            <Link href="/profile">
              <a>
                팔로워
                <br />
                {self.Followers?.length}
              </a>
            </Link>
          </div>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{self?.nickname[0]}</Avatar>}
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
