import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state =props.store.getState().dialogsPage;
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = state.messages.map(m => <Message id={m.id} message={m.message}/>)
    let newMessageText = state.newMessageText;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageCreator(text))
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>

                <div>{messagesElement}</div>
                <div><textarea
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    value={newMessageText}
                /></div>
                <div>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>

        </div>

    )
}
export default Dialogs