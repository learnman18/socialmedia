import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import UserPostReducer from "./UserPostReducer";

//we can commbile multiple rededucers here
const RootReducer = combineReducers({api:UsersReducer, postReducer: UserPostReducer})

export default RootReducer;