import React from 'react'
import {NavLink} from 'react-router-dom'
import './buttons.css';

export default class Buttons extends React.Component {
    render() {
        return (
        <div className="buttonContainer">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/getappointments">Get Appointents</NavLink>
        </div>
        )
    }
}
