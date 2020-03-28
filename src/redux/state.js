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
        }
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

    /*   _addPost() {
           let newPost = {
               id: 3,
               message: this._state.profilePage.newPostText,
               likesCount: 21

           }
           this._state.profilePage.posts.push(newPost)
           this._state.profilePage.newPostText = ''
           this._callSubscriber(this._state)
       },
       _updateNewPostText(newText) {
           this._state.profilePage.newPostText = newText;
           this._callSubscriber(this._state)
       },*/

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 21

            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.newMessageText = ''
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber(this._state)
        }
        else if (action.type = UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state)
        }
    }
}
export const addPostActionCreator =() => ({type: ADD_POST})
export const updateNewPostTextActionCreator =(text)=> ({type: UPDATE_NEW_POST_TEXT,newText: text})
export const addMessageCreator =() => ({type: ADD_MESSAGE})
export const updateNewMessageCreator =(text)=> ({type: UPDATE_NEW_MESSAGE_TEXT,newMessage: text})
export default store