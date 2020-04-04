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
        
        <a href="./Gardens">
          <div class="first">
            <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Gardens</p>
                </div>
              </div>
            </div>
          </div>
       </a>


        <a href="./Mikros">
        <div class="second">
          <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Mikros</p>
                </div>
              </div>
            </div>
          </div>
        </a>



        <a href="./SelfComplete">
        <div class="third">
            <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Self-Complete</p>
                </div>
              </div>
            </div>
          </div>
        </a>
         

        <a href="./Simple_goals">
        <div class="fourth">
           <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Simple-Goals</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        



        <a href="./Thirtys">
        <div class="fifth">
          <div className="cards-list">
              <div className="card 4">
                <div className="card_image">
                  <img src="https://img2.bgxcdn.com/thumb/large/oaupload/banggood/images/B5/4C/768f5cf6-7d17-4b85-8244-580e06e059dd.gif" />
                </div>
                <div className="card_title title-black">
                  <p>Thirtys</p>
                </div>
              </div>
            </div>
          </div>
        </a>

          
    </div>
    </div> 
   );
};

export default predefine;