import React from 'react';
import Button from './ui/Button';
import { Flip } from 'react-reveal';



const Mikros = () => {
    return (
        
        <div>
            
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
        <script src="http://code.jquery.com/ui/1.8.20/jquery-ui.min.js" type="text/javascript"></script>
        <script src="jscolor.js"></script>
        <script src="mikrosjs.js"></script>
        <body onload='timerTick()'>
        <div class="big_div">
        <div id="toggle-btn" onclick="togglemenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="sidebar" >
          <ul>
            <li class="elementos_menu_direito" onclick="togglemenu1()" >Watch Types</li>
            <div id="first_menu_hidden" >
              <div id="dragdiv">
                <div class="child elementos" id="node2">
                  <svg id='clock' viewBox='0 0 100 100' width='200' height='200'>
                    <g id='pointers'>
                      <line id='hour_pointer' x1='50' y1='50' x2='50' y2='27' />
                      <line id='minute_pointer' x1='50' y1='50' x2='50' y2='17' />
                      <line id='second_pointer' x1='50' y1='50' x2='50' y2='13' />
                      {/* <circle id="center_dot" style="{stroke:white; stroke-width:3px;} "cx="50" cy="50" r="1"/> */}
                    </g>
                  </svg>
                </div>
             </div>
            </div>
            <div id="remaining_01">
              <li class="elementos_menu_direito" onclick="togglemenu2()">Colors</li>
              <div id="second_menu_hidden">
                <p>Background Colors <input class="jscolor {onFineChange:'background_color(this)'}" value="000"/> </p>
                <p>Digital <input class="jscolor {onFineChange:'digital_color(this)'}" value="fff"/></p>
                <p>Analog Hours <input class="jscolor {onFineChange:'analog_hours(this)'}" value="fff"/></p>
                <p>Analog Minuts <input class="jscolor {onFineChange:'analog_minutes(this)'}" value="fff"/></p>
                <p>Analog Seconds <input class="jscolor {onFineChange:'analog_seconds(this)'}" value="FF0000"/></p>
                <p>Center Dot <input class="jscolor {onFineChange:'center_circule(this)'}" value="fff"/></p>
              </div>
              <div id="remaining_02">
                <li class="elementos_menu_direito"  onclick="togglemenu3()">Line</li>
                <div id="third_menu_hidden">
                  <p>Circle Bar 1</p> <br/> <input class="jscolor {onFineChange:'bar_color1(this)'}" name="b1_color" value="FF0000" />
                  <p>Circle Bar 2</p> <br/> <input class="jscolor {onFineChange:'bar_color2(this)'}" name="b2_color" value="00acc1" />
                  <p>Circle Bar 1 Size </p> <br/> <input id="bar_size1"  value="100" max="89" onchange="bar_thickness_1()" type="range" name="b_size" />
                  <p>Circle Bar 2 Size </p> <br/> <input id="bar_size2" value="100" max="89" onchange="bar_thickness_2()" type="range" name="b_size" />
                  <p>Circle Bar Radius </p> <br/> <input id="bar_radius" min="59" onchange="bars_radius()" type="range" name="b_radius" value="100"/>
                  <p>Circle Bar Start </p><br/> 
                  <select name="bar_star" id="bar_type" onchange="bar_type()" >
                    <option value="full">Full</option>
                    <option value="tophalf">Top Half</option>
                    <option value="bottomhalf">Bottom Half</option>
                  </select>
                  <br/>
                  <p>Circle Bar Rotation </p><br/>
                  <select name="bar_rotation" id="bar_star" onchange="update_rotation()" >
                    <option value="clockwise">Clockwise</option>
                    <option value="counterclockwise">Counterclockwise</option>
                  </select>
                  <br/>
                </div>
                <div id="remaining_03">
                  <li class="elementos_menu_direito" onclick="togglemenu4()">Attributes</li>
                  <div id="fourth_menu_hidden">
                    <div class="text">
                      <p>Message</p><br/>
                      <textarea name="field5" class="tex_box" placeholder="Insert your message" rows="15" cols="45"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div class="watch">
          <div class="center_circule">
            <p id="rect" class="center_circule" ></p>
            <div class="circule">
              {/* <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="90%" height="90%" style="position:absolute; left:50%; top: 50%; margin-left: -45%; margin-top:-45%;">
                <circle class="circle-chart__circle" id="bar1" stroke="#FF0000" stroke-width="2" stroke-dasharray="65,100"  fill="none"  cx="16.91549431" cy="16.91549431" r="16" />
                <circle class="circle-chart__circle" id="bar2" stroke="#00acc1" stroke-width="2" stroke-dasharray="30,100"  fill="none"  cx="16.91549431" cy="16.91549431" r="14" />
  
              </svg> */}
            </div>
            <div id="dropdiv" >
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
        </div>
        </div>
        </body>
        </div> 
      
    ); 
}
export default Mikros;