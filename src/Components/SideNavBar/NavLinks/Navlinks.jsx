import React from 'react';
import { NavLink } from 'react-router-dom';
import './LinkNav.css';

const Navlinks = ({ to, children,icon }) => {
    return (
        <NavLink to={to}>
            <div id='lag'>
                <span>{icon}</span>
                <span>{children}</span>
            </div>
        </NavLink>
    )
}

export default Navlinks
