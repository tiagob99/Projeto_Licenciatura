import React from 'react';
import 'jquery-ui-dist/jquery-ui';
import * as selfcomplete from './SelfCompletes';


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
                <div id="first_menu_hidden111">
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
                <div id="remaining_111">
                <li className="elementos_menu_direito" onClick={selfcomplete.togglemenu2}>Colors</li>
                <div id="second_menu_hidden">
                    <p>Background Colors <input type="color" id="myColor" defaultValue="#000000" onChange={selfcomplete.background_color}/> </p>
                    <p>Digital <input type="color" id="myColor1" defaultValue="#FFF8DC" onChange={selfcomplete.digital_color}/> </p>
                    <p>Analog Hours <input type="color" id="myColor2" defaultValue="#FFF8DC" onChange={selfcomplete.analog_hours}/> </p>
                    <p>Analog Minuts <input type="color" id="myColor3" defaultValue="#FFF8DC" onChange={selfcomplete.analog_minutes}/> </p>
                    <p>Analog Seconds <input type="color" id="myColor4" defaultValue="#FF0000" onChange={selfcomplete.analog_seconds}/> </p>
                    <p>Center Dot <input type="color" id="myColor5" defaultValue="#FFF8DC" onChange={selfcomplete.center_circule}/> </p>
                </div>
                <div id="remaining_02">
                    <li className="elementos_menu_direito" onClick={selfcomplete.togglemenu3}>Line</li>
                    <div id="third_menu_hidden">
                    <p>Your Circle Bar </p> <br /> <input type="color" id="myColor6" defaultValue="#00FFFF" onChange={selfcomplete.line_color_today}/><br /><br />
                    <p>Circle Bar Size </p> <br /> <input id="bar_thickness_today" onChange={selfcomplete.bar_thickness_today} type="range" max={90} name="b_size" /><br /><br />
                    <p>Circle Bar Radius </p> <br /> <input id="bar_radius_today" onChange={selfcomplete.bar_radius_today} type="range" name="b_radius" defaultValue={100} min="25" /><br /><br />
                    <p>Second Circle Bar</p><br />
                    <select name="second_bar_value" id='second_bar_value' onChange={selfcomplete.second_bar_value}>
                        <option value="yesterday">Yesterday</option>
                        <option value="another_ser">Another User</option>
                    </select>
                    <br /><br />
                    <p>Second Circle Color </p> <br /> <input type="color" id="myColor7" defaultValue="#FF0000" onChange={selfcomplete.line_color_yesterday}/><br /><br />
                    <p>Circle Bar Size </p> <br /> <input id="bar_thickness_yesterday" onChange={selfcomplete.bar_thickness_yesterday} type="range" max={90} name="b_size" /><br /><br />
                    <p>Circle Bar Radius </p> <br /> <input id="bar_radius_yesterday" onChange={selfcomplete.bar_radius_yesterday} type="range" name="b_radius" defaultValue={100} min="25"/><br /><br />
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
                    </div>
                    <div id="remaining_03">
                    <li className="elementos_menu_direito" onClick={selfcomplete.togglemenu4}>Attributes</li>
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
                        <select id="mesage_time" onChange={selfcomplete.funct} >
                      <option value="timeframe">Timeframe</option>
                      <option value="percentagem">Percentagem</option>
                    </select>
                      <div id="tipo_timeframe">
                      <select id="timeframe" onChange={selfcomplete.troca} >
                    <option value="10">10 Minutos</option>
                    <option value="20">20 Minutos</option>
                    <option value="30">30 Minutos</option>
                    <option value="40">40 Minutos</option>
                    <option value="50">50 Minutos</option>
                    <option value="60">60 Minutos</option>
                    </select>
                      </div>
                      <div id="tipo_percentagem">
                      <select id="percentagem"  onChange={selfcomplete.troca2}>
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
                    <input type="button" id="btAddText" defaultValue="Add Fixed Text" className="bt" />
                    <input type="button" id="btRemoveText" defaultValue="Remove Fixed Text" className="bt" /><br /><br />
                        </div>
                        <input type="button" id="adicionaText" defaultValue=" Open Text" className="bt" onClick={selfcomplete.abrir} />
                        <input type="button" id="removeText" defaultValue=" Close Text" className="bt" onClick={selfcomplete.fechar}/>
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
                    <circle className="circle-chart__circle" id="yesterday_bar" stroke="#FF0000" strokeWidth={1} strokeDasharray="65,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r={16} />
                    <circle className="circle-chart__circle" id="today_bar" stroke="#00acc1" strokeWidth={1} strokeDasharray="18,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r={16} />
                </svg>
                </div>
                <div id="dragdiv" style={{zIndex: 2}}>
              <ul id="allItems">
                <li id="primeiro" />
                <li id="segundo" />
                <li id="terceiro" />
                <li id="quarto" />
                <li id="quinto" />
              </ul>
            </div>
            <div id="dropdiv" style={{zIndex: 2}}>
              <ul id="Ul1">
                <li id="setimo" />
                <div id="oitavo1-1">
                <li id="oitavo" />
                </div>
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
            <input type="button" onClick={selfcomplete.cod} id="alerta" value="codigo" className="cod" />
            {/* <p id= "codee"></p> */}
        </div>
        </div>

); 
}
export default SelfComplete;
