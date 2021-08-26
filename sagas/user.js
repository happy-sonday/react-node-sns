import axios from "axios";
import { all, delay, fork, put, takeLatest } from "redux-saga/effects";

function logInAPI() {
  return axios.post("/api/login");
}
function* logIn(action) {
  try {
    console.log("saga LOG_IN_REQUEST ACTION");
    yield delay(1000);
    //const result = yield call(logInAPI);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: error.response.data,
    });
  }
}

function* logOut() {
  try {
    yield delay(1000);
    // const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: "LOG_OUT_FAILURE",
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
