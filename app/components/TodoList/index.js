import React, { Component } from 'react';
import TodoPad from 'Components/TodoPad';

class TodoList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const classname = `todo__main`;

        return (
            <div className={classname} style={{background: "url('./images/building.jpg')"}}>
                <div className="content-wrapper">
                    <TodoPad/>
                </div>
            </div>
        )
    }
}

export default TodoList;
