import React from 'react';
import "./Wizard.css";

import Step from './step/Step';

function Wizard(props) {

    return (
        <div className="Wizard">
            <h4>Wizard</h4>
            <Step />
        </div>
    );

}

export default Wizard;