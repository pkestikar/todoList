import { ADD_ITEM } from "../constants";
import { combineReducers } from 'redux';
import addItem from './addItem';

const initialState = {
    todoList: []
};

const rootReducer = combineReducers({
    addItem
});

export default rootReducer;
