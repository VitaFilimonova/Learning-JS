// import logo from './logo.svg';
import './/App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import React from "react";
import { Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
            <div className='app-wrapper'>
                <Header/>

                <Nav/>
                <div className='app-wrapper-dia'>
                    <Routes>

                        <Route path='/profile' element={<Profile store={props.store}/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>

                    </Routes>
                </div>
            </div>

    )
}

export default App
