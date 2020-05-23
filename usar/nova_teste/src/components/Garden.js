import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import './jscolor';
import { func } from 'prop-types';


/*Menu*/
var open = false;
var tamanho_que_o_menu_desceu = 0;
var url = false //ainda nai foi adicionado
var image = false;

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
            if(moved=="node1"){
              concatenar('WT','Digital');}
              else{concatenar('WT','Analogico')}           
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


export function funct(){ // Adiciona Imagem e remove posiçoes de colocação de texto
  
  var novo = document.getElementById("mesage_time").value;
  // var total;

  if(novo=="percentagem"){

    // total= document.getElementById('percentagem').value;
    // concatenar('TP',total);

  document.getElementById('tipo_timeframe').classList.remove('active');
   $("body").append(document.getElementById('tipo_percentagem').classList.add('active'));
 }
 else{

  //  total= document.getElementById('timeframe').value;
  //  concatenar('TT',total);

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
  //concatenar('DC',currentVal);
}

export function analog_hours() {
  var x = document.getElementById("myColor2");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('hour_pointer').style.stroke =  currentVal;
  concatenar('HC',currentVal);
}

export function analog_minutes() {
  var x = document.getElementById("myColor3");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('minute_pointer').style.stroke =  currentVal;
  concatenar('MC',currentVal);
}

export function analog_seconds() {
  var x = document.getElementById("myColor4");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('second_pointer').style.stroke =  currentVal;
  concatenar('SC',currentVal);
}

export function center_circule() {
  var x = document.getElementById("myColor5");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('center_dot').style.stroke =  currentVal;
  concatenar('CC',currentVal);
}

export function text_color() {
  var x = document.getElementById("myColor7");
  var currentVal = x.value;
  x.value = currentVal;
  document.getElementById('texto').style.color =  currentVal;
  concatenar('TC',currentVal);
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
  if(document.getElementById('load_type').value == 'url_load'){
    url = true
    novo = document.getElementById("url").value;
    concatenar('TIM','URL');
    concatenar('SRC',novo);
  }
  if(document.getElementById('load_type').value == 'pc'){

    novo= document.getElementById("preview").src;
    concatenar('TIM','PC');
    concatenar('SRC',novo);
  }
  if(document.getElementById('load_type').value == 'pc'){

    // novo = document.getElementById("url").value;
  }
  // var imagem_position = document.getElementById("image_type").value;
  // console.log(imagem_position);
  posiçoesocupadas_antigo = posiçoesocupadas;
  posiçoesocupadas = [1,1,1,0,1,1,1,1];
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
  document.getElementById('img_div').style.display = "none";
      document.getElementById('img').style.display = "none";
      document.getElementById('img_backgroud').style.display = "none";
      document.getElementById('primeiro').style.opacity=1;
      document.getElementById('segundo').style.opacity=1;
      document.getElementById('terceiro').style.opacity=1;
      document.getElementById('quinto').style.opacity=1;
      document.getElementById('setimo').style.opacity=1;
      document.getElementById('oitavo').style.opacity=1;
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
// $('#image_type').change(function() { // Altera o tipo de imagem
//   if(url ==true){
//     var novo = document.getElementById("image_type").value;
//     if(novo=="bakground"){
//       document.getElementById('img_backgroud').style.display = "initial";
//       document.getElementById('img').style.display = "none";
//       document.getElementById('rect').style.display = "none";
//     }
//     else{
//       document.getElementById('img_backgroud').style.display = "none";
//       document.getElementById('img').style.display = "initial";
//       document.getElementById('rect').style.display = "initial";
//     }
//   }
// });
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

/*Cores*/


/*POP-UP-------------antigo---*/
// export function inicia(){
//   const popup= document.getElementById("pop-up-prom");
//   console.log(popup);
  // popup.classList.add('mostrar');
// }

// inicia('pop-up-prom');

// const popup=document.querySelector('.aqui');
// popup.addEventListener('click', () => inicia('pop-up-prom'));
/*POP-UP--------------antigo--*/  

//MODAL+++++++++++++++++++++++++++++++++++++++++++++


// Modal.setAppElement('#main');

// class ExampleApp extends React.Component {
//   constructor () {
//     super();
//     this.state = {
//       showModal: false
//     };
    
//     this.handleOpenModal = this.handleOpenModal.bind(this);
//     this.handleCloseModal = this.handleCloseModal.bind(this);
//   }
  
//   handleOpenModal () {
//     this.setState({ showModal: true });
//   }
  
//   handleCloseModal () {
//     this.setState({ showModal: false });
//   }
  
//   render () {
//     return (
//       <div>
//         <button onClick={this.handleOpenModal}>Trigger Modal</button>
//         <Modal 
//            isOpen={this.state.showModal}
//            contentLabel="onRequestClose Example"
//            onRequestClose={this.handleCloseModal}
//         >
//           <p>Modal text!</p>
//           <button onClick={this.handleCloseModal}>Close Modal</button>
//         </Modal>
//       </div>
//     );
//   }
// }

// const props = {};

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))


//MODAL+++++++++++++++++++++++++++++++++++++++++++++

//modal 2.0---------------------------------------
// Modal.setAppElement('#root')
// function pop(){
//   const [modalIsOpen,setModalIsOpen]= useState(false)
//   return(
//     <div className="pop">
//       <button onClick={() => setModalIsOpen(true)}>Open</button>
//       <Modal isOpen={modalIsOpen}>
//         <h2>Titulo</h2>
//         <p>Cuidado</p>
//       </Modal>
//     </div>
//   );
// }
// export default pop;
//modal 2.0---------------------------------------


 //  Texto------------------------------------------
  /*vetores cores iniciais*/
  var cores = ["#FF0000", "#FFFFFF", "#00FF00", "#0000FF", "#FF4AD7", "#FF8400",  "#FFFFD7"];
  /*vetores cores iniciais*/
  
  // /*Matriz barras iniciais*/
  // var matrix = [];
  // for(var i=0; i<7; i++) {
  //     matrix[i] =  new Array(7);
  // }
  // for(var i=0; i<7; i++) {
  //   matrix[i][0]=i;
  //   matrix[i][1]=16;
  //   matrix[i][2]=20;
  //   matrix[i][3]=-180;
  //   matrix[i][4]=true;
  //   matrix[i][5]="tophalf";
  //   matrix[i][6]=2;
  //   matrix[i][7]="csteps";
  // }
  // /*Matriz barras iniciais*/
  
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
  var id = ["primeiro", "segundo", "terceiro", "quarto", "quinto",  "setimo", "oitavo"]; //posiçoes
  var posiçoesocupadas = [0,0,0,0,0,0,0];
  for (var i=0; i<7; i++){
    matrixtext[i][7]=id[i];
  }
  /*Matriz texto inicial*/
  
  /*adicionar elementos*/
  var Linha = 0;
  var Texto = 0;
  var url = false //ainda nai foi adicionado
  var image = false;
  var posiçoesocupadas_antigo;
  var elemento = false;
  // function bartype(barnumber){
  //   alert('bar_type'+barnumber)
  //   var novo = document.getElementById('bar_type'+barnumber).value;
  //   alert('bar_type'+barnumber);
  //   matrix[barnumber][7] = novo;
    
  //   }
  
  
  $(document).ready(function() {
  
    var container = $(document.createElement('div')).css({ padding: '2px', margin: '2px', width: '370px', height: '450px'});
    var containertext = $(document.createElement('div')).css({padding: '2px', margin: '2px', width: '170px', height: '200px'});
  
  
    // $('#btAdd1').click(function() { //Adiciona uma linha
    //   if (Linha <= 6) {
    //     $(container).append('<div style="height:5550px; margin-top:15px;"  id=baroptions' + Linha + ' ' +
    //     '<p>Bar ' + (Linha+1) + ' Type <br><br> <select id="bar_type'+ (Linha) +' " onChange= ' +bartype(+(Linha-1))+
    //     '><option value="currentsteps">Current Steps </option><option value="yesterdaysteps">Yesterday Steps </option><option value="companionsteps">Companion Steps </option><option value="pasthouractivaty">Past Hour Activaty </option><option value="goalactivaty">Goal Activaty </option></select>' +
    //     '</p><br><p>Circle Bar ' + (Linha+1)+ ' Radius </p><br><input id=barradius' + Linha + '  value="100" max="89" onchange=barradius(' + Linha + ') type="range" name="b_size">'+
    //     '<p>Bar ' + (Linha+1) + ' Start </p> <br><select id=bar_star' + Linha + '  onChange={barstar(' + Linha + ')} ><option value="tophalf">Top Half</option><option value="full">Full</option><option value="bottomhalf">Bottom Half</option></select>'+
    //     '<br><br><p>Bar ' + (Linha+1) + ' Rotation </p> <br><select name="bar_rotation" id="bar_star" onChange={updaterotation(' + Linha + ')} ><option value="clockwise">Clockwise</option><option value="counterclockwise">Counterclockwise</option></select>');
        
    //     document.getElementById('lastelemente').style.marginTop = tamanho_que_o_menu_desceu + 450 + "px";
    //     tamanho_que_o_menu_desceu = tamanho_que_o_menu_desceu + 450;
  
    //     $('#main').after(container);
    //     $("body").append('<svg id=bardraw' + Linha + ' ' +
    //     ' style=" width:530px; height: 530px;  top:50%; left: 50%; border-radius: 100%; position:absolute;  margin-top: -203px;  margin-left: -270px; class="circle-chart" viewbox="0 0 33.83098862 33.83098862">'+
    //     '<circle class="circle-chart__circle" id="bar' + Linha + '"  stroke="' + cores[Linha]+'" stroke-width="2" stroke-dasharray="30,100" style="transform: rotate(-180deg); transform-origin: center;" fill="none"  cx="16.59" cy="15.56" r="14" />'+
    //     '</svg>')
    //     Linha = Linha + 1;
    //     }
    // });
  
  
    // $('#btRemove1').click(function() { // Remove uma linha
    //   if (Linha != 0) {
    //     Linha = Linha - 1;
    //     $('#baroptions' + Linha).remove();
    //     $('#bardraw' + Linha).remove();
    //     var novo = tamanho_que_o_menu_desceu - 450;
    //     document.getElementById('lastelemente').style.marginTop = novo + "px";
    //     if (Linha >= 0) {
    //       tamanho_que_o_menu_desceu = tamanho_que_o_menu_desceu - 450;
    //     }
    //   }
    // });
  
  
    $('#mesage_type').change(function() { // Adiciona se é de percentangem ou timeframe
      var novo = document.getElementById("mesage_type").value;
      concatenar('MT',novo);
      if(novo=="temporaria"){
        $("body").append(document.getElementById('mesage_time').classList.add('active'));
        $("body").append(document.getElementById('tipo_timeframe').classList.add('active'));

        // var total=document.getElementById('percentagem').value;
        // concatenar('TP', total);
        // $('<select id="mesage_time" onChange={funct} style="margin-left:10px;">'+
        //   '<option value="timeframe">Timeframe</option>'+
        //   '<option value="percentagem">Percentagem</option>'+
        // '</select>'+
        // '<select id="timeframe" style="margin-left:10px;">'+
        // '<option value="10">10 Minutos</option>'+
        // '<option value="20">20 Minutos</option>'+
        // '<option value="30">30 Minutos</option>'+
        // '<option value="40">40 Minutos</option>'+
        // '<option value="50">50 Minutos</option>'+
        // '<option value="60">60 Minutos</option>'+
        // '</select>').insertAfter('#mesage_type')
      }
      else{
        $("body").append(document.getElementById('mesage_time').classList.remove('active'));
        
        $("body").append(document.getElementById('percentagem').classList.remove('active'));
        
        $("body").append(document.getElementById('timeframe').classList.remove('active'));
        $("body").append(document.getElementById('tipo_timeframe').classList.remove('active'));
        $("body").append(document.getElementById('tipo_percentagem').classList.remove('active'));
        
      }
    });

     
    

    
    //aqui**************************************************************************************************
    
    /*adicionar elementos*/
    

  
  
  
    $('#btAddText').click(function() { //Adiciona uma caixa de texto
      var ha_posiçao_livre = false;
      var novo = 0;
      while (posiçoesocupadas[novo]==1 && novo<7) {
        novo = novo + 1;
      }
      if(posiçoesocupadas[novo]==0){
        ha_posiçao_livre=true;
      }
      if (Texto<7){
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
        matrixtext[Texto][7]=id[novo];
        Texto = Texto + 1;
      }
      console.log(posiçoesocupadas);
      console.log(matrixtext);
  
      if(document.getElementById('oitavo').innerHTML!=""){
        concatenar('PO',document.getElementById('oitavo').innerHTML);}
  
       else if(document.getElementById('setimo').innerHTML!=""){
        concatenar('PSE',document.getElementById('setimo').innerHTML);}
  
       else if(document.getElementById('quinto').innerHTML!=""){
       concatenar('PQI',document.getElementById('quinto').innerHTML);}
  
       else if(document.getElementById('quarto').innerHTML!=""){
        concatenar('PQ',document.getElementById('quarto').innerHTML);}
  
       else if(document.getElementById('terceiro').innerHTML!=""){
        concatenar('PT',document.getElementById('terceiro').innerHTML);}
  
       else if(document.getElementById('segundo').innerHTML!=""){
       concatenar('PS',document.getElementById('segundo').innerHTML);}
  
       else if(document.getElementById('primeiro').innerHTML!=""){
         concatenar('PP',document.getElementById('primeiro').innerHTML);}
  
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
        while(id[aux1]!=matrixtext[Texto][7]){
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
        // matrixtext[aux1][7]="";
        $('#'+  matrixtext[Texto][7]).text("");
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
        posiçoesocupadas= [1,1,1,0,1,1,1];
        $('#quarto').text("");
        elemento = false;
        console.log("aa33a")
      }
      // if(document.getElementById('primeiro').innerHTML!=""){
      //   concatenar('PP',document.getElementById('primeiro').innerHTML)}
  
      //   if(document.getElementById('segundo').innerHTML!=""){
      //   concatenar('PS',document.getElementById('segundo').innerHTML);}
  
      //   if(document.getElementById('terceiro').innerHTML!=""){
      //   concatenar('PT',document.getElementById('terceiro').innerHTML);}
  
      //   if(document.getElementById('quarto').innerHTML!=""){
      //   concatenar('PQ',document.getElementById('quarto').innerHTML);}
  
      //   if(document.getElementById('quinto').innerHTML!=""){
      //   concatenar('PQI',document.getElementById('quinto').innerHTML);}
  
      //   if(document.getElementById('setimo').innerHTML!=""){
      //   concatenar('PSE',document.getElementById('setimo').innerHTML);}
  
      //   if(document.getElementById('oitavo').innerHTML!=""){
      //   concatenar('PO',document.getElementById('oitavo').innerHTML);}
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
      // concatenar('TIM','URL');
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
      // concatenar('TIM','PC')
      $('#url').remove();
      document.getElementById('load_type').insertAdjacentHTML('beforebegin',
      '<input type="file" id="filetag"> <img src="" id="preview">')

      //document.getElementById('preview').style.top='150%';
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
  //fechar e abrir menu-----------------


  //CODIGO
  var codigo="Gardens";
   var array_codigo=["GARDENS"];
  // var array_codigo= [];
  
  export function concatenar(id,valor){
    //codigo=codigo + '|' + id + '|' + valor;
    //

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
  var aux_array_codigo=[];
 
  // export function concatenaraux(){
  //   alert(aux_array_codigo)
  //   var i = array_codigo.length-1;
  //   var j = 0;
  //   // for(var i=0; i>2; i++){
  //   //   alert('aqui');
  //     while(i>0){
  //       if(aux_array_codigo.length == 0){
  //         aux_array_codigo.push(array_codigo[i-1],array_codigo[i]);
  //       }
  //       else{
  //         //alert(aux_array_codigo.length);
  //         while(j<aux_array_codigo.length){
            
  //           j++;
  //          alert(array_codigo[i-1])
  //           alert(aux_array_codigo[j-1])
  //           if(array_codigo[i-1] == aux_array_codigo[j-1]){
  //             alert('aqui');

  //             aux_array_codigo.splice(1,2,array_codigo[i]);
  //             //aux_array_codigo.push(array_codigo[i-1],array_codigo[i]);
  //             j=aux_array_codigo.length;
              
  //           }
  //           else if(array_codigo[i-1] != aux_array_codigo[j-1]){
              
  //           }
  //           else{
  //             alert('aui')
  //             aux_array_codigo.push(array_codigo[i-1],array_codigo[i]);
  //           }
            
              
          
            
            
  //         }
          
          
  //       }
  //     i=i-2;
  //   }
      
      
  //   // }
  //   //alert(array_codigo);
  //   //array_codigo = aux_array_codigo;
  //   //alert(array_codigo);
  // }

  export function cod(){
    
    // concatenaraux();

    document.getElementById('codee').innerHTML=array_codigo;
    // document.getElementById('codee').innerHTML=codigo;
    
    
  }
  //CODIGO

  export function first(posicao){
  concatenar(posicao,document.getElementById(posicao).innerHTML)
}

//CODIGO-PERCENTAGEM
export function troca(){
  var total= document.getElementById('timeframe').value;
  concatenar('TT',total);

}

export function troca2(){
  var total= document.getElementById('percentagem').value;
  concatenar('TP',total);

}
//CODIGO-PERCENTAGEM


