import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" exact activeStyle={{ fontStyle: 'bold', color: 'red' }}>
                Home
            </NavLink>
            <NavLink to="/about" exact activeStyle={{ fontStyle: 'bold', color: "red" }}>
                About
            </NavLink>
        </div>
    )
}


export default Header;