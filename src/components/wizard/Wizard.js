import React from 'react';
import "./Wizard.css";

import Step from './step/Step';

function Wizard(props) {
    let active;

    const steps = props.steps.map((step, index) => {
        if (props.active === index) {
            active = true;
        } else {
            active = false;
        }
        return (
            <Step
                name={step.name}
                key={index}
                id={index}
                active={active}
            />
        );
    });

    return (
        <div className="Wizard">
            {steps}
        </div>
    );

}

export default Wizard;