import React,{ useState } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import GoogleLogin from "react-google-login";
import {GooglePicker, MyCustomButton} from "react-google-picker";
import { mail } from '../Login/Login';
import * as db from '../database';


const Nav = props => {
    const {context, history} = props;   
    const getClassName = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
    );


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
  
    const responseGoogle = response => {
      setName(response.profileObj.name);
      setEmail(response.profileObj.email);
      setUrl(response.profileObj.imageUrl);
    };
    function upd(){
        //window.location.reload(true);
        window.location.href = "/makeYourOwn";
    }
    function upd_m(){
        //window.location.reload(true);
        window.location.href = "/Predefine";
    }
            
    return (
        <div className={`main-nav main-nav--${context}`}>            
            {/* <NavLink className={getClassName("/about")} exact to="/about">About</NavLink>                         */}
            <NavLink className={getClassName("/makeYourOwn")} onClick={upd} exact to="/makeYourOwn" >Make your own</ NavLink>            
            <NavLink className={getClassName("/Predefine")} onClick = {upd_m} exact to="/predefine" >Predefine</NavLink>            
            <NavLink className={getClassName("/Login")} >
                <GoogleLogin 
                // className="dark"
                clientId="465234973180-endijv8herlk2sgucru2r0sis78t8auu.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}/>
                
            </NavLink> 
            <NavLink>{name}</NavLink>  
            <NavLink>
                
                </NavLink>          
        </div>

        

    );
};

export default withRouter(Nav);