import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import * as db from './database';
/*Menu*/

var open = false;
var tamanho_que_o_menu_desceu = 0;
var t=1;


export function togglemenu(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('toggle-btn').classList.toggle('active');
}
export function togglemenu1(){
  
  document.getElementById('first_menu_hidden_mko').classList.toggle('active');
  document.getElementById('remaining_01_mko').classList.toggle('active');}

export function togglemenu2(){
  document.getElementById('second_menu_hidden_mko').classList.toggle('active');
  document.getElementById('remaining_02_mko').classList.toggle('active');


}
export function togglemenu3(){
  document.getElementById('third_menu_hidden_mko').classList.toggle('active');
  document.getElementById('remaining_03_mko').classList.toggle('active');
  if(open){
    open = false;
    document.getElementById('lastelemente').style.marginTop = 0 + "px";

  }
  else{
    
    open = true;
    document.getElementById('lastelemente').style.marginTop=tamanho_que_o_menu_desceu +"px";
    
  }
}
export function togglemenu4(){
  document.getElementById('fourth_menu_hidden_mko').classList.toggle('active');
}


/*Menu*/



/*Relogio Digital*/
$(function clock(){
  setInterval( () => {
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  if (hours<10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if(window.location.pathname === '/makeYourOwn'){
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ": " + minutes;
    
  }
},100);})




// /*Relogio analogico*/
$(function timerTick() {
  const fullDate = new Date();
    var h = 30 * ((fullDate.getHours() % 12) + fullDate.getMinutes() / 60);
    var m = 6 * fullDate.getMinutes();
    var s = 6 * fullDate.getSeconds();
    if(window.location.pathname === '/makeYourOwn'){
      document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
      document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
      document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');
      
    }
    setTimeout(timerTick, 100);
  }

)
/*Relogio analogico*/



/* Change center watch type*/


function updatewhatch() {
  

  if ( document.getElementsByClassName('child elementos')[1].id === "node2" ){
    verifica('WT','Analogico');
    
    
  }
  else{
    verifica('WT','Digital');
  }

}
/* Change center watch type*/



/*Cores*/
export function backgroundcolor() {
    var x = document.getElementById("myColor");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('rect').style.backgroundColor = currentVal;
    verifica('BC',currentVal);

  }
export function digitalcolor() {
    var x = document.getElementById("myColor1");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('node1').style.color = currentVal;
    verifica('DC',currentVal);

}


export function updateAnalogHours() {
    var x = document.getElementById("myColor2");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('hour_pointer').style.stroke = currentVal;
    verifica('HC',currentVal);
  }
export function updateAnalogMinutes() {
    var x = document.getElementById("myColor3");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('minute_pointer').style.stroke = currentVal;
    verifica('MC',currentVal);
  }
export function updateAnalogSeconds() {
    var x = document.getElementById("myColor4");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('second_pointer').style.stroke = currentVal;
    verifica('SC',currentVal);
  }
export function centercricule() {
    var x = document.getElementById("myColor5");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('center_dot').style.stroke = currentVal;
    verifica('CC',currentVal);
  }
export function barcolor() {
    
      var x = document.getElementById("myColor6");
    var currentVal = x.value;
    x.value = currentVal;
    var novo = document.getElementById('bar_color_change').value;
    if(document.getElementById("bar"+novo)){
    document.getElementById("bar"+novo).style.stroke = currentVal;
    if(novo == 0){
      cor_b0 = currentVal;

    }
    else if(novo == 1){
      cor_b1 = currentVal;

    }
    else if(novo == 2){
      cor_b2 = currentVal;

    }
    else if(novo == 3){
      cor_b3 = currentVal;

    }
    else if(novo == 4){
      cor_b4 = currentVal;

    }
    else if(novo == 5){
      cor_b5 = currentVal;

    }
    else if(novo == 6){
      cor_b6 = currentVal;

    }
    }
    
}
/*Cores*/

var cor_b0 = '#FF0000';
var cor_b1 = "#FFFFFF";
var cor_b2 = "#00FF00";
var cor_b3 = "#0000FF";
var cor_b4 = "#FF4AD7";
var cor_b5 = "#FF8400";
var cor_b6 = "#FFFFD7";


/*vetores cores iniciais*/
var cores = ["#FF0000", "#FFFFFF", "#00FF00", "#0000FF", "#FF4AD7", "#FF8400",  "#FFFFD7"];
/*vetores cores iniciais*/

/*Matriz barras iniciais*/
var matrix = [];
for(var i=0; i<7; i++) {
    matrix[i] =  new Array(7);
}
for(var i=0; i<7; i++) {
  matrix[i][0]=i;
  matrix[i][1]=16;
  matrix[i][2]=20;
  matrix[i][3]=-180;
  matrix[i][4]=true;
  matrix[i][5]="tophalf";
  matrix[i][6]=2;
  matrix[i][7]="csteps";
}
/*Matriz barras iniciais*/

/*Matriz texto inicial*/
var matrixtext = [];
for(var i=0; i<8; i++) {
    matrixtext[i] =  new Array(8);
}
for(var i=0; i<8; i++) {
  matrixtext[i][0]="none";
  matrixtext[i][1]="";
  matrixtext[i][2]="none";
  matrixtext[i][3]="";
  matrixtext[i][4]="none";
  matrixtext[i][5]="fixa";
  matrixtext[i][6]="";
  matrixtext[i][7]="";
  matrixtext[i][8]="";
}
var id = ["primeiro", "segundo", "terceiro", "quarto", "quinto",  "setimo"]; //posiçoes
var posiçoesocupadas = [0,0,0,0,0,0];
for (var i=0; i<6; i++){
  matrixtext[i][6]=id[i];
}
/*Matriz texto inicial*/

/*adicionar elementos*/
var Linha = 0;
var Texto = 0;
var url = false 
var image = false;
var posiçoesocupadas_antigo;
var elemento = false;
var tamanho_1=100;
var tamanho_2=100;
var tamanho_3=100;
var tamanho_4=100;
var tamanho_5=100;
var tamanho_6=100;
var tamanho_7=100;
var rad_1=100;
var rad_2=100;
var rad_3=100;
var rad_4=100;
var rad_5=100;
var rad_6=100;
var rad_7=100;
var tipob_0= "currentsteps";
var tipob_1= "currentsteps";
var tipob_2= "currentsteps";
var tipob_3= "currentsteps";
var tipob_4= "currentsteps";
var tipob_5= "currentsteps";
var tipob_6= "currentsteps";
var star0 = "tophalf";
var star1 = "tophalf"
var star2 = "tophalf"
var star3 = "tophalf"
var star4 = "tophalf"
var star5 = "tophalf"
var star6 = "tophalf"
var barr_0 = "clockwise";
var barr_1 = "clockwise";
var barr_2 = "clockwise";
var barr_3 = "clockwise";
var barr_4 = "clockwise";
var barr_5 = "clockwise";
var barr_6 = "clockwise"; 
var barra_ativa=0;
var barra;
export function valores(){
 
  barra = document.getElementById('bar_color_change').value;
  
  if(barra_ativa<=barra){
   
    document.getElementById("esconde").style.display='none';
    alert('Barra não existente, adicione uma nova barra')
 
  }
  else{
    document.getElementById("esconde").style.display='block';

  }

  
  var temp0;
  var temp1;
  var temp2;
  var temp3;
  var temp4;
  var temp5;
  var temp6;
  var full1;
  var full2;
  var full3;
  var full4;
  var full5;
  var full6;
  var full7;
  var rot1;
  var rot2;
  var rot3;
  var rot4;
  var rot5;
  var rot6;
  var rot7;
  if (tipob_0== "currentsteps"){
    temp0 = 0;
    
  }
  
  if (tipob_1 == "currentsteps"){
    temp1 = 0;
    
  }
  if (tipob_2== "currentsteps"){
    temp2 = 0;
    
  }
  if (tipob_3== "currentsteps"){
    temp3 = 0;
    
  }
  if (tipob_4== "currentsteps"){
    temp4 = 0;
    
  }
  if (tipob_5== "currentsteps"){
    temp5 = 0;
    
  }
  if (tipob_6== "currentsteps"){
    temp6 = 0;
    
  }
 
  if (tipob_0== "yesterdaysteps"){
    temp0 = 1;
    
  }
  
  if (tipob_1 == "yesterdaysteps"){
    temp1 = 1;
    
  }
  if (tipob_2== "yesterdaysteps"){
    temp2 = 1;
    
  }
  if (tipob_3== "yesterdaysteps"){
    temp3 = 1;
    
  }
  if (tipob_4== "yesterdaysteps"){
    temp4 = 1;
    
  }
  if (tipob_5== "yesterdaysteps"){
    temp5 = 1;
    
  }
  if (tipob_6== "yesterdaysteps"){
    temp6 = 1;
    
  }
  if (tipob_0== "companionsteps"){
    temp0 = 2;
    
  }
  
  if (tipob_1 == "companionsteps"){
    temp1 = 2;
    
  }
  if (tipob_2== "companionsteps"){
    temp2 = 2;
    
  }
  if (tipob_3== "companionsteps"){
    temp3 = 2;
    
  }
  if (tipob_4== "companionsteps"){
    temp4 = 2;
    
  }
  if (tipob_5== "companionsteps"){
    temp5 = 2;
    
  }
  if (tipob_6== "companionsteps"){
    temp6 = 2;
    
  }
  if (tipob_0== "pasthouractivaty"){
    temp0 = 3;
    
  }
  
  if (tipob_1 == "pasthouractivaty"){
    temp1 = 3;
    
  }
  if (tipob_2== "pasthouractivaty"){
    temp2 = 3;
    
  }
  if (tipob_3== "pasthouractivaty"){
    temp3 = 3;
    
  }
  if (tipob_4== "pasthouractivaty"){
    temp4 = 3;
    
  }
  if (tipob_5== "pasthouractivaty"){
    temp5 = 3;
    
  }
  if (tipob_6== "pasthouractivaty"){
    temp6 = 3;
    
  }
  if (tipob_0== "goalactivaty"){
    temp0 = 3;
    
  }
  
  if (tipob_1 == "goalactivaty"){
    temp1 = 3;
    
  }
  if (tipob_2== "goalactivaty"){
    temp2 = 3;
    
  }
  if (tipob_3== "goalactivaty"){
    temp3 = 3;
    
  }
  if (tipob_4== "goalactivaty"){
    temp4 = 3;
    
  }
  if (tipob_5== "goalactivaty"){
    temp5 = 3;
    
  }
  if (tipob_6== "goalactivaty"){
    temp6 = 3;
    
  }
  
  
  if(star0 == "tophalf" ){
    full1=0;
  }
  
  if(star0 == "full"){
    full1=1;
  }
  
  if(star0 == "bottomhalf"){
    full1=2;
  }
  if(star1 == "tophalf" ){
    full2=0;
  }
  
  if(star1 == "full"){
    full2=1;
  }
  
  if(star1 == "bottomhalf"){
    full2=2;
  }
  if(star2 == "tophalf" ){
    full3=0;
  }
  
  if(star2 == "full"){
    full3=1;
  }
  
  if(star2 == "bottomhalf"){
    full3=2;
  }
  if(star3 == "tophalf" ){
    full4=0;
  }
  
  if(star3 == "full"){
    full4=1;
  }
  
  if(star3 == "bottomhalf"){
    full4=2;
  }
  if(star4 == "tophalf" ){
    full5=0;
  }
  
  if(star4 == "full"){
    full5=1;
  }
  
  if(star4 == "bottomhalf"){
    full5=2;
  }
  if(star5 == "tophalf" ){
    full6=0;
  }
  
  if(star5 == "full"){
    full6=1;
  }
  
  if(star5 == "bottomhalf"){
    full6=2;
  }
  if(star6 == "tophalf" ){
    full7=0;
  }
  
  if(star6 == "full"){
    full7=1;
  }
  
  if(star6 == "bottomhalf"){
    full7=2;
  }
  
  if(barr_0 == "clockwise"){
    rot1 = 0;
  }
  
  if(barr_0 == "counterclockwise"){
    rot1 = 1;
  }
  if(barr_1 == "clockwise"){
    rot2 = 0;
  }
  
  if(barr_1 == "counterclockwise"){
    rot2 = 1;
  }
  if(barr_2 == "clockwise"){
    rot3 = 0;
  }
  
  if(barr_2 == "counterclockwise"){
    rot3 = 1;
  }
  if(barr_3 == "clockwise"){
    rot4= 0;
  }
  
  if(barr_3 == "counterclockwise"){
    rot4= 1;
  }
  if(barr_4 == "clockwise"){
    rot5 = 0;
  }
  
  if(barr_4 == "counterclockwise"){
    rot5 = 1;
  }
  if(barr_5 == "clockwise"){
    rot6 = 0;
  }
  
  if(barr_5 == "counterclockwise"){
    rot6 = 1;
  }
  if(barr_6 == "clockwise"){
    rot7 = 0;
  }
  
  if(barr_6 == "counterclockwise"){
    rot7 = 1;
  }
  
  
  switch (barra) {
    case "0":
      
       $('#bar_type').prop('selectedIndex',temp0);
       
       document.getElementById('barsize').value=tamanho_1;
       
       document.getElementById('barradius').value=rad_1;
       
       $('#bar_star').prop('selectedIndex',full1);
       
       $('#bar_star_1').prop('selectedIndex',rot1);
       
       document.getElementById("myColor6").value=cor_b0;
       
       break;
    case "1":
        $('#bar_type').prop('selectedIndex',temp1);
        document.getElementById('barsize').value=tamanho_2;
        document.getElementById('barradius').value=rad_2;
        $('#bar_star').prop('selectedIndex',full2);
        $('#bar_star_1').prop('selectedIndex',rot2);
        document.getElementById("myColor6").value=cor_b1;
      break;   
    case "2":
        $('#bar_type').prop('selectedIndex',temp2);
        document.getElementById('barsize').value=tamanho_3;
        document.getElementById('barradius').value=rad_3;
        $('#bar_star').prop('selectedIndex',full3);
        $('#bar_star_1').prop('selectedIndex',rot3);
        document.getElementById("myColor6").value=cor_b2;
        break;    
        
    case "3":
        $('#bar_type').prop('selectedIndex',temp3);
        document.getElementById('barsize').value=tamanho_4;
        document.getElementById('barradius').value=rad_4;
        $('#bar_star').prop('selectedIndex',full4);
        $('#bar_star_1').prop('selectedIndex',rot4);
        document.getElementById("myColor6").value=cor_b3;
        break;   
    case "4":
        $('#bar_type').prop('selectedIndex',temp4);
        document.getElementById('barsize').value=tamanho_5;
        document.getElementById('barradius').value=rad_5;
        $('#bar_star').prop('selectedIndex',full5);
        $('#bar_star_1').prop('selectedIndex',rot5);
        document.getElementById("myColor6").value=cor_b4;
        break;   
    case "5":
        $('#bar_type').prop('selectedIndex',temp5);
        document.getElementById('barsize').value=tamanho_6;
        document.getElementById('barradius').value=rad_6;
        $('#bar_star').prop('selectedIndex',full6);
        $('#bar_star_1').prop('selectedIndex',rot6);
        document.getElementById("myColor6").value=cor_b5;
        break;   
    case "6":
        $('#bar_type').prop('selectedIndex',temp6);
        document.getElementById('barsize').value=tamanho_7;
        document.getElementById('barradius').value=rad_7;
        $('#bar_star').prop('selectedIndex',full7);
        $('#bar_star_1').prop('selectedIndex',rot7);
        document.getElementById("myColor6").value=cor_b6;
        break;               
  }
  

  
}
export function bartype(){

  var barnumber = document.getElementById('bar_color_change').value;
  var novo = document.getElementById('bar_type').value;
  matrix[barnumber][7] = novo;
  
  switch(novo) {
    
    case "currentsteps":
        if(barnumber == 0){
          tipob_0 = "currentsteps";
        }
        if(barnumber == 1){
          tipob_1 = "currentsteps";
        }
        if(barnumber == 2){
          tipob_2 = "currentsteps";
        }
        if(barnumber == 3){
          tipob_3 = "currentsteps";
        }
        if(barnumber == 4){
          tipob_4 = "currentsteps";
        }
        if(barnumber == 5){
          tipob_5 = "currentsteps";
        }
        if(barnumber == 6){
          tipob_6 = "currentsteps";
        }
        verifica('BTYPE', 'currentsteps')
        //document.getElementById('bar'+ barnumber).style.strokeDasharray  = "20,100";
        matrix[barnumber][2]=20;
        barradius();
        break;
    case "yesterdaysteps":
        if(barnumber == 0){
          tipob_0 = "yesterdaysteps";
        }
        if(barnumber == 1){
          tipob_1 = "yesterdaysteps";
        }
        if(barnumber == 2){
          tipob_2 = "yesterdaysteps";
        }
        if(barnumber == 3){
          tipob_3 = "yesterdaysteps";
        }
        if(barnumber == 4){
          tipob_4 = "yesterdaysteps";
        }
        if(barnumber == 5){
          tipob_5 = "yesterdaysteps";
        }
        if(barnumber == 6){
          tipob_6 = "yesterdaysteps";
        }
        verifica('BTYPE', 'yesterdaysteps')
        //document.getElementById('bar'+ barnumber).style.strokeDasharray  = "40,100";
        //matrix[barnumber][2]=40;
        barradius();
        break;
    case "companionsteps":
        if(barnumber == 0){
          tipob_0 = "companionsteps";
        }
        if(barnumber == 1){
          tipob_1 = "companionsteps";
        }
        if(barnumber == 2){
          tipob_2 = "companionsteps";
        }
        if(barnumber == 3){
          tipob_3 = "companionsteps";
        }
        if(barnumber == 4){
          tipob_4 = "companionsteps";
        }
        if(barnumber == 5){
          tipob_5 = "companionsteps";
        }
        if(barnumber == 6){
          tipob_6 = "companionsteps";
        }
        verifica('BTYPE', 'companionsteps')
        //document.getElementById('bar'+ barnumber).style.strokeDasharray  = "50,100";
        //matrix[barnumber][2]=50;
        barradius();
        break;
    case "pasthouractivaty":
        if(barnumber == 0){
          tipob_0 = "pasthouractivaty";
        }
        if(barnumber == 1){
          tipob_1 = "pasthouractivaty";
        }
        if(barnumber == 2){
          tipob_2 = "pasthouractivaty";
        }
        if(barnumber == 3){
          tipob_3 = "pasthouractivaty";
        }
        if(barnumber == 4){
          tipob_4 = "pasthouractivaty";
        }
        if(barnumber == 5){
          tipob_5 = "pasthouractivaty";
        }
        if(barnumber == 6){
          tipob_6 = "pasthouractivaty";
        }
        verifica('BTYPE', 'pasthouractivaty')
        //document.getElementById('bar'+ barnumber).style.strokeDasharray  = "1.35,0.3";
        //matrix[barnumber][2]="1.35,0.3";
        break;
    case "goalactivaty":
        if(barnumber == 0){
          tipob_0 = "goalactivaty";
        }
        if(barnumber == 1){
          tipob_1 = "goalactivaty";
        }
        if(barnumber == 2){
          tipob_2 = "goalactivaty";
        }
        if(barnumber == 3){
          tipob_3 = "goalactivaty";
        }
        if(barnumber == 4){
          tipob_4 = "goalactivaty";
        }
        if(barnumber == 5){
          tipob_5 = "goalactivaty";
        }
        if(barnumber == 6){
          tipob_6 = "goalactivaty";
        }
        verifica('BTYPE', 'goalactivaty')
        //document.getElementById('bar'+ barnumber).style.strokeDasharray  = "50.05,100";
       // matrix[barnumber][2]=50;
       barradius();
        break;
    default:
        console.log("erro");
        break;

  }
  
}
export function conta(){
  if(barra_ativa<=barra){
  document.getElementById('esconde').style.display="block";
  }
  barra_ativa++;
  var x = Linha;
  document.getElementById('linha').value = x;
}
export function valor_linha(){
  conta();
  var y =  document.getElementById('linha').value;
  return y;
}

export function escolha(){
  if(document.getElementById('load_type').value == 'url_load'){
    $('#filetag').remove();
    $('#preview').remove();
    document.getElementById('load_type').insertAdjacentHTML('beforebegin',
    '<input type="text" id="url" placeholder="Url" style={{marginRight: "10px"}} />');
  }
  
  if(document.getElementById('load_type').value == 'pc'){
    $('#url').remove();
    document.getElementById('load_type').insertAdjacentHTML('beforebegin',
    '<input type="file" id="filetag"> <img src="" id="preview">')

    var fileTag = document.getElementById("filetag"),
    preview = document.getElementById("preview");
    
fileTag.addEventListener("change", function() {
  changeImage(this);
});

function changeImage(input) {
  var reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = function(e) {
      preview.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(input.files[0]);
  }
    

  }

  }
}
// 

$(document).ready(function() {

  var container = $(document.createElement('div')).css({ padding: '2px', margin: '2px', width: '370px', height: '450px'});
  var containertext = $(document.createElement('div')).css({padding: '2px', margin: '2px', width: '170px', height: '200px'});
  

  $('#btAdd').click(function() { //Adiciona uma linha
    if(Linha == 0){
      document.getElementById("myColor6").defaultValue = "#FF0000";
  }
  else if(Linha == 1){
    document.getElementById("myColor6").defaultValue = "#FFFFFF";
  }
  else if(Linha == 2){
    document.getElementById("myColor6").defaultValue = "#00FF00";
  }
  else if(Linha == 3){
    document.getElementById("myColor6").defaultValue = "#0000FF";
  }
  else if(Linha == 4){
    document.getElementById("myColor6").defaultValue = "#FF4AD7";
  }
  else if(Linha == 5){
    document.getElementById("myColor6").defaultValue = "#FF8400";
  }
  else if(Linha == 6){
    document.getElementById("myColor6").defaultValue = "#FFFFD7";
  }
    if (Linha <= 6) {
      $('#bar_type').prop('selectedIndex',0);
      $('#bar_color_change').prop('selectedIndex',Linha);
            
      document.getElementById('lastelemente').style.marginTop = tamanho_que_o_menu_desceu + 450 + "px";
      tamanho_que_o_menu_desceu = tamanho_que_o_menu_desceu + 450;
      
      $('#main').after(container);
      $("body").append(document.getElementById('third_menu_hidden_1').classList.add('active') + 
         '<svg id=bardraw' + Linha + ' ' +
      ' style=" width:30%;  top:70%; left: 48%; border-radius: 100%; position:absolute;  margin-top: -13.2%;  margin-left: -13.4%; class="circle-chart" viewbox="0 0 33.83098862 33.83098862">'+
      '<circle class="circle-chart__circle" id="bar' + Linha + '"  stroke="' + cores[Linha]+'" stroke-width="2" stroke-dasharray="20,100" style="transform: rotate(-180deg); transform-origin: center;" fill="none"  cx="16.59" cy="15.56" r="14" />'+
      '</svg>')
      Linha = Linha + 1;
        
      }
      
  });


  $('#btRemove').click(function() { // Remove uma linha

  if(Linha == 0){
      document.getElementById("myColor6").defaultValue = "#FF0000";
  }
  else if(Linha == 1){
    document.getElementById("myColor6").defaultValue = "#FFFFFF";
  }
  else if(Linha == 2){
    
    document.getElementById("myColor6").defaultValue = "#00FF00";
  }
  else if(Linha == 3){
    
    document.getElementById("myColor6").defaultValue = "#0000FF";
  }
  else if(Linha == 4){
    
    document.getElementById("myColor6").defaultValue = "#FF4AD7";
  }
  else if(Linha == 5){
    document.getElementById("myColor6").defaultValue = "#FF8400";
  }
  else if(Linha == 6){
    document.getElementById("myColor6").defaultValue = "#FFFFD7";
  }

    if (Linha != 0) {
      
      
      Linha = Linha - 1;
      $('#bar_color_change').prop('selectedIndex',Linha-1);
      if(Linha == 1){
        document.getElementById("myColor6").defaultValue = "#FF0000";
      }
      if(Linha == 2){
        document.getElementById("myColor6").defaultValue = "#FFFFFF";
      }
      if(Linha == 3){
        document.getElementById("myColor6").defaultValue = "#00FF00";
      }
      if(Linha == 4){
        document.getElementById("myColor6").defaultValue = "#0000FF";
      }
      if(Linha == 5){
        document.getElementById("myColor6").defaultValue = "#FF4AD7";
      }
      if(Linha == 6){
        document.getElementById("myColor6").defaultValue = "#FF8400";
      }
      

      $('#baroptions' + Linha).remove();
      $('#bardraw' + Linha).remove();
      var novo = tamanho_que_o_menu_desceu - 450;
      document.getElementById('lastelemente').style.marginTop = novo + "px";
      
      
      if (Linha >= 0) {
        tamanho_que_o_menu_desceu = tamanho_que_o_menu_desceu - 450;
      }
      if (Linha == 0){
        document.getElementById('third_menu_hidden_1').classList.remove('active')
      }
    }
    
  });


  $('#mesage_type').change(function() { // Adiciona se é de percentangem ou timeframe
    var novo = document.getElementById("mesage_type").value;
    verifica('MT',novo);
    if(novo=="temporaria"){
      $("body").append(document.getElementById('mesage_time').classList.add('active'));
      $("body").append(document.getElementById('tipo_timeframe').classList.add('active'));
    }
    else{
      $("body").append(document.getElementById('mesage_time').classList.remove('active'));
        
      $("body").append(document.getElementById('percentagem').classList.remove('active'));
      
      $("body").append(document.getElementById('timeframe').classList.remove('active'));
      $("body").append(document.getElementById('tipo_timeframe').classList.remove('active'));
      $("body").append(document.getElementById('tipo_percentagem').classList.remove('active'));
      
    }
  });


  $('#btAddText').click(function() { //Adiciona uma caixa de texto
    var ha_posiçao_livre = false;
    var novo = 0;
    while (posiçoesocupadas[novo]==1 && novo<6) {
      novo = novo + 1;
    }
    if(posiçoesocupadas[novo]==0){
      ha_posiçao_livre=true;
    }
    if (Texto<6){
      console.log(Texto)
      if(Texto ==3){
        elemento = true;
        console.log("aaaaaaa")
      }
      var variable_text =$('#first_variable').val();
      var variable_text1 =$('#third_variable').val();
      var variable_text2 = $('#fifth_variable').val();
      var text = $('#second_variable').val();
      var text2 = $('#fourth_variable').val();
      var tipo_mensagem = $('#mesage_type').val();
      var tipo_mensagem1 = $('#mesage_time').val();
      var tipo_mensagem2;
      if (tipo_mensagem == "temporaria"){ //caso seja fixa a posiçao 6 e 7 da matriz ficam em ""
        if (tipo_mensagem1=="timeframe"){
          verifica('MT',tipo_mensagem1)
          verifica('TT',$('#timeframe').val())
          tipo_mensagem2 = $('#timeframe').val();
        }
        else{
          verifica('MT',tipo_mensagem1)
          verifica('TP',$('#percentagem').val())
          tipo_mensagem2 = $('#percentagem').val();
        }
        matrixtext[Texto][6]=tipo_mensagem1;
        matrixtext[Texto][7]=tipo_mensagem2;
      }
      
      else{
        verifica('MT','fixa')
      }
      matrixtext[Texto][0]=variable_text;
      matrixtext[Texto][1]=text;
      matrixtext[Texto][2]=variable_text1;
      matrixtext[Texto][3]=text2;
      matrixtext[Texto][4]=variable_text2;
      matrixtext[Texto][5]=tipo_mensagem;
      if (variable_text=="none"){
        variable_text = "";
      }
      if (variable_text1=="none"){
        variable_text1 = "";
      }
      if (variable_text2=="none"){
        variable_text2 = "";
      }
      if (variable_text!=""){
        variable_text = "1290";
      }
      if (variable_text1!=""){
        variable_text1 = "1290";
      }
      if (variable_text2!=""){
        variable_text2 = "1290";
      }
      posiçoesocupadas[novo]=1;
      $('#'+id[novo]).text(variable_text+" " + text+ " " + variable_text1 + " " + text2 + " " + variable_text2);
      matrixtext[Texto][6]=id[novo];
      Texto = Texto + 1;
    }
    console.log(posiçoesocupadas);
    console.log(matrixtext);

    // if(document.getElementById('oitavo').innerHTML!=""){
    //   verifica('PO',document.getElementById('oitavo').innerHTML);}
      

     if(document.getElementById('setimo').innerHTML!=""){
      verifica('PSE',document.getElementById('setimo').innerHTML);}

     else if(document.getElementById('quinto').innerHTML!=""){
     verifica('PQI',document.getElementById('quinto').innerHTML);}

     else if(document.getElementById('quarto').innerHTML!=""){
      verifica('PQ',document.getElementById('quarto').innerHTML);}

     else if(document.getElementById('terceiro').innerHTML!=""){
      verifica('PT',document.getElementById('terceiro').innerHTML);}

     else if(document.getElementById('segundo').innerHTML!=""){
      verifica('PS',document.getElementById('segundo').innerHTML);}

     else if(document.getElementById('primeiro').innerHTML!=""){
      verifica('PP',document.getElementById('primeiro').innerHTML);}

  });
  

  $('#btRemoveText').click(function() { // Remove uma caixa de texto
    // if(document.getElementById('oitavo').innerHTML!=""){
    //   verifica_apaga('PO')}

    if(document.getElementById('setimo').innerHTML!=""){
      verifica_apaga('PSE')}

     else if(document.getElementById('quinto').innerHTML!=""){
     verifica_apaga('PQI')}

     else if(document.getElementById('quarto').innerHTML!=""){
      verifica_apaga('PQ')}

     else if(document.getElementById('terceiro').innerHTML!=""){
      verifica_apaga('PT')}

     else if(document.getElementById('segundo').innerHTML!=""){
      verifica_apaga('PS')}

     else if(document.getElementById('primeiro').innerHTML!=""){
      verifica_apaga('PP')}


    if(posiçoesocupadas[Texto-1]==0){  //erro
      Texto = Texto - 1;
      console.log("a11aa")
    }
    if (Texto > 0 && image==false && posiçoesocupadas[Texto-1]==1) { //erro
      console.log("22aaa")
      Texto = Texto - 1;
      var aux1 = 0;
      while(id[aux1]!=matrixtext[Texto][6]){
        aux1 = aux1+ 1;
      }
      posiçoesocupadas[aux1]=0;
      matrixtext[aux1][0]="none";
      matrixtext[aux1][1]="";
      matrixtext[aux1][2]="none";
      matrixtext[aux1][3]="";
      matrixtext[aux1][4]="none";
      matrixtext[aux1][5]="fixa";
      // matrixtext[aux1][6]="fixa";
      // matrixtext[aux1][7]="";
      $('#'+  matrixtext[Texto][6]).text("");
    }
    else if (image==true){
      matrixtext[4][0]="none";
      matrixtext[4][1]="";
      matrixtext[4][2]="none";
      matrixtext[4][3]="";
      matrixtext[4][4]="none";
      matrixtext[4][5]="fixa";
      matrixtext[4][6]="";
      matrixtext[4][7]="";
      posiçoesocupadas= [1,1,1,0,1,1];
      $('#quarto').text("");
      elemento = false;
      console.log("aa33a")
    }

  });
  
  $('#btAddImg').click(function() { // Adiciona Imagem e remove posiçoes de colocação de texto
    document.getElementById('btRemImg_m').classList.add('active');

    var novo;
    if(document.getElementById('load_type').value == 'url_load'){
      url = true
      novo = document.getElementById("url").value;
      verifica('TIM','URL');
      verifica('SRC',novo);
    }
    if(document.getElementById('load_type').value == 'pc'){

      novo= document.getElementById("preview").src;
      verifica('TIM','PC');
      verifica('SRC',novo);
    }
    if(document.getElementById('load_type').value == 'pc'){

    }
    var imagem_position = document.getElementById("image_type").value;
    console.log(imagem_position);
    posiçoesocupadas_antigo = posiçoesocupadas;
    posiçoesocupadas = [1,1,1,0,1,1,1,1];
    image = true;
    if(imagem_position=="top"){
      document.getElementById("img").src = novo;
      document.getElementById("img_backgroud_s").src = novo;
      document.getElementById("img").style.display = "initial";
      document.getElementById("img_div").style.display = "initial";
      limpa();
    }
    else{
      document.getElementById("img").src = novo;
      document.getElementById("img_backgroud_s").src = novo;
      document.getElementById("img_backgroud_s").style.display = "initial";
        document.getElementById('img').style.display = "none";
        document.getElementById('rect').style.display = "none";
      limpa();
    }

  });


  $('#image_type').change(function() { // Altera o tipo de imagem
    if(url ==true){
      var novo = document.getElementById("image_type").value;
      if(novo=="bakground"){
        verifica('BCK_IMG','Background');
   
        document.getElementById("img_backgroud_s").style.display = "initial";
        document.getElementById('img').style.display = "none";
        document.getElementById('rect').style.display = "none";
      }
      else{
        verifica('BCK_IMG','topo');
        document.getElementById('img_backgroud_s').style.display = "none";
        document.getElementById('img').style.display = "initial";
        document.getElementById('rect').style.display = "none";
      }
    }
  });


 

});

export function funct(){ // Adiciona Imagem e remove posiçoes de colocação de texto
      var novo = document.getElementById("mesage_time").value;
    
  
  if(novo=="percentagem"){
    $("#timeframe").remove();
    $('<select id="percentagem" style="margin-left:10px;">'+
      '<option value="10">10%</option>'+
      '<option value="20">20%</option>'+
      '<option value="30">30%</option>'+
      '<option value="40">40%</option>'+
      '<option value="50">50%</option>'+
      '<option value="60">60%</option>'+
      '<option value="70">70%</option>'+
      '<option value="80">80%</option>'+
      '<option value="90">90%</option>'+
      '<option value="100">100%</option>'+
    '</select>').insertAfter('#mesage_time')
  }
  else{
    $("#percentagem").remove();
    $('<select id="timeframe" style="margin-left:10px;">'+
    '<option value="10">10 Minutos</option>'+
    '<option value="20">20 Minutos</option>'+
    '<option value="30">30 Minutos</option>'+
    '<option value="40">40 Minutos</option>'+
    '<option value="50">50 Minutos</option>'+
    '<option value="60">60 Minutos</option>'+
    '</select>').insertAfter('#mesage_time')
  }
}
/*adicionar elementos*/



/*Personalização dos elementos*/
export function barsize (){
      var barnumber = document.getElementById('bar_color_change').value;
      var tamanho = document.getElementById('barsize').value;
      if(barnumber==0){
        tamanho_1 = tamanho ;
      }
      if(barnumber==1){
        tamanho_2 = tamanho ;
      }
      if(barnumber==2){
        tamanho_3 = tamanho ;
      }
      if(barnumber==3){
        tamanho_4 = tamanho ;
      }
      if(barnumber==4){
        tamanho_5 = tamanho ;
      }
      if(barnumber==5){
        tamanho_6 = tamanho ;
      }
      if(barnumber==6){
        tamanho_7 = tamanho ;
      }
  
  tamanho = (tamanho/100)*2+0.1;
  matrix[barnumber][6]=tamanho;
  document.getElementById('bar'+barnumber).style.strokeWidth =  tamanho;
}



export function barradius() {
  
  var barnumber = document.getElementById('bar_color_change').value;
  var tamanho = document.getElementById('barradius').value;
  var circle = document.getElementById("bar"+barnumber);
  if(barnumber==0){
    rad_1 = tamanho ;
  }
  if(barnumber==1){
    rad_2 = tamanho ;
  }
  if(barnumber==2){
    rad_3 = tamanho ;
  }
  if(barnumber==3){
    rad_4 = tamanho ;
  }
  if(barnumber==4){
    rad_5 = tamanho ;
  }
  if(barnumber==5){
    rad_6 = tamanho ;
  }
  if(barnumber==6){
    rad_7 = tamanho ;
  }
  if(matrix[barnumber][5]=="full"){
    
    
    tamanho = (tamanho/100)*15+1;
    matrix[barnumber][1]=tamanho;
    circle.setAttribute("r", tamanho);
    document.getElementById('bar'+barnumber).style.strokeDasharray = 101+",100";
  }
  else if(matrix[barnumber][7]!="pasthouractivaty"){
    
    tamanho = (tamanho/100)*15+1;
    matrix[barnumber][1]=tamanho;
    circle.setAttribute("r", tamanho);
    if(document.getElementById('bar'+barnumber)){
      document.getElementById('bar'+barnumber).style.strokeDasharray = (2*3.1415*tamanho)*(matrix[barnumber][2]/100)+",100"; //20 é o tamanho da barra
    }
    else{
      alert('Barra não criada, adicione uma nova barra');
    }
  }
  else {
    
    tamanho = (tamanho/100)*15+1;
    matrix[barnumber][1]=tamanho;
    circle.setAttribute("r", tamanho);
    
  }
}
var previous;


export function barstar (){
  
    var barnumber = document.getElementById('bar_color_change').value;
    
    if(matrix[barnumber][7]!="pasthouractivaty"){
      
      var novo = document.getElementById('bar_star').value;
      
        
       if (novo == "full" ){
         if(barnumber == 0){
          star0="full" ;
         }
         else if(barnumber == 1){
          star1="full" ;
        }
         else if(barnumber == 2){
          star2="full" ;
        }
         else if(barnumber == 3){
          star3="full" ;
        }
         else if(barnumber == 4){
          star4="full" ;
        }
         else if(barnumber == 5){
          star5="full" ;
        }
         else if(barnumber == 6){
          star6="full" ;
        }
         
         if (previous == "novo"){
           
          
          document.getElementById('bardraw'+barnumber).style.marginTop = "-13%";
          document.getElementById('bardraw'+barnumber).style.marginLeft = "-11%";
          document.getElementById('bardraw'+barnumber).style.left = "46.3%";
          document.getElementById('bardraw'+barnumber).style.top = "74.3%";
  
          previous="full"
         }
          document.getElementById('bar'+barnumber).style.strokeDasharray  = "300%,300%";
          matrix[barnumber][5]="full";
          
        }
      
      else if (novo == "tophalf") {
        if(previous == "bottomhalf"){
          document.getElementById('bar_star_1').value = 'clockwise'
          document.getElementById('bardraw'+barnumber).style.width = "30%";
          document.getElementById('bardraw'+barnumber).style.top = "70%";
          document.getElementById('bardraw'+barnumber).style.left = "48%";
          document.getElementById('bardraw'+barnumber).style.position = "absolute";
          document.getElementById('bardraw'+barnumber).style.marginTop = "-13.2%";
          document.getElementById('bardraw'+barnumber).style.marginLeft = "-13.4%";
          document.getElementById('bardraw'+barnumber).style.height = "458px";


        }
        if(barnumber == 0){
          star0="tophalf" ;
        }
         else if(barnumber == 1){
          star1="tophalf" ;
        }
         else if(barnumber == 2){
          star2="tophalf" ;
        }
         else if(barnumber == 3){
          star3="tophalf" ;
        }
         else if(barnumber == 4){
          star4="tophalf" ;
        }
         else if(barnumber == 5){
          star5="tophalf" ;
        }
         else if(barnumber == 6){
          star6="tophalf" ;
        }
         
        document.getElementById('bardraw'+barnumber).style.marginTop = "-13.2%";
        document.getElementById('bardraw'+barnumber).style.marginLeft = "-13.4%";
        document.getElementById('bardraw'+barnumber).style.width = "30%";
        document.getElementById('bardraw'+barnumber).style.top = "70%";
        document.getElementById('bardraw'+barnumber).style.left = "48%";
        document.getElementById('bardraw'+barnumber).style.height = "458px";
        document.getElementById('bar'+barnumber).style.transform = "rotate(" + 180 + "deg)";
        document.getElementById('bar'+barnumber).style.strokeDasharray  = matrix[barnumber][2] +",200%";
        matrix[barnumber][5]="tophalf";
        matrix[barnumber][3]=-180;
        barradius();
        previous = "tophalf";
      }
      else {
        if(previous == "tophalf"){
          document.getElementById('bar_star_1').value = 'clockwise'
          document.getElementById('bardraw'+barnumber).style.top = "70%";
          document.getElementById('bardraw'+barnumber).style.left = "48%";
          document.getElementById('bardraw'+barnumber).style.position = "absolute";
          document.getElementById('bardraw'+barnumber).style.marginTop = "-13%";
          document.getElementById('bardraw'+barnumber).style.marginLeft = "-11%";
          document.getElementById('bardraw'+barnumber).style.height = "458px";
        }
        
        if(barnumber == 0){
          star0="bottomhalf" ;
         }
         else if(barnumber == 1){
          star1="bottomhalf" ;
         }
         else if(barnumber == 2){
          star2="bottomhalf" ;
         }
         else if(barnumber == 3){
          star3="bottomhalf" ;
         }
         else if(barnumber == 4){
          star4="bottomhalf" ;
         }
         else if(barnumber == 5){
          star5="bottomhalf" ;
         }
         else if(barnumber == 6){
          star6="bottomhalf" ;
         }  
        
        document.getElementById('bardraw'+barnumber).style.marginTop = "-165px";
        document.getElementById('bardraw'+barnumber).style.marginLeft = "-198px";
        document.getElementById('bar'+barnumber).style.transform = "rotate(" + 0 + "deg)";
        document.getElementById('bardraw'+barnumber).style.width = "30%";
        document.getElementById('bardraw'+barnumber).style.height = "458px";
        document.getElementById('bar'+barnumber).style.strokeDasharray  =  matrix[barnumber][2] +",100";
        matrix[barnumber][5]="bottomhalf";
        matrix[barnumber][3]=0;
        barradius();
        previous = "bottomhalf";
      }
    }
     
    
}


var ultima;
export function updaterotation(){

  
  var barnumber = document.getElementById('bar_color_change').value;
  
    if(matrix[barnumber][7]!="pasthouractivaty"){
      if (matrix[barnumber][4]){
        if(barnumber==0){
          barr_0 = "counterclockwise";
        }
        if(barnumber==1){
          barr_1 = "counterclockwise";
        }
        if(barnumber==2){
          barr_2 = "counterclockwise";
        }
        if(barnumber==3){
          barr_3 = "counterclockwise";
        }
        if(barnumber==4){
          barr_4 = "counterclockwise";
        }
        if(barnumber==5){
          barr_5 = "counterclockwise";
        }
        if(barnumber==6){
          barr_6 = "counterclockwise";
        }
        
        if(matrix[barnumber][5] == "full"){
        }
        else {
          if(matrix[barnumber][5] == "bottomhalf"){
            document.getElementById('bardraw'+barnumber).style.marginLeft = "-270px";
            document.getElementById('bardraw'+barnumber).style.left = "52.5%";

          }
          if(matrix[barnumber][5] == "tophalf"){
            document.getElementById('bardraw'+barnumber).style.marginLeft = "-258px";
            document.getElementById('bardraw'+barnumber).style.left = "52.1%";

          }
          var novo = matrix[barnumber][3]
          document.getElementById('bar'+barnumber).style.transform = "rotate(" + novo + "deg) scaleX(-1)";
          document.getElementById('bar'+barnumber).style.transform = "rotate(" + novo + "deg) scaleX(-1)";
          matrix[barnumber][4] = false;
        }
      }
      else {
        if(barnumber==0){
          barr_0 = "clockwise";
        }
        if(barnumber==1){
          barr_1 = "clockwise";
        }
        if(barnumber==2){
          barr_2 = "clockwise";
        }
        if(barnumber==3){
          barr_3 = "clockwise";
        }
        if(barnumber==4){
          barr_4 = "clockwise";
        }
        if(barnumber==5){
          barr_5 = "clockwise";
        }
        if(barnumber==6){
          barr_6 = "clockwise";
        }
        
        
        
        if(matrix[barnumber][5] == "full"){
          document.getElementById('bardraw'+barnumber).style.marginLeft = "-270px";
        }
        document.getElementById('bar'+barnumber).style.transform = "rotate(" + matrix[barnumber][3]  + "deg) "
        document.getElementById('bar'+barnumber).style.transform = "rotate(" + matrix[barnumber][3]  + "deg) "
        matrix[barnumber][4] = true;
        
      }
      
    }
 
}

/*Personalização dos elementos*/



/*drag and drop texto*/
var drop = "node1";

$(function() {
 
  initSwap();
  function initSwap() {
  initDroppable($("#dropdiv div,#dragdiv div"));
  initDraggable($("#dragdiv div,#dropdiv div"));
  }
  function initDraggable($elements) {
  $elements.draggable({
      appendTo: "body",
      helper: "clone",
      revert: "invalid"
  });
  }
  function initDroppable($elements) {
  $elements.droppable({
      activeClass: "ui-state-default",
      hoverClass: "ui-drop-hover",
      accept: ":not(.ui-sortable-helper)",
      over: function(event, ui) {
          var $this = $(this);
          //alert('aqui')
      },
      drop: function(event, ui) {
       
        
        
        var $this = $(this);
        var linew1 = $(this).after(ui.draggable.clone());
        var linew2 = $(ui.draggable).after($(this).clone());

        var moved = ui.draggable.attr("id");// Obtem o id do elemento sendo arrastado

        if (moved==drop) {//Caso seja arrastado da direita para a esquerda
          drop = $(this).attr("id");
          
        }
        else{ //Caso seja arrastado da esquerda para a direita
          drop = moved;
        
          if(moved=="node1"){
            verifica('WT','Digital');}
            else{verifica('WT','Analogico')}           
        }
          $(ui.draggable).remove();
          $(this).remove();
          initSwap();
      }
  });
}
});
// $(function() {
//     $("#dragdiv li,#dropdiv li").draggable({
//         appendTo: "body",
//         helper: "clone",
//         revert: "invalid"
//     });
//     initDroppable($("#dropdiv li,#dragdiv li"));
//     function initDroppable($elements) {
//         $elements.droppable({
//             activeClass: "ui-state-default",
//             hoverClass: "ui-drop-hover",
//             accept: ":not(.ui-sortable-helper)",
//             over: function(event, ui) {
//                 var $this = $(this);
//             },
//             drop: function(event, ui) {
//                 var $this = $(this);
//                 var linew1 = $(this)
//                 var li1 = $('<li id="'+linew1.attr('id') +'">' + ui.draggable.text() + '</li>')
//                 linew1 = $(this).after(li1);
//                 var linew2 = $(ui.draggable)
//                 var li2 = $('<li id="'+linew2.attr('id') +'">' + $(this).text() + '</li>')
//                 linew2 = $(ui.draggable).after(li2);

//                 trocaposicao(linew1.attr('id'),linew2.attr('id'))
//                 trocaposicaoocupada(linew1.attr('id') , linew1.text() , linew2.attr('id') ,linew2.text() )
//                 console.log(linew1.text())
//                 console.log(linew1.attr('id'))
//                 console.log(linew2.text())
//                 console.log(linew2.attr('id'))

//                 $(ui.draggable).remove();
//                 $(this).remove();

//                 initDroppable($("#dropdiv li,#dragdiv li"));
//                 $("#dragdiv li,#dropdiv li").draggable({
//                     appendTo: "body",
//                     helper: "clone",
//                     revert: "invalid"
//                 });
//             }
//         });
//         console.log(matrixtext);
//         console.log(posiçoesocupadas);
//     }
// });
/*drag and drop texto*/


/*posiçoes do texto*/
function trocaposicao(posição_troca, posição_agarrada) {
  for (var i=0; i<8; i++){
    if(matrixtext[i][8]==posição_troca){
      matrixtext[i][8]=posição_agarrada;
    }
    else if (matrixtext[i][8]==posição_agarrada) {
      matrixtext[i][8]=posição_troca;
    }
  }
}


function trocaposicaoocupada (posição_troca, texto_posição_troca, posição_agarrada,texto_posição_agarrada) {
  if(texto_posição_troca=="" && texto_posição_agarrada==""){
  }
  else {
    if(texto_posição_agarrada!="" && texto_posição_troca!=""){

    }
    else{
      var aux1 = 0;
      var aux2 = 0;
      while(id[aux1]!=posição_agarrada){
        aux1 = aux1+ 1;
      }
      while(id[aux2]!=posição_troca){
        aux2 = aux2 + 1;
      }
      if(texto_posição_agarrada!=""){
        posiçoesocupadas[aux1]=0;
        posiçoesocupadas[aux2]=1;
      }
      if(texto_posição_troca!=""){
        posiçoesocupadas[aux2]=0;
        posiçoesocupadas[aux1]=1;
      }
    }
  }
}


function limpa() {
  document.getElementById('primeiro').style.opacity=0;
  document.getElementById('segundo').style.opacity=0;
  document.getElementById('terceiro').style.opacity=0;
  document.getElementById('quinto').style.opacity=0;
//  document.getElementById('sexto').style.opacity=0;
  document.getElementById('setimo').style.opacity=0;
 // document.getElementById('oitavo').style.opacity=0;
}
/*posiçoes do texto*/


console.log(Math.random().toString(36).substring(2, 15))
console.log(Math.random().toString(36).substring(2, 15))
console.log(Math.random().toString(36).substring(2, 15))
console.log(Math.random().toString(36).substring(2, 15))
console.log(Math.random().toString(36).substring(2, 15))


//fechar e abrir menu-----------------
export function abrir(){
  document.getElementById('testes').classList.add('active')
}

export function fechar(){
  document.getElementById('testes').classList.remove('active')
}
//fechar e abrir menu-----------------

export function cod(){

  updatewhatch();
  if(Linha==1){
    verifica('B1T',tipob_0);
    verifica('B1S',tamanho_1);
    verifica('B1R',rad_1);
    verifica('B1STAR',star0);
    verifica('B1STAR1',barr_0);
    verifica('B1C',cor_b0);
  }
  if(Linha==2){
    verifica('B2T',tipob_1);
    verifica('B2S',tamanho_2);
    verifica('B2R',rad_2);
    verifica('B2STAR',star1);
    verifica('B2STAR1',barr_1);
    verifica('B2C',cor_b1);
  }
  if(Linha==3){
    verifica('B3T',tipob_2);
    verifica('B3S',tamanho_3);
    verifica('B3R',rad_3);
    verifica('B3STAR',star2);
    verifica('B3STAR',barr_2);
    verifica('B3C',cor_b2);
  }
  if(Linha==4){
    verifica('B4T',tipob_3);
    verifica('B4S',tamanho_4);
    verifica('B4R',rad_4);
    verifica('B4STAR',star3);
    verifica('B4STAR',barr_3);
    verifica('B4C',cor_b3);
  }
  if(Linha==5){
    verifica('B5T',tipob_4);
    verifica('B5S',tamanho_5);
    verifica('B5R',rad_5);
    verifica('B5STAR',star4);
    verifica('B5STAR1',barr_4);
    verifica('B5C',cor_b4);
  }
  if(Linha==6){
    verifica('B6T',tipob_5);
    verifica('B6S',tamanho_6);
    verifica('B6R',rad_6);
    verifica('B6STAR',star5);
    verifica('B6STAR1',barr_5);
    verifica('B6C',cor_b5);
  }
  if(Linha==7){
    verifica('B7T',tipob_6);
    verifica('B7S',tamanho_7);
    verifica('B7R',rad_6);
    verifica('B7STAR',star6);
    verifica('B7STAR1',barr_6);
    verifica('B7C',cor_b6);
  }
  
  // concatenaraux();
  var i=1;
  // document.getElementById('codee').innerHTML=array_codigo;
  
  if(array_codigo.length<4){
    alert('Não foi introduzida nenhuma configuração');
  }
  while(i<array_codigo.length){
    db.database_new('MAKEYOUROWN',array_codigo[i], array_codigo[i+1]);
    i=i+2;

  }

}
var codigo="Make";
var array_codigo=["MAKE"];

export function concatenar(id,valor){
  array_codigo.push(id,valor);
}
function verifica(id, valor){
  var i = 0;
  while(i<array_codigo.length-1){
    if(id==array_codigo[i]){
      array_codigo[i+1] = valor;
      i++;
      return 0;
    }
    else{
      i++;
    }
   
  }
  concatenar(id, valor);

}
function verifica_apaga(id){
  var i = 0;
  while(i<array_codigo.length-1){
    if(id==array_codigo[i]){
      array_codigo[i] = id
      array_codigo[i+1] = '';
      i++;
      return 0;
    }
    else{
      i++;
    }
   
  }

}

export function tira(){
  document.getElementById('btRemImg_m').classList.remove('active');
  document.getElementById('img_div').style.display = "none";
      document.getElementById('img').style.display = "none";
      document.getElementById('img_backgroud_s').style.display = "none";
      document.getElementById('primeiro').style.opacity=1;
      document.getElementById('segundo').style.opacity=1;
      document.getElementById('terceiro').style.opacity=1;
      document.getElementById('quinto').style.opacity=1;
      document.getElementById('setimo').style.opacity=1;
//      document.getElementById('oitavo').style.opacity=1;
      image = false;
      for (var i = 0; i < 7; i++) {
        if (i==3){

          if(elemento == true){
            posiçoesocupadas[3]=1;
            console.log("true")
          }
        }
        
        else{
          
          posiçoesocupadas[i]=posiçoesocupadas_antigo[i];
          
        }
      }
}