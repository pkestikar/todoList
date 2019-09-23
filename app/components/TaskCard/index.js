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
                    <Icon style={{ margin: '0.3rem' }} icon={'plane'} size={'100%'}/>
                </span>
            </div>
        </div>
    )
};

export default TaskCard;
