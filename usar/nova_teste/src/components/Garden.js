import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import firebase from 'firebase';
import './jscolor';
import { func } from 'prop-types';
import * as db from './database';
import Gardens from './Gardens';
import * as login from './Login/Data';
import * as data from './Login/Data';
import * as database from './database';



import React from 'react';
import axios from 'axios';



/*Menu*/
var open = false;
var tamanho_que_o_menu_desceu = 0;
var url = false //ainda nai foi adicionado
var image = false;
// export var resultado;
// export var mikro = [];
// export var garden = [];
// export var self = [];
// export var simple = [];
// export var thirty = [];
// export var make = [];


export function togglemenu(){
 document.getElementById('sidebar').classList.toggle('active');
 document.getElementById('toggle-btn').classList.toggle('active');
}
export function togglemenu1(){
 document.getElementById('first_menu_hidden1').classList.toggle('active');
 document.getElementById('remaining_1').classList.toggle('active');
}
export function togglemenu2(){
 document.getElementById('second_menu_hidden').classList.toggle('active');
 document.getElementById('remaining_222').classList.toggle('active');
}


export function togglemenu4(){
  document.getElementById('fourth_menu_hidden').classList.toggle('active');
  
 }
/*Menu*/

/*drag and drop*/
var drop = "node2"
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


$(function readropzone() {
  if (drop == "Li1") {
    console.log("none");
  }
  else if (drop == "node1") {
    console.log("Digital");
    
  }
  else {
    console.log("Analogico");
    

  }
})
/*drag and drop*/

var minutes;
var seconds;
/*Relogio Digital*/
$(function clock(){
  setInterval(() => {
  const fullDate = new Date();
  var hours = fullDate.getHours();
   minutes = fullDate.getMinutes();
   seconds = fullDate.getSeconds();
  if (hours<10){
    hours = "0" + hours
  }
  if (minutes < 10){
    minutes = "0" + minutes
  }

  if(window.location.pathname === '/Gardens'){
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ": " + minutes;}},
  100);
})
/*Relogio Digital*/


/*Relogio analogico -- foi preciso colocar o new date numa variável certo??*/ 
$(function timerTick() {
  const aqui =new Date();
    var h = 30 * ((aqui.getHours() % 12) + aqui.getMinutes() / 60);
    var m = 6 * aqui.getMinutes();
    var s = 6 * aqui.getSeconds();
    if(window.location.pathname == '/Gardens'){
      document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
      document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
      document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');}
    setTimeout(timerTick, 100);
  })

/*Relogio analogico*/


export function funct(){ // Adiciona Imagem e remove posiçoes de colocação de texto
  
  var novo = document.getElementById("mesage_time").value;
  

  if(novo=="percentagem"){


  document.getElementById('tipo_timeframe').classList.remove('active');
   $("body").append(document.getElementById('tipo_percentagem').classList.add('active'));
 }
 else{


  document.getElementById('tipo_percentagem').classList.remove('active');
   $("body").append(document.getElementById('tipo_timeframe').classList.add('active'));
   
 }
 }
 var final_m;
 var final_s;
 export function tempo(){
  var novo = document.getElementById("timeframe").value;
  var conta ;
  if(novo == "10"){
    conta = minutes + 1;
  }
  if(novo == "20"){
    conta = minutes + 20;
  }
  if(novo == "30"){
    conta = minutes + 30;
  }
  if(novo == "40"){
    conta = minutes + 40;
  }
  if(novo == "50"){
    conta = minutes + 50;
  }
  if(novo == "60"){
    conta = minutes + 60;
  }
  if(conta > 60){
    final_m= conta-60;
    final_s= seconds;
  }
  else{
    final_m= conta;
    final_s= seconds;

  }
 }
 setInterval(function remove_tempo(){
   
   if(minutes==final_m){
    if(seconds == final_s){
      if(posiçoesocupadas[Texto-1]==0){  //erro
        Texto = Texto - 1;
        console.log("a11aa")
      }
      if (Texto > 0 && image==false && posiçoesocupadas[Texto-1]==1) { //erro
        console.log("22aaa")
        Texto = Texto - 1;
        var aux1 = 0;
        while(id[aux1]!=matrixtext[Texto][8]){
          aux1 = aux1+ 1;
        }
        posiçoesocupadas[aux1]=0;
        matrixtext[aux1][0]="none";
        matrixtext[aux1][1]="";
        matrixtext[aux1][2]="none";
        matrixtext[aux1][3]="";
        matrixtext[aux1][4]="none";
        matrixtext[aux1][5]="fixa";
        matrixtext[aux1][6]="fixa";
        matrixtext[aux1][7]="";
        $('#'+  matrixtext[Texto][8]).text("");
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
        posiçoesocupadas= [1,1,1,0,1,1,1,1];
        $('#quarto').text("");
        elemento = false;
        console.log("aa33a")
      }
    }
    }
 },0)
/*Cores*/

export function background_color() {
  var x = document.getElementById("myColor");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('rect').style.backgroundColor =  currentVal;
  verifica('BC',currentVal);
  //concatenar('BC',currentVal);

}

export function digital_color() {
  var x = document.getElementById("myColor1");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('node1').style.color =  currentVal;
  verifica('DC',currentVal);
}

export function analog_hours() {
  var x = document.getElementById("myColor2");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('hour_pointer').style.stroke =  currentVal;
  verifica('HC',currentVal);
}

export function analog_minutes() {
  var x = document.getElementById("myColor3");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('minute_pointer').style.stroke =  currentVal;
  verifica('MC',currentVal);
}

export function analog_seconds() {
  var x = document.getElementById("myColor4");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('second_pointer').style.stroke =  currentVal;
  verifica('SC',currentVal);
}

export function center_circule() {
  var x = document.getElementById("myColor5");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('center_dot').style.stroke =  currentVal;
  verifica('CC',currentVal);
}

export function text_color() {
  var x = document.getElementById("myColor7");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('texto').style.color =  currentVal;
  verifica('TC',currentVal);
 }
 
 
 export function image_change(){
 var valor1 = document.getElementById("images").value;
   var texto1  = 'Esta imagem irá aparecer quando atingir os '
   var texto2 = 'A segunda imagem irá aparecer quando atingir os '
   var texto3 = 'A teceira imagem irá aparecer quando atingir os '
   document.getElementById("h3_").innerHTML = texto1 + document.getElementById("images").value + '%';
   if(document.getElementById("images").value != 100){
     if(document.getElementById("images_2").classList == ''){
      document.getElementById("h3_1").innerHTML = texto2 + document.getElementById("images").value + '%';
      document.getElementById("images_2").classList.add("active");
      
      document.getElementById("images_2").defaultValue = document.getElementById("images").value;
      
     }
     else{
       if(document.getElementById("images_2").value < document.getElementById("images").value){
        if(document.getElementById("images_2").value != 100){
          document.getElementById("images_2").value = document.getElementById("images").value;
        }
       }
       else{
        //document.getElementById("images_2").value = document.getElementById("images_2").value;
        document.getElementById("h3_1").innerHTML = texto2 + document.getElementById("images_2").value + '%';

       }

     }
     if(document.getElementById("images_2").value != 100){
     
      if(document.getElementById("images_3").classList == ''){
        document.getElementById("h3_2").innerHTML = texto3 + document.getElementById("images_2").value + '%';
        document.getElementById("images_3").classList.add("active");
       
        document.getElementById("images_3").defaultValue = document.getElementById("images_2").value;
     }
     else{
      if(document.getElementById("images_3").value < document.getElementById("images_2").value){
        if(document.getElementById("images_3").value != 100){
        document.getElementById("images_3").value = document.getElementById("images_2").value;
        }
        else{
          document.getElementById("images_3").value = 100;
          document.getElementById("h3_2").innerHTML = texto3 + '100%';
        }
      }
      else{
      document.getElementById("h3_2").innerHTML = texto3 + document.getElementById("images_3").value + '%';
    } 
    }
   
  }
   else{
    document.getElementById("images_2").value = 100;
    document.getElementById("h3_1").innerHTML = texto2 + '100%';
    document.getElementById("h3_2").innerHTML ="";
    document.getElementById("images_3").classList.remove("active");

   }
    
    
   }
   else{
    document.getElementById("h3_1").innerHTML = "";
    document.getElementById("images_2").classList.remove("active");
    document.getElementById("h3_2").innerHTML = "";
    document.getElementById("images_3").classList.remove("active");
   }
   

   
 
}
export function clica() { // Adiciona Imagem e remove posiçoes de colocação de texto
  var novo;
  document.getElementById('btRemImg').classList.add('active');
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
  posiçoesocupadas_antigo = posiçoesocupadas;
  posiçoesocupadas = [1,1,1,0,1,1,1];
  image = true;
  
    document.getElementById("img").src = novo;
    document.getElementById("img_backgroud").src = novo;
    document.getElementById("img_backgroud").style.display = "initial";
    document.getElementById('img_backgroud').style.display = "initial";
      document.getElementById('img').style.display = "none";
      document.getElementById('rect').style.display = "none";
    limpa();
    
    
};
export function tira(){
  document.getElementById('btRemImg').classList.remove('active');
  document.getElementById('img_div').style.display = "none";
      document.getElementById('img').style.display = "none";
      document.getElementById('img_backgroud').style.display = "none";
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

// $('#btRemImg').click(function() { // remove Imagem
//   // document.getElementById('img_div').style.display = "none";
//   // document.getElementById('img').style.display = "none";
//   // document.getElementById('img_backgroud').style.display = "none";
//   // document.getElementById('primeiro').style.opacity=1;
//   // document.getElementById('segundo').style.opacity=1;
//   // document.getElementById('terceiro').style.opacity=1;
//   // document.getElementById('quinto').style.opacity=1;
//   // document.getElementById('sexto').style.opacity=1;
//   // document.getElementById('setimo').style.opacity=1;
//   // document.getElementById('oitavo').style.opacity=1;
//   // image = false;
//   // for (var i = 0; i < 8; i++) {
//   //   if(i==0){
//   //     alert('aqui')
//   //   }
//   //   if (i==3){
//   //     if(elemento == true){
//   //       posiçoesocupadas[3]=1;
//   //       console.log("true")
//   //     }
//   //   }

//   //   else{
//   //     posiçoesocupadas[i]=posiçoesocupadas_antigo[i];
//   //   }
//   // }
//   alert('aqui')
//   document.getElementById('img_div').style.display = "none";
//         document.getElementById('img').style.display = "none";
//         document.getElementById('img_backgroud').style.display = "none";
//         document.getElementById('primeiro').style.opacity=1;
//         document.getElementById('segundo').style.opacity=1;
//         document.getElementById('terceiro').style.opacity=1;
//         document.getElementById('quinto').style.opacity=1;
//         document.getElementById('setimo').style.opacity=1;
//   //      document.getElementById('oitavo').style.opacity=1;
//         image = false;
//         for (var i = 0; i < 7; i++) {
//           if (i==3){
  
//             if(elemento == true){
//               posiçoesocupadas[3]=1;
//               console.log("true")
//             }
//           }
          
//           else{
            
//             posiçoesocupadas[i]=posiçoesocupadas_antigo[i];
//           }
//         }
// });

/*Cores*/


 //  Texto------------------------------------------
  /*vetores cores iniciais*/
  var cores = ["#FF0000", "#FFFFFF", "#00FF00", "#0000FF", "#FF4AD7", "#FF8400",  "#FFFFD7"];
  /*vetores cores iniciais*/
  
  
  
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
  var posiçoesocupadas = [0,0,0,0,0,0,0];
  for (var i=0; i<6; i++){
    matrixtext[i][6]=id[i];
  }
  /*Matriz texto inicial*/
  
  /*adicionar elementos*/
  var Linha = 0;
  var Texto = 0;
  var url = false //ainda nai foi adicionado
  var image = false;
  var posiçoesocupadas_antigo;
  var elemento = false;
 
  
  
  $(document).ready(function() {
  
    var container = $(document.createElement('div')).css({ padding: '2px', margin: '2px', width: '370px', height: '450px'});
    var containertext = $(document.createElement('div')).css({padding: '2px', margin: '2px', width: '170px', height: '200px'});
  
  
  
  
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

     
    

    
    
    
    /*adicionar elementos*/
    

  
  
  
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
            tipo_mensagem2 = $('#timeframe').val();
          }
          else{
            tipo_mensagem2 = $('#percentagem').val();
          }
          matrixtext[Texto][6]=tipo_mensagem1;
          matrixtext[Texto][7]=tipo_mensagem2;
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
  
  });
  /*adicionar elementos*/
  
  
  
  /*drag and drop texto*/
  $(function() {
      $("#dragdiv li,#dropdiv li").draggable({
          appendTo: "body",
          helper: "clone",
          revert: "invalid"
      });
      initDroppable($("#dropdiv li,#dragdiv li"));
      function initDroppable($elements) {
          $elements.droppable({
              activeClass: "ui-state-default",
              hoverClass: "ui-drop-hover",
              accept: ":not(.ui-sortable-helper)",
              over: function(event, ui) {
                  var $this = $(this);
              },
              drop: function(event, ui) {
                  var $this = $(this);
                  var linew1 = $(this)
                  var li1 = $('<li id="'+linew1.attr('id') +'">' + ui.draggable.text() + '</li>')
                  linew1 = $(this).after(li1);
                  var linew2 = $(ui.draggable)
                  var li2 = $('<li id="'+linew2.attr('id') +'">' + $(this).text() + '</li>')
                  linew2 = $(ui.draggable).after(li2);
  
                  trocaposicao(linew1.attr('id'),linew2.attr('id'))
                  trocaposicaoocupada(linew1.attr('id') , linew1.text() , linew2.attr('id') ,linew2.text() )
                  console.log(linew1.text())
                  console.log(linew1.attr('id'))
                  console.log(linew2.text())
                  console.log(linew2.attr('id'))
  
                  $(ui.draggable).remove();
                  $(this).remove();
  
                  initDroppable($("#dropdiv li,#dragdiv li"));
                  $("#dragdiv li,#dropdiv li").draggable({
                      appendTo: "body",
                      helper: "clone",
                      revert: "invalid"
                  });
              }
          });
          console.log(matrixtext);
          console.log(posiçoesocupadas);
      }
  });
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
 //   document.getElementById('sexto').style.opacity=0;
    document.getElementById('setimo').style.opacity=0;
//    document.getElementById('oitavo').style.opacity=0;
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
    if(document.getElementById('imagens').classList == 'active'){

      document.getElementById('imagens').style.top = '150%';
    }
    else{
      document.getElementById('imagens').style.top = '10%';
    }
  }

  export function fechar(){
    document.getElementById('testes').classList.remove('active')
  }

  export function add_image(){
    if(document.getElementById('imagens').classList == 'active'){
      document.getElementById('imagens').classList.remove('active')
  }
  else{
    document.getElementById('imagens').classList.add('active');
    if(document.getElementById('testes').classList == 'active'){

      document.getElementById('imagens').style.top = '150%';
    }
    else{
      document.getElementById('imagens').style.top = '10%';
    }
    
  }

  }


  export function escolha(){
    if(document.getElementById('load_type').value == 'url_load'){
      document.getElementById('images_2').style.top = '290%';
      document.getElementById('images_3').style.top = '390%';
      $('#filetag').remove();
      $('#preview').remove();
      document.getElementById('load_type').insertAdjacentHTML('beforebegin',
      '<input type="text" id="url" placeholder="Url" style={{marginRight: "10px"}} />');
    }
    
    if(document.getElementById('load_type').value == 'pc'){
      document.getElementById('images_2').style.top = '400%';
      document.getElementById('images_3').style.top = '490%';
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


  //CODIGO
  var codigo="Gardens";
   var array_codigo=["GARDENS"];

  export function concatenar(id,valor){

   array_codigo.push(id,valor);
    
    
  }
  export function concatenar1(id,valor){

    array.push(id,valor);
     
     
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
  var aux_array_codigo=[];

 
  var j=0;
  function updatewhatch() {
    
  
    if ( document.getElementsByClassName('child elementos')[1].id === "node2" ){
      verifica('WT','Analogico');
      
      
    }
    else{
      j++;
      verifica('WT','Digital');
    }
  
  }

  export function cod(){
    updatewhatch();

    if(j<1){
      if(array_codigo.length<4){
        alert('Não foi introduzida nenhuma configuração');
        
      }
    }
    var i=1;
    // document.getElementById('codee').innerHTML=array_codigo;
    while(i<array_codigo.length){
      db.database_new('Gardens',array_codigo[i], array_codigo[i+1]);
      i=i+2;

    }
  }
  
  //CODIGO

  export function first(posicao){
  verifica(posicao,document.getElementById(posicao).innerHTML)
}

//CODIGO-PERCENTAGEM
export function troca(){
  var total= document.getElementById('timeframe').value;
  verifica('TT',total);

}

export function troca2(){
  var total= document.getElementById('percentagem').value;
  verifica('TP',total);

}
//CODIGO-PERCENTAGEM



var dados_f=[];

// function bd (){

//   console.log('--------------------------------'); 
//   axios.get('https://projeto-licenciatura-6e421.firebaseio.com/.json').then(res=>dados_f=res.data); 
//   console.log(dados_f);
  
// };

// bd();


// async function axiosTest() {
//   const response = await axios.get('https://projeto-licenciatura-6e421.firebaseio.com/.json');
//   const data = await response.json(); 
//   console.log('____________________________');
//   console.log(data);
// }



export var array = [];
// export function fetch(){
  
// //   var database = firebase.database();
// //   var starCountRef = firebase.database().ref('z1FVkRNAO2cLgrNOTPjHOxsV4Bj1/' + 'Mikros' + '/BC' );
// //   starCountRef.on('value', function(snapshot) {
// //   const teste = snapshot.child('value').val();
// //   alert(teste);
  
// //   });
 
// }
// function fetch(){
//   // let array = [];
  
//   const starCountRef = firebase.database().ref('z1FVkRNAO2cLgrNOTPjHOxsV4Bj1/' + 'Mikros' + '/BC' );
//   starCountRef.once('value', function(snapshot) {
//   // array.push(snapshot.child('value').val());
//   var l = snapshot.child('value').val();
//   resultado=l;
//   alert('inserido')
//   alert(resultado)
  
//   });
  
 
// }
// export function fetch(arr,page){
//   var uti = firebase.auth().currentUser;
//   var t = uti.uid;
//   alert(t)
//   const starCountRef = firebase.database().ref('z1FVkRNAO2cLgrNOTPjHOxsV4Bj1/' + page );
//   starCountRef.on('value', function(snapshot) {
//   var l = snapshot.child('value').val();
//   resultado=l;
//   // alert('inserido')
//   snapshot.forEach(function(childSnapshot) {
//     var childKey = childSnapshot.key;
//     const s = firebase.database().ref('z1FVkRNAO2cLgrNOTPjHOxsV4Bj1/' + page + '/' + childKey );
//       s.on('value', function(snapshot) {
//       var k = snapshot.child('value').val();
//       arr.push(childKey, k);
//     })
//     // alert (childKey)
//   });
//   // alert(arr)
//   });
// }