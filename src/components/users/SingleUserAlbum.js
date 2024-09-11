import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { UserAlbum } from "../actions/UserAlbumAction";

const SingleUserAlbum = (props)=> {

    const { id } = useParams();
    const dispatch = useDispatch();
    const { albumData } = useSelector((item)=> item.albumReducer);
    const [albumInfo, setAlbumInfo] = useState();

    useEffect(()=>{
        props.UserPostDetails.find((userID) => userID.userId === parseInt(id));
        dispatch(UserAlbum(parseInt(id)));
    },[dispatch, id, props.UserPostDetails])

    useEffect(()=>{
        setAlbumInfo(albumData);
    },[albumData]);

    // console.log("album details", albumInfo);

    // console.log("albumData", albumData);
    // console.log("error", error);

    return(
        <>
            <h3 className="text-28">Album Id - { id }</h3>
            {
                albumInfo && 
                albumInfo.map((item)=>(
                    <p key={item.id} className="text-xl">{item.title}</p>
                ))
            }
        </>
    )
}

export default SingleUserAlbum;