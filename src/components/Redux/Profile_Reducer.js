const ADD_POST = 'Add post'
const UPDATE_NEW_POST_TEXT = 'updateNewPText'

let initialState = {
    PostData: [
        {message: "It's my first post", info: 90, id:0},
        {message:  "It's my second post", info: 1, id: 1}],
    newPostData: ''
}
let profileReducer = ( state = initialState , action) => {
switch (action.type) {
    case ADD_POST : {
        let copyState = {...state}
        let NewP = {id: 3, message: state.newPostData, info: 0}
        copyState.PostData=[...state.PostData]
        copyState.PostData.push(NewP)
        copyState.newPostData = ''
        return copyState}

    case UPDATE_NEW_POST_TEXT:
    {
        let copyState = {...state}
        // copyState.PostData=[...state.PostData]
        copyState.newPostData = action.newText
        return  copyState}

    default:
        return state
}
}
export let AddPostCreators = () => ({type: ADD_POST })
export let UpdateNewPostTextCreators = (text) => {
    return { type : UPDATE_NEW_POST_TEXT ,newText: text}
}

export default profileReducer