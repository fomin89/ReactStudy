import {rerenderEntireTree} from "../Rerender";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 0},
            {id: 2, message: 'Its my first post', likesCount: 12},
        ],


    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Heya'},
            {id: 3, message: 'how you doing'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Hey'},
        ],
        dialogs: [
            {id: 1, name: 'Lesha'},
            {id: 2, name: 'Dasha'},
            {id: 3, name: 'Masha'},
            {id: 4, name: 'Igor'},
            {id: 5, name: 'Kir'},

        ]
    }


}
export let addPost = (postMessage) =>{
    let newPost = {
        id: 3,
        message: postMessage,
        likesCount: 21

    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state