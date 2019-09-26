import React, { Component } from 'react';
import Icon from 'Components/Icon';
import { connect } from 'react-redux';
import { showModal, hideModal } from 'Actions/modal';

const AddItemButton = props => {
    const handleClick = () => {
        props.showAddTodoModal();
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
        showAddTodoModal: () => dispatch(showModal('ADD_TODO_MODAL')),
        hideAddTodoModal: () => dispatch(hideModal('ADD_TODO_MODAL'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemButton);
