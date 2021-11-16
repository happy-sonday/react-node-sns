import { HYDRATE } from "next-redux-wrapper";
import user from "../reducers/user";
import post from "../reducers/post";
import { combineReducers } from "redux";

// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "wooseop",
// };

//같은 액션 데이터만 동적으로 바꾸는 함수 , action creator
// const changeNickname = (data) => {
//   return {
//     type: "CHANGE_NICKNAME",
//     data,
//   };
// };

//NOTE:(이전상태, 액션) => return 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        post,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
