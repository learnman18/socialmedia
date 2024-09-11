import { GET_INDIVIDUAL_USER_POSTS_FAILURE, GET_INDIVIDUAL_USER_POSTS_SUCCESS } from "../constants/constant";

const initialState = {
    postComment : [],
    error : null
}

const IndividualPostReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_INDIVIDUAL_USER_POSTS_SUCCESS :
            return {postComment : action.payload}
        case GET_INDIVIDUAL_USER_POSTS_FAILURE : 
            return {...state, error: action.payload, postComment: []}
        default:
            return state
    }
}

export default IndividualPostReducer;