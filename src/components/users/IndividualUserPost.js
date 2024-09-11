import React, { useEffect, useState } from "react";
import { IndividualPostAction } from "../actions/IndividualPostAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const IndividualUserPost = ()=> {

    const dispatch = useDispatch();
    const { postComment, error } = useSelector((item)=> item.userCommentPost );
    const { postCommentId } = useParams();
    const [userPostComment, setUserPostComment] = useState();

    useEffect(()=>{
        console.log("post page id", postCommentId)
        dispatch(IndividualPostAction(parseInt(postCommentId)));
    },[dispatch, postCommentId]);

    useEffect(()=>{
        setUserPostComment(postComment);
    },[postComment])

    console.log("post comment", userPostComment);

    return (
        <>
            { userPostComment && 
                userPostComment.map((item)=>(
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.body}</p>
                        <p>{item.email}</p>
                    </div>
                ))
            }
        </>
    )
}

export default IndividualUserPost;