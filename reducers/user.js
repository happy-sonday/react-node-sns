export const initialState = {
  loginFl: false,
  user: null,
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
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        loginFl: false,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
