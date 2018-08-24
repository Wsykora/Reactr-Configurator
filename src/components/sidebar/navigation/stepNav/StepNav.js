import React from 'react';
import "./StepNav.css";

function StepNav(props) {

    let navState = "";
    if (props.complete) {
        navState = "complete";
    }
    if (props.active) {
        navState = "active";
    }
    return (


        <li
            className={navState}
            onClick={() => { props.onHandleActiveState(props.id) }}>
            {props.name}
        </li>
    );
}

export default StepNav;