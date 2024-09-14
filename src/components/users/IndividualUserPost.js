import React, { useEffect, useState } from "react";
import { IndividualPostAction } from "../actions/IndividualPostAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const IndividualUserPost = ()=> {

    const dispatch = useDispatch();
    const { postComment } = useSelector((item)=> item.userCommentPost );
    // const { postComment, error } = useSelector((item)=> item.userCommentPost );
    /* we can access error but we aer not using it so I just removed it, but we can access it and use it */
    const { postCommentId } = useParams(); // check createPost.js 
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
                    <div className="pb-2 w-1/2 border border-white mb-2 last:mb-0" key={item.id}>
                        <p className="text-28">{item.name}</p>
                        <p>{item.body}</p>
                        <p className="font-semibold">{item.email}</p>
                    </div>
                ))
            }
        </>
    )
}

export default IndividualUserPost;