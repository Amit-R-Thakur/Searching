import * as signup from "../constant/SignUp";
const initialState = {
  fName: "",
  lName: "",
  city: "",
  company: "",
  loading: false,
  err: false,
};
export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case signup.SIGN_UP_REQUESTED:
      return {
        ...state,
        err: false,
        loading: true,
      };
    case signup.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case signup.SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        err: { key: action.key, err: action.err },
      };
    case signup.SET_SIGN_UP_DATA:
      return{
        ...state,
        [action.key]:action.value
      }
    default:
      return state;
  }
};
