import React, { Component } from 'react';
import Nav from '../ui/Nav';
import { Fade } from 'react-reveal';
import SideBar from './SideBar';

class Header extends Component {

    state = {
        showSideBar: false
    }

    showSideBar = () => {
        
        const {showSideBar} = this.state;
        this.setState({showSideBar: !showSideBar})
    }    

    render() {
        const {showSideBar} = this.state;
        return (
            <Fade top delay={500}>
                <header className="header">
                    <div className="wrapper wrapper--header" >
                    <div className="logo"></div>    
                        {/* <Link className="header__logo-link" onClick={this.forceUpdate} to="/">
                            <div className="logo"></div>
                        </Link>   */}
                                
                           
                        <Nav context="header"/>
                        <div className="header__menu" onClick={this.showSideBar}></div>
                        <SideBar showSideBar={showSideBar}/>
                    </div>            
                </header>
            </Fade>
        );
    }
}

export default Header;