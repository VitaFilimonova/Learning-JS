import Users from "./Users";
import {connect} from "react-redux";
import {
    AddUsers,
    DeleteUsers,
    SetCurrentPage,
    SetTotalUsersCount,
    SetUsers, ToggleIsFetching
} from "../Redux/Users_Reducer.js";
import axios from "axios";
import React from "react";
import loader from  "./../../Common/loader.gif"
import s from "./Users.module.css"

class UsersAPI extends React.Component{

    componentDidMount()  {
        this.props.ToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPage}`)
            .then(AxiosResponse => {
                this.props.ToggleIsFetching(false)
                this.props.SetUsers(AxiosResponse.data.items)
                this.props.SetTotalUsersCount(AxiosResponse.data.totalCount)
            })
    }

    changedPage = (page) => {
        this.props.ToggleIsFetching(true)
        this.props.SetCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersOnPage}`)
            .then(AxiosResponse => {
                this.props.ToggleIsFetching(false)
                this.props.SetUsers(AxiosResponse.data.items)
            })
    }

    render() {
        return <div>
            {this.props.isFetching? <img src = {loader} className={s.loader}/> : null}
            <Users totalCount={this.props.totalCount}
                      usersOnPage={this.props.usersOnPage}
                      currentPage={this.props.currentPage}
                      changedPage={this.changedPage}
                      DeleteUsers={this.props.DeleteUsers}
                      AddUsers={this.props.AddUsers}
                      us = {this.props.us}/>
            </div>
    }
}

// let mapDispatchToProps = (dispatch) => ({
//
//     AddUsers: (userId) => dispatch(AddUsersCreators(userId)),
//     DeleteUsers: (userId) => dispatch(DeleteUsersCreators(userId)),
//     SetUsers: (users) => dispatch(SetUsersCreator(users)),
//     SetCurrentPage: (currentPage) => dispatch(SetCurrentPageCreator(currentPage)),
//     SetTotalUsersCount : (totalCount) => dispatch( SetTotalUsersCountCreator (totalCount)),
//     ToggleIsFetching: (isFetching)=> dispatch(ToggleIsFetchingCreator(isFetching))
// })

let mapStateToProps = (state) => {
    return{
        us: state.UsersPage.users,
        usersOnPage: state.UsersPage.usersOnPage,
        totalCount: state.UsersPage.totalCount,
        currentPage: state.UsersPage.currentPage,
        isFetching:state.UsersPage.isFetching

}}

export default connect (mapStateToProps,{AddUsers,DeleteUsers,SetUsers, SetCurrentPage, SetTotalUsersCount,ToggleIsFetching}) (UsersAPI)


