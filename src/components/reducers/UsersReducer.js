import { FETCH_USERS, FETCH_DATA_FAILURE, SELECT_USER } from "../constants/constant";

const initialState = {
    data : [],
    error : null,
    selectedUser : null
};

// const initialState = [];

const UsersReducer = (state = initialState , action) => {
    // console.log("inside switch - " , action.type)
    switch(action.type){
        case FETCH_USERS :
            // console.log("FETCH_USERS" , {...state, data: action.payload});
            return {data : action.payload}
            // return action.payload;
        case FETCH_DATA_FAILURE :
            // console.log("FETCH_DATA_FAILURE" , state);
            return {...state , data : [], error : action.payload}
            // return action.payload;
        case SELECT_USER : 
            // console.log("SELECT_USER" , state);
            return {...state, selectedUser: action.payload}
        default:
            return state;
    }
}


export default UsersReducer;