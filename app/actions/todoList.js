import { ADD_ITEM } from "Constants";

export function todoList(itemData) {
    return {
        type: ADD_ITEM,
        itemData
    }
}
