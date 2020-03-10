import React, { lazy } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/home/Home';
import './main.scss';
import makeYourOwn from './components/MakeYourOwn';
import predefine from './components/Predefine';
import Gardens from './components/Gardens';    
// import Mikros from './components/Mikros';
import Login from './components/Login/Login';
import Footer from './components/header-footer/Footer';
import Header from './components/header-footer/Header';

const m = lazy(() => import('./components/Mikros'));

const Routes = () => (
    <BrowserRouter>
        <div>            
            <Route path="/" render={ props => (props.location.pathname !== '/') && <Header/> }/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/MakeYourOwn" component={makeYourOwn}/>
            <Route exact path="/Predefine" component={predefine}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Gardens" component={Gardens}/>
            <Route exact path="/Mikros" component={m}/>
            <Footer/>            
        </div>
    </BrowserRouter>
)

ReactDOM.render(<Routes/>, document.getElementById('root'));