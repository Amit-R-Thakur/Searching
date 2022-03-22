import { signUpReducer } from "./SignUp";
import { usersReducer } from "./users";
import {combineReducers} from "redux"
export const rootReducer=combineReducers({
    signUpReducer,usersReducer
})