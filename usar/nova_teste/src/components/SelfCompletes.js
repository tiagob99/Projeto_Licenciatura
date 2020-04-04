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
      document.getElementById('minute_pointer').style.stroke =  currentVal;   }

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
      var x = document.getElementById("myColor8");
      var currentVal = x.value;
      x.value = currentVal;
      document.getElementById('texto').style.color =  currentVal;
   }
  
    export function line_color_today() {
      var x = document.getElementById("myColor6");
      var currentVal = x.value;
      x.value = currentVal;
      document.getElementById('today_bar').style.stroke =  currentVal;
   }
    export function line_color_yesterday() {
      var x = document.getElementById("myColor7");
      var currentVal = x.value;
      x.value = currentVal;
      document.getElementById('yesterday_bar').style.stroke =  currentVal;
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
   }
   
   
   export function bar_thickness_yesterday() {
       var novo = document.getElementById('bar_thickness_yesterday').value;
       novo = (novo/100)*2+0.1;
       document.getElementById('yesterday_bar').style.strokeWidth =  novo;
   }
   
   
   export function bar_type(){
     var novo = document.getElementById('bar_type').value;
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
       document.getElementById('today_bar').style.transform = "rotate(" + degrees  + "deg) "
       document.getElementById('yesterday_bar').style.transform = "rotate(" + degrees  + "deg) "
       right = true;
     }
   }
   
   
   export function bar_radius_today() {
       var novo = document.getElementById('bar_radius_today').value;
       novo = (novo/100)*15+1;
       document.getElementById('today_bar').style.r =  novo;
       document.getElementById('today_bar').style.strokeDasharray = (2*3.1415*novo)*(tamanho_barra_today/100)+",100";
   }
   
   
   export function bar_radius_yesterday() {
       var novo = document.getElementById('bar_radius_yesterday').value;
       novo = (novo/100)*15+1;
       document.getElementById('yesterday_bar').style.r =  novo;
       document.getElementById('yesterday_bar').style.strokeDasharray = (2*3.1415*novo)*(tamanho_barra_yesterday/100)+",100";
   }
   
   
   export function text_size() {
       var novo = document.getElementById('text_size').value;
       document.getElementById('texto').style.fontSize = novo + "px";
   }
   /*personalização*/
   