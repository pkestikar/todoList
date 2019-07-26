import React, { Component } from 'react';

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
            </div>
        </div>
    )
};

export default TaskCard;
