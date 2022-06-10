import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.type";

let token = localStorage.getItem("token")
export const iniState = {
  loading: false,
  error: false,
  isAuth: token?true:false,
  token: token,
};
export const authReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token",payload.token)
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case LOGIN_ERROR: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case LOGOUT: {
      localStorage.removeItem("token")
      return { ...state, isAuth: false };
    }
    default: {
      return state;
    }
  }
};
