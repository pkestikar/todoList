import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className={`top-bar`}>
            <div className="title">
                {/*<Link to={'/register'}>*/}
                    <h3>to-do list</h3>
                {/*</Link>*/}
            </div>
        </div>
    )
};

export default TopBar;
