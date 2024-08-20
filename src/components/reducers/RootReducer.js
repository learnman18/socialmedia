import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";

const RootReducer = combineReducers({api:UsersReducer})

export default RootReducer;