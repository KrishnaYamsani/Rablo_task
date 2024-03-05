import React from "react";
import { NavLink } from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink to='/' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/employees' className="nav-link">Employees</NavLink>
                </li>
            </ul>    
        </nav>
    )
}

export default Header;