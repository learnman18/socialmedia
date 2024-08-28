import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserPostsAction } from "../actions/UserPostsAction";


/* we are getting this props from the User.js file, we are passing the ID from their and we are accessing it here and
passing it as parameter in UserPostsAction() fucntion, and we are accessing this id in userpostaction.js file.
*/

const CreateEditPost = (props) => {

    const [userPosts , setUserPosts] = useState([]);
    const [userPostShowHide , setuserPostShowHide] = useState(false);

    const dispatch = useDispatch();
    const {postData, error} = useSelector((item)=>item.postReducer);
    console.log("postData" , postData , "error", error);

    useEffect(()=>{
        dispatch(UserPostsAction(props.userId));
    },[dispatch, props.userId])

    useEffect(()=>{
        setUserPosts(postData)
    },[postData])

    // console.log("userPosts", userPosts)
    
    //Add new post button
    const showHidePost = () =>{
        console.log("test");
        userPostShowHide === false ? setuserPostShowHide(true) : setuserPostShowHide(false); 
    }
    //Edit post button
    const editPost = (event, postTitle, postBody, postID) =>{

        // let text = event.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.nodeName; 
        // console.log("text", text)

        console.log("edit post" , postID);
        // console.log("event" );
        // let title = document.querySelector(".card_title");
        // let content = document.querySelector(".card_content");

        // let createInputText = document.createElement("input");
        // createInputText.type =  "text";
        // createInputText.placeholder =  "enter title";
        // createInputText.classList.add("text-black");
        // createInputText.value = postTitle;
        // title.replaceWith(createInputText);

        // const createContnetTextArea = document.createElement("textarea");
        // createContnetTextArea.placeholder = "enter body content";
        // createContnetTextArea.classList.add("text-black");
        // createContnetTextArea.value = postBody;
        // content.replaceWith(createContnetTextArea);

            
    }

    const deletePost = (itemID) => {
        console.log("post delete");
        console.log("itemID" , itemID);
    }


    return(
        <div className="pt-5">
            <p>All posts will be here {props.userId}</p>
            <div>
                <button className="py-2 px-6 bg-emeraledLight rounded-sm" onClick={showHidePost}>Add New Post</button>
                {
                    userPostShowHide === true && 
                    <div>
                        <div>
                            <span>Title</span>
                            <input type="text" className="form-input" />
                        </div>
                        <div>
                            <span>Content</span>
                            <textarea name="" id="" className="form-textarea"></textarea>
                        </div>
                        <button className="py-2 px-6 bg-limeLight rounded-sm">Add Note</button>
                    </div>
                } 
            </div>
            <div className="pt-5">
                {
                    userPosts.map((item)=>(
                        <div key={item.id}>
                            <div>
                                <p className="card_title font-semibold text-xl">{item.title}</p>
                            </div>
                            <div>
                                <p className="card_content">{item.body}</p>
                            </div>
                            <div>
                                <button className="py-2 px-6 bg-limeLight rounded-sm" onClick={(event)=>editPost(event,item.title, item.body,item.id)}>Edit</button>
                                <button className="py-2 px-6 bg-lightRed rounded-sm" onClick={()=>deletePost(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CreateEditPost;