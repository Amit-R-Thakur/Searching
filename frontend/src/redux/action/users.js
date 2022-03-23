import * as user from "../constant/users"
import axios from "../../axios"
export const getUsers=(page,search)=>async(dispatch,state)=>{
    try{
        dispatch({type:user.USER_REQUESTED})
        const theUsers=await axios.get(`/get/customers?page=${page}&search=${search}`)
        const {users,totalPage}=theUsers.data
        dispatch({type:user.USER_SUCCESS,users:users,total:totalPage})

    }
    catch(err){
        dispatch({type:user.USER_ERROR,err:err.response.data})

    }
}