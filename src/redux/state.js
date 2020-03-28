import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'Its my first post', likesCount: 12},
            ],
            newPostText: 'fgrgreergergr',

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Heya'},
                {id: 3, message: 'how you doing'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Hey'},
            ],
            newMessageText: 'ups',
            dialogs: [
                {id: 1, name: 'Lesha'},
                {id: 2, name: 'Dasha'},
                {id: 3, name: 'Masha'},
                {id: 4, name: 'Igor'},
                {id: 5, name: 'Kir'},

            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)

    }
}
export const addPostActionCreator =() => ({type: ADD_POST})
export const updateNewPostTextActionCreator =(text)=> ({type: UPDATE_NEW_POST_TEXT,newText: text})
export const addMessageCreator =() => ({type: ADD_MESSAGE})
export const updateNewMessageCreator =(text)=> ({type: UPDATE_NEW_MESSAGE_TEXT,newMessage: text})
export default store