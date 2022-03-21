import * as signup from "../constant/SignUp"
export const SetUser=(key,value)=>(dispatch)=>{
    dispatch({type:signup.SET_SIGN_UP_DATA,key,value})
}
export const ValidateData=()=>(dispatch,state)=>{
    const {fName,lName,city,company}=state().signUpReducer
}
export const SetError=(key,err)=>(dispatch)=>{
    dispatch({type:signup.SIGN_UP_ERROR,key,err})

}