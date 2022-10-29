import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
// import state from "./components/Redux/State";
import {BrowserRouter} from "react-router-dom";
// import {subscribe} from "./components/Redux/State";
// import {updateNewPText} from "./components/Redux/State";
// import {adPost} from "./components/Redux/State";
import store from "./components/Redux/Redux_Store.js";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    // <React.StrictMode>

    <BrowserRouter>
        <Provider store={store}>
            <App/>

            {/*// store = {store} state={state} dispatch={store.dispatch.bind(store)}*/}

        </Provider>
    </BrowserRouter>

    // </React.StrictMode>
);


// store.subscribe (() => {
//     let state = store.getState()
//     rerenderEnTree(state)
// }
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

