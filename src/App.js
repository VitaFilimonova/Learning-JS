import logo from './logo.svg';
import './/App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import React from "react";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, Routes} from "react-router-dom";



function App(props) {
    return (

            <div className='app-wrapper'>
                <Header/>

                <Nav/>
                <div className='app-wrapper-dia'>
                    <Routes>

                        <Route path='/profile' element={<Profile postData={props.state.ProfilePage.PostData} addPost = {props.addPost} updateNewPText = {props.updateNewPText} newPostData = {props.state.ProfilePage.newPostData}/>}/>
                      <Route path='/dialogs/*' element={<Dialogs Data={props.state.DialogsPage.DialogsData} messagesData = {props.state.DialogsPage.MessagesData}/>}/>

                    </Routes>
                </div>
            </div>


    )
}


export default App
