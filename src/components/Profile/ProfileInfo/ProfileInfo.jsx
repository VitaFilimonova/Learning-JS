import React from "react";
import s from './ProfileInfo.module.css'
import StatusProfile from "./StatusProfile.jsx";



const ProfileInfo = (props) => {
    // if(!props.profile){
    return (


        <div className={s.contentPrInf}>
            {/*<img src='https://s1.1zoom.ru/big3/241/431666-Kysb.jpg'/>*/}
            <div>
                {props.profile.photos.small !== null ?  <img src = {props.profile.photos.small} alt={''}/>:   <img src = 'https://images.unsplash.com/photo-1666060519769-ab6fff301acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt={''}/>}
                 </div>
            <div>
                <StatusProfile status = {props.status} updateStatusThunk = {props.updateStatusThunk}/>
            </div>
        </div>

)}
// }
export default ProfileInfo
