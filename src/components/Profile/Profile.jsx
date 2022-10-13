import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from "./ProfileInfo/ProfileInfo.module.css";
// import sas from './Profile.module.css'


const Profile = (props) => {
    return   <div>
        <ProfileInfo />
    <div>
     <MyPostsContainer store = {props.store}/>

    </div>
    </div>
}
export default Profile