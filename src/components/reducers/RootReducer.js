import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import UserPostReducer from "./UserPostReducer";
import UserAlbumReducer from "./UserAlbumReducer";

//we can commbile multiple rededucers here
const RootReducer = combineReducers({
    api:UsersReducer,
    postReducer: UserPostReducer,
    albumReducer: UserAlbumReducer
})

export default RootReducer;