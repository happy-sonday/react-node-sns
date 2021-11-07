import React, { useCallback, useMemo } from "react";
import { Form, Input } from "antd";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { CHANGE_NICKNAME_REQUEST } from "../reducers/user";

const NicknameEditionForm = () => {
  const { self } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useInput(self?.nickname || "");
  const dispatch = useDispatch();
  const style = useMemo(
    () => ({
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px",
    }),
    []
  );

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  return (
    <Form style={style}>
      <Input.Search
        value={nickname}
        onChange={onChangeNickname}
        addonBefore="닉네임"
        enterButton="수정"
        onSearch={onSubmit}
      />
    </Form>
  );
};

export default NicknameEditionForm;
