import React from 'react';
import Button from './ui/Button';
import { Flip } from 'react-reveal';
//import './Garden';
import './jscolor';
import { Component } from 'react';



const Gardens = () => {
    return (

      <div> 
      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
      <script src="http://code.jquery.com/ui/1.8.20/jquery-ui.min.js" type="text/javascript"></script>
      <script src="jscolor.js"></script>
      <script src="Garden.js"></script>
    
    <body  onload='timerTick()'>
      <div class="big_div">
        <div id="toggle-btn" onclick="togglemenu()">
          <span></span>
          <span></span>
          {/* <span></span> */}
        </div>
        <div id="sidebar" >
          <ul>
            <li class="elementos_menu_direito" onclick="togglemenu1()" >Watch Types</li>
            <div id="first_menu_hidden" >
              <div id="dragdiv">
                  <div class="child elementos "id="node1" >
                    <svg height="70" width="200">
                      <text x="0" y="15" ></text>
                    </svg>
                    <span id="hour"></span>
                    <span id="minute"></span>
                    <span id="second"></span>
                  </div>
  
             </div>
            </div>
            <div id="remaining_01">
              <li class="elementos_menu_direito" onclick="togglemenu2()">Colors</li>
              <div id="second_menu_hidden">
                <p>Background Colors <input class="jscolor {onFineChange:'background_color(this)'}" value="000"/> </p>
                <p>Digital <input class="jscolor {onFineChange:'digital_color(this)'}" value="fff"/> </p>
                <p>Analog Hours <input class="jscolor {onFineChange:'analog_hours(this)'}" value="fff"/> </p>
                <p>Analog Minuts <input class="jscolor {onFineChange:'analog_minutes(this)'}" value="fff"/> </p>
                <p>Analog Seconds <input class="jscolor {onFineChange:'analog_seconds(this)'}" value="ff0000"/> </p>
                <p>Center Dot <input class="jscolor {onFineChange:'center_circule(this)'}" value="fff"/> </p>
              </div>
  
            </div>
          </ul>
        </div>
        <div class="watch">
  
          <div class="center_circule">
            <p id="rect" class="center_circule" ></p>
  
            <div id="dropdiv" >
              <div class="child elementos" id="node2">
                <svg id='clock' viewBox='0 0 100 100' width='200' height='200'>
                  <g id='pointers'>
                    <line id='hour_pointer' x1='50' y1='50' x2='50' y2='27' />
                    <line id='minute_pointer' x1='50' y1='50' x2='50' y2='17' />
                    <line id='second_pointer' x1='50' y1='50' x2='50' y2='13' />
                    {/* <circle id="center_dot" style="stroke:white; stroke-width:3px; "cx="50" cy="50" r="1"/> */}
                  </g>
                </svg>
              </div>
            </div>
  
          </div>
        </div>
  
      </div>
    </body>
    </div>

  ); 
}
export default Gardens;