import React,{ useState } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import * as db from '../database';


const Nav = props => {
    const {context, history} = props;   
    const getClassName = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
    );


    
    function upd(){
        window.location.href = "/makeYourOwn";
    }
    function upd_m(){
        window.location.href = "/Predefine";
    }
            
    return (
        <div className={`main-nav main-nav--${context}`}>            
            <NavLink className={getClassName("/makeYourOwn")} onClick={upd} exact to="/makeYourOwn" >Make your own</ NavLink>            
            <NavLink className={getClassName("/Predefine")} onClick = {upd_m} exact to="/predefine" >Predefine</NavLink>
            <NavLink className={getClassName("/Data")} exact to="/Data" >Data</NavLink>
            <NavLink className={getClassName("/Logout")} onClick = {db.logout}>Logout</NavLink>    
             
            <NavLink>
                
                </NavLink>          
        </div>

        

    );
};

export default withRouter(Nav);