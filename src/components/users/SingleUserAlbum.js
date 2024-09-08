import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserAlbum } from "../actions/UserAlbumAction";

const SingleUserAlbum = (props)=> {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { albumData, error } = useSelector((item)=> item.albumReducer);

    useEffect(()=>{
        let x = props.UserPostDetails.find((userID) => userID.userId === parseInt(id));
        console.log("album user ID", x);
        dispatch(UserAlbum(parseInt(id)));
    },[dispatch, id, props.UserPostDetails])

    console.log("albumData", albumData);
    console.log("error", error);

    return(
        <>
            <p>ALbum</p>
        </>
    )
}

export default SingleUserAlbum;