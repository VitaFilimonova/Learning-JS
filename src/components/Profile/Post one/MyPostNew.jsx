import React from "react";
import sas from './MyPostNew.module.css'


const MyPostNew = (pro) => {

    return <div className={sas.content}>
            <div className={sas.itemnik}>
        <img src = 'https://cdn.fishki.net/upload/post/201603/23/1894215/norway-nature-scenery-lake-mountains-flowers-sunrise_1600x900.jpg'/>
            </div>

        {pro.message}
        <div>
            <button> LIKE</button>
            Like = {pro.info}
        </div>
</div>

}

export default MyPostNew