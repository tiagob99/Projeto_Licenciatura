import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';

/*Menu*/
var open = false;
var tamanho_que_o_menu_desceu = 0;
export function togglemenu(){
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('toggle-btn').classList.toggle('active');
}
export function togglemenu1(){
  
  document.getElementById('first_menu_hidden').classList.toggle('active');
  document.getElementById('remaining_01').classList.toggle('active');}

export function togglemenu2(){
  document.getElementById('second_menu_hidden').classList.toggle('active');
  document.getElementById('remaining_02').classList.toggle('active');
}
export function togglemenu3(){
  document.getElementById('third_menu_hidden').classList.toggle('active');
  document.getElementById('remaining_03').classList.toggle('active');
  if(open){
    open = false;
    document.getElementById('lastelemente').style.marginTop = 0 + "px";
  }
  else{
    open = true;
    document.getElementById('lastelemente').style.marginTop=tamanho_que_o_menu_desceu+ "px";
  }
}
export function togglemenu4(){
  document.getElementById('fourth_menu_hidden').classList.toggle('active');
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
    document.getElementById('hour_1').innerHTML = hours;
    document.getElementById('minute_1').innerHTML = ": " + minutes;
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
      document.getElementById('hour_pointer_1').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
      document.getElementById('minute_pointer_1').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
      document.getElementById('second_pointer_1').setAttribute('transform', 'rotate(' + s + ', 50, 50)');
    }
    setTimeout(timerTick, 100);
  }

)
/*Relogio analogico*/



/* Change center watch type*/
var watchtype = "digital"
export function updatewhatch() {
  if ( watchtype === "digital"){
    document.getElementById('node2_1').style.display = "initial";
    document.getElementById('node1_1').style.display = "none";
    watchtype = "analog";
  }
  else{
    document.getElementById('node1_1').style.display = "initial";
    document.getElementById('node2_1').style.display = "none";
    watchtype = "digital";
  }
}
/* Change center watch type*/



/*Cores*/
function backgroundcolor(jscolor) {
    document.getElementById('rect').style.backgroundColor = '#' + jscolor;
}
function digitalcolor(jscolor) {
    document.getElementById('node1').style.color = '#' + jscolor;
    document.getElementById('hour_1').style.color = '#' + jscolor;
    document.getElementById('minute_1').style.color = '#' + jscolor;
}
function updateAnalogHours(jscolor) {
    document.getElementById('hour_pointer').style.stroke = '#' + jscolor;
    document.getElementById('hour_pointer_1').style.stroke = '#' + jscolor;
}
function updateAnalogMinutes(jscolor) {
    document.getElementById('minute_pointer').style.stroke = '#' + jscolor;
    document.getElementById('minute_pointer_1').style.stroke = '#' + jscolor;
}
function updateAnalogSeconds(jscolor) {
    document.getElementById('second_pointer').style.stroke = '#' + jscolor;
    document.getElementById('second_pointer_1').style.stroke = '#' + jscolor;
}
function centercricule(jscolor) {
    document.getElementById('center_dot').style.stroke = '#' + jscolor;
    document.getElementById('center_dot_1').style.stroke = '#' + jscolor;
}
function barcolor(jscolor) {
    var novo = document.getElementById('bar_color_change').value;
    document.getElementById("bar"+novo).style.stroke = '#' + jscolor;
}
/*Cores*/



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
var id = ["primeiro", "segundo", "terceiro", "quarto", "quinto", "sexto",  "setimo", "oitavo"]; //posiçoes
var posiçoesocupadas = [0,0,0,0,0,0,0,0];
for (var i=0; i<8; i++){
  matrixtext[i][8]=id[i];
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


  $('#btAdd').click(function() { //Adiciona uma linha
    if (Linha <= 6) {
      
      $(container).append('<div style="height:5550px; margin-top:15px;"  id=baroptions' + Linha + ' ' +
      '<p>Bar ' + (Linha+1) + ' Type <br><br> <select onChange=bartype('+ (Linha  )+' )}} id=bar_type' + (Linha +1)  + ' ' +
      '><option value="currentsteps">Current Steps </option><option value="yesterdaysteps">Yesterday Steps </option><option value="companionsteps">Companion Steps </option><option value="pasthouractivaty">Past Hour Activaty </option><option value="goalactivaty">Goal Activaty </option></select>' +
      '</p><br><p>Circle Bar ' + (Linha+1)+ ' Radius </p><br><input id=barradius' + Linha + '  value="100" max="89" onchange=barradius(' + Linha + ') type="range" name="b_size">'+
      '<p>Bar ' + (Linha+1) + ' Start </p> <br><select id=bar_star' + Linha + '  onChange={barstar(' + Linha + ')} ><option value="tophalf">Top Half</option><option value="full">Full</option><option value="bottomhalf">Bottom Half</option></select>'+
      '<br><br><p>Bar ' + (Linha+1) + ' Rotation </p> <br><select name="bar_rotation" id="bar_star" onChange={updaterotation(' + Linha + ')} ><option value="clockwise">Clockwise</option><option value="counterclockwise">Counterclockwise</option></select>');

      document.getElementById('lastelemente').style.marginTop = tamanho_que_o_menu_desceu + 450 + "px";
      tamanho_que_o_menu_desceu = tamanho_que_o_menu_desceu + 450;

      $('#main').after(container);
      $("body").append('<svg id=bardraw' + Linha + ' ' +
      ' style=" width:55%; height: 75%;  top:45%; left: 67%; border-radius: 100%; position:absolute;  margin-top: -15%;  margin-left: -45%; class="circle-chart" viewbox="0 0 33.83098862 33.83098862">'+
      '<circle class="circle-chart__circle" id="bar' + Linha + '"  stroke="' + cores[Linha]+'" stroke-width="2" stroke-dasharray="30,100" style="transform: rotate(-180deg); transform-origin: center;" fill="none"  cx="16.56" cy="17.1" r="14.9" />'+
      '</svg>')
      Linha = Linha + 1;
      }
  });


  $('#btRemove').click(function() { // Remove uma linha
    if (Linha != 0) {
      Linha = Linha - 1;
      $('#baroptions' + Linha).remove();
      $('#bardraw' + Linha).remove();
      var novo = tamanho_que_o_menu_desceu - 450;
      document.getElementById('lastelemente').style.marginTop = novo + "px";
      if (Linha >= 0) {
        tamanho_que_o_menu_desceu = tamanho_que_o_menu_desceu - 450;
      }
    }
  });


  $('#mesage_type').change(function() { // Adiciona se é de percentangem ou timeframe
    var novo = document.getElementById("mesage_type").value;
    if(novo=="temporaria"){
      $('<select id="mesage_time" onChange={funct}" style="margin-left:10px;">'+
        '<option value="timeframe">Timeframe</option>'+
        '<option value="percentagem">Percentagem</option>'+
      '</select>'+
      '<select id="timeframe" style="margin-left:10px;">'+
      '<option value="10">10 Minutos</option>'+
      '<option value="20">20 Minutos</option>'+
      '<option value="30">30 Minutos</option>'+
      '<option value="40">40 Minutos</option>'+
      '<option value="50">50 Minutos</option>'+
      '<option value="60">60 Minutos</option>'+
      '</select>').insertAfter('#mesage_type')
    }
    else{
      $("#mesage_time").remove();
      $("#percentagem").remove();
      $("#timeframe").remove();
    }
  });


  $('#btAddText').click(function() { //Adiciona uma caixa de texto
    var ha_posiçao_livre = false;
    var novo = 0;
    while (posiçoesocupadas[novo]==1 && novo<8) {
      novo = novo + 1;
    }
    if(posiçoesocupadas[novo]==0){
      ha_posiçao_livre=true;
    }
    if (Texto<8){
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
      matrixtext[Texto][8]=id[novo];
      Texto = Texto + 1;
    }
    console.log(posiçoesocupadas);
    console.log(matrixtext);
  });


  $('#btRemoveText').click(function() { // Remove uma caixa de texto
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
      matrixtext[aux1][6]="";
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
  });


  $('#btAddImg').click(function() { // Adiciona Imagem e remove posiçoes de colocação de texto
    url = true;
    var novo = document.getElementById("url").value;
    var imagem_position = document.getElementById("image_type").value;
    console.log(imagem_position);
    posiçoesocupadas_antigo = posiçoesocupadas;
    posiçoesocupadas = [1,1,1,0,1,1,1,1];
    image = true;
    if(imagem_position=="top"){
      document.getElementById("img").src = novo;
      document.getElementById("img_backgroud").src = novo;
      document.getElementById("img").style.display = "initial";
      document.getElementById("img_div").style.display = "initial";
      limpa();
    }
    else{
      document.getElementById("img").src = novo;
      document.getElementById("img_backgroud").src = novo;
      document.getElementById("img_backgroud").style.display = "initial";
      limpa();
    }

  });


  $('#image_type').change(function() { // Altera o tipo de imagem
    if(url ==true){
      var novo = document.getElementById("image_type").value;
      if(novo=="bakground"){
        document.getElementById('img_backgroud').style.display = "initial";
        document.getElementById('img').style.display = "none";
        document.getElementById('rect').style.display = "none";
      }
      else{
        document.getElementById('img_backgroud').style.display = "none";
        document.getElementById('img').style.display = "initial";
        document.getElementById('rect').style.display = "initial";
      }
    }
  });


  $('#btRemImg').click(function() { // remove Imagem
      document.getElementById('img_div').style.display = "none";
      document.getElementById('img').style.display = "none";
      document.getElementById('img_backgroud').style.display = "none";
      document.getElementById('primeiro').style.opacity=1;
      document.getElementById('segundo').style.opacity=1;
      document.getElementById('terceiro').style.opacity=1;
      document.getElementById('quinto').style.opacity=1;
      document.getElementById('sexto').style.opacity=1;
      document.getElementById('setimo').style.opacity=1;
      document.getElementById('oitavo').style.opacity=1;
      image = false;
      for (var i = 0; i < 8; i++) {
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
export function barsize (barnumber){
      var tamanho = document.getElementById('barsize'+barnumber).value;
  
  tamanho = (tamanho/100)*2+0.1;
  matrix[barnumber][6]=tamanho;
  document.getElementById('bar'+barnumber).style.strokeWidth =  tamanho;
}



function barradius(barnumber) {
  if(matrix[barnumber][5]=="full"){
    var tamanho = document.getElementById('barradius'+barnumber).value;
    tamanho = (tamanho/100)*15+1;
    matrix[barnumber][1]=tamanho;
    document.getElementById('bar'+barnumber).style.r =  tamanho;
    document.getElementById('bar'+barnumber).style.strokeDasharray = 101+",100";
  }
  else if(matrix[barnumber][7]!="pasthouractivaty"){
    var tamanho = document.getElementById('barradius'+barnumber).value;
    tamanho = (tamanho/100)*15+1;
    matrix[barnumber][1]=tamanho;
    document.getElementById('bar'+barnumber).style.r =  tamanho;
    document.getElementById('bar'+barnumber).style.strokeDasharray = (2*3.1415*tamanho)*(matrix[barnumber][2]/100)+",100"; //20 é o tamanho da barra
  }
  else {
    var tamanho = document.getElementById('barradius'+barnumber).value;
    tamanho = (tamanho/100)*15+1;
    matrix[barnumber][1]=tamanho;
    document.getElementById('bar'+barnumber).style.r =  tamanho;
  }
}


export function barstar (barnumber){
    if(matrix[barnumber][7]!="pasthouractivaty"){
      var novo = document.getElementById('bar_star'+barnumber).value;
      if (novo == "full"){
        document.getElementById('bar'+barnumber).style.strokeDasharray  = "101,100";
        matrix[barnumber][5]="full";
      }
      else if (novo == "tophalf") {
        document.getElementById('bar'+barnumber).style.transform = "rotate(" + 180 + "deg)";
        document.getElementById('bar'+barnumber).style.strokeDasharray  = matrix[barnumber][2] +",100";
        matrix[barnumber][5]="tophalf";
        matrix[barnumber][3]=-180;
        barradius(barnumber);
      }
      else {
        document.getElementById('bar'+barnumber).style.transform = "rotate(" + 0 + "deg)";
        document.getElementById('bar'+barnumber).style.strokeDasharray  =  matrix[barnumber][2] +",100";
        matrix[barnumber][5]="bottomhalf";
        matrix[barnumber][3]=0;
        barradius(barnumber);
      }
    }
}



export function updaterotation(barnumber){
  
    if(matrix[barnumber][7]!="pasthouractivaty"){
      if (matrix[barnumber][4]){
        if(matrix[barnumber][5] == "full"){
          var novo = matrix[barnumber][3] -180;
          document.getElementById('bar'+barnumber).style.transform = "rotate(" + novo + "deg) scaleX(-1)";
          document.getElementById('bar'+barnumber).style.transform = "rotate(" + novo + "deg) scaleX(-1)";
          matrix[barnumber][4] = false;
        }
        else {
          var novo = matrix[barnumber][3]
          document.getElementById('bar'+barnumber).style.transform = "rotate(" + novo + "deg) scaleX(-1)";
          document.getElementById('bar'+barnumber).style.transform = "rotate(" + novo + "deg) scaleX(-1)";
          matrix[barnumber][4] = false;
        }
      }
      else {
        document.getElementById('bar'+barnumber).style.transform = "rotate(" + matrix[barnumber][3]  + "deg) "
        document.getElementById('bar'+barnumber).style.transform = "rotate(" + matrix[barnumber][3]  + "deg) "
        matrix[barnumber][4] = true;
      }
    }
  
}


export function bartype(barnumber){
  var novo = document.getElementById('bar_type'+barnumber).value;
  matrix[barnumber][7] = novo;
  switch(novo) {
    
    case "currentsteps":
        document.getElementById('bar'+barnumber).style.strokeDasharray  = "20,100";
        matrix[barnumber][2]=20;
        barradius(barnumber);
        break;
    case "yesterdaysteps":
        document.getElementById('bar'+barnumber).style.strokeDasharray  = "40,100";
        matrix[barnumber][2]=40;
        barradius(barnumber);
        break;
    case "companionsteps":
        document.getElementById('bar'+barnumber).style.strokeDasharray  = "50,100";
        matrix[barnumber][2]=50;
        barradius(barnumber);
        break;
    case "pasthouractivaty":
        document.getElementById('bar'+barnumber).style.strokeDasharray  = "1.35,0.3";
        matrix[barnumber][2]="1.35,0.3";
        break;
    case "goalactivaty":
        document.getElementById('bar'+barnumber).style.strokeDasharray  = "50,100";
        matrix[barnumber][2]=50;
        barradius(barnumber);
        break;
    default:
        console.log("erro");
        break;
  }}

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
