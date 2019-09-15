import {ADD_ITEM} from "../constants";

const initialState = [
    {
        title: 'Go to the gym'
    },
    {
        title: 'Buy tickets to something'
    },
    {
        title: 'Get a haircut you filthy'
    }
];

export default function todoList(state = initialState, action) {
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            todoList: state.todoList.concat(action.itemData)
        })
    }

    return state;
}