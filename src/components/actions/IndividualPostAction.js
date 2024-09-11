import axios from "axios";
import {GET_INDIVIDUAL_USER_POSTS_FAILURE, GET_INDIVIDUAL_USER_POSTS_SUCCESS} from '../constants/constant';

const IndividualPostAction = (userPostId)=> {
    console.log("userPostId", userPostId)
    return (dispatch) => {
        const userPostUrl = `https://jsonplaceholder.typicode.com/comments?postId=${userPostId}`
        axios
            .get(userPostUrl)
            .then((response)=>{
                console.log("response", response);
                dispatch(fetchIndividualUserPostSucess(response.data))
            })
            .catch((error)=>{
                dispatch(fetchIndividualUserPostFailure(error));
            })
        }
    }
    

const fetchIndividualUserPostSucess = (IndividualUserPost) => {
    return{
        type : GET_INDIVIDUAL_USER_POSTS_SUCCESS,
        payload : IndividualUserPost
    }
}

const fetchIndividualUserPostFailure = (error) => {
    return {
        type : GET_INDIVIDUAL_USER_POSTS_FAILURE,
        payload : error
    }
}

export {IndividualPostAction, fetchIndividualUserPostSucess, fetchIndividualUserPostFailure}