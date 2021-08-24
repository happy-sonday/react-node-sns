import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({ setLoginFl }) => {
  //   const [id, setId] = useState("");
  //   const [password, setPassword] = useState("");
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  //   const onChangeId = useCallback((e) => {
  //     setId(e.target.value);
  //   }, []);
  //   const onChangePassword = useCallback((e) => {
  //     setPassword(e.target.value);
  //   }, []);

  const onSubmitForm = useCallback(() => {
    //NOTE:ANTED 에서는 이미 preventDefault가 적용되어있다.
    console.log(id, password);
    setLoginFl(true);
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm} style={{ padding: "8px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>

      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Form>
  );
};

LoginForm.propTypes = {
  setLoginFl: PropTypes.func.isRequired,
};

export default LoginForm;
