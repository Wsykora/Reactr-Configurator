import React from 'react';
import './Step.css';

function Step(props) {

    let stepClass = props.active ? 'step step-active' : 'step step-deactive'
    return (
        <div className={stepClass}>
            <h3>{props.name}</h3>
            <p>
                Checking for <b>node.js...</b>
            </p>
        </div>
    );

}

export default Step;