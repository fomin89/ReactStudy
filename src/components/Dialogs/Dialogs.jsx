import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m => <Message id={m.id} message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type:'ADD-MESSAGE'})
    }

    let onMessageChange=()=>{
        let text = newMessageElement.current.value
        props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newMessage: text})
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>

                {messagesElement}
                <textarea
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    value = {props.newMessageText}
                />
                <button onClick={addMessage}>Add Message</button>
            </div>

        </div>

    )
}
export default Dialogs