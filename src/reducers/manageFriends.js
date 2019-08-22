export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return { friends: [...state.friends, { name: 'Joe', hometown: 'Boston', id: 101}]}
        case 'REMOVE_FRIEND':
            return { friends: state.friends.filter(friend => friend.id !== 101)}
    }
    return state
}
