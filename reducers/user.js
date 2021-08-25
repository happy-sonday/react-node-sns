export const initialState = {
  loginFl: false,
  self: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        loginFl: true,
        self: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        loginFl: false,
        self: null,
      };

    default:
      return state;
  }
};

export default reducer;
