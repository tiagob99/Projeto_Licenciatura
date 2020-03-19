// import React from 'react';
import React, {Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './components/home/Home';
import './main.scss';
// import makeYourOwn from './components/MakeYourOwn';
// import predefine from './components/Predefine';
// import Gardens from './components/Gardens';    
// import Mikros from './components/Mikros';
import Login from './components/Login/Login';
import Footer from './components/header-footer/Footer';
import Header from './components/header-footer/Header';
// import SelfComplete from './components/SelfComplete';


const garden = lazy(() => import ('./components/Gardens')); 
const mikros = lazy(() => import ('./components/Mikros'));
const self   = lazy(()  => import('./components/SelfComplete'))
const simple = lazy(() => import ('./components/Simple_goals'));
const terceiro =lazy(() => import ('./components/Thirtys'));
const home = lazy(() => import ('./components/home/Home')); 
const myo = lazy(() => import ('./components/MakeYourOwn')); 
const predefine = lazy(() => import ('./components/Predefine')); 






const Routes = () => (
    <BrowserRouter>
        <div> 
            <Suspense fallback={<div>Loading...</div>}>           
            <Route path="/" render={ props => (props.location.pathname !== '/') && <Header/> }/>
            <Route exact path="/" component={home}/>
            <Route exact path="/MakeYourOwn" component={myo}/>
            <Route exact path="/Predefine" component={predefine}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/Gardens" component={garden}/>
            <Route exact path="/Mikros" component={mikros}/> 
            <Route exact path="/SelfComplete" component ={self}/>
            <Route exact path="/Simple_goals" component={simple}/>  
            <Route exact path="/Thirtys" component={terceiro}/>
            <Footer/>
            </Suspense>  
        </div>
    </BrowserRouter>
    
)

ReactDOM.render(<Routes/>, document.getElementById('root'));