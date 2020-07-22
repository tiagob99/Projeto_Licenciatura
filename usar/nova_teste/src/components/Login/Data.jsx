

import React from 'react';
import  'react-hook-form';
import 'jquery-ui-dist/jquery-ui';
import * as data from './dados';
import { background_color } from '../mikrosjs';
import * as db from '../database';
import firebase from 'firebase';
import '../database';
import {Link} from 'react-router-dom';

const Data = () => {
    
    
    db.fetch(db.mikro,'Mikros');
    db.fetch(db.garden,'Gardens');
    db.fetch(db.self,'SelfComplete');
    db.fetch(db.simple,'Simple');
    db.fetch(db.thirty,'Thirty');
    db.fetch(db.make,'MAKEYOUROWN');
    function tira(){
      if(document.getElementById('bardraw0')){
        document.getElementById('bardraw0').style.display = "none"
      }
      if(document.getElementById('bardraw1')){
        document.getElementById('bardraw1').style.display = "none"
      }
      if(document.getElementById('bardraw2')){
        document.getElementById('bardraw2').style.display = "none"
      }
      if(document.getElementById('bardraw3')){
        document.getElementById('bardraw3').style.display = "none"
      }
      if(document.getElementById('bardraw4')){
        document.getElementById('bardraw4').style.display = "none"
      }
      if(document.getElementById('bardraw5')){
        document.getElementById('bardraw5').style.display = "none"
      }
      if(document.getElementById('bardraw6')){
        document.getElementById('bardraw6').style.display = "none"
      }
    }
    tira()
    
    return (

    <div className = "DATA">
         <p id = "p_tag">Caso esteja a utilizar o Google Chrome e pretenda abrir o Link da Imagem clique botão direito + "abrir link num novo separador"</p> 
    <table id="myTable" border="1px">
      <tr className = "topo" style = {{background :"#448E9D"}}>
      
        
        <td>Página</td>
        <td>Watch Type</td>
        <td>Background Color</td>
        <td>Digital Color</td>
        <td>Hour Color</td>
        <td>Minute Color</td>
        <td>Second Color</td>
        <td>Center Circle Color</td>
        <td>Text Color</td>
        <td>Bar 1 Color</td>
        <td>Bar 2 Color</td>
        <td>Today Bar Color</td>
        <td>Yesyerday Bar Color</td>
        <td>Image Type</td>
        <td>Source</td>
        <td>Message Type</td>
        <td>1ª Posição</td>
        <td>2ª Posição</td>
        <td>3ª Posição</td>
        <td>4ª Posição</td>
        <td>5ª Posição</td>
        <td>6ª Posição</td>
        <td>7ª Posição</td>
        <td>Tipo Percentagem</td>
        <td>Tipo Timeframe</td>
        <td>Bar Radius 1</td>
        <td>Bar Radius 2</td>
        <td>Bar Thickness 1</td>
        <td>Bar Thickness 2</td>
        <td>Bar Type</td>
        <td>Bar Rotation</td>
        <td>Text</td>
        <td>Text Size</td>
        <td>Second Bar value</td>
        <td>Bar Start</td>
        
      </tr>
      
    </table>
      
<button type="button" id="BT"onClick={data.funcao}>Abrir Definições das suas Páginas</button>

</div>


  ); 
}
export default Data;

