import { ADD_ITEM, REMOVE_ITEM } from "Constants";

export function todoListAdd(itemData) {
    return {
        type: ADD_ITEM,
        itemData
    }
}

export function todoListRemove(itemId) {
    return {
        type: REMOVE_ITEM,
        itemId
    }
}
