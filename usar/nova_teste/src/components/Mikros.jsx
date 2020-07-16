import React from 'react';
import 'jquery-ui-dist/jquery-ui';
import './mikrosjs';
import * as micro from './mikrosjs';

const Mikros = () => {
       
    return (
        
      <div >
        
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
            <div id="first_menu_hidden11">
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
            <div id="remaining_11">
              <li className="elementos_menu_direito" onClick={micro.togglemenu2}>Colors</li>
              <div id="second_menu_hidden">
                <p>Background Colors  <input type="color" id="myColor" defaultValue="#000000" onChange={micro.background_color}/> </p>
                <p>Digital <input type="color" id="myColor1" defaultValue="#FFF8DC" onChange={micro.digital_color}/> </p>
                <p>Analog Hours  <input type="color" id="myColor2" defaultValue="#FFF8DC" onChange={micro.analog_hours}/> </p>
                <p>Analog Minuts <input type="color" id="myColor3" defaultValue="#FFF8DC" onChange={micro.analog_minutes}/> </p>
                <p>Analog Seconds <input type="color" id="myColor4" defaultValue="#FF0000" onChange={micro.analog_seconds}/> </p>
                <p>Center Dot <input type="color" id="myColor5" defaultValue="#FFF8DC" onChange={micro.center_circule}/></p>
                </div>
              <div id="remaining_02">
                <li className="elementos_menu_direito" onClick={micro.togglemenu3}>Line</li>
                <div id="third_menu_hidden">
                  <p>Circle Bar 1</p> <br /> <input type="color" id="myColor6" defaultValue="#FF0000" onChange={micro.bar_color1}/> <br /><br />
                  <p>Circle Bar 2</p> <br /> <input type="color" id="myColor7" defaultValue="#00FFFF" onChange={micro.bar_color2}/> <br /><br />
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
                </div>
                <div id="remaining_09">
                  <li id="lastelemente" className="elementos_menu_direito" onClick={micro.togglemenu4}>Attributes</li>
                  <div id="fourth_menu_hidden">
                  <div id="testesmicro">
                     
                    <input type="text" id="valor" placeholder="Insira a sua mensagem.." />
                    <div id="position-botao">
                    <input type="submit" onClick={micro.cap} value="Add message"/>
                    <input type="submit"  onClick={micro.remo} value="Remove message"/>
                    </div>
                    <div id="position">
                    <p>Text Size/Color</p>
                    <input id="text_size" onChange={() => micro.text_size()} type="range" min="15" max="25" name="text_si" defaultValue="16"/>
                    <input type="color" id="myColor8" defaultValue="#FFF8DC" onChange={micro.text_color}/>
                    </div>
                   
                    </div>
                    <input type="button" id="adicionaText" defaultValue=" Open Text" className="bt" onClick={micro.abrir} />
                    <input type="button" id="removeText" defaultValue=" Close Text" className="bt" onClick={micro.fechar}/>
                  </div>
                </div>
            </div>
          </ul>
        </div>
        <div className="watch">
          <div className="center_circule">
          <div class="centro">
                      <p id="valorescrito"></p>
                    </div>
            <p id="rect" className="center_circule" />
            <div className="circule">
              <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="90%" height="90%" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-45%', marginTop: '-45%'}}>
                <circle className="circle-chart__circle" id="bar1" stroke="#FF0000" strokeWidth={2} strokeDasharray="65,100" fill="none" cx="16.91549431" cy="16.91549431" r={16} />
                <circle className="circle-chart__circle" id="bar2" stroke="#00acc1" strokeWidth={2} strokeDasharray="30,100" fill="none" cx="16.91549431" cy="16.91549431" r={14} />
              </svg>
            </div>
            <svg id="bardraw" className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="530px" height="530px" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-265px', marginTop: '-265px'}}>
            </svg>
            <div id="dragdiv" style={{zIndex: 2}}>
              <ul id="allItems">
                <li id="primeiro" />
                <li id="segundo" />
                <li id="terceiro" />
                <li id="quarto" />
                <li id="quinto" />
                <li id="sexto" />
              </ul>
            </div>
            <div id="dropdiv" style={{zIndex: 2}}>
              <ul id="Ul1">
                <li id="setimo" />
                <li id="oitavo" />
              </ul>
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
        <input type="button" onClick={micro.cod} id="alerta" value="codigo" className="cod" />
        {/* <p id= "codee"></p> */}
      </div>
    </div>
    
    ); 
}
export default Mikros;