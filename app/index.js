import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from 'Components/TodoList';
import { Provider } from 'react-redux';
import store from './store/index';
import ModalRoot from 'Components/Modals';

ReactDOM.render(
    <Provider store={store}>
        <TodoList/>
        <ModalRoot/>
    </Provider>,
    document.getElementById('root'));
