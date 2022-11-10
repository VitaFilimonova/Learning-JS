import {APIForUsers} from "../../API/ApiRequiest.js";

const FOLLOW = 'Follow'
const UNFOLLOW = 'Unfollow'
const SET = 'Set_Users'
const PAGES = 'Set current page'
const TOTAL = 'Set total count of users'
const TOGGLE_IS_FETCHING = 'Toggle is fetching'
const TOGGLE_IS_FOLLOWING_PROCESS = 'Toggle is following process'

let initialState = {
    users: [],
    usersOnPage: 5,
    totalCount:0,
    currentPage: 1,
    isFetching: true,
    isFollowingProcess: []
       }

let usersReducer = (state = initialState , action) => {
switch (action.type) {
    case FOLLOW:
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: true}
                }
                return user
            })
        }
    case UNFOLLOW:
        return {
            ...state,
            users: state.users.map(user => {
                if (user.id === action.userId) {
                    return {...user, followed: false}
                }
                return user
            })
        }
    case SET:
        return {
            ...state,
            users: action.users
        }

    case PAGES:
        return {
            ...state,
            currentPage: action.currentPage
        }
    case TOTAL:
        return {
            ...state,
            totalCount: action.totalCount
        }
    case TOGGLE_IS_FETCHING:
        return {
            ...state,
            isFetching: action.isFetching
        }
    case TOGGLE_IS_FOLLOWING_PROCESS:
        return {
            ...state,
    isFollowingProcess: action.isFetching
        ?[...state.isFollowingProcess, action.userId]
       :  [state.isFollowingProcess.filter(user=> user.id !== action.userId)]
        }

    default:
        return state
}
}
export let AddUsers = (userId) => ({type: FOLLOW,userId })
export let DeleteUsers = (userId) => {
    return { type : UNFOLLOW ,userId} }
export let SetUsers =(users) =>({type:SET,users})
export let SetCurrentPage =(currentPage)  => ({type:PAGES , currentPage})
export let SetTotalUsersCount = (totalCount) => ({type:TOTAL , totalCount})
export let ToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export let ToggleIsFollowingProcess = (isFetching,userId) =>  ({type: TOGGLE_IS_FOLLOWING_PROCESS, isFetching,userId})

export let getUsersThunk = (currentPage,usersOnPage)=> {
    return (dispatch) => {
       dispatch(ToggleIsFetching(true))
        APIForUsers.getUsers(currentPage,usersOnPage)
            .then(data => {
                dispatch(ToggleIsFetching(false))
                dispatch(SetUsers(data.items))
                dispatch(SetTotalUsersCount(data.totalCount))
            })
    }
}
export let unfollowThunk = (userId)=>{
    return(dispatch) => {
        dispatch(ToggleIsFollowingProcess(true, userId))
        APIForUsers.unfollow(userId)
            .then(AxiosResponse => {
                if (AxiosResponse.data.resultCode === 0)
                { dispatch(DeleteUsers(userId))}
               dispatch(ToggleIsFollowingProcess(false, userId))
    })
}
}
export let followThunk = (userId) => {
    return (dispatch)=> {
       dispatch(ToggleIsFollowingProcess(true, userId))
        APIForUsers.follow(userId)
            .then(AxiosResponse => {
                if (AxiosResponse.data.resultCode === 0)
                { dispatch(AddUsers(userId))}
               dispatch(ToggleIsFollowingProcess(false,userId))})
    }
}


export default usersReducer