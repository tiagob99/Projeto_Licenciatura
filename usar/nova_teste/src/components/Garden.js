import $ from'jquery';
import 'jquery-ui-dist/jquery-ui';



/*Menu*/
// function togglemenu(){
//  document.getElementById('sidebar').classList.toggle('active');
//  document.getElementById('toggle-btn').classList.toggle('active');
// }
$(function togglemenu1(){
 document.getElementById('first_menu_hidden').classList.toggle('active');
 document.getElementById('remaining_01').classList.toggle('active');
})
$(function togglemenu2(){
 document.getElementById('second_menu_hidden').classList.toggle('active');
})
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
  const fullDate = new Date();
  var hours = fullDate.getHours();
  var minutes = fullDate.getMinutes();
  if (hours<10){
    hours = "0" + hours
  }
  if (minutes < 10){
    minutes = "0" + minutes
  }
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ": " + minutes;
  setInterval(clock,100);
})
/*Relogio Digital*/



/*Relogio analogico*/
$(function timerTick() {
  with (new Date()) {
    var h = 30 * ((getHours() % 12) + getMinutes() / 60);
    var m = 6 * getMinutes();
    var s = 6 * getSeconds();
    document.getElementById('hour_pointer').setAttribute('transform', 'rotate(' + h + ', 50, 50)');
    document.getElementById('minute_pointer').setAttribute('transform', 'rotate(' + m + ', 50, 50)');
    document.getElementById('second_pointer').setAttribute('transform', 'rotate(' + s + ', 50, 50)');
    setTimeout(timerTick, 100);
  }
})
/*Relogio analogico*/



/*Cores*/
$(function background_color(jscolor) {
    document.getElementById('rect').style.backgroundColor = '#' + jscolor
})
$(function digital_color(jscolor) {
    document.getElementById('node1').style.color = '#' + jscolor
})
$(function analog_hours(jscolor) {
    document.getElementById('hour_pointer').style.stroke = '#' + jscolor
})
$(function analog_minutes(jscolor) {
    document.getElementById('minute_pointer').style.stroke = '#' + jscolor
})
$(function analog_seconds(jscolor) {
    document.getElementById('second_pointer').style.stroke = '#' + jscolor
})
$(function center_circule(jscolor) {
    document.getElementById('center_dot').style.stroke = '#' + jscolor
})
/*Cores*/
