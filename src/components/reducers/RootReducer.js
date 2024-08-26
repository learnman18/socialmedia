import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";

//we can commbile multiple rededucers here
const RootReducer = combineReducers({api:UsersReducer})

export default RootReducer;