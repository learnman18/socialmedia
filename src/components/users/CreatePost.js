import React, { useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserPostsAction } from "../actions/UserPostsAction";


/* we are getting this props from the User.js file, we are passing the ID from their and we are accessing it here and
passing it as parameter in UserPostsAction() fucntion, and we are accessing this id in userpostaction.js file.
*/

const CreateEditPost = (props) => {

    const [userPosts , setUserPosts] = useState([]);
    const [userPostShowHide , setuserPostShowHide] = useState(false);
    const [editPostId, setEditPostId] = useState(null);
    const [postTitleUpdate, setPostTitleUpdate] = useState("");
    const [postContentUpdate, setPostContentUpdate ] = useState("");

    const newPostId = useId();
    console.log("newPostId", newPostId)

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
    const editPost = (postTitle, postBody, postID) =>{
        setEditPostId(postID);
        setPostTitleUpdate(postTitle);
        setPostContentUpdate(postBody);

    /*
    // let text = event.target.parentElement.previousElementSibling.previousElementSibling.firstElementChild.nodeName; 
        // console.log("text", text)
        console.log("edit post" , postID);
        console.log("event" );
        let title = document.querySelector(".card_title");
        let content = document.querySelector(".card_content");

        let createInputText = document.createElement("input");
        createInputText.type =  "text";
        createInputText.placeholder =  "enter title";
        createInputText.classList.add("text-black");
        createInputText.value = postTitle;
        title.replaceWith(createInputText);

        const createContnetTextArea = document.createElement("textarea");
        createContnetTextArea.placeholder = "enter body content";
        createContnetTextArea.classList.add("text-black");
        createContnetTextArea.value = postBody;
        content.replaceWith(createContnetTextArea);
    */
            
    }

    const AddNewNote = () => {
        console.log("postTitleUpdate", postTitleUpdate);
        console.log("postContentUpdate", postContentUpdate);
        if((postTitleUpdate === "") || (postContentUpdate === "")){
            alert("none of the fields can be empty");
        }

        const newPost = {
            id: userPosts.length + 1,
            title : postTitleUpdate,
            body : postContentUpdate
        }     

        // to add the new post on top
        setUserPosts([newPost, ...userPosts]); 
        //to add new post on botom
        // setUserPosts([...userPosts, newPost]); 

        setPostTitleUpdate('');
        setPostContentUpdate('');
        setuserPostShowHide(false);

        console.log("add new note");
    }

    const CancelNewNote = () =>{
        console.log("cancel new note");
        setuserPostShowHide(false)
    }

    const newPostTitle = (e) => {
        let x = e;
        console.log("title new note",x);
        setPostTitleUpdate(x);
    }

    const newPostBody = (e) => {
        let y = e;
        console.log("body new note",y);
        setPostContentUpdate(y);
    }

    const deletePost = (itemID) => {
        console.log("post delete");
        console.log("itemID" , itemID);
    }

    const updatePost = (itemID) => {
        const updatedPost = userPosts.map((post)=>
            post.id === itemID ? {...post, title: postTitleUpdate, body:postContentUpdate} : post
        )
        setUserPosts(updatedPost);
        setEditPostId("");

        // console.log("modified", modified)
        console.log("post title update", postTitleUpdate);
        console.log("post content update", postContentUpdate);
    }

    const cancelPost = () => {
        setEditPostId(""); //it will make editPostId empty so it won't be equal to item.id and it will display else part
        console.log("post cancel");
    }

    const titleUpdate = (event) => {
        let y = event.target.value;
        setPostTitleUpdate(y);
        console.log("title", y);
    }

    const contentUpdate = (event) =>{
        let x = event.target.value;
        setPostContentUpdate(x);
        console.log("content" , x);
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
                            <input type="text" className="form-input text-black"
                            onChange={(e)=>newPostTitle(e.target.value)}/>
                        </div>
                        <div>
                            <span>Content</span>
                            <textarea name="" id="" className="form-textarea text-black"
                            onChange={(e)=>newPostBody(e.target.value) }></textarea>
                        </div>
                        <button className="py-2 px-6 bg-limeLight rounded-sm" onClick={AddNewNote}>Add Note</button>
                        <button className="py-2 px-6 bg-lightRed rounded-sm" onClick={CancelNewNote}>Cancel Note</button>
                    </div>
                } 
            </div>
            <div className="pt-5">
                {
                    userPosts.map((item)=>(
                        <div key={item.id}>
                           {
                            editPostId === item.id ? (
                                <div>
                                    <div>
                                        <span>Title</span>
                                        <input type="text" className="form-input text-black"
                                         onChange={(event)=>titleUpdate(event)} value={postTitleUpdate} />
                                    </div>
                                    <div>
                                        <span>Content</span>
                                        <textarea name="" id="" className="form-textarea text-black"
                                         onChange={(event)=>contentUpdate(event)} value={postContentUpdate}></textarea>
                                    </div>
                                    <div>
                                        <button className="py-2 px-6 bg-limeLight rounded-sm"
                                         onClick={()=>updatePost(item.id)}>Update</button>
                                        <button className="py-2 px-6 bg-lightRed rounded-sm"
                                         onClick={()=>cancelPost()}>Cancel</button>
                                    </div>
                                </div>
                                ) : (
                                <div>
                                    <div>
                                        <p className="card_title font-semibold text-xl">
                                            {item.title}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="card_content">{item.body}</p>
                                    </div>
                                    <div>
                                        <button className="py-2 px-6 bg-limeLight rounded-sm"
                                         onClick={()=>editPost(item.title, item.body, item.id)}>Edit</button>
                                        <button className="py-2 px-6 bg-lightRed rounded-sm"
                                         onClick={()=>deletePost(item.id)}>Delete</button>
                                    </div>
                                </div>
                                )
                              }  
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CreateEditPost;