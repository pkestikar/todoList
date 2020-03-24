import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodoModal from 'Components/Modals/AddTodoModal';
import DefaultModal from 'Components/Modals/DefaultModal';

const modalComponents = {
    'DEFAULT_MODAL': DefaultModal,
    'ADD_TODO_MODAL': AddTodoModal
};

const ModalRoot = ({ modalType, modalProps }) => {
    if (!modalType || modalType === null) {
        return null;
    }

    const SelectedModal = modalComponents[modalType];
    return (
        <div className="modal">
            <SelectedModal/>
        </div>
    )
};

export default connect(state => state.modal)(ModalRoot);
