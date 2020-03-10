import React from 'react';
import { Flip } from 'react-reveal';
import 'jquery-ui-dist/jquery-ui';
import * as micro from './mikrosjs';
import * as color from'./jscolor';

const Mikros = () => {
       
    return (
        
      <div>
        
      <meta charSet="utf-8" />
      <title>Mikro</title>
      <div className="big_div">
        <div id="toggle-btn" onClick={micro.togglemenu}>
          <span />
          <span />
          <span />
        </div>
        <div id="sidebar">
          <ul>
            <li className="elementos_menu_direito" onClick={micro.togglemenu1}>Watch Types</li>
            <div id="first_menu_hidden">
              <div id="dragdiv">
                <div className="child elementos" id="node2">
                  <svg id="clock" viewBox="0 0 100 100" width={200} height={200}>
                    <g id="pointers">
                      <line id="hour_pointer" x1={50} y1={50} x2={50} y2={27} />
                      <line id="minute_pointer" x1={50} y1={50} x2={50} y2={17} />
                      <line id="second_pointer" x1={50} y1={50} x2={50} y2={13} />
                      <circle id="center_dot" style={{stroke: 'white', strokeWidth: '3px'}} cx={50} cy={50} r={1} />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div id="remaining_01">
              <li className="elementos_menu_direito" onClick={micro.togglemenu2}>Colors</li>
              <div id="second_menu_hidden">
                <p>Background Colors <input className="jscolor {onFineChange:{micro.background_color(this)}}" defaultValue="000" /> </p>
                <p>Digital <input className="jscolor {onFineChange:'this.micro.digital_color(this)'}" defaultValue="fff" /> </p>
                <p>Analog Hours <input className="jscolor {color.onFineChange:{color.analog_hours(this)}}" defaultValue="fff" /> </p>
                <p>Analog Minuts <input className="jscolor {micro.onFineChange:{color.analog_minutes(this}}" defaultValue="fff" /> </p>
                <p>Analog Seconds <input className="jscolor {color.onFineChange:{color.analog_seconds(this}}" defaultValue="FF0000" /> </p>
                <p>Center Dot <input className="jscolor {color.onFineChange:{color.center_circule(this)}}" defaultValue="fff" /> </p>
              </div>
              <div id="remaining_02">
                <li className="elementos_menu_direito" onClick={micro.togglemenu3}>Line</li>
                <div id="third_menu_hidden">
                  <p>Circle Bar 1</p> <br /> <input className="jscolor {color.onFineChange:{color.bar_color1(this)}}" name="b1_color" defaultValue="FF0000" /><br /><br />
                  <p>Circle Bar 2</p> <br /> <input className="jscolor {color.onFineChange:{color.bar_color2(this)}}"name="b2_color" defaultValue="00acc1" /><br /><br />
                  <p>Circle Bar 1 Size </p><br /> <input id="bar_size1" defaultValue={100} max={89} onChange={micro.bar_thickness_1} type="range" name="b_size" /><br /><br />
                  <p>Circle Bar 2 Size </p> <br /> <input id="bar_size2" defaultValue={100} max={89} onChange={micro.bar_thickness_2} type="range" name="b_size" /><br /><br />
                  <p>Circle Bar Radius </p> <br /> <input id="bar_radius" min={59} onChange={micro.bars_radius} type="range" name="b_radius" defaultValue={100} /><br /><br />
                  <p>Circle Bar Start </p> <br />
                  <select name="bar_star" id="bar_type" onChange={micro.bar_type}>
                    <option value="full">Full</option>
                    <option value="tophalf">Top Half</option>
                    <option value="bottomhalf">Bottom Half</option>
                  </select>
                  <br /><br />
                  <p>Circle Bar Rotation </p> <br />
                  <select name="bar_rotation" id="bar_star" onChange={micro.update_rotation}>
                    <option value="clockwise">Clockwise</option>
                    <option value="counterclockwise">Counterclockwise</option>
                  </select>
                  <br /><br />
                </div>
                <div id="remaining_03">
                  <li className="elementos_menu_direito" onClick={micro.togglemenu4}>Attributes</li>
                  <div id="fourth_menu_hidden">
                    <div className="text">
                      <p>Message</p><br />
                      <textarea name="field5" className="tex_box" placeholder="Insert your message" rows={15} cols={45} defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
        <div className="watch">
          <div className="center_circule">
            <p id="rect" className="center_circule" />
            <div className="circule">
              <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="90%" height="90%" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-45%', marginTop: '-45%'}}>
                <circle className="circle-chart__circle" id="bar1" stroke="#FF0000" strokeWidth={2} strokeDasharray="65,100" fill="none" cx="16.91549431" cy="16.91549431" r={16} />
                <circle className="circle-chart__circle" id="bar2" stroke="#00acc1" strokeWidth={2} strokeDasharray="30,100" fill="none" cx="16.91549431" cy="16.91549431" r={14} />
              </svg>
            </div>
            <div id="dropdiv">
              <div className="child elementos " id="node1">
                <svg height={0} width={200}>
                  <text x={0} y={15} />
                </svg>
                <span id="hour" />
                <span id="minute" />
                <span id="second" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    ); 
}
export default Mikros;