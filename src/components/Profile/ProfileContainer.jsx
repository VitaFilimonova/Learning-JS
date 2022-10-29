import {connect} from "react-redux";
import axios from "axios";
import React from "react";
import Profile from "./Profile.jsx";
import {SetUsersProfile} from "../Redux/Profile_Reducer.js";
import {useLocation, useNavigate, useParams} from "react-router-dom";


class ProfileContainer extends React.Component{

    componentDidMount()  {
        let profileId = this.props.router.params.userId
if (!profileId) {profileId = 2}

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+profileId)
            .then(AxiosResponse => {
                this.props.SetUsersProfile(AxiosResponse.data)
            })
    }

    render() {
        return <div>
            <Profile {...this.props} profile ={this.props.profile}  />
            </div>
    }

}

let mapStateToProps = (state) => {
    return{
        profile: state.ProfilePage.profile
}
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default  connect (mapStateToProps,{SetUsersProfile}) (withRouter(ProfileContainer))
