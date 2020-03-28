import state, {subscribe} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import store from "./redux/state";



let rerenderEntireTree = (state) =>{
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText ={store.updateNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessageText ={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)