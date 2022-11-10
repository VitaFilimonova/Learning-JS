import {connect} from "react-redux";
import React, {useEffect} from "react";
import Profile from "./Profile.jsx";
import {getStatusThunk, profileThunk, updateStatusThunk} from "../Redux/Profile_Reducer.js";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../HOC/WithAuthRedirect.js";
import {compose} from "redux";

function  ProfileContainer(props){
// class ProfileContainer extends React.Component{
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.getStatusThunk !== this.props.getStatusThunk) {
    //         let { getProperties } = this.props.elementActions;
    //         getProperties(nextProps.name)

useEffect(()=>{
    // componentDidMount() {
    //     alert ('hiii')
        let profileId = props.router.params.userId
        if (!profileId)
      {
                profileId = 2
      }

        props.profileThunk(profileId)
        props.getStatusThunk(profileId)
    })

//     componentDidUpdate(prevProps, prevState, snapshot) {
// alert('jhgf')
//         let profileId = this.props.router.params.userId
//         if (!profileId)
//         {
//             profileId = 2
//         }
//
//         this.props.profileThunk(profileId)
//         this.props.getStatusThunk(profileId)
//
// }

 {
        // if(!this.props.isAuth) {return <Navigate to={'/login'}/>}
        // setTimeout(function (){alert='kjhg'},1000)
        // setTimeout("alert('Привет')", 1000)
        return <div>
            <Profile {...props} profile ={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}  />
            </div>
    }

}
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)



let mapStateToProps = (state) => {
    return{
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        // setTimeout(function (){
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />)
        // },1);
    }

    return ComponentWithRouterProp;
}
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default compose(connect (mapStateToProps,{profileThunk,getStatusThunk,updateStatusThunk}),withRouter)(ProfileContainer)
// export default  connect (mapStateToProps,{profileThunk}) (WithUrlDataContainerComponent)


