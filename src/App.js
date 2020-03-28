import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import MyPosts from "./components/Profile/My posts/MyPosts";


const App = (props) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogItem'
                           render={() => <Dialogs
                               state={props.state.dialogsPage}
                               updateNewMessageText={props.updateNewMessageText}
                               addMessage={props.addMessage}
                               newMessageText ={props.state.dialogsPage.newMessageText}
                           />}/>

                    <Route path='/profile'
                           render={() => <Profile
                               profilePage = {props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;