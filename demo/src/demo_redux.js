import { createStore } from 'redux';
const Add = "@user/add";
const Del = "@user/del";
const initState = [
    {
        id: 1,
        name: "Chien PV",
    },
    {
        id: 2,
        name: "Hoang Ha",
    },
]

const store = createStore(reducer);
// {
//     type:"add",
//     payload:{}
// }
function reducer(state = initState, action) {
    switch (action.type) {
        case Add:
            return [...state, action.payload];
        case Del:
            var id = action.payload;
            return state.filter((item) => item.id !== id)
        default:
            return state;
    }
}

// let action = {
//     type: Del,
//     payload: 2,
// }

function deleteUser(id) {
    return {
        type: Del,
        id,
    }
}

console.log("redux", store.getState());

// store.dispatch(action);
store.dispatch(deleteUser(2))

console.log("redux", store.getState());
store.dispatch({
    type: Add,
    payload: {
        id: 3,

    }
})