import * as signup from "../constant/SignUp";
import axios from "../../axios";
import Swal from "sweetalert2";
export const SetUser = (key, value) => (dispatch) => {
  dispatch({ type: signup.SET_SIGN_UP_DATA, key, value });
};
export const ValidateData = () => (dispatch, state) => {
  const { fName, lName, city, company } = state().signUpReducer;
  if (!fName) {
    dispatch(SetError("fName", "This is Required * Field"));
    return false;
  }
  if (fName.length<=2) {
    dispatch(SetError("fName", "First name is too sort"));
    return false;
  }
  
  if (!lName) {
    dispatch(SetError("lName", "This is Required * Field"));
    return false;
  }
  if (lName.length<=2) {
    dispatch(SetError("fName", "Last name is too sort"));
    return false;
  }
  if (!city) {
    dispatch(SetError("city", "This is Required * Field"));
    return false;
  }
  if (!company) {
    dispatch(SetError("company", "This is Required * Field"));
    return false;
  }

 dispatch({type:signup.SIGN_UP_CLEAR_ERROR})
 return true

};
export const SetError = (key, err) => (dispatch) => {
  dispatch({ type: signup.SIGN_UP_ERROR, key, err });
};

export const creatingUser=()=>async(dispatch,state)=>{
  try{
    const { fName, lName, city, company } = state().signUpReducer;
    dispatch({type:signup.SIGN_UP_REQUESTED})
    const theData=await axios.post("/create/customers",{first_name:fName,last_name:lName,city,company})
    if(theData)
    {
      dispatch({type:signup.SIGN_UP_SUCCESS})
      dispatch({type:signup.CLEAR_SIGN_UP_DATA})
      Swal.fire({
        title: 'Success',
        icon: 'success',
        showCloseButton: true,
        cancelButtonText: 'Ok',
        html: `<h3>${theData.data}</h3>`,
      })
      return true
    }

  }
  catch(err){
    dispatch(SetError("otherError",`*${err.response.data}`))
    return false

  }
}
