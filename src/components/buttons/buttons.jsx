import React from 'react'
import {NavLink} from 'react-router-dom'
import './buttons.css';

const Buttons = (props) => {
    return (
        <div className="buttonContainer">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/getappointments">Get Appointents</NavLink>
            <NavLink to="/getmyappointments">Get My Appointents</NavLink>
            <NavLink to="/deleteappointment">Delete Appoinment</NavLink>
            {props.user ?
                <>
                    <span class="logoutText">User:{localStorage.getItem('email')}</span>
                    <NavLink to="/logout">Logout</NavLink>
                </> :
                <>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </>
                }
        </div>
    )
}
export default Buttons;