import React, { Component } from 'react';
import Icon from 'Components/Icon';

const TaskCard = (props) => {
    return (
        <div className={`task-card`}>
            <div className="task-image">
                <img src="images/house.png" alt="task-image"/>
            </div>
            <div className="task-content">
                <div className="task-text">
                    {props.taskText}
                </div>
                <span className="category-icon">
                    <Icon icon={'plane'} size={'13px'}/>
                </span>
            </div>
        </div>
    )
};

export default TaskCard;
