import { ADD_ITEM } from "Constants";

export function addItem(itemData) {
    return {
        type: ADD_ITEM,
        itemData
    }
}
