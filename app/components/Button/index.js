import React from 'react';
import classNames from 'classnames';

const Button = props => {

    const btnClasses = classNames(
        'button__base',
        [{
            [props.disabled]: props.disabled,
            [props.customClassName]: props.customClassName
        }]
    );

    return (
        <button className={btnClasses} onClick={props.onClick}>{props.children}</button>
    )
};

export default Button;