import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {createRef} from "react";

const DialogsOne = (pro) => {
    return  (
    <div className={s.dialogs}>
        <img src='https://s1.1zoom.ru/big3/241/431666-Kysb.jpg'/>
     <NavLink to= {`dialogs/${pro.idom}`} className = { ({ isActive }) =>(isActive ? s.active : s.item )}> {pro.name} </NavLink>

        </div>

    )
}

const Message = (props) => {
    return <div className={s.dialogs}> {props.message}</div>

}

const Dialogs = (props) => {

    let dialogsElements = props.Data
        .map(didata => <DialogsOne name={didata.name} idom={didata.id}/>)

    let messagesElements = props.messagesData
        .map(mesdata => <Message message={mesdata.message} id={mesdata.id}/>)

    let newMessageElement = React.createRef()

    let addMessage = () => {
        let text = newMessageElement.current.value
        alert(text)
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
                <textarea ref={newMessageElement }></textarea>
            </div>
            <div>
                <button onClick={addMessage} className={s.button}>Add message</button>
            </div>


        </div>
    )



}

export default Dialogs