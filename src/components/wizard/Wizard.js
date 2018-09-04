import React from 'react';
import './Wizard.css';

import Step from './step/Step';

function Wizard(props) {
    return (
        <div className="Wizard">
            {props.steps.map((step, index) => (
                <Step
                    name={step.name}
                    key={index}
                    id={index}
                    active={props.active === index}
                />
            ))}
        </div>
    );

}

export default Wizard;