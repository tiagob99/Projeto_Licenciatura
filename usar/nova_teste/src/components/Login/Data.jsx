import React, { useState } from "react";
import * as db from '../database';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import firebase from 'firebase';
import * as garden from '../Garden'

export var definicao;
var resultado;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  
  return { name, calories, fat, carbs, protein };
  
}
var teste;


const rows = [
  createData('Mikros', resultado, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('teste', 356, 16.0, 49, 3.9),];
// export function fetch(t){
//   let array = [];
  
//   const starCountRef = firebase.database().ref('z1FVkRNAO2cLgrNOTPjHOxsV4Bj1/' + 'Mikros' + '/BC' );
//   starCountRef.once('value', function(snapshot) {
//   array.push(snapshot.child('value').val());
//   var l = snapshot.child('value').val();
//   t=l;
  
//   });
  
 
// }
// export function exp(){
//   var t;
//   fetch();
//   alert(t);
// }
// var dados_f=[];

// function bd (){
//   console.log('--------------------------------'); 
//   axios.get('https://projeto-licenciatura-6e421.firebaseio.com/.json').then(res=>dados_f=res.data); 
//   console.log(dados_f);
// };


export default function Data() {
  
  garden.fetch();
  const classes = useStyles();
  
  return (
    
    <body>
      <h1 onClick={alert('alert ')}>this.resultado</h1>
    {/* <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          
          <TableRow>
            <TableCell>Page</TableCell>
            <TableCell align="right">BC</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    
    </body>
  )
}








  
  

