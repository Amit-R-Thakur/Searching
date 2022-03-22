import * as user from "../constant/users"
const initialState={
    loading:false,
    users:[],
    total:1,
    err:false
}
export const usersReducer=(state=initialState,action)=>{
    switch(action.type){
        case user.USER_REQUESTED:
            return{
                ...state,
                loading:true
            }
        case user.USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.users,
                total:action.total
            }
        case user.USER_ERROR:
            return{
                ...state,
                loading:false,
                err:action.err
            }
        default:
        return state

    }
}