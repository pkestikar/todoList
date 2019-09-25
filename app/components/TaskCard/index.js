import React, { Component } from 'react';
import Icon from 'Components/Icon';

const TaskCard = (props) => {
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
                <span className="delete-task">
                    <Icon icon={'delete'} size={'17px'}/>
                </span>
            </div>
        </div>
    )
};

export default TaskCard;
