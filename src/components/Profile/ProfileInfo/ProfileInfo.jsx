import React from "react";
import s from './ProfileInfo.module.css'


const ProfileInfo = (props) => {

    return (

        <div className={s.contentPrInf}>
            <img src='https://s1.1zoom.ru/big3/241/431666-Kysb.jpg'/>
            <div>
                {props.profile.photos.small !== null ?  <img src = {props.profile.photos.small}/> :   <img src = 'https://images.unsplash.com/photo-1666060519769-ab6fff301acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>}
                 </div>
            <div>
                ava + description
            </div>
        </div>

)
}
export default ProfileInfo
