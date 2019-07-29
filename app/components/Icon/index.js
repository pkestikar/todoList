import React from 'react';
import ReactSVG from 'react-svg';
import classNames from 'classnames';

const Icon = props => {
    const prefix = `icon`;

    const iconClasses = classNames(
        prefix,
        props.className,
        [{
            [`${prefix}--animated`]: props.animation
        }]
    );

    const style = {
        ...props.style,
        height: props.size,
        width: props.size
    };

    // return (
    //     <ReactSVG
    //         wrapper={'span'}
    //         style={style}
    //         src={`./images/svg/${props.icon}.svg`}
    //         className={iconClasses}
    //         onClick={props.onClick}
    //     />
    // )

    return (
        <img style={style} src={`./images/svg/${props.icon}.svg`} alt=""/>
    )
};

Icon.defaultProps = {
    size: '32px'
};

export default Icon;
