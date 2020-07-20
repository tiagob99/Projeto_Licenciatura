

import React from 'react';
import  'react-hook-form';
import 'jquery-ui-dist/jquery-ui';
import * as garden from '../Garden';
import * as data from './dados';
import { background_color } from '../mikrosjs';
import * as db from '../database';
import firebase from 'firebase';
import '../database';

const Data = () => {
    
    
    db.fetch(garden.mikro,'Mikros');
    db.fetch(garden.garden,'Gardens');
    db.fetch(garden.self,'SelfComplete');
    db.fetch(garden.simple,'Simple');
    db.fetch(garden.thirty,'Thirty');
    db.fetch(garden.make,'MAKEYOUROWN');
    
    
    return (

    <body>
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
        <td>Type of Image</td>
        <td>Source</td>
        <td>Message Type</td>
        <td>Primeira Posição</td>
        <td>Segunda Posição</td>
        <td>Terceira Posição</td>
        <td>Quarta Posição</td>
        <td>Quinta Posição</td>
        <td>Sexta Posição</td>
        <td>Sétima Posição</td>
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
      </tr>
    </table>

<button type="button" id="BT"onClick={data.funcao}>Abrir Definições das suas Páginas</button>
</body>


  ); 
}
export default Data;

