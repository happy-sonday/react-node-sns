import { all, fork } from "redux-saga/effects";
import axios from "axios";

import postSaga from "./post";
import userSaga from "./user";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;

//NOTE: 요청 API에 요청자의 쿠키를 전달 설정
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
