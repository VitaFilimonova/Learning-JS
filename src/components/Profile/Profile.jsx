import React from "react";
import sas from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./ProfileInfo/ProfileInfo.module.css";

const Profile = (props) => {
    return   <div>
        <ProfileInfo />
    <div>

     <MyPosts post = {props.postData} addPost = {props.addPost} updateNewPText = {props.updateNewPText} newPostData={props.newPostData}/>

    </div>
    </div>
}
export default Profile