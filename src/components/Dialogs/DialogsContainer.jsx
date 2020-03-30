import React from 'react';
import s from './Dialogs.module.css'
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {



    return <StoreContext.Consumer>
        {(store) => {
        let state = store.getState().dialogsPage;

        let addMessage = () => {
            store.dispatch(addMessageCreator())
        };

        let onMessageChange = (text) => {
            store.dispatch(updateNewMessageCreator(text))
        };
        return <Dialogs updateNewMessageCreator={onMessageChange}
                        addMessage={addMessage}
                        dialogsPage={state}/>
    }
    }</StoreContext.Consumer>

};
export default DialogsContainer