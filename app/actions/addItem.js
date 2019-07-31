import { ADD_ITEM } from "../constants";

export function addItem(itemData) {
    return {
        type: ADD_ITEM,
        itemData
    }
}
