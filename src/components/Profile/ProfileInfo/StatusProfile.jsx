import React from "react";
import s from './ProfileInfo.module.css'


class StatusProfile extends React.Component {
    state = {
        editMode: false,
        status:this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true, status: this.props.status})

    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatusThunk(this.state.status)
    }
    upStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    }
// componentDidUpdate(prevProps, prevState, snapshot) {
//         if (prevProps.status !== this.props.status){
//             this.setState({
//                 status: this.props.status
//             })
//         }
// }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.upStatus} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>}
            </div>
        )
    }
}

export default StatusProfile
