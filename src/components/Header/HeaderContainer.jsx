import React from "react";
import Header from "./Header.jsx";
import {connect} from "react-redux";
import {AuthThunk} from "../Redux/AuthReducer.js";
import s from './Header.module.css'


class HeaderContainer extends React.Component {
    componentDidMount()  {
        this.props.AuthThunk()
    }

    render() {
        return <div className={s.heafer}>
            <Header {...this.props}  />
        </div>
    }
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    }
}

export default  connect (mapStateToProps,{AuthThunk}) (HeaderContainer)