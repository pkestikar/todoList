import React from 'react';
import { connect } from 'react-redux';
import Icon from 'Components/Icon';

const AddTodoModal = props => {
    return (
        <div className={'modal__add-todo'}>
            <div className="close-button">
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

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoModal);