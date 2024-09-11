import React, { useEffect } from "react";
import { IndividualPostAction } from "../actions/IndividualPostAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const IndividualUserPost = ()=> {

    const dispatch = useDispatch();
    const { postComment, error } = useSelector((item)=> item.userCommentPost );
    const { postCommentId } = useParams();

    useEffect(()=>{
        console.log("post page id", postCommentId)
        dispatch(IndividualPostAction(parseInt(postCommentId)));
    },[dispatch, postCommentId]);

    console.log("post comment", postComment)

    return (
        <>
            <p>Commetns</p>
        </>
    )
}

export default IndividualUserPost;