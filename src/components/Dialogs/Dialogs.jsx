import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m => <Message id={m.id} message={m.massage}/>)

let newMessage = React.createRef();
    let addnewMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <textarea ref={newMessage}></textarea>
                <button onClick={addnewMessage}>Add Message</button>
            </div>

        </div>

    )
}
export default Dialogs