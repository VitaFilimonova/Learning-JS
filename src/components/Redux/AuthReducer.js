import {APIAuth} from "../../API/ApiRequiest.js";

const SET_AUTH_USERS = 'Set authorizing users'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

let AuthReducer = ( state = initialState, action) => {
switch (action.type) {
    case SET_AUTH_USERS:
    return {...state, ...action.data,
        isAuth: true
        }
    default:
        return state
    }
    }

let SetAuthUser= (id,login, email) => ({type: SET_AUTH_USERS, data: {id , login ,email }})

export let AuthThunk = () => {
    return (dispatch) => {
        APIAuth.getAuthMe()
            .then(AxiosResponse => {
                if (AxiosResponse.data.resultCode === 0)
                {  let {id , login,email} = AxiosResponse.data.data
                    dispatch(SetAuthUser (id , login,email))}
            })
    }
}

export default AuthReducer