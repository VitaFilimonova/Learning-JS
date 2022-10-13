import React from "react";
import sas from './MyPosts.module.css'
import MyPostNew from "../Post one/MyPostNew";

const MyPosts = (props) => {

    let postElements = props.post.PostData.map( post =>  <MyPostNew message ={post.message} info={post.info}/> )

    let newPostElement = React.createRef()

    let adyPosts =() => {
        props.AddPost()
        // props.dispatch({type: 'updateNewPText', newText: ''})
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.UpdateNewPostText(text)
    }

    return <div className={sas.contentex}>
    <div className={sas.item}>
        <h3> My post </h3>
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.post.newPostData} ></textarea>
        </div>
        <div>
            <button onClick={adyPosts} className={sas.button}>Add post</button>
        </div>
        <div className={sas.contentex}>
            {postElements}
        </div>
    </div>
    </div>
}

export default MyPosts
