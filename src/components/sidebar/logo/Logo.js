import React, { Component } from 'react';
import "./Logo.css";
import logo from "./logo.png";

class Logo extends Component {

    render() {
        return (
            <div className="Logo">
                <img src={logo} alt="React'r logo" />
            </div>
        );
    }
}

export default Logo;