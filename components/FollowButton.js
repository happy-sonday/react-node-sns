import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";
const FollowButton = ({ post }) => {
  const { self, followLoading, unfollowLoading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const isFollowing = self?.Followings.find((v) => v.id === post.User.id);
  const onFollow = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  });

  // 본인이 작성한 글일 경우 버튼 미노출
  if (post.User.id === self.id) {
    return null;
  }
  return (
    <Button loading={followLoading || unfollowLoading} onClick={onFollow}>
      {isFollowing ? "언팔로우" : "팔로우"}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
