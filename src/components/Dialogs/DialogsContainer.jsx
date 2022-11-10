// import React from "react";
import {AddMessageCreators,UpdateNewMessageTextCreators} from "../Redux/Dialogs_Reducer.js";
import Dialogs from "./Dialogs.jsx";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/WithAuthRedirect.js";
import {compose} from "redux";

let mapDispatchToProps = (dispatch) => ({

    AddMessage: () => dispatch (AddMessageCreators()),
    UpdateNewMessageText: (mesText) => {let action =UpdateNewMessageTextCreators(mesText)
        dispatch(action)
    }
})
let mapStateToProps = (state) => {
    return {
        Data: state.DialogsPage,
        DataMe: state.DialogsPage.MessagesData,
        DataDi: state.DialogsPage.DialogsData
    }
}
export default compose (connect (mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs)
// let AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (AuthRedirectComponent)

// export default DialogsContainer