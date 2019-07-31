import { ADD_ITEM } from "../constants";

const initialState = {
    todoList: []
};

export default function addItem(state = initialState, action) {
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state, {
            todoList: state.todoList.concat(action.itemData)
        })
    }
}