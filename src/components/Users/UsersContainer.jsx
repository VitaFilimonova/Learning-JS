import Users from "./Users";
import {connect} from "react-redux";
import {
    AddUsers, unfollowThunk, getUsersThunk,
    SetCurrentPage,
    SetTotalUsersCount, followThunk,
} from "../Redux/Users_Reducer.js";
import React, {useEffect} from "react";
import loader from  "./../../Common/loader.gif"
import s from "./Users.module.css"

function UsersAPI (props){
// class UsersAPI extends React.Component{
useEffect(()=>{
    // componentDidMount()  {
        props.getUse(props.currentPage,props.usersOnPage)

    })

    let changedPage = (page) => {
        props.getUse(page,props.usersOnPage)
        props.SetCurrentPage(page)
    }

    {
        return <div>
            {props.isFetching? <img src = {loader} className={s.loader}/> : null}
            <Users totalCount={props.totalCount}
                   usersOnPage={props.usersOnPage}
                   currentPage={props.currentPage}
                   changedPage={changedPage}
                   DeleteUsers={props.DeleteUsers}
                   AddUsers={props.AddUsers}
                   us={props.us}
                   ToggleIsFollowingProcess={props.ToggleIsFollowingProcess}
                   isFollowingProcess={props.isFollowingProcess}
                   unfollowThunk = {props.unfollowThunk}
                   followThunk = {props.followThunk}

            />
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
        isFetching:state.UsersPage.isFetching,
        isFollowingProcess: state.UsersPage.isFollowingProcess


}}

export default connect (mapStateToProps,{AddUsers, SetCurrentPage, SetTotalUsersCount,getUse:getUsersThunk,unfollowThunk,followThunk}) (UsersAPI)


