import React from 'react';
import './Navigation.css';

import StepNav from './stepNav/StepNav';



function Navigation(props) {
    return (
        <div className="Navigation">
            <ul>
                {props.steps.map((step, index) => (
                    <StepNav
                        name={step.name}
                        id={index}
                        key={index}
                        complete={step.complete}
                        active={props.active === index}
                        onHandleActiveState={props.onHandleActiveState}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Navigation;