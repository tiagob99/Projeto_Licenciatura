import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';
import './jscolor';





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
/*Cores*/
