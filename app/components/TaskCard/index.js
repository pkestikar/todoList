import React, { Component } from 'react';
import Icon from 'Components/Icon';
import { connect } from 'react-redux';
import { todoListRemove } from "Actions/todoList";

const TaskCard = (props) => {

    const deleteTask = id => {
        props.todoListRemove(id);
    };

    return (
        <div className={`task-card`}>
            <div className="task-image">
                <img src={`images/${props.image}.png`} alt="task-image"/>
            </div>
            <div className="task-content">
                <div className="task-text">
                    {props.taskTitle}
                </div>
                <div className="task-description">
                    {props.taskDescription}
                </div>
                <span className="category-icon">
                    <Icon icon={'plane'} size={'17px'}/>
                </span>
                <span className="delete-task" onClick={() => deleteTask(props.id)}>
                    <Icon icon={'delete'} size={'17px'}/>
                </span>
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
        todoListRemove: (itemId) => dispatch(todoListRemove(itemId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);
