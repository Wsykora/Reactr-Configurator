import React from 'react';
import "./Navigation.css";

import StepNav from './stepNav/StepNav';



function Navigation(props) {

    let active;
    const stepNavs = props.steps.map((step, index) => {
        if (props.active === index) {
            active = true;
        } else {
            active = false;
        }
        return (
            <StepNav
                name={step.name}
                id={index}
                key={index}
                complete={step.complete}
                active={active}
                onHandleActiveState={props.onHandleActiveState}
            />
        );
    });
    return (
        <div className="Navigation">
            <ul>
                {stepNavs}
            </ul>
        </div>
    );
}

export default Navigation;