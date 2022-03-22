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
        err: { [action.key]:action.err },
      }
    case signup.SIGN_UP_CLEAR_ERROR:
      return{
        ...state,
        err:false
      }
    case signup.SET_SIGN_UP_DATA:
      return{
        ...state,
        [action.key]:action.value
      }
    case signup.CLEAR_SIGN_UP_DATA:
      return{
        ...state,
        fName: "",
        lName: "",
        city: "",
        company: "",

      }
    default:
      return state;
  }
};
