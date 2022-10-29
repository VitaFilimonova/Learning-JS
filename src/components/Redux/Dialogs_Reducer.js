const ADD_MESSAGE = 'Add message'
const UPDATE_NEW_MESSAGE_TEXT = 'updateNewMesText'


let initialState = {
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
    }

let dialogsReducer = ( state = initialState, action) => {
switch (action.type) {
    case ADD_MESSAGE:
    return {...state,
        MessagesData: [...state.MessagesData,{id: 1,message:state.newMessageData}],
        // copyState.DialogsData = [...state.DialogsData]
       newMessageData : ''
        }

    case UPDATE_NEW_MESSAGE_TEXT:
    return {
        ...state,
        newMessageData :action.mesText}
    default:
        return state
    }
    }

export let AddMessageCreators = () => ({type: ADD_MESSAGE})
export let UpdateNewMessageTextCreators = (mesText) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, mesText: mesText}
}
export default dialogsReducer