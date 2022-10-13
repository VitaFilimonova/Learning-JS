import React from "react";
import {AddMessageCreators,UpdateNewMessageTextCreators} from "../Redux/Dialogs_Reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapDispatchToProps = (dispatch) => ({

    AddMessage: () => dispatch (AddMessageCreators()),
    UpdateNewMessageText: (mesText) => {let action =UpdateNewMessageTextCreators(mesText)
        dispatch(action)
    }
})
let mapStateToProps = (state) => {
    return {Data: state.DialogsPage,
        DataMe: state.DialogsPage.MessagesData,
        DataDi: state.DialogsPage.DialogsData}}

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs)

export default DialogsContainer