import React from 'react';
import { tour } from '../data/tour';
import Button from './ui/Button';
import { Flip } from 'react-reveal';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom';



const predefine = () => {
    return (
        // <div className="wrapper">
        //     <div className="tour">
        //         {tour.map((tourItem, i) => {   
        //             const {day, month, location} = tourItem;
        //             return (
        //                 <Flip delay={i*80} right key={i}>
        //                     <div className="tour__item">
        //                         <div className="tour__date">
        //                             <div className="tour__day">{day}</div>
        //                             <div className="tour__month">{month}</div>
        //                         </div>
        //                         <div className="tour__details">
        //                             <div className="tour__location">{location}</div>
        //                             <Button text="Customise"/>
        //                         </div>
        //                     </div>
        //                 </Flip>      
        //             )
        //         })}
        //     </div>            
        // </div>


    <div class="geral_prefefine">
      <div class="margem">
        <div class="first">
          <a href="./Gardens"><img class="download" width= "200px" height="50px" src="image/download.png" alt=""></img></a>
        </div>
        <div class="second">
          
          <a href="./Mikros"><img class="download" width= "200px" height="50px" src="image/download.png" alt=""></img></a>
        </div>
        <div class="third">
          <a href="customise/Self_compete.html"><img class="download" width= "200px" height="50px" src="image/download.png" alt=""></img></a>
        </div>
        <div class="fourth">
          <a href="customise/Simple_goal.html"><img class="download" width= "200px" height="50px"src="image/download.png" alt=""></img></a>
        </div>
        <div class="fifth">
          <a href="customise/Thirty.html"><img class="download" width= "200px" height="50px" src="image/download.png" alt=""></img></a>
        </div>
      </div>
    </div>
    );
};

export default predefine;