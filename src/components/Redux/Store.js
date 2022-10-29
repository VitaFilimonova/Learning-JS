// let rerenderEnTree = () => {
//   console.log('state changed')
// }

// const ADD_POST = 'Add post'
// const UPDATE_NEW_POST_TEXT = 'updateNewPText'

// const ADD_MESSAGE = 'Add message'
// const UPDATE_NEW_MESSAGE_TEXT = 'updateNewMesText'
import profileReducer from "./Profile_Reducer.js";
import dialogsReducer from "./Dialogs_Reducer.js";
let store = {
  _state: {
    DialogsPage : {
      DialogsData : [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Taras'},
        {id: 5, name: 'Dasha'}
      ],
      MessagesData : [
        {id: 1 , message: 'Hi,you ok?'},
        {id: 2 , message: 'How are you'},
        {id: 3 , message: 'Fine, thanks'},
        {id: 4 , message: 'Oy my gash'},
        {id: 5 , message: 'im tired'}
      ],
      newMessageData: ''
    },
    ProfilePage: {
      PostData: [
        {message: "It's my first post", info: 90, id:0},
        {message:  "It's my second post", info: 1, id: 1}],
      newPostData: ''

    },
    NavbarPage: {}
  },
  getState() {
    return this._state
  },

  _callSubscriber () {
    console.log('state changed')
  },
  subscribe (observer)  {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.ProfilePage = profileReducer(this._state.ProfilePage,action)
    this._state.DialogsPage = dialogsReducer(this._state.DialogsPage,action)
    this._callSubscriber(this._state)

    //
    // if (action.type === ADD_POST) {
    //   let NewP = {
    //     id:3, message:this._state.ProfilePage.newPostData, info: 0}
    //   this._state.ProfilePage.PostData.push(NewP)
    //   this._state.ProfilePage.newPostData = ''
    //   this._callSubscriber(this._state)
    // }
    // else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.ProfilePage.newPostData = action.newText
    //   this._callSubscriber(this._state)}
    //
    // else if ( action.type === ADD_MESSAGE) {
    //   let body =this._state.DialogsPage.newMessageData
    //   this._state.DialogsPage.MessagesData.push({id: 1,message: body})
    //   this._state.DialogsPage.newMessageData = ''
    //   this._callSubscriber(this._state)
    // }
    //
    // else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    // this._state.DialogsPage.newMessageData = action.mesText
    //
    // this._callSubscriber(this._state)}


      }
    }


// export let AddPostCreators = () => ({type: ADD_POST })
// export let UpdateNewPostTextCreators = (text) => {
//   return { type : UPDATE_NEW_POST_TEXT ,newText: text}
// }
//
// export let AddMessageCreators = () => ({type: ADD_MESSAGE})
// export let UpdateNewMessageTextCreators = (mesText) => {
//   return {type: UPDATE_NEW_MESSAGE_TEXT, mesText: mesText}
// }

window.store = store
export default store

//   let state = {
//     DialogsPage : {
//       DialogsData : [
//         {id: 1, name: 'Sasha'},
//         {id: 2, name: 'Masha'},
//         {id: 3, name: 'Masha'},
//         {id: 4, name: 'Taras'},
//         {id: 5, name: 'Dasha'}
//       ],
//     MessagesData : [
//     {id: 1 , message: 'Hi,you ok?'},
//     {id: 2 , message: 'How are you'},
//     {id: 3 , message: 'Fine, thanks'},
//     {id: 4 , message: 'Oy my gash'},
//     {id: 5 , message: 'im tired'}
// ]},
//     ProfilePage: {
//       PostData: [
//     {message: "It's my first post", info: 90, id:0},
//     {message:  "It's my second post", info: 1, id: 1}],
//       newPostData: ''
//
// }
// }

// export let adPost =() => {
//   let NewP = {
//     id:3, message:state.ProfilePage.newPostData, info: 0}
//   state.ProfilePage.PostData.push(NewP)
//   state.ProfilePage.newPostData = ''
//   rerenderEnTree(state)
//
// }

// export let updateNewPText = (newText) => {
//   state.ProfilePage.newPostData =newText
//     rerenderEnTree(state)
// }
// export const subscribe = (observer) => {
//   rerenderEnTree = observer
// }


