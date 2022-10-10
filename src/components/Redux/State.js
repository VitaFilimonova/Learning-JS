let rerenderEnTree = () => {
  console.log('state changed')
}
  let state = {
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
]},
    ProfilePage: {
      PostData: [
    {message: "It's my first post", info: 90, id:0},
    {message:  "It's my second post", info: 1, id: 1}],
      newPostData: ''

}
}
window.state = state
export let adPost =() => {
  let NewP = {
    id:3, message:state.ProfilePage.newPostData, info: 0}
  state.ProfilePage.PostData.push(NewP)
  state.ProfilePage.newPostData = ''
  rerenderEnTree(state)

}

export let updateNewPText = (newText) => {
  state.ProfilePage.newPostData =newText
    rerenderEnTree(state)
}
export const subscribe = (observer) => {
  rerenderEnTree = observer
}


export default state