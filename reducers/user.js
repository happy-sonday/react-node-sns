export const initialState = {
  loggingFl: false,
  loginFl: false,
  loggingOutFl: false,
  self: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
export const logoutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      console.log("reducer LOG_IN_REQUEST ACTION");
      return {
        ...state,
        loggingFl: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        loggingFl: false,
        loginFl: true,
        self: { ...action.data, nickname: "손데이" },
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        loggingFl: false,
        loginFl: false,
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        loggingOutFl: true,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        loggingOutFl: false,
        loginFl: false,
        self: null,
      };
    case "LOG_OUT_FAILURE":
      return {
        ...state,
        loggingOutFl: false,
      };

    default:
      return state;
  }
};

export default reducer;
