import {GET_USER_ALBUM_SUCCESS, GET_USER_ALBUM_FAILURE} from "../constants/constant"
import axios from "axios";

export const UserAlbum = (userID) =>{
    const albumUrl = `https://jsonplaceholder.typicode.com/albums?userId=${userID}`;
    return (dispatch)=> { 
    axios
        .get(albumUrl)
        .then((response)=>{
            // console.log("response UserAlbum", response);
            dispatch(fetchUserAlbumSucess(response.data));
        })
        .catch((error)=>{
            // console.log("album API error", error);
            dispatch(fetchUserAlbumFailure(error));
        })
    }
}

export const fetchUserAlbumSucess = (singleUserAlbum) => {
    return {
        type : GET_USER_ALBUM_SUCCESS,
        payload : singleUserAlbum
    }
}

export const fetchUserAlbumFailure = (error) => {
    return{
        type : GET_USER_ALBUM_FAILURE,
        payload : error
    }
}


