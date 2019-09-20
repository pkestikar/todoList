import React, { Component } from 'react';
import Icon from 'Components/Icon';
import { connect } from 'react-redux';
import { todoList } from "Actions/todoList";
import { showModal, hideModal } from 'Actions/modal';

const AddItemButton = props => {
    const handleClick = () => {
        // props.addItem({'title': 'a first to-do insert in redux'})
        props.showAddTodoModal();
        console.log('currentState:');
        console.log(props.currentState);
    };

    return (
        <div className="add-item-container" onClick={handleClick}>
            <Icon icon={'add'}/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        currentState: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: (itemData) => dispatch(todoList(itemData)),
        showAddTodoModal: () => dispatch(showModal('ADD_TODO_MODAL')),
        hideAddTodoModal: () => dispatch(hideModal('ADD_TODO_MODAL'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemButton);
