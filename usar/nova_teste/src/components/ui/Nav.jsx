import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Nav = props => {
    const {context, history} = props;   
    const getClassName = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
    );
    
    return (
        <div className={`main-nav main-nav--${context}`}>            
            <NavLink className={getClassName("/about")} exact to="/about">About</NavLink>                        
            <NavLink className={getClassName("/discography")} exact to="/discography">Make your own</NavLink>            
            <NavLink className={getClassName("/tour")} exact to="/tour">Predefine</NavLink>            
            <NavLink className={getClassName("/shop")} exact to="/shop">Login</NavLink>            
        </div>
    );
};

export default withRouter(Nav);