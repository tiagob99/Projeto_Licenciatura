import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';



/*Menu*/
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
  if (drop == "node1") {
    console.log("Digital");
  }
  else {
    console.log("Analogico");
  }
})
/*drag and drop*/



/*Relogio Digital*/
$(function clock(){
  setInterval( () => {
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  if (hours<10){
    hours = "0" + hours
  }
  if (minutes < 10){
    minutes = "0" + minutes
  }
  if(window.location.pathname == '/Mikros'){
   document.getElementById('hour').innerHTML = hours;
   document.getElementById('minute').innerHTML = ": " + minutes;}
   
},100);}



)
/*Relogio Digital*/



/*Relogio analogico*/
  $(function timerTick() {
    
      const fulld = new Date();
      var h = 30 * ((fulld.getHours() % 12) + fulld.getMinutes() / 60);
      var m = 6 * fulld.getMinutes();
      var s = 6 * fulld.getSeconds();
      if(window.location.pathname === '/Mikros'){
      document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
      document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
      document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');}
      setTimeout(timerTick, 100);


    }
    ) 
    
  
/*Relogio analogico*/



/*Cores*/
export function background_color(jscolor) {
    document.getElementById('rect').style.backgroundColor = '#' + jscolor
}
export function digital_color(jscolor) {
    document.getElementById('node1').style.color = '#' + jscolor
}
export function analog_hours(jscolor) {
    document.getElementById('hour_pointer').style.stroke = '#' + jscolor
}
export function analog_minutes(jscolor) {
    document.getElementById('minute_pointer').style.stroke = '#' + jscolor
}
export function analog_seconds(jscolor) {
    document.getElementById('second_pointer').style.stroke = '#' + jscolor
}
export function center_circule(jscolor) {
    document.getElementById('center_dot').style.stroke = '#' + jscolor
}
export function bar_color1(jscolor) {
   document.getElementById('bar1').style.stroke = '#' + jscolor
}
export function bar_color2(jscolor) {
    document.getElementById('bar2').style.stroke = '#' + jscolor
}
/*Cores*/



/*personalização*/
var tamanho_barra1 = 65;
var tamanho_barra2 = 30;
var raio1 = 16;
var raio2 = 14;
var right = true;
var degrees= -90;
var position = "full"


export function bars_radius() {
    var novo = document.getElementById('bar_radius').value;
    novo = (novo/100)*15+1;
    raio1 = novo;
    raio2 = raio1 - 2;
    document.getElementById('bar1').style.r =  raio1;
    document.getElementById('bar1').style.strokeDasharray = (2*3.1415*raio1)*(tamanho_barra1/100)+",100";
    document.getElementById('bar2').style.r =  raio2;
    document.getElementById('bar2').style.strokeDasharray = (2*3.1415*raio2)*(tamanho_barra2/100)+",100";
}


export function bar_thickness_1() {
    var novo = document.getElementById('bar_size1').value;
    novo = (novo/100)*2+0.2;
    document.getElementById('bar1').style.strokeWidth =  novo;
}


export function bar_thickness_2() {
    var novo = document.getElementById('bar_size2').value;
    novo = (novo/100)*2+0.2;
    document.getElementById('bar2').style.strokeWidth =  novo;
}


export function bar_type(){
  var novo = document.getElementById('bar_type').value;
  if (novo == "full"){
    document.getElementById('bar2').style.strokeDasharray  = "30,100"
    document.getElementById('bar2').style.transform = "rotate(" + 270 + "deg)"
    document.getElementById('bar1').style.strokeDasharray  = "65,100"
    document.getElementById('bar1').style.transform = "rotate(" + 270 + "deg)"
    position = "full"
    degrees = -90;
    tamanho_barra1 = 65;
    tamanho_barra2 = 30;
    bars_radius()
  }
  else if (novo == "tophalf") {
    document.getElementById('bar2').style.transform = "rotate(" + 180 + "deg)"
    document.getElementById('bar2').style.strokeDasharray  = "30,100"
    document.getElementById('bar1').style.transform = "rotate(" + 180 + "deg)"
    document.getElementById('bar1').style.strokeDasharray  = "50,100"
    position = "tophalf"
    degrees = -180;
    tamanho_barra1 = 50;
    tamanho_barra2 = 30;
    bars_radius()
  }
  else {
    document.getElementById('bar2').style.transform = "rotate(" + 0 + "deg)"
    document.getElementById('bar2').style.strokeDasharray  = "30,100"
    document.getElementById('bar1').style.transform = "rotate(" + 0 + "deg)"
    document.getElementById('bar1').style.strokeDasharray  = "50,100"
    position = "bottomhalf"
    degrees = 0;
    tamanho_barra1 = 50;
    tamanho_barra2 = 30;
    bars_radius()
  }
}


export function update_rotation(){
  if (right){
    if(position == "full"){
      var novo = degrees -180
      document.getElementById('bar2').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
      document.getElementById('bar1').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
      right = false;
    }
    else {
      var novo = degrees
      document.getElementById('bar2').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
      document.getElementById('bar1').style.transform = "rotate(" + novo + "deg) scaleX(-1)"
      right = false;
    }
  }
  else {
    document.getElementById('bar2').style.transform = "rotate(" + degrees  + "deg) "
    document.getElementById('bar1').style.transform = "rotate(" + degrees  + "deg) "
    right = true;
  }
}
/*personalização*/






