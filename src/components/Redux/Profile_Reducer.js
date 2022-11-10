import { APIProfile} from "../../API/ApiRequiest.js";
import profileInfo from "../Profile/ProfileInfo/ProfileInfo.jsx";


const ADD_POST = 'Add post'
const UPDATE_NEW_POST_TEXT = 'updateNewPText'
const SET_USERS_PROFILE = 'Set users profile'
const SET_STATUS = 'Set status'

let initialState = {
    PostData: [
        {message: "It's my first post", info: 90, id:0},
        {message:  "It's my second post", info: 1, id: 1}],
    newPostData: '',
    profile: { photos: {} },
    status:''
}
let profileReducer = ( state = initialState , action) => {
switch (action.type) {
    case ADD_POST :
        let NewP = {id: 3, message: state.newPostData, info: 0}
        return {
            ...state,
            PostData: [...state.PostData, NewP],
            newPostData: ''
        }

    case UPDATE_NEW_POST_TEXT:
        return {
            ...state,
            // copyState.PostData=[...state.PostData]
            newPostData: action.newText
        }
    case SET_STATUS:
        return {
            ...state,status: action.status
        }
    case SET_USERS_PROFILE:
        return {
            ...state, profile: action.profile
        }

    default:
        return state
}
}
export let AddPostCreators = () => ({type: ADD_POST })
export let UpdateNewPostTextCreators = (text) => {
    return { type : UPDATE_NEW_POST_TEXT ,newText: text}
}
export let SetUsersProfile = (profile) => {
    return { type: SET_USERS_PROFILE , profile}
}
export let SetStatus = (status) => {
    return { type: SET_STATUS , status}
}
export let profileThunk = (profileId) => {
    return (dispatch)=> {
        APIProfile.getUserProfile(profileId)
            .then(AxiosResponse => {
               dispatch(SetUsersProfile(AxiosResponse.data))
            })}}

export let getStatusThunk = (profileId) => {
    return (dispatch)=> {
        APIProfile.getStatus(profileId)
            .then(AxiosResponse => {
                dispatch(SetStatus(AxiosResponse.data))
            })}}
export let updateStatusThunk = (status) => {
    return (dispatch)=> {
        APIProfile.updateStatus(status)
            .then(AxiosResponse => {
                if (AxiosResponse.data.resultCode ===0){
                dispatch(SetStatus(status))}
            })}}



export default profileReducer