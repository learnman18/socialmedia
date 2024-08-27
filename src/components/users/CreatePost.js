import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserPostsAction } from "../actions/UserPostsAction";


/* we are getting this props from the User.js file, we are passing the ID from their and we are accessing it here and
passing it as parameter in UserPostsAction() fucntion, and we are accessing this id in userpostaction.js file.
*/

const CreateEditPost = (props) => {

    const dispatch = useDispatch();
    const {postData, error} = useSelector((item)=>item.postReducer);
    console.log("postData" , postData , "error", error);

    useEffect(()=>{
        dispatch(UserPostsAction(props.userId));
    },[dispatch, props.userId])

    return(
        <>
            <p>All posts will be here {props.userId}</p>
        </>
    )
}

export default CreateEditPost;