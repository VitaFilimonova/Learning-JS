// import logo from './logo.svg';
import './/App.css';
import Header from "./components/Header/Header.jsx";
import Nav from "./components/Nav/Nav.jsx";
import React from "react";
import { Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";



function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>

                <Nav/>
                <div className='app-wrapper-dia'>
                    <Routes>

                        {/*<Route path='/profile/:userId?' element={<ProfileContainer store={props.store}/>}/>*/}
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/users' element={<UsersContainer store={props.store}/>}/>

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
