const initialState = {
    friends: [
        {
            name: 'AJL',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nostrum',
            img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
            id: 1
        },
        {
            name: 'AJL',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nostrum',
            img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
            id: 2
        },
        {
            name: 'AJL',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nostrum',
            img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
            id: 3
        }
    ],
}

export function friendsReducer(state = initialState, action) {
    switch (action.type) {
        case 'addFriends':
            return { ...state, friends: [...state.friends, action.payload] };
        case 'removeFriends':
            return { ...state, friends: state.friends.filter(friend => friend.id !== action.payload )};
        default:
            return state;
    }
}