import React from 'react';
import  'react-hook-form';
import { Flip } from 'react-reveal';
import 'jquery-ui-dist/jquery-ui';
import * as garden from './Garden';
import * as colors from './jscolor';


import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const Gardens = () => {

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const addFriend = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeFriend = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearFriends = () => {
    setIndexes([]);
  };

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
          <li className="elementos_menu_direito" onClick={garden.togglemenu2}>Colors</li>
          <div id="second_menu_hidden">
            <p>Background Colors <input type="color" id="myColor" defaultValue="#000000" onChange={garden.background_color}/> </p>
            <p>Digital <input type="color" id="myColor1" defaultValue="#FFFAFA" onChange={garden.digital_color}/> </p>
            <p>Analog Hours <input type="color" id="myColor2" defaultValue="#FFFAFA" onChange={garden.analog_hours}/> </p>
            <p>Analog Minuts <input type="color" id="myColor3" defaultValue="#FFFAFA" onChange={garden.analog_minutes}/> </p>
            <p>Analog Seconds <input type="color" id="myColor4" defaultValue="#FF0000" onChange={garden.analog_seconds}/> </p>
            <p>Center Dot <input type="color" id="myColor5" defaultValue="#FFFAFA" onChange={garden.center_circule}/></p>
          </div>
          <div id="remaining_03">
                    <li className="elementos_menu_direito" onClick={garden.togglemenu4}>Attributes</li>
                    <div id="fourth_menu_hidden">
                    <select id="first_variable1">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Goal</option>
                      <option value="other_user">Other User</option>
                    </select>
                    <textarea style={{backgroundColor: 'rgb(225,225,225,0)', zIndex: 8, resize: 'none', textAlign: 'justify', color: 'white'}} id="second_variable1" name="field5" className="tex_box" placeholder="Insert your text" rows={1} cols={18} defaultValue={""} />
                    <input type="color" id="myColor9" defaultValue="#ff0080" onChange={garden.text_color}/> 
                    {/* <select id="third_variable1">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Goal</option>
                      <option value="other_user">Other User</option>
                    </select>
                    <textarea style={{backgroundColor: 'rgb(225,225,225,0)', zIndex: 8, resize: 'none', textAlign: 'justify', color: 'white'}} id="fourth_variable1" name="field7" className="tex_box" placeholder="Insert your text" rows={1} cols={18} defaultValue={""} /> */}
                    {/* <select id="fifth_variable1">
                      <option value="none">None</option>
                      <option value="yesterday">Yesterday</option>
                      <option value="today">Today</option>
                      <option value="goal">Daily Goal</option>
                      <option value="other_user">Other User</option>
                    </select> */}
                    <br /><br /> 
                    <select id="mesage_type1">
                      <option value="fixa">Fixa</option>
                      <option value="temporaria">Temporaria</option>
                    </select> <br />
                    <br />
                    <input type="button" id="btAddText" defaultValue="Add Fixed Text" className="bt" />
                    <input type="button" id="btRemoveText" defaultValue="Remove Fixed Text" className="bt" /><br /><br />
                      {/* <p>Text Color <input type="color" id="myColor7" defaultValue="#ff0080" onChange={simple.text_color}/> </p>  <br /><br />
                      <p>Text Size </p> <br /> <input id="text_size" onChange={simple.text_size}  type="range" min={10} max={50} name="text_si" defaultValue={15} /><br /><br /> */}
                      {/* AQUI ------------------------------------*/}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {indexes.map(index => {
                          const fieldName = `friends[${index}]`;
                          return (
                            <fieldset name={fieldName} key={fieldName}>
                              <label>
                                Insira o seu texto: 
                                <input
                                  type="text"
                                  name={`${fieldName}.firstName`}
                                  ref={register}
                                />
                                 <select id="first_variable1">
                                  <option value="none">None</option>
                                  <option value="yesterday">Yesterday</option>
                                  <option value="today">Today</option>
                                  <option value="goal">Goal</option>
                                  <option value="other_user">Other User</option>
                                </select>
                              </label> 

                              {/* <label>
                                Last Name {index}:
                                <input
                                  type="text"
                                  name={`${fieldName}.lastName`}
                                  ref={register}
                                />
                              </label> */}
                              <button type="button" onClick={removeFriend(index)}>
                                Remove
                              </button>
                            </fieldset>
                          );
                        })}

                        <button type="button" onClick={addFriend}>
                          Add text
                        </button>
                        {/* <button type="button" onClick={clearFriends}>
                          Clear Friends
                        </button> */}
                        <input type="submit" />
                      </form>
                      {/* AQUI-------------------------------------------------------------- */}
                    </div>
              </div>
        </div>
      </ul>
    </div>
    <div className="watch">
      <div className="center_circule">
        <p id="rect" className="center_circule" />
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
export default Gardens;