import React from "react";
import sas from './MyPostNew.module.css'


const MyPostNew = (pro) => {

    return <div className={sas.content}>
            <div className={sas.ite}>
        <img src = 'https://kartinkin.net/uploads/posts/2022-02/thumbs/1645232023_2-kartinkin-net-p-krasivie-kartinki-priroda-leto-2.jpg'/>
            </div>

        {pro.message}
        <div>
            <button> LIKE</button>
            Like = {pro.info}
        </div>
</div>

}

export default MyPostNew