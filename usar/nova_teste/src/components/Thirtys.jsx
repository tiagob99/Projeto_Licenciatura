import React from 'react';
import { Flip } from 'react-reveal';
import 'jquery-ui-dist/jquery-ui';
import * as terceiro from './Thirtyy';
import * as colors from './jscolor';



const Thirtys = () => {
    return (
        <div>
        <meta charSet="utf-8" />
        <title>Thirty</title>
        <div className="big_div">
            <div id="toggle-btn" onClick={terceiro.togglemenu}>
            <span />
            <span />
            <span />
            </div>
            <div id="sidebar">
            <ul>
                <li className="elementos_menu_direito" onClick={terceiro.togglemenu1}>Watch Types</li>
                <div id="first_menu_hidden">
                <div id="dragdiv">
                    <div className="child elementos " id="node1">
                    <svg height={70} width={200}>
                        <text x={0} y={15} />
                    </svg>
                    <span id="hour" />
                    <span id="minute" />
                    </div>
                </div>
                </div>
                <div id="remaining_01">
                <li className="elementos_menu_direito" onClick={terceiro.togglemenu2}>Colors</li>
                <div id="second_menu_hidden">
                    <p>Background Colors <input className="jscolor {onFineChange:'background_color(this)'}" defaultValue="000" /> </p>
                    <p>Digital <input className="jscolor {onFineChange:'digital_color(this)'}" defaultValue="fff" /> </p>
                    <p>Analog Hours <input className="jscolor {onFineChange:'analog_hours(this)'}" defaultValue="fff" /> </p>
                    <p>Analog Minuts <input className="jscolor {onFineChange:'analog_minutes(this)'}" defaultValue="fff" /> </p>
                    <p>Analog Seconds <input className="jscolor {onFineChange:'analog_seconds(this)'}" defaultValue="ff0000" /> </p>
                    <p>Center Dot <input className="jscolor {onFineChange:'center_circule(this)'}" defaultValue="fff" /> </p>
                </div>
                <div id="remaining_02">
                    <li className="elementos_menu_direito" onClick={terceiro.togglemenu3}>Line</li>
                    <div id="third_menu_hidden">
                    <p>Circle Bar</p> <br /> <input className="jscolor {onFineChange:'bar_color(this)'}" name="b_color" defaultValue="00acc1" /><br /><br />
                    <p>Circle Bar Active</p> <br /> <input className="jscolor {onFineChange:'bar_color1(this)'}" name="b_color" defaultValue="fff" /><br /><br />
                    <p>Circle Bar Size </p> <br /> <input id="bar_size" onChange={terceiro.bar_thickness} type="range" name="b_size" defaultValue={100} /><br /><br />
                    <p>Circle Bar Radius </p> <br /> <input id="bar_radius" onChange={terceiro.bar_radius} type="range" min={50} max={90} name="b_radius" defaultValue={100} /><br /><br />
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
                    <circle className="circle-chart__circle" id="cor_da_barra" stroke="#00acc1" strokeWidth="5.1" strokeDasharray="1.35,0.3" fill="none" cx="16.91549431" cy="16.91549431" r={15} />
                    <circle className="circle-chart__circle" id="cor_da_barra2" stroke="#fff" strokeWidth="5.1" strokeDasharray="1.35,0.3,0,1.65" fill="none" cx="16.91549431" cy="16.91549431" r={15} />
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
export default Thirtys;