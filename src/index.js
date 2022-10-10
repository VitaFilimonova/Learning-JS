import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from "./components/Redux/State";
import {BrowserRouter} from "react-router-dom";
import {subscribe} from "./components/Redux/State";

import {updateNewPText} from "./components/Redux/State";
import {adPost} from "./components/Redux/State";
const root = ReactDOM.createRoot(document.getElementById('root'));


let rerenderEnTree = () => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={adPost} updateNewPText={updateNewPText} />


            </BrowserRouter>
        </React.StrictMode>
    );
}
rerenderEnTree(state)
subscribe(rerenderEnTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

