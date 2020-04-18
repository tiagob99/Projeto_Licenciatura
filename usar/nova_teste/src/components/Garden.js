import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import './jscolor';





/*Menu*/
var open = false;
var tamanho_que_o_menu_desceu = 0;

export function togglemenu(){
 document.getElementById('sidebar').classList.toggle('active');
 document.getElementById('toggle-btn').classList.toggle('active');
}
export function togglemenu1(){
 document.getElementById('first_menu_hidden').classList.toggle('active');
 document.getElementById('remaining_01').classList.toggle('active');
}
export function togglemenu2(){
 document.getElementById('second_menu_hidden').classList.toggle('active');
 document.getElementById('remaining_222').classList.toggle('active');
}

// export function togglemenu3(){
//   document.getElementById('third_menu_hidden').classList.toggle('active');
//   document.getElementById('remaining_03').classList.toggle('active');
//  }
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
  if (hours<10){
    hours = "0" + hours
  }
  if (minutes < 10){
    minutes = "0" + minutes
  }

  if(window.location.pathname == '/Gardens'){
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
    if(window.location.pathname === '/Gardens'){
      document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
      document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
      document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');}
    setTimeout(timerTick, 100);
  })

/*Relogio analogico*/



/*Cores*/

export function background_color() {
  var x = document.getElementById("myColor");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('rect').style.backgroundColor =  currentVal;

}

export function digital_color() {
  var x = document.getElementById("myColor1");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('node1').style.color =  currentVal;
}

export function analog_hours() {
  var x = document.getElementById("myColor2");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('hour_pointer').style.stroke =  currentVal;
}

export function analog_minutes() {
  var x = document.getElementById("myColor3");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('minute_pointer').style.stroke =  currentVal;
}

export function analog_seconds() {
  var x = document.getElementById("myColor4");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('second_pointer').style.stroke =  currentVal;
}

export function center_circule() {
  var x = document.getElementById("myColor5");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('center_dot').style.stroke =  currentVal;
}

export function text_color() {
  var x = document.getElementById("myColor7");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('texto').style.color =  currentVal;
 }
/*Cores*/


/*POP-UP----------------*/
export function inicia(){
  const popup= document.getElementById("pop-up-prom");
  console.log(popup);
  // popup.classList.add('mostrar');
}

// inicia('pop-up-prom');

// const popup=document.querySelector('.aqui');
// popup.addEventListener('click', () => inicia('pop-up-prom'));
/*POP-UP----------------*/  



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
  function bartype(barnumber){
    alert('bar_type'+barnumber)
    var novo = document.getElementById('bar_type'+barnumber).value;
    alert('bar_type'+barnumber);
    matrix[barnumber][7] = novo;
    
    }
  
  
  $(document).ready(function() {
  
    var container = $(document.createElement('div')).css({ padding: '2px', margin: '2px', width: '370px', height: '450px'});
    var containertext = $(document.createElement('div')).css({padding: '2px', margin: '2px', width: '170px', height: '200px'});
  
  
    $('#btAdd1').click(function() { //Adiciona uma linha
      if (Linha <= 6) {
        $(container).append('<div style="height:5550px; margin-top:15px;"  id=baroptions' + Linha + ' ' +
        '<p>Bar ' + (Linha+1) + ' Type <br><br> <select id="bar_type'+ (Linha) +' " onChange= ' +bartype(+(Linha-1))+
        '><option value="currentsteps">Current Steps </option><option value="yesterdaysteps">Yesterday Steps </option><option value="companionsteps">Companion Steps </option><option value="pasthouractivaty">Past Hour Activaty </option><option value="goalactivaty">Goal Activaty </option></select>' +
        '</p><br><p>Circle Bar ' + (Linha+1)+ ' Radius </p><br><input id=barradius' + Linha + '  value="100" max="89" onchange=barradius(' + Linha + ') type="range" name="b_size">'+
        '<p>Bar ' + (Linha+1) + ' Start </p> <br><select id=bar_star' + Linha + '  onChange={barstar(' + Linha + ')} ><option value="tophalf">Top Half</option><option value="full">Full</option><option value="bottomhalf">Bottom Half</option></select>'+
        '<br><br><p>Bar ' + (Linha+1) + ' Rotation </p> <br><select name="bar_rotation" id="bar_star" onChange={updaterotation(' + Linha + ')} ><option value="clockwise">Clockwise</option><option value="counterclockwise">Counterclockwise</option></select>');
        
        document.getElementById('lastelemente').style.marginTop = tamanho_que_o_menu_desceu + 450 + "px";
        tamanho_que_o_menu_desceu = tamanho_que_o_menu_desceu + 450;
  
        $('#main').after(container);
        $("body").append('<svg id=bardraw' + Linha + ' ' +
        ' style=" width:530px; height: 530px;  top:50%; left: 50%; border-radius: 100%; position:absolute;  margin-top: -203px;  margin-left: -270px; class="circle-chart" viewbox="0 0 33.83098862 33.83098862">'+
        '<circle class="circle-chart__circle" id="bar' + Linha + '"  stroke="' + cores[Linha]+'" stroke-width="2" stroke-dasharray="30,100" style="transform: rotate(-180deg); transform-origin: center;" fill="none"  cx="16.59" cy="15.56" r="14" />'+
        '</svg>')
        Linha = Linha + 1;
        }
    });
  
  
    $('#btRemove1').click(function() { // Remove uma linha
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
  
  
    $('#mesage_type1').change(function() { // Adiciona se é de percentangem ou timeframe
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
        $("#mesage_time1").remove();
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
        var variable_text =$('#first_variable1').val();
        var variable_text1 =$('#third_variable1').val();
        var variable_text2 = $('#fifth_variable1').val();
        var text = $('#second_variable1').val();
        var text2 = $('#fourth_variable1').val();
        var tipo_mensagem = $('#mesage_type1').val();
        var tipo_mensagem1 = $('#mesage_time1').val();
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
  
  });
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
    document.getElementById('primeiro1').style.opacity=0;
    document.getElementById('segundo1').style.opacity=0;
    document.getElementById('terceiro1').style.opacity=0;
    document.getElementById('quinto1').style.opacity=0;
    document.getElementById('sexto1').style.opacity=0;
    document.getElementById('setimo1').style.opacity=0;
    document.getElementById('oitavo1').style.opacity=0;
  }
  /*posiçoes do texto*/
  
  
  console.log(Math.random().toString(36).substring(2, 15))
  console.log(Math.random().toString(36).substring(2, 15))
  console.log(Math.random().toString(36).substring(2, 15))
  console.log(Math.random().toString(36).substring(2, 15))
  console.log(Math.random().toString(36).substring(2, 15))
     
