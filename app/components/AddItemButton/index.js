import React, { Component } from 'react';
import Icon from 'Components/Icon';
import { connect } from 'react-redux';
import { todoList } from "Actions/todoList";
import { showModal, hideModal } from 'Actions/modal';

const AddItemButton = props => {
    const handleClick = () => {
        // props.addItem({'title': 'a first todo insert in redux'})
        props.showDefaultModal();
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
        showDefaultModal: () => dispatch(showModal('DEFAULT_MODAL')),
        hideDefaultModal: () => dispatch(hideModal('DEFAULT_MODAL'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemButton);
