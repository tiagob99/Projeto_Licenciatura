import React from 'react';
import { Flip } from 'react-reveal';
import 'jquery-ui-dist/jquery-ui';
import * as selfcomplete from './SelfCompletes';
import * as colors from './jscolor';


const SelfComplete =() =>{
    return (

        <div>
        <meta charSet="utf-8" />
        <title>Self Complete</title>
        <div className="big_div">
            <div id="toggle-btn" onClick={selfcomplete.togglemenu}>
            <span />
            <span />
            <span />
            </div>
            <div id="sidebar">
            <ul>
                <li className="elementos_menu_direito" onClick={selfcomplete.togglemenu1}>Watch Types</li>
                <div id="first_menu_hidden">
                <div id="dragdiv">
                    <div className="child elementos " id="node1">
                    <svg height={70} width={200}>
                        <text x={0} y={15} />
                    </svg>
                    <span id="hour" />
                    <span id="minute" />
                    <span id="second" />
                    </div>
                </div>
                </div>
                <div id="remaining_01">
                <li className="elementos_menu_direito" onClick={selfcomplete.togglemenu2}>Colors</li>
                <div id="second_menu_hidden">
                    <p>Background Colors <input className="jscolor {onFineChange:'background_color(this)'}" defaultValue="000" /> </p>
                    <p>Digital <input className="jscolor {onFineChange:'digital_color(this)'}" defaultValue="fff" /> </p>
                    <p>Analog Hours <input className="jscolor {onFineChange:'analog_hours(this)'}" defaultValue="fff" /> </p>
                    <p>Analog Minuts <input className="jscolor {onFineChange:'analog_minutes(this)'}" defaultValue="fff" /> </p>
                    <p>Analog Seconds <input className="jscolor {onFineChange:'analog_seconds(this)'}" defaultValue="ff0000" /> </p>
                    <p>Center Dot <input className="jscolor {onFineChange:'center_circule(this)'}" defaultValue="fff" /> </p>
                </div>
                <div id="remaining_02">
                    <li className="elementos_menu_direito" onClick={selfcomplete.togglemenu3}>Line</li>
                    <div id="third_menu_hidden">
                    <p>Your Circle Bar </p> <br /> <input className="jscolor {onFineChange:'line_color_today(this)'}" name="b_color" defaultValue="00acc1" /><br /><br />
                    <p>Circle Bar Size </p> <br /> <input id="bar_thickness_today" onChange={selfcomplete.bar_thickness_today} type="range" max={90} name="b_size" /><br /><br />
                    <p>Circle Bar Radius </p> <br /> <input id="bar_radius_today" onChange={selfcomplete.bar_radius_today} type="range" name="b_radius" defaultValue={100} /><br /><br />
                    <p>Second Circle Bar</p><br />
                    <select name="second_bar_value">
                        <option value="yesterday">Yesterday</option>
                        <option value="another_ser">Another User</option>
                    </select>
                    <br /><br />
                    <p>Second Circle Color </p> <br /> <input className="jscolor {onFineChange:'line_color_yesterday(this)'}" name="b_color" defaultValue="FF0000" /><br /><br />
                    <p>Circle Bar Size </p> <br /> <input id="bar_thickness_yesterday" onChange={selfcomplete.bar_thickness_yesterday} type="range" max={90} name="b_size" /><br /><br />
                    <p>Circle Bar Radius </p> <br /> <input id="bar_radius_yesterday" onChange={selfcomplete.bar_radius_yesterday} type="range" name="b_radius" defaultValue={100} /><br /><br />
                    <p>Circle Bar Start </p> <br />
                    <select name="bar_star" id="bar_type" onChange={selfcomplete.bar_type}>
                        <option value="full">Full</option>
                        <option value="tophalf">Top Half</option>
                        <option value="bottomhalf">Bottom Half</option>
                    </select>
                    <br /><br />
                    <p>Circle Bar Rotation </p> <br />
                    <select name="bar_rotation" id="bar_star" onChange={selfcomplete.update_rotation}>
                        <option value="clockwise">Clockwise</option>
                        <option value="counterclockwise">Counterclockwise</option>
                    </select>
                    <br /><br />
                    </div>
                    <div id="remaining_03">
                    <li className="elementos_menu_direito" onClick={selfcomplete.togglemenu4}>Attributes</li>
                    <div id="fourth_menu_hidden">
                        <p>Text Color <input name="text_color" className="jscolor {onFineChange:'text_color(this)'}" defaultValue="fff" /> </p>  <br /><br />
                        <p>Text Size </p> <br /> <input id="text_size" onChange={selfcomplete.text_size} type="range" min={0} max={30} name="text_si" defaultValue={16} /><br /><br />
                        <button type="button" onclick="readropzone()" name="button">Le Relogio</button>
                    </div>
                    </div>
                </div>
                </div>
            </ul>
            </div>
            <div className="watch">
            <div className="text">
                <p id="texto">teste</p>
            </div>
            <div className="center_circule">
                <p id="rect" className="center_circule" />
                <div className="circule">
                <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="90%" height="90%" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-45%', marginTop: '-45%'}}>
                    <circle className="circle-chart__circle" id="yesterday_bar" stroke="#FF0000" strokeWidth={1} strokeDasharray="65,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r={16} />
                    <circle className="circle-chart__circle" id="today_bar" stroke="#00acc1" strokeWidth={1} strokeDasharray="18,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r={16} />
                </svg>
                </div>
                <div id="dropdiv">
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
            </div>
        </div>
        </div>

); 
}
export default SelfComplete;
