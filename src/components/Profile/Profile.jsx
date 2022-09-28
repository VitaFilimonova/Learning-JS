import React from "react";
import sas from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import MyPostNew from "./Post one/MyPostNew";

const Profile = () => {
    return <div className={sas.content}>
        <img src='https://cdn.fishki.net/upload/post/201603/23/1894215/norway-nature-scenery-lake-mountains-flowers-sunrise_1600x900.jpg'/>

        <div>
            ava+ description
        </div>
     <MyPosts/>

    </div>
}
export default Profile