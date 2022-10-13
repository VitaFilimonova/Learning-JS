import {combineReducers, configureStore} from "@reduxjs/toolkit";
import Dialogs_Reducer from "./Dialogs_Reducer";
import Profile_Reducer from "./Profile_Reducer";
import profileReducer from "./Profile_Reducer";
import dialogsReducer from "./Dialogs_Reducer";






let reducer = combineReducers({
        ProfilePage: Profile_Reducer,
        DialogsPage: Dialogs_Reducer
    })

    // Navbar : Navbar_Reducer
let store = configureStore({reducer} )
export default store