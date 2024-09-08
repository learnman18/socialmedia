import { GET_USER_ALBUM_SUCCESS, GET_USER_ALBUM_FAILURE } from "../constants/constant";

const initialState = {
    albumData : [],
    error : null
}

const UserAlbumReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER_ALBUM_SUCCESS :
            return {albumData : action.payload}
        case GET_USER_ALBUM_FAILURE :
            return {...state, error: action.payload, albumData:[]}
        default:
            return state;
    }
}

export default UserAlbumReducer;