let state = {
    profilePage: {
        posts: [
            {id: 1, massage: 'Hi, how are you?', likesCount: 0},
            {id: 2, massage: 'Its my first post', likesCount: 12},
        ],


    },
    dialogsPage: {
        messages: [
            {id: 1, massage: 'Hello'},
            {id: 2, massage: 'Heya'},
            {id: 3, massage: 'how you doing'},
            {id: 4, massage: 'Yo'},
            {id: 5, massage: 'Hey'},
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
        id:3,
        message: postMessage,
        likesCount:0

    }
    state.profilePage.posts.push(newPost)
}

export default state