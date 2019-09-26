import { ADD_ITEM, REMOVE_ITEM } from "../constants";

const initialState = {
    data: [
        {
            id: 1,
            title: 'Go to the gym',
            description: 'Go to the gym and get a workout done. This is supposed to be a short task description.',
            image: 'house'
        },
        {
            id: 2,
            title: 'Buy tickets to something',
            image: 'house'
        },
        {
            id: 3,
            title: 'Get a haircut',
            image: 'house'
        }
    ]
};

const removeElement = (arr, id) => {
    return arr.filter( (element) => {
        return element.id !== id;
    });
};

export default function todoList(state = initialState, action) {
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            data: state.data.concat(action.itemData)
        })
    }
    else if (action.type === REMOVE_ITEM) {
        return Object.assign({}, state, {
            data: removeElement(state.data, action.itemId)
        });
    }

    return state;
}