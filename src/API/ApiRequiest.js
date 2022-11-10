import axios from "axios";

let instance = axios.create ({
    headers: {"API-KEY": 'b588f3f8-bd2d-48c3-97c7-c1923946ba43'},
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'

})

export const APIForUsers = {
    getUsers(currentPage, usersOnPage) {
        return instance.get(`users?page=${currentPage}&count=${usersOnPage}`).then(AxiosResponse => {return AxiosResponse.data})
    },
follow (userId){
        return instance.post(`follow/${userId}`)
},
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
    }
}
export const APIAuth = {
    getAuthMe (){ return  instance.get(`auth/me`)
    }
}
export const APIProfile = {
    getUserProfile (profileId){ return  instance.get(`profile/`+profileId)
    },
    getStatus (profileId) {return instance.get (`profile/status/`+profileId)
    },
    updateStatus (status) {return instance.put(`profile/status/`,{status: status})
    }
}

