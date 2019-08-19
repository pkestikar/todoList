import React, { Component } from 'react';
import TopBar from 'Components/TopBar';
import TaskCard from 'Components/TaskCard';
import AddItemButton from 'Components/AddItemButton';
import { connect } from 'react-redux';

const TodoPad = (props) => {
    return (
        <div className="todo-pad">
            <div className="todo-pad-content">
                <TopBar/>
                <AddItemButton/>
                <div className="todo-wrapper">
                    <div className="message">
                        <p>
                            Hello there!, <br/>
                            welcome back. <br/>
                            You have {props.todoList.length} <br/>
                            remaining tasks <br/>
                            to complete <br/>
                            this week. <br/>
                        </p>
                    </div>
                    <div className="the-list">
                        {props.todoList.map(todo => {
                            return (
                                <TaskCard
                                    taskText={todo.title}
                                    category={'home'}
                                    key={`${Math.random() * 1000}`}
                                />
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPad);
