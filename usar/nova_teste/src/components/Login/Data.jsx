// import React, { useState } from "react";
// import * as db from '../database';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import axios from 'axios';
// import firebase from 'firebase';
// import * as garden from '../Garden'

// export var definicao;
// var resultado;
// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
  
//   return { name, calories, fat, carbs, protein };
  
// }
// var teste;


// const rows = [
//   createData('Mikros', resultado, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('teste', 356, 16.0, 49, 3.9),];
// // export function fetch(t){
// //   let array = [];
  
// //   const starCountRef = firebase.database().ref('z1FVkRNAO2cLgrNOTPjHOxsV4Bj1/' + 'Mikros' + '/BC' );
// //   starCountRef.once('value', function(snapshot) {
// //   array.push(snapshot.child('value').val());
// //   var l = snapshot.child('value').val();
// //   t=l;
  
// //   });
  
 
// // }
// // export function exp(){
// //   var t;
// //   fetch();
// //   alert(t);
// // }
// // var dados_f=[];

// // function bd (){
// //   console.log('--------------------------------'); 
// //   axios.get('https://projeto-licenciatura-6e421.firebaseio.com/.json').then(res=>dados_f=res.data); 
// //   console.log(dados_f);
// // };


// export default function Data() {
  
//   garden.fetch();
//   const classes = useStyles();
  
//   return (
    
//     <body>
//       <h1 onClick={alert('alert ')}>this.resultado</h1>
//     {/* <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
          
//           <TableRow>
//             <TableCell>Page</TableCell>
//             <TableCell align="right">BC</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer> */}
    
//     </body>
//   )
// }








  
  

import React from 'react';
import  'react-hook-form';
import 'jquery-ui-dist/jquery-ui';
import * as garden from '../Garden';
import * as data from './dados';
import { background_color } from '../mikrosjs';
import * as db from '../database';

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

// pagina varchar(45) 
// WT varchar(45) 
// BC varchar(45) 
// DC varchar(45) 
// HC varchar(45) 
// MC varchar(45) 
// SC varchar(45) 
// CC varchar(45) 
// TC varchar(45) 
// TIM varchar(45) 
// SRC varchar(45) 
// MT varchar(45) 
// PP varchar(45) 
// PS varchar(45) 
// PT varchar(45) 
// PQ varchar(45) 
// PQI varchar(45) 
// PSE varchar(45) 
// PO varchar(45) 
// TT int(11) 
// TP int(11) 
// B1C varchar(45) 
// B2C varchar(45) 
// BR1 int(11) 
// BR2 int(11) 
// BT1 int(11) 
// BT2 int(11) 
// // BTYPE varchar(45) 
// // BROT varchar(45) 
// // TEXT varchar(45) 
// // TEXT_S varchar(45) 
// TBC varchar(45) 
// YBC varchar(45) 
// // SBV

// if(garden.mikro[i]=='WT'){
//   mikros_cell2.innerHTML = garden.mikro[i+1];
// }
// if(garden.mikro[i]=='BC'){
//   mikros_cell3.innerHTML = garden.mikro[i+1];
// }