import { FETCH_USERS, FETCH_DATA_FAILURE, SELECT_USER } from "../constants/constant";

export const fetchUsers = () => {
    return async (dispatch)=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        try {
            const response = await fetch(url);
            if (!response.ok){
                throw new Error(`Response status : ${response.status}`);
            }
            const json = await response.json();
            dispatch(fetchUserSuccess(json));
            // console.log("json pass action file" , json);
        } catch (error) {
            // console.log(error.message);
            dispatch(fetchDataFailure(error.message))
        }
    }
    
}

export const fetchUserSuccess = (users) => {
    // console.log("action fetchUserSuccess function" , users);
    return {
        type : FETCH_USERS,
        payload : users,
    }
}

export const fetchDataFailure = (error) => {
    // console.log("action fetchDataFailure error" , error);
    return{
        type : FETCH_DATA_FAILURE,
        payload : error
    }
}

/*
    so this selectUser is getting called(dispatched) from  the user and users.js file, and user parameter has all the
    API data, when I'm dispatching this function a parameter is passed over there, check the user or users.js file to
    understand how it's working.
    in redux a function need to be dispatched in order to get the value.
*/
export const selectUser = (users) =>{
    // console.log("action selectUser function" , users);
    return {
        type: SELECT_USER,
        payload : users
    }
}