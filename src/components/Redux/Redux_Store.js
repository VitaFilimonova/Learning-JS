import {combineReducers, configureStore} from "@reduxjs/toolkit";
import Dialogs_Reducer from "./Dialogs_Reducer.js";
import Profile_Reducer from "./Profile_Reducer.js";
import Users_Reducer from "./Users_Reducer.js";






let reducer = combineReducers({
        ProfilePage: Profile_Reducer,
        DialogsPage: Dialogs_Reducer,
        UsersPage: Users_Reducer
    })

    // Navbar : Navbar_Reducer
let store = configureStore({reducer} )
window.store = store
export default store