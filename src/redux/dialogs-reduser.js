const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 6, message: state.newMessageText}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessage
            };
        default:
            return state
    }
};
export const addMessageCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

export default dialogsReducer