// import logo from './logo.svg';
import './/App.css';
import Nav from "./components/Nav/Nav.jsx";
import React from "react";
import { Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import {Login} from "./components/Login/LoginPage.js";



function App(props) {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>

                <Nav/>
                <div className={'app-wrapper-dia'} >
                    <Routes>

                        {/*<Route path='/profile/:userId?' element={<ProfileContainer store={props.store}/>}/>*/}
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/users' element={<UsersContainer store={props.store}/>}/>
                        <Route path='/login' element={<Login />}   />
                        {/*<Route path='/profile/*' element={<ProfileContainer />} />*/}
                        <Route path='/profile' element={<ProfileContainer />}   />
                        <Route path="/profile/:userId"
                               element={<ProfileContainer/>}/>
                    </Routes>
                </div>
            </div>


    )

}




export default App
