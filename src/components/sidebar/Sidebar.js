import React from 'react';
import "./Sidebar.css";

import Logo from './logo/Logo';
import Navigation from './navigation/Navigation';

function Sidebar(props) {

    return (
        <div className="Sidebar">
            <Logo />
            <Navigation
                active={props.active}
                steps={props.steps}
                onHandleActiveState={props.onHandleActiveState}
            />
        </div>
    );

}

export default Sidebar;