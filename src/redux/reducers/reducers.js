//Add all the reducers
import {combineReducers} from "redux";
import {createUser} from "./userSignUp_reducer";
import {loginUser} from "./userLogIn_reducer";
import {logoutUser} from "./userLogOut_reducer";

export const Reducers = combineReducers({

    userSignUp: createUser,
    userLogIn: loginUser,
    userLogOut: logoutUser,

});