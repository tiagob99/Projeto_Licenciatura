import React from 'react';
import Album from './Album';
import { albums } from '../data/albums';
import * as make from'./makeyo';
import './makeyo';
import { bar_type } from './mikrosjs';


const MakeYourOwn = () => {
    return (
      <div>
      <meta charSet="utf-8" />
      <title>Make your own</title>
      <div className="big_div">
        <div id="toggle-btn" onClick={make.togglemenu}>
          <span />
          <span />
          <span />
        </div>
        <div id="sidebar">
          <ul>
            <li className="elementos_menu_direito" onClick={make.togglemenu1}>Watch Types</li>
            <div id="first_menu_hidden">
              <label className="labl">
                <input onChange={make.updatewhatch} type="radio" name="whatch_type" id="digital" defaultChecked="checked" />
                <div className="child elementos " id="node1">
                  <svg height={70} width={200}>
                    <text x={0} y={15} />
                  </svg>
                  <span id="hour" />
                  <span id="minute" />
                </div>
              </label>
              <label className="labl">
                <input onChange={make.updatewhatch} type="radio" name="whatch_type" id="analog" />
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
              </label>
            </div>
            <div id="remaining_01">
              <li className="elementos_menu_direito" onClick={make.togglemenu2}>Watch Colors</li>
              <div id="second_menu_hidden">
                <p>Background Colors <input className="jscolor {onFineChange:'backgroundcolor(this)'}" defaultValue="000" /> </p> <br />
                <p>Digital <input className="jscolor {onFineChange:'digitalcolor(this)'}" defaultValue="fff" /> </p><br />
                <p>Analog Hours <input className="jscolor {onFineChange:'updateAnalogHours(this)'}" defaultValue="fff" /> </p><br />
                <p>Analog Minuts <input className="jscolor {onFineChange:'updateAnalogMinutes(this)'}" defaultValue="fff" /> </p><br />
                <p>Analog Seconds <input className="jscolor {onFineChange:'updateAnalogSeconds(this)'}" defaultValue="ff0000" /> </p><br />
                <p>Center Dot <input className="jscolor {onFineChange:'centercricule(this)'}" defaultValue="fff" /> </p><br /><br />
              </div>
              <div id="remaining_02">
              <div id="linha" defaultValue = "1">
                <li className="elementos_menu_direito" onClick={make.togglemenu3}>Line</li>
                <div id="third_menu_hidden">
                  <div id="main" style={{height: '70px', width: '100%'}}>
                    <input type="button" id="btAdd" defaultValue="Add Line" className="bt" onClick={make.conta}/>
                    <input type="button" id="btRemove" defaultValue="Remove Line" className="bt" /><br /><br />
                    <p>Bar <select id="bar_color_change" >
                        <option value={0} >1 </option> 
                        <option value={1}>2</option>
                        <option value={2}>3</option>
                        <option value={3}>4</option>
                        <option value={4}>5</option>
                        <option value={5}>6</option>
                        <option value={6}>7</option>
                      </select> Color <input style={{marginLeft: '10px'}} className="jscolor {onFineChange:'barcolor(this)'}" defaultValue="fff" /> </p><br /><br />
                      
                  
                  </div>
                  </div>
                  <div id="third_menu_hidden_1" > 
                  {/* <p>Bar_type <select id={"bar_type1"} onChange= {'+ bartype() +'}><option value="currentsteps">Current Steps </option><option value="yesterdaysteps">Yesterday Steps </option><option value="companionsteps">Companion Steps </option><option value="pasthouractivaty">Past Hour Activaty </option><option value="goalactivaty">Goal Activaty </option></select></p><br /><br /> */}
                  
                  </div>
                  </div>
                  

                </div>
               
                <div id="remaining_03">
                <script src="https://apis.google.com/js/client.js"></script>
                  <li id="lastelemente" className="elementos_menu_direito" onClick={make.togglemenu4}>Attributes</li>
                  <div id="fourth_menu_hidden">
                    <p>Image</p><br />

                    <div id="result"></div>
                    <script type="text/javascript" src="https://apis.google.com/js/api.js?onload=loadPicker"></script>
                    <input type="text" id="url" placeholder="Url" style={{marginRight: "10px"}} />
                    <select id="load_type" style={{marginRight: '10px'}} onChange = {make.escolha} >
                      <option value="url_load" selected="selected">URL</option>
                      <option value="pc">Your Computer</option>
                      <option value="drive">Drive</option>
                    </select>
                    
                    <select id="image_type" style={{marginRight: '10px'}}>
                      <option value="top">Top</option>
                      <option value="bakground">Background</option>
                    </select>
                    <input type="button" id="btAddImg" defaultValue="Add Image" style={{marginRight: '10px'}} className="bt" />
                    <input type="button" style={{marginTop: '10px'}} className="bt" defaultValue="Remove Image" id="btRemImg" />
                    <br /><br /><p>Text</p><br />
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
                    </select> <br /><br />
                    <select id="mesage_type">
                      <option value="fixa">Fixa</option>
                      <option value="temporaria">Temporaria</option>
                    </select> <br />
                    <br />
                    <input type="button" id="btAddText" defaultValue="Add Fixed Text" className="bt" />
                    <input type="button" id="btRemoveText" defaultValue="Remove Fixed Text" className="bt" /><br /><br />
                  </div>
                </div>
              
            </div>
          </ul>
        </div>
        <div className="watch">
          <div className="center_circule">
            <div id="img_div" style={{width: '150px', height: '150px', left: '50%', top: '50%', marginTop: '-200px', marginLeft: '-75px', position: 'absolute', zIndex: 10, display: 'none'}}>
              <img id="img" src style={{width: '100%', height: '100%'}} />
            </div>
            <div id="background" className="center_circule">
              <img id="img_backgroud" src style={{width: '100%', height: '100%', borderRadius: '100%', display: 'none'}} />
              <p id="rect" className="center_circule" />
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
                <li id="setimo" />
                <li id="oitavo" />
              </ul>
            </div>
            <svg id="bardraw" className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="530px" height="530px" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-265px', marginTop: '-265px'}}>
            </svg>
            <div className="child elementos dropdiv" id="node1_1">
              <svg height={70} width={200}>
                <text x={0} y={15} />
              </svg>
              <span id="hour_1" />
              <span id="minute_1" />
            </div>
            <div className="child elementos dropdiv" id="node2_1" style={{display: 'none'}}>
              <svg id="clock_1" viewBox="0 0 100 100" width={200} height={200}>
                <g id="pointers_1">
                  <line id="hour_pointer_1" x1={50} y1={50} x2={50} y2={27} />
                  <line id="minute_pointer_1" x1={50} y1={50} x2={50} y2={17} />
                  <line id="second_pointer_1" x1={50} y1={50} x2={50} y2={13} />
                  <circle id="center_dot_1" style={{stroke: 'white', strokeWidth: '3px'}} cx={50} cy={50} r={1} />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="botão_direita">
        </div>
      </div>
    </div>

    );
}

export default MakeYourOwn;