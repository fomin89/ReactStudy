let store ={
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 0},
                {id: 2, message: 'Its my first post', likesCount: 12},
            ],
            newPostText: 'fgrgreergergr'

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
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log('State changed')
    },
    addPost () {
        let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 21

        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe  (observer) {
        this._callSubscriber = observer
    },
    addMessage ()  {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    updateNewMessageText (newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state)
    },
}


export default store