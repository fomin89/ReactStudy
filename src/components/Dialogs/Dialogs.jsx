import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state =props.dialogsPage;
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElement = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>);
    let newMessageText = state.newMessageText;

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageCreator(text);
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>

                <div>{messagesElement}</div>
                <div><textarea
                    placeholder='Enter your Message'
                    ref={newMessageElement}
                    onChange={onMessageChange}
                    value={newMessageText}
                /></div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>

        </div>

    )
};
export default Dialogs