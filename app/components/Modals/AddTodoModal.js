import React from 'react';
import { connect } from 'react-redux';
import Icon from 'Components/Icon';
import {hideModal} from "../../actions/modal";
import onClickOutside from 'react-onClickOutside';

const AddTodoModal = props => {

    AddTodoModal.handleClickOutside = evt => {
        props.hideAddTodoModal();
    };

    return (
        <div className={'modal__add-todo'}>
            <div className="close-button" onClick={() => props.hideAddTodoModal()}>
                <Icon icon={'close'}/>
            </div>

            <div className="input-wrapper">
                <input type={'text'} placeholder={'Short task description'}/>
                <input type={'text'} placeholder={'Task description'}/>
            </div>

        </div>
    )
};

const clickOutsideConfig = {
    handleClickOutside: () => AddTodoModal.handleClickOutside
};

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideAddTodoModal: () => dispatch(hideModal('ADD_TODO_MODAL'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(AddTodoModal, clickOutsideConfig));