import { FETCH_USERS, FETCH_DATA_FAILURE } from "../constants/constant";

const initialState = {
    data : [],
    error : null
};

console.log("user reducers file");

// const initialState = [];

const UsersReducer = (state = initialState , action) => {
    console.log("inside switch" , action.type)
    switch(action.type){
        case FETCH_USERS :
            console.log("FETCH_USERS" , {...state, data : action.payload});
            return {data : action.payload}
            // return action.payload;
        case FETCH_DATA_FAILURE :
            console.log("FETCH_DATA_FAILURE" , state);
            return {...state , data : [], error : action.payload}
            // return action.payload;
        default:
            return state;
    }
}


export default UsersReducer;