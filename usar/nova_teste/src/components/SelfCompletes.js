import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import './jscolor';
import * as db from './database';



/*Menu*/
var open = false;
var tamanho_que_o_menu_desceu = 0;

 export function togglemenu(){
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('toggle-btn').classList.toggle('active');
   }
export function togglemenu1(){
    document.getElementById('first_menu_hidden111').classList.toggle('active');
    document.getElementById('remaining_111').classList.toggle('active');
   }
export function togglemenu2(){
    document.getElementById('second_menu_hidden').classList.toggle('active');
    document.getElementById('remaining_02').classList.toggle('active');
   }
export function togglemenu3(){
    document.getElementById('third_menu_hidden').classList.toggle('active');
    document.getElementById('remaining_03').classList.toggle('active');
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
                else  {verifica('WT','Analogico')}   
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
   
   
   
   /*Relogio Digital*/
   $(function clock(){ 
    setInterval(() => {
     const fullDate = new Date();
     var hours = fullDate.getHours();
     var minutes = fullDate.getMinutes();
     if (hours<10){  //se for menor que 10 acrescentar um 0 (06)
       hours = "0" + hours
     }
     if (minutes < 10){  //se for menor que 10 acrescentar um 0 (06)
       minutes = "0" + minutes
     }
     if(window.location.pathname == '/SelfComplete'){
        document.getElementById('hour').innerHTML = hours;
        document.getElementById('minute').innerHTML = ": " + minutes;}
     },100);
    })
   /*Relogio Digital*/
   
   
   
   /*Relogio analogico*/
   $(function timerTick() {
        const date= new Date();
            var h = 30 * ((date.getHours() % 12) + date.getMinutes() / 60);
            var m = 6 * date.getMinutes();
            var s = 6 * date.getSeconds();
                if(window.location.pathname === '/SelfComplete'){ //JSX
                    document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
                    document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
                    document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');}
                setTimeout(timerTick, 100);  
     })
   /*Relogio analogico*/

  //tipo de mensagem
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
  //tipo de mensagem 
   
   
   /*Cores*/
   export function background_color() {
    var x = document.getElementById("myColor");
    var currentVal = x.value;
    x.value = currentVal;
    document.getElementById('rect').style.backgroundColor =  currentVal;
      verifica('BC',currentVal);
 
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
      var x = document.getElementById("myColor9");
      var currentVal = x.value;
      x.value = currentVal;
      document.getElementById('aqui').style.color =  currentVal;
        verifica('TC',currentVal);
    }
  
    export function line_color_today() {
      var x = document.getElementById("myColor6");
      var currentVal = x.value;
      x.value = currentVal;
      document.getElementById('today_bar').style.stroke =  currentVal;
        verifica('TBC', currentVal);
    }
    export function line_color_yesterday() {
      var x = document.getElementById("myColor7");
      var currentVal = x.value;
      x.value = currentVal;
      document.getElementById('yesterday_bar').style.stroke =  currentVal;
        verifica('YBC', currentVal);
    }
   /*Cores*/
   
   
   
   /*personalização*/
   var tamanho_barra_today = 18;
   var tamanho_barra_yesterday = 65;
   var raio = 16;
   var degrees= -90;
   var right = true;
   var position = "full";
   
   
   export function bar_thickness_today() {
       var novo = document.getElementById('bar_thickness_today').value;
       novo = (novo/100)*2+0.1;
       document.getElementById('today_bar').style.strokeWidth =  novo;
          verifica('BT1', novo);
   }
   
   
   export function bar_thickness_yesterday() {
       var novo = document.getElementById('bar_thickness_yesterday').value;
       novo = (novo/100)*2+0.1;
       document.getElementById('yesterday_bar').style.strokeWidth =  novo;
          verifica('BT2', novo);
   }
   
   
   export function bar_type(){
    
     var novo = document.getElementById('bar_type').value;
        verifica('BSTAR',novo);
     if (novo == "full"){
       document.getElementById('today_bar').style.strokeDasharray  = "18,100"
       document.getElementById('today_bar').style.transform = "rotate(" + 270 + "deg)"
       document.getElementById('yesterday_bar').style.strokeDasharray  = "65,100"
       document.getElementById('yesterday_bar').style.transform = "rotate(" + 270 + "deg)"
       position = "full"
       tamanho_barra_yesterday = 65;
       degrees = -90;
       bar_radius_today();
       bar_radius_yesterday();
     }
     else if (novo == "tophalf") {
       document.getElementById('today_bar').style.transform = "rotate(" + 180 + "deg)"
       document.getElementById('today_bar').style.strokeDasharray  = "18,100"
       document.getElementById('yesterday_bar').style.transform = "rotate(" + 180 + "deg)"
       document.getElementById('yesterday_bar').style.strokeDasharray  = "50,100"
       position = "tophalf"
       degrees = -180;
       tamanho_barra_yesterday = 50;
       bar_radius_today();
       bar_radius_yesterday();
     }
     else {
       document.getElementById('today_bar').style.transform = "rotate(" + 0 + "deg)"
       document.getElementById('today_bar').style.strokeDasharray  = "18,100"
       document.getElementById('yesterday_bar').style.transform = "rotate(" + 0 + "deg)"
       document.getElementById('yesterday_bar').style.strokeDasharray  = "50,100"
       position = "bottomhalf"
       degrees = 0;
       tamanho_barra_yesterday = 50;
       bar_radius_today();
       bar_radius_yesterday();
     }
   }
   
   
   export function update_rotation(){
     if (right){
        verifica('BROT','CTCWISE');
       if(position == "full"){
         var novo = degrees -180
         document.getElementById('today_bar').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
         document.getElementById('yesterday_bar').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
         right = false;
       }
       else {
         var novo = degrees
         document.getElementById('today_bar').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
         document.getElementById('yesterday_bar').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
         right = false;
       }
     }
     else {
        verifica('BROT','CWISE');
       document.getElementById('today_bar').style.transform = "rotate(" + degrees  + "deg) "
       document.getElementById('yesterday_bar').style.transform = "rotate(" + degrees  + "deg) "
       right = true;
     }
   }
   
   
   export function bar_radius_today() {
       var novo = document.getElementById('bar_radius_today').value;
       novo = (novo/100)*15+1;
          verifica('BR1',novo);
      var circle = document.getElementById('today_bar');
      circle.setAttribute("r", novo);
      //  document.getElementById('today_bar').style.r =  novo;
        document.getElementById('today_bar').style.strokeDasharray = (2*3.1415*novo)*(tamanho_barra_today/100)+",100";
   }
   
   
   export function bar_radius_yesterday() {
       var novo = document.getElementById('bar_radius_yesterday').value;
       novo = (novo/100)*15+1;
          verifica('BR2',novo);
      var circle = document.getElementById('yesterday_bar');
      circle.setAttribute("r", novo);
       document.getElementById('yesterday_bar').style.strokeDasharray = (2*3.1415*novo)*(tamanho_barra_yesterday/100)+",100";
   }
   
   
   /*personalização*/
   


  //  Texto------------------------------------------
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
var id = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "setimo"]; //posiçoes
var posiçoesocupadas = [0,0,0,0,0,0];
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
function bartype(barnumber){
  
  var novo = document.getElementById('bar_type'+barnumber).value;
  
  matrix[barnumber][7] = novo;
  
  }


$(document).ready(function() {

  var container = $(document.createElement('div')).css({ padding: '2px', margin: '2px', width: '370px', height: '450px'});
  var containertext = $(document.createElement('div')).css({padding: '2px', margin: '2px', width: '170px', height: '200px'});


  // 


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
    //       verifica('PO',document.getElementById('oitavo').innerHTML);}

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
      // matrixtext[aux1][6]="";
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



/*Personalização dos elementos*/
export function barsize (barnumber){
      var tamanho = document.getElementById('barsize'+barnumber).value;
  
  tamanho = (tamanho/100)*2+0.1;
  matrix[barnumber][6]=tamanho;
  document.getElementById('bar'+barnumber).style.strokeWidth =  tamanho;
}




/*Personalização dos elementos*/



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
  document.getElementById('sexto').style.opacity=0;
  document.getElementById('setimo').style.opacity=0;
  document.getElementById('oitavo').style.opacity=0;
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

//CODIGO
var codigo="SelfComplete";

var array_codigo=["SELFCOMPLETE"];

export function  concatenar(id,valor){
  // codigo=codigo + '|' + id + '|' + valor;
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





export function cod(){
  // document.getElementById('codee').innerHTML=array_codigo;
  var i=1;
  if(array_codigo.length<2){
    alert('Não foi introduzida nenhuma configuração');
  }
  while(i<array_codigo.length){
    db.database_new('SelfComplete',array_codigo[i], array_codigo[i+1]);
    i=i+2;
  }
  
}
//CODIGO

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
export function second_bar_value(){
  if(document.getElementById('second_bar_value').value == 'yesterday'){
      verifica('SBV','YESTERDAY');
  }
  else{
      verifica('SBV','OTHER');
  }
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