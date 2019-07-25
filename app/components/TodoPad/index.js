import React, { Component } from 'react';
import TopBar from 'Components/TopBar';

const TodoPad = (props) => {
    return (
        <div className="todo-pad">
            <div className="todo-pad-content">
                <TopBar/>
                <div className="todo-wrapper">
                    <div className="message">
                        <p>
                            Hello {'<user>'}, <br/>
                            welcome back. <br/>
                            You have {'<count>'} <br/>
                            remaining tasks <br/>
                            to complete <br/>
                            this week. <br/>
                        </p>
                    </div>
                    <div className="the-list">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default TodoPad;
