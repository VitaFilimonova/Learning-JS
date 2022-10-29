
const FOLLOW = 'Follow'
const UNFOLLOW = 'Unfollow'
const SET = 'Set_Users'
const PAGES = 'Set current page'
const TOTAL = 'Set total count of users'
const TOGGLE_IS_FETCHING = 'Toggle is fetching'
let initialState = {
    users: [],
    usersOnPage: 5,
    totalCount:0,
    currentPage: 1,
    isFetching: true
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

export default usersReducer