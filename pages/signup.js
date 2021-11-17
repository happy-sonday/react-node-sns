import React, { useCallback, useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import Form from "antd/lib/form/Form";
import { Button, Input } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { LOAD_MY_INFO_REQUEST, SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import axios from "axios";
import wrapper from "../store/configureStore";
import { END } from "@redux-saga/core";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  //const [nickname, setNickname] = useState("");
  // const [id, setId] = useMemo("");
  // const [password, setPassword] = useState("");
  const [nickname, onChangeNickname] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, self } = useSelector(
    (state) => state.user
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);

  //회원가입 페이지에서 로그인 진행하면 회원가입 route url 제거
  useEffect(() => {
    if (self && self.id) {
      Router.replace("/");
    }
  }, [self && self.id]);

  useEffect(() => {
    if (signUpDone) {
      Router.replace("/");
    }
  }, [signUpDone]);
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(e.target.checked === false);
  }, []);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);
  // const onChangeNickname = useCallback((e) => {
  //   setNickname(e.target.value);
  // }, []);
  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck, term]);
  return (
    <AppLayout>
      <Head>
        <title>회원가입 | node-sns</title>
      </Head>

      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            type="email"
            value={email}
            required
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            sonday service term
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // 로그인상태를 백엔드와 공유하기 위에 쿠키 전달
    const cookie = context.req ? context.req.headers.cookie : "";
    // NOTE:다른 사용자들과 공유되지 않기 위해 초기화
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    // REQUEST에서 끝나는 것을 방지 SUCCESS할떄까지 기다림
    //NEXT-REDUX ref 참조
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Signup;
