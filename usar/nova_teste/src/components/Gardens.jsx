import React from 'react';
import  'react-hook-form';
import 'jquery-ui-dist/jquery-ui';
import * as garden from './Garden';

const Gardens = () => {
    
    return (

      <div>
  <meta charSet="utf-8" />
  <title>Garden</title>
  <div className="big_div">
    <div id="toggle-btn" onClick={garden.togglemenu}>
    
      <span />
      <span />
      <span />
    </div>
    <div id="sidebar">
      <ul>
        <li className="elementos_menu_direito" onClick={garden.togglemenu1}>Watch Types</li>
        <div id="first_menu_hidden1">
          <div id="dragdiv">
            <div className="child elementos" id="node1">
              <svg height={70} width={200}>
                <text x={0} y={15} />
              </svg>
              <span id="hour" />
              <span id="minute" />
            </div>
          </div>
        </div>
        <div id="remaining_1">
          <li className="elementos_menu_direito" onClick={garden.togglemenu2}>Colors</li>
          <div id="second_menu_hidden" >
            <div class="boxalert">
              Tenham atenção as cores escolhidas.
            </div>
            <p>Background Colors <input type="color" id="myColor" defaultValue="#170A38" onChange={garden.background_color}/> </p>
            <p>Digital <input type="color" id="myColor1" defaultValue="#FFF8DC" onChange={garden.digital_color}/> </p>
            <p>Analog Hours <input type="color" id="myColor2" defaultValue="#FFF8DC" onChange={garden.analog_hours}/> </p>
            <p>Analog Minuts <input type="color" id="myColor3" defaultValue="#FFF8DC" onChange={garden.analog_minutes}/> </p>
            <p>Analog Seconds <input type="color" id="myColor4" defaultValue="#FF0000" onChange={garden.analog_seconds}/> </p>
            <p>Center Dot <input type="color" id="myColor5" defaultValue="#FFF8DC" onChange={garden.center_circule}/></p>
          </div>
          </div>
          <div id="remaining_222">
                    <li className="elementos_menu_direito" onClick={garden.togglemenu4}>Attributes</li>
                    <div id="fourth_menu_hidden">
                    <div id="testes">
                    <select id="first_variable">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Goal</option>
                      <option value="other_user">Other User</option>
                    </select>
                    <textarea style={{backgroundColor: 'rgb(225,225,225,0)', zIndex: 8, resize: 'none', textAlign: 'justify', color: 'white'}} id="second_variable" name="field5" className="tex_box" placeholder="Insert your text" rows={1} cols={18} defaultValue={""}  />
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
                        <select id="mesage_time" onChange={garden.funct} >
                      <option value="timeframe">Timeframe</option>
                      <option value="percentagem">Percentagem</option>
                    </select>
                      <div id="tipo_timeframe">
                      <select id="timeframe" onChange={garden.troca}  >
                    <option value="10">10 Minutos</option>
                    <option value="20">20 Minutos</option>
                    <option value="30">30 Minutos</option>
                    <option value="40">40 Minutos</option>
                    <option value="50">50 Minutos</option>
                    <option value="60">60 Minutos</option>
                    </select>
                      </div>
                      <div id="tipo_percentagem">
                      <select id="percentagem" onChange={garden.troca2}>
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
                    <input type="button" id="btAddText"  defaultValue="Add Fixed Text" className="bt"  />
                    <input type="button" id="btRemoveText" defaultValue="Remove Fixed Text" className="bt" /><br /><br />

                   
                    </div>
                    <input type="button" id="adicionaText" defaultValue=" Open Text" className="bt" onClick={garden.abrir} />
                    <input type="button" id="removeText" defaultValue=" Close Text" className="bt" onClick={garden.fechar}/>
                   
                    <input type="button" id="addImage" defaultValue=" Add Image" className="bt" onClick={garden.add_image}/>
                    <div id = "imagens">
                      <h3>Imagens</h3>
                      <input type="text" id="url" placeholder="Url" style={{marginRight: "10px"}} />
                    
                    <select id="load_type" style={{marginRight: '10px'}} onChange = {garden.escolha} >
                      <option value="url_load" selected="selected">URL</option>
                      <option value="pc">Your Computer</option>
                    </select>
                    
                   
                    <input type="button" onClick = {garden.clica} id="btAddImg" defaultValue="Add Image" style={{marginRight: '10px'}} className="bt" />
                    <input type="button" style={{marginTop: '12.5px'}} onClick={garden.tira} className="bt" defaultValue="Remove Image" id="btRemImg" /><br/>
                    <h4 id = "h3_"> </h4>
                      <input id="images" defaultValue="0" max="100" min = "0" onChange={() => garden.image_change()} type="range" name="i_change"/><br/>
                    <h4 id = "h3_1"> </h4>
                      <input id="images_2"  max="100" onChange={() => garden.image_change()} type="range" name="i_change"/><br/>
                    <h4 id = "h3_2"> </h4>
                      <input id="images_3"  max="100" onChange={() => garden.image_change()} type="range" name="i_change"/><br/>

                    
                    </div>
                    </div>
              </div>

      </ul>
    </div>
    <div className="watch">

      <div className="center_circule">
            <div id="img_div" style={{width: '30%', height: '30%', left: '57%%', top: '68%', marginTop: '-60%', marginLeft: '-23%', position: 'absolute', zIndex: 10, display: 'none'}}>
              <img id="img" src style={{width: '100%', height: '100%'}} />
            </div>
            <div id="background" className="center_circule">
              <p id="rect" className="center_circule" />
              <img id="img_backgroud" src style={{width: '100%', height: '100%', borderRadius: '100%', display: 'none', position: 'absolute', left: '-0%', top: '-0%'}} />

            </div>
        <div id="dragdiv" style={{zIndex: 2}} >
              <ul id="allItems">
                <li id="primeiro" />
                <li id="segundo" />
                {/* <div id="terceiro_mexe"> */}
                <li id="terceiro" />
                {/* </div> */}
                <li id="quarto" />
                <li id="quinto" />
              </ul>
            </div>
            <div id="dropdiv" style={{zIndex: 2}}> 
              <ul id="Ul1">
                <li id="setimo" />
                <div id="oitavo1-1">
                {/* <li id="oitavo" /> */}
                </div>
              </ul>
            </div>
        <div id="dropdiv">
          <div className="child elementos" id="node2">
            <svg id="clock" viewBox="0 0 100 100" >
              <g id="pointers">
                <line id="hour_pointer" x1={50} y1={50} x2={50} y2={27}/>
                <line id="minute_pointer" x1={50} y1={50} x2={50} y2={17} />
                <line id="second_pointer" x1={50} y1={50} x2={50} y2={13} />
                <circle id="center_dot" style={{stroke: 'white', strokeWidth: '3px'}} cx={50} cy={50} r={1} />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <input type="button" onClick={garden.cod} id="alerta" value="Guardar Definições" className="cod" />
    {/* <p id= "codee"></p> */}
  </div>

</div>



  ); 
}
export default Gardens;