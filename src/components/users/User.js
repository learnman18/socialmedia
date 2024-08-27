import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers, selectUser } from "../actions/UsersAction";
import CreateEditPost from "./CreatePost";


const User = () => {

    // {id} parameter is coming from the Users.js file.
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data, selectedUser } = useSelector((state)=>state.api);

    /* if we try to access the data and selectedUser we won't see anything unless we call funcion for those
        object properties, there are cases and funciton created for both data and selectedUser object property.
        to see the values of both we need to dispatch the function fetchUsers() for data and selectUser() for
        selectedUser.
    */

    /*
        now on initial load after clicking in the ID we can access alll these details which has been passed from the
        Users.js file, and when we refresh the page we get the data from the fetchUser() function and we get that 
        value in data object property and then we find using the id and then we dispatch the selectUser() function
        which contains the selectedUser object property values.
    */

    useEffect(()=>{
       
        if(!data.length){
            dispatch(fetchUsers());
        }else{
            const user = data.find((user)=>user.id === parseInt(id));
            if(user){
                dispatch(selectUser(user));
            }
        }
    },[dispatch, id, data])


    //this is loader when selectedUser is empty.
    if(!selectedUser){
        return <p>Loading...</p>
    }

    return (
        <>
            <h2 className="text-32">{selectedUser.name}</h2>
            <p className="text-lg">Username - {selectedUser.username}</p>
            <p className="text-lg">Email - {selectedUser.email}</p>
            <div>
                <CreateEditPost userId = {selectedUser.id}></CreateEditPost>
            </div>
        </>
    );

}

export default User;