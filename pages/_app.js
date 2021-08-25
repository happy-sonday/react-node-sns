//NOTE: 공통으로 적용되는 설정 작성
import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import wrapper from "../store/configureStore";

//NOTE: props 자리인데 구조분해로 Component를 가져옴 props.Component
const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meata charSet="UTF-8" />
        <title>node-sns</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
