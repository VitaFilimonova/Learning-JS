import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import sas from './Profile.module.css'


const Profile = (props) => {

    return   <div className={sas.content}>

        <ProfileInfo profile = {props.profile} status = {props.status} updateStatusThunk = {props.updateStatusThunk}/>
    <div>
     <MyPostsContainer store = {props.store}/>

    </div>
    </div>
}
export default Profile