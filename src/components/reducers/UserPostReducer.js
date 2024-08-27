import { GET_USER_POST, GET_USER_POST_FAILURE } from "../constants/constant";

const initialState = {
    postData : [],
    error : null
}

const UserPostReducer = (state = initialState , action) => {
    switch(action.type){
        case GET_USER_POST :
            console.log("GET_USER_POST", {postData: action.payload})
            return {postData: action.payload}
        case GET_USER_POST_FAILURE :
            console.log("user_post_failure", state)
            return {...state, error: action.type, postData: []}    
        default:
            return state;    
    }
}

export default UserPostReducer;