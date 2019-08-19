import React, { Component } from 'react';
import Icon from 'Components/Icon';
import { connect } from 'react-redux';
import { addItem } from "Actions/addItem";

const AddItemButton = props => {
    const handleClick = () => {
        props.addItem({'title': 'a first todo insert in redux'})
        console.log('currentState:');
        console.log(props.currentState);
    };

    return (
        <div className="add-item-container" onClick={handleClick}>
            <Icon icon={'add'}/>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        currentState: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: (itemData) => dispatch(addItem(itemData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemButton);
