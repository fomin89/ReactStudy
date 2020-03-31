import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

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
            newMessageText: '',
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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)

    }
};

export default store