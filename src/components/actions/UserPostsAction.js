

//curretnly not in use anywhere
import { GET_USER_POST, GET_USER_POST_FAILURE } from "../constants/constant";
import axios from "axios";

//this ID argument is coming from the CreatePost.js file.

export const UserPostsAction = (id) => {
    console.log("inside userPostAction function")
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    return (dispatch) =>{
        axios
        .get(url)
        .then((response)=>{
            console.log("response data", response.data);
            dispatch(fetchUserPostSucess(response.data))
        })
        .catch((error)=>{
            console.log("userPost error", error);
            dispatch(fetchUserPostFailure(error));
        })
    }
}


export const fetchUserPostSucess = (userPosts) => {
    console.log("userPosts" , userPosts);
    return {
        type : GET_USER_POST,
        payload : userPosts
    }
}

export const fetchUserPostFailure = (error) => {
    return {
        type : GET_USER_POST_FAILURE,
        payload : error
    }
}