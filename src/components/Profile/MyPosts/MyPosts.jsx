import React from "react";
import sas from './MyPosts.module.css'
import MyPostNew from "../Post one/MyPostNew";

const MyPosts = () => {
    return <div className={sas.item}>
        My post
        <div>
            <textarea></textarea>
            <button className={sas.button}>Add post</button>
        </div>
        <MyPostNew/>
    </div>
}

export default MyPosts