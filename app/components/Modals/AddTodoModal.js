import React from 'react';
import { connect } from 'react-redux';
import Icon from 'Components/Icon';
import {hideModal} from "../../actions/modal";

const AddTodoModal = props => {
    return (
        <div className={'modal__add-todo'}>
            <div className="close-button" onClick={() => props.hideAddTodoModal()}>
                <Icon icon={'close'}/>
            </div>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal);