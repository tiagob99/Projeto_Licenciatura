import React from 'react';
import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import Album from './Album';
import { albums } from '../data/albums';
import * as make from'./makeyo';
import './makeyo';
import { bar_type } from './mikrosjs';
import {GooglePicker, MyCustomButton} from "react-google-picker";
import google from "react-google-picker";
import gapi from 'gapi-client';
//import './google';

    

  
const MakeYourOwn = () => {
  
  var developerKey = 'AIzaSyCXXXfI5Kx8-9lQvpFjglJOOiag8naMWjI';
  
  
  // The Client ID obtained from the Google API Console. Replace with your own Client ID.
  var clientId = "465234973180-endijv8herlk2sgucru2r0sis78t8auu.apps.googleusercontent.com"

  // Replace with your own project number from console.developers.google.com.
  // See "Project number" under "IAM & Admin" > "Settings"
  var appId = "novo-269521";

  // Scope to use to access user's Drive items.
  var scope = ['https://www.googleapis.com/auth/drive.file'];

  var pickerApiLoaded = false;
  var oauthToken;

  // Use the Google API Loader script to load the google.picker script.
  function loadPicker() {
    gapi.load('auth', {'callback': onAuthApiLoad});
    gapi.load('picker', {'callback': onPickerApiLoad});
  }

  function onAuthApiLoad() {
    window.gapi.auth.authorize(
        {
          'client_id': clientId,
          'scope': scope,
          'immediate': false
        },
        handleAuthResult);
  }

  function onPickerApiLoad() {
    pickerApiLoaded = true;
    createPicker();
  }

  function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
      oauthToken = authResult.access_token;
      
      createPicker();
    }
  }

  // Create and render a Picker object for searching images.
  function createPicker() {
    if (pickerApiLoaded && oauthToken) {
      
      var view = new google.picker.View(google.picker.ViewId.DOCS);
      view.setMimeTypes("image/png,image/jpeg,image/jpg");
      var picker = new google.picker.PickerBuilder()
          .enableFeature(google.picker.Feature.NAV_HIDDEN)
          .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
          .setAppId(appId)
          .setOAuthToken(oauthToken)
          .addView(view)
          .addView(new google.picker.DocsUploadView())
          .setDeveloperKey(developerKey)
          .setCallback(pickerCallback)
          .build();
       picker.setVisible(true);
    }
  }

  // A simple callback implementation.
  function pickerCallback(data) {
    if (data.action == google.picker.Action.PICKED) {
      var fileId = data.docs[0].id;
      alert('The user selected: ' + fileId);
    }
  }
  function showPickerDialog(){
//    $('teste').loadHTML('./teste.html');
}

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
            <div id="first_menu_hidden_mko">
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
            <div id="remaining_01_mko">
              <li className="elementos_menu_direito" onClick={make.togglemenu2}>Watch Colors</li>
              <div id="second_menu_hidden_mko">
                <p>Background Colors  <input type="color" id="myColor" defaultValue="#000000" onChange={make.backgroundcolor}/> </p>
                <p>Digital <input type="color" id="myColor1" defaultValue="#FFF8DC" onChange={make.digitalcolor}/> </p>
                <p>Analog Hours  <input type="color" id="myColor2" defaultValue="#FFF8DC" onChange={make.updateAnalogHours}/> </p>
                <p>Analog Minuts <input type="color" id="myColor3" defaultValue="#FFF8DC" onChange={make.updateAnalogMinutes}/> </p>
                <p>Analog Seconds <input type="color" id="myColor4" defaultValue="#FF0000" onChange={make.updateAnalogSeconds}/> </p>
                <p>Center Dot <input type="color" id="myColor5" defaultValue="#FFF8DC" onChange={make.centercricule}/></p>
              </div>
              <div id="remaining_02_mko">
              <div id="linha" defaultValue = "0">
                <li className="elementos_menu_direito" onClick={make.togglemenu3}>Line</li>
                <div id="third_menu_hidden_mko">
                  <div id="main" style={{height: '70px', width: '100%'}}>
                    <input type="button" id="btAdd" defaultValue="Add Line" className="bt" onClick={make.conta}/>
                    <input type="button" id="btRemove" defaultValue="Remove Line" className="bt" /><br /><br />
                    
                      <div id="third_menu_hidden_1" > 
                      <p>Bar <select id="bar_color_change" onChange = {make.valores}>
                        <option value={0} >1 </option> 
                        <option value={1}>2</option>
                        <option value={2}>3</option>
                        <option value={3}>4</option>
                        <option value={4}>5</option>
                        <option value={5}>6</option>
                        <option value={6}>7</option>
                      </select> Color <input type="color" id="myColor6"  onChange={make.barcolor}/></p>
                        <p>Bar Type <select id="bar_type"  onChange= {() => make.bartype()}><option value="currentsteps">Current Steps </option><option value="yesterdaysteps">Yesterday Steps </option><option value="companionsteps">Companion Steps </option><option value="pasthouractivaty">Past Hour Activaty </option><option value="goalactivaty">Goal Activaty </option> </select></p><br /><br />
                        <p>Circle Bar Size </p> <input id= "barsize" defaultValue="100" max="89" onChange={() => make.barsize()} type="range" name="b_size"/><br/>
                        <p>Circle Bar Radius </p><input id="barradius"  defaultValue="100" max="87" min="50" onChange={() => make.barradius() }type="range" name="b_size"/><br />
                        <p>Bar Star </p> <select id="bar_star" onChange={() => make.barstar()} ><option value="tophalf">Top Half</option><option value="full">Full</option><option value="bottomhalf">Bottom Half</option></select><br/><br/>
                        <p>Bar Rotation </p> <select name="bar_rotation" id="bar_star_1" onChange={() => make.updaterotation()} ><option value="clockwise">Clockwise</option><option value="counterclockwise">Counterclockwise</option></select><br />
                      </div>
                  
                  </div>
                  
                  
                  </div>
                  </div>
                  

                </div>
               
                <div id="remaining_03_mko">
                
                  <li id="lastelemente" className="elementos_menu_direito" onClick={make.togglemenu4}>Attributes</li>
                  <div id="fourth_menu_hidden_mko">
                    <p>Image</p><br />

                
                    
      
                    <div id="result"></div>
                    {/* <a href = "/g">aqui</a> */}
                    {/* <div dangerouslySetInnerHTML={ {__html: htmlContent} } /> */}
                   {/* <button onClick={showPickerDialog}>Show Picker Dialog</button> */}
                
                    
                    

                    

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
                    <div id="testes">
                    <select id="first_variable">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Goal</option>
                      <option value="other_user">Other User</option>
                    </select>
                    <textarea style={{backgroundColor: 'rgb(225,225,225,0)', zIndex: 8, resize: 'none', textAlign: 'justify', color: 'white'}} id="second_variable" name="field5" className="tex_box" placeholder="Insert your text" rows={1} cols={18} defaultValue={""} />
                    {/* <select id="third_variable">
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
                    </select> <br /><br /> */}
                    <select id="mesage_type">
                      <option value="fixa">Fixa</option>
                      <option value="temporaria">Temporaria</option>
                    </select> <br />
                    <br />
                    <input type="button" id="btAddText" defaultValue="Add Fixed Text" className="bt" />
                    <input type="button" id="btRemoveText" defaultValue="Remove Fixed Text" className="bt" /><br /><br />
                    </div>
                    <input type="button" id="adicionaText" defaultValue=" Open Text" className="bt" onClick={make.abrir} />
                    <input type="button" id="removeText" defaultValue=" Close Text" className="bt" onClick={make.fechar}/>
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
              <img id="img_backgroud" src style={{width: '350%', height: '350%', borderRadius: '100%', display: 'none', position: 'absolute', left: '-125%', top: '-125%'}} />
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
                {/* <li id="oitavo" /> */}
              </ul>
            
            <svg id="bardraw" className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="150%" height="150%" style={{position: 'absolute', left: '50%', top: '50%', marginLeft: '-11%', marginTop: '-13%'}}>
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
        <div className="botão_direita">
        </div>
      </div>
    </div>

    );
}

export default MakeYourOwn;