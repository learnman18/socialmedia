import { FETCH_USERS, FETCH_DATA_FAILURE } from "../constants/constant";

export const fetchUsers = () => {
    console.log("fetchUsers funciton action file")
    return async (dispatch)=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        try {
            const response = await fetch(url);
            if (!response.ok){
                throw new Error(`Response status : ${response.status}`);
            }
            const json = await response.json();
            dispatch(fetchUserSuccess(json));
            console.log("json pass" , json);
        } catch (error) {
            console.log(error.message);
            dispatch(fetchDataFailure(error.message))
        }
    }
    
}

export const fetchUserSuccess = (users) => {
    console.log("action user" , users);
    return {
        type : FETCH_USERS,
        payload : users
    }
}

export const fetchDataFailure = (error) => {
    console.log("action user" , error);
    return{
        type : FETCH_DATA_FAILURE,
        payload : error
    }
}
