import {ADD_ITEM} from "../constants";

const initialState = {
    data: [
        {
            title: 'Go to the gym',
            description: 'Go to the gym and get a workout done. This is supposed to be a short task description.',
            image: 'house'
        },
        {
            title: 'Buy tickets to something',
            image: 'house'
        },
        {
            title: 'Get a haircut you filthy',
            image: 'house'
        },
        {
            title: 'Get a haircut you filthy',
            image: 'house'
        },
        {
            title: 'Get a haircut you filthy',
            image: 'house'
        }
    ]
};

export default function todoList(state = initialState, action) {
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            data: state.data.concat(action.itemData)
        })
    }

    return state;
}