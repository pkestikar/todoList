import { combineReducers } from 'redux';
import todoList from 'Reducers/todoList';
import modal from 'Reducers/modal';

export const rootReducer = combineReducers({
    todoList,
    modal
});
