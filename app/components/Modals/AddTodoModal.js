import React, { useState } from 'react';
import { connect } from 'react-redux';
import Icon from 'Components/Icon';
import {hideModal} from "../../actions/modal";
import onClickOutside from 'react-onClickOutside';
import Button from 'Components/Button';
import { todoList } from "Actions/todoList";

const AddTodoModal = props => {

    const [taskTitle, updateTaskTitle] = useState('');
    const [taskDescription, updateTaskDescription] = useState('');
    const [taskPriority, updateTaskPriority] = useState('');

    AddTodoModal.handleClickOutside = evt => {
        props.hideAddTodoModal();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const itemData = {
        //     'title': taskTitle
        // };
        // props.addItem(itemData);
        console.log('Submitted!');
    };

    const handleInputChange = (e, updateFunction) => {
        updateFunction(e.target.value);
    };

    return (
        <div className={'modal__add-todo'}>
            <div className="close-button" onClick={() => props.hideAddTodoModal()}>
                <Icon icon={'close'}/>
            </div>

            <form>
                <div className="input-wrapper">
                    <input type={'text'} placeholder={'Task title'} name={'task-title'} onChange={e => handleInputChange(e, updateTaskTitle)} value={taskTitle}/>
                    <input type={'text'} placeholder={'Task description'} name={'task-description'} onChange={e => handleInputChange(e, updateTaskDescription)} value={taskDescription}/>
                </div>

                <div className={'submit-button'}>
                    <Button onClick={e => handleSubmit(e)}>Add Task</Button>
                </div>
            </form>

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
        addItem: (itemData) => dispatch(todoList(itemData)),
        hideAddTodoModal: () => dispatch(hideModal('ADD_TODO_MODAL'))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(AddTodoModal, clickOutsideConfig));