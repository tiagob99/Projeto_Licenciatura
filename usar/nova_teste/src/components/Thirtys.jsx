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
                <div id="first_menu_hidden11111">
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
                <div id="remaining_11111">
                <li className="elementos_menu_direito" onClick={terceiro.togglemenu2}>Colors</li>
                <div id="second_menu_hidden">
                    <p>Background Colors <input type="color" id="myColor" defaultValue="#000000" onChange={terceiro.background_color}/> </p>
                    <p>Digital <input type="color" id="myColor1" defaultValue="#FFF8DC" onChange={terceiro.digital_color}/> </p>
                    <p>Analog Hours <input type="color" id="myColor2" defaultValue="#FFF8DC" onChange={terceiro.analog_hours}/> </p>
                    <p>Analog Minuts <input type="color" id="myColor3" defaultValue="#FFF8DC" onChange={terceiro.analog_minutes}/> </p>
                    <p>Analog Seconds <input type="color" id="myColor4" defaultValue="#FF0000" onChange={terceiro.analog_seconds}/> </p>
                    <p>Center Dot <input type="color" id="myColor5" defaultValue="#FFF8DC" onChange={terceiro.center_circule}/> </p>
                </div>
                <div id="remaining_22">
                    <li className="elementos_menu_direito" onClick={terceiro.togglemenu3}>Line</li>
                    <div id="third_menu_hidden">
                    <p>Circle Bar</p> <br /> <input type="color" id="myColor6" defaultValue="#00FFFF" onChange={terceiro.bar_color}/><br /><br />
                    <p>Circle Bar Active</p> <br /> <input type="color" id="myColor7" defaultValue="#FFF8DC" onChange={terceiro.bar_color2}/><br /><br />
                    <p>Circle Bar Size </p> <br /> <input id="bar_size" onChange={terceiro.bar_thickness} type="range" name="b_size" defaultValue={100} /><br /><br />
                    <p>Circle Bar Radius </p> <br /> <input id="bar_radius" onChange={terceiro.bar_radius} type="range" min={50} max={90} name="b_radius" defaultValue={100} /><br /><br />
                    </div>
                </div>
                <div id="remaining_33">
                    <li className="elementos_menu_direito" onClick={terceiro.togglemenu4}>Attributes</li>
                    <div id="fourth_menu_hidden">
                    <div id="testes">
                    <select id="first_variable">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Goal</option>
                      <option value="other_user">Other User</option>
                    </select>
                    <textarea style={{backgroundColor: 'rgb(225,225,225,0)', zIndex: 8, resize: 'none', textAlign: 'justify', color: 'white'}} id="second_variable" name="field5" className="tex_box" placeholder="Insert your text" rows={1} cols={18} defaultValue={""} />
                    {/* <input type="color" id="myColor9" defaultValue="#ff0080" onChange={terceiro.text_color}/> */}
                    <select id="third_variable">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Goal</option>
                      <option value="other_user">Other User</option>
                    </select>
                    <textarea style={{backgroundColor: 'rgb(225,225,225,0)', zIndex: 8, resize: 'none', textAlign: 'justify', color: 'white'}} id="fourth_variable" name="field7" className="tex_box" placeholder="Insert your text" rows={1} cols={18} defaultValue={""} />
                    <select id="fifth_variable">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Daily Goal</option>
                      <option value="other_user">Other User</option>
                    </select> 
                    <br /><br />
                    <div>Tipo de Mensagem</div>
                    <select id="mesage_type">
                      <option value="fixa">Fixa</option>
                      <option value="temporaria">Temporaria</option>
                    </select>
                    <div id="tipo_temp" >
                        <select id="mesage_time" onChange={terceiro.funct} >
                      <option value="timeframe">Timeframe</option>
                      <option value="percentagem">Percentagem</option>
                    </select>
                      <div id="tipo_timeframe">
                      <select id="timeframe"  >
                    <option value="10">10 Minutos</option>
                    <option value="20">20 Minutos</option>
                    <option value="30">30 Minutos</option>
                    <option value="40">40 Minutos</option>
                    <option value="50">50 Minutos</option>
                    <option value="60">60 Minutos</option>
                    </select>
                      </div>
                      <div id="tipo_percentagem">
                      <select id="percentagem" >
                    <option value="10">10 %</option>
                    <option value="20">20 %</option>
                    <option value="30">30 %</option>
                    <option value="40">40 %</option>
                    <option value="50">50 %</option>
                    <option value="60">60 %</option>
                    <option value="70">70 %</option>
                    <option value="80">80 %</option>
                    <option value="90">90 %</option>
                    <option value="100">100 %</option>
                    </select>
                      </div>
                      </div>
                    <br />
                    <br />
                    <input type="button" id="btAddText1" defaultValue="Add Fixed Text" className="bt" />
                    <input type="button" id="btRemoveText1" defaultValue="Remove Fixed Text" className="bt" /><br /><br />
                    </div>
                    <input type="button" id="adicionaText" defaultValue=" Open Text" className="bt" onClick={terceiro.abrir} />
                    <input type="button" id="removeText" defaultValue=" Close Text" className="bt" onClick={terceiro.fechar}/>
                      {/* <p>Text Color <input type="color" id="myColor7" defaultValue="#ff0080" onChange={simple.text_color}/> </p>  <br /><br />
                      <p>Text Size </p> <br /> <input id="text_size" onChange={simple.text_size}  type="range" min={10} max={50} name="text_si" defaultValue={15} /><br /><br /> */}
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
                {/* <li id="setimo" />
                <div id="oitavo1-1">
                <li id="oitavo" /> */}
                {/* </div> */}
              </ul> 
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