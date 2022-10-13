import {UpdateNewPostTextCreators,AddPostCreators} from "../../Redux/Profile_Reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {useDispatch} from "react-redux";

// const MyPostsContainer = (props) => {
//     let state = props.store.getState()
//
//     let adyPosts =() => {
//         props.store.dispatch(AddPostCreators())
//         // props.dispatch({type: 'updateNewPText', newText: ''})
//     }
//
//     let onPostChange = (text) => {
//         let action = UpdateNewPostTextCreators(text)
//         props.store.dispatch(action)
//     }
//     return <MyPosts UpdateNewPostText={onPostChange} AddPost = {adyPosts} post = {state.ProfilePage.PostData}
//                     newPostData ={ state.ProfilePage.newPostData}/>
// }
let mapDispatchToProps = (dispatch) => (
    { AddPost :  ()=> dispatch (AddPostCreators()),
        UpdateNewPostText:  (text) => {
            let action = UpdateNewPostTextCreators(text)
            dispatch(action) }
    })

let mapStateToProps = (state) => {
    return{
        // newPostData: state.ProfilePage.newPostData,
        post: state.ProfilePage
        // posts: state.ProfilePage.newPostData
    }
}

const MyPostsContainer = connect (mapStateToProps,mapDispatchToProps) (MyPosts)

export default  MyPostsContainer
