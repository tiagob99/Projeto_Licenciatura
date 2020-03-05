import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Nav = props => {
    const {context, history} = props;   
    const getClassName = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
    );
    
    return (
        <div className={`main-nav main-nav--${context}`}>            
            {/* <NavLink className={getClassName("/about")} exact to="/about">About</NavLink>                         */}
            <NavLink className={getClassName("/makeYourOwn")} exact to="/makeYourOwn">Make your own</NavLink>            
            <NavLink className={getClassName("/Predefine")} exact to="/predefine">Predefine</NavLink>            
            <NavLink className={getClassName("/Login")} exact to="/Login">Login</NavLink>            
        </div>
    );
};

export default withRouter(Nav);