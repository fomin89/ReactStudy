const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            };
            state.newMessageText = '';
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state
    }
};
export const addMessageCreator =() => ({type: ADD_MESSAGE});
export const updateNewMessageCreator =(text)=> ({type: UPDATE_NEW_MESSAGE_TEXT,newMessage: text});

export default dialogsReducer