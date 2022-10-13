import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import sas from "../Profile/MyPosts/MyPosts.module.css";

const Dialogs = (props) => {
    const Message = (propso) => {
        return <div className={s.dialogs}> {propso.message}</div>
    }

    const DialogsOne = (pro) => {
        return (
            <div className={s.dialogs}>
                <img src='https://s1.1zoom.ru/big3/241/431666-Kysb.jpg'/>
                <NavLink to={`${pro.idom}`}
                         className={({isActive}) => (isActive ? s.active : s.item)}> {pro.name} </NavLink>
            </div>
        )
    }

    let dialogsElements = props.DataDi.map(DataDi => <DialogsOne name={DataDi.name} idom={DataDi.id}/>)

    let messagesElements = props.DataMe.map(DataMe => <Message message={DataMe.message} id={DataMe.id}/>)

    // let newMessageElement = React.createRef()

    let onSendMessageClick = () => {
        props.AddMessage()
    }

    let onMessageChange = (e) => {
        let mesText = e.target.value
        props.UpdateNewMessageText(mesText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.diItem}>
                {dialogsElements}
            </div>
            <div className={s.diMesssages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} value={props.Data.newMessageData}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick} className={s.button}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs