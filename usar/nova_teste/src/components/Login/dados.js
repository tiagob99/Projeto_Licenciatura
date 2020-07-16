import firebase from 'firebase';
import { Component } from 'react';
import axios from 'axios';
import * as garden from '../Garden';



var mik= false;
var gar= false;

function ver_mikro(valor,m,i){
            if(garden.mikro[i]==valor){
                m.innerHTML = garden.mikro[i+1];
            }
            
        }
    


function ver_garden(valor,m,i){
    if(garden.garden[i]==valor){
        m.innerHTML = garden.garden[i+1];
    }

}
function ver_self(valor,m,i){
    if(garden.self[i]==valor){
        m.innerHTML = garden.self[i+1];
    }

}
function ver_simple(valor,m,i){
    if(garden.simple[i]==valor){
        m.innerHTML = garden.simple[i+1];
    }

}
function ver_thirty(valor,m,i){
    if(garden.thirty[i]==valor){
        m.innerHTML = garden.thirty[i+1];
    }

}
function ver_make(valor,m,i){
    if(garden.make[i]==valor){
        m.innerHTML = garden.make[i+1];
        
    }

}
function SRC_g(m,i){
    if(garden.garden[i]=='SRC'){
        m.innerHTML='<a href = "'+ garden.garden[i+1] + '">Link<a/>'
    }
}
function SRC_mik(m,i){
    if(garden.mikro[i]=='SRC'){
        m.innerHTML='<a href = "'+ garden.mikro[i+1] + '">Link<a/>'
    }
}
function SRC_s(m,i){
    if(garden.self[i]=='SRC'){
        m.innerHTML='<a href = "'+ garden.self[i+1] + '">Link<a/>'
    }
}
function SRC_si(m,i){
    if(garden.simple[i]=='SRC'){
        m.innerHTML='<a href = "'+ garden.simple[i+1] + '">Link<a/>'
    }
}
function SRC_t(m,i){
    if(garden.thirty[i]=='SRC'){
        m.innerHTML='<a href = "'+ garden.thirty[i+1] + '">Link<a/>'
    }
}
function SRC_m(m,i){
    if(garden.make[i]=='SRC'){
        m.innerHTML='<a href = "'+ garden.make[i+1] + '">Link<a/>'
    }
}

export function funcao(){
    
    

    var table = document.getElementById("myTable");
        var row = table.insertRow();
        var mikros_cell1 = row.insertCell();
        var mikros_cell2 = row.insertCell();
        var mikros_cell3 = row.insertCell();
        var mikros_cell4 = row.insertCell();
        var mikros_cell5 = row.insertCell();
        var mikros_cell6 = row.insertCell();
        var mikros_cell7 = row.insertCell();
        var mikros_cell8 = row.insertCell();
        var mikros_cell9 = row.insertCell();
        var mikros_cell10 = row.insertCell();
        var mikros_cell11 = row.insertCell();
        var mikros_cell12 = row.insertCell();
        var mikros_cell13 = row.insertCell();
        var mikros_cell14 = row.insertCell();
        var mikros_cell15 = row.insertCell();
        var mikros_cell16 = row.insertCell();
        var mikros_cell17 = row.insertCell();
        var mikros_cell18 = row.insertCell();
        var mikros_cell19 = row.insertCell();
        var mikros_cell20 = row.insertCell();
        var mikros_cell21 = row.insertCell();
        var mikros_cell22 = row.insertCell();
        var mikros_cell23 = row.insertCell();
        var mikros_cell24 = row.insertCell();
        var mikros_cell25 = row.insertCell();
        var mikros_cell26 = row.insertCell();
        var mikros_cell27 = row.insertCell();
        var mikros_cell28 = row.insertCell();
        var mikros_cell29 = row.insertCell();
        var mikros_cell30 = row.insertCell();
        var mikros_cell31 = row.insertCell();
        var mikros_cell32 = row.insertCell();
        var mikros_cell33 = row.insertCell();
        var mikros_cell34 = row.insertCell();
        var row2 = table.insertRow();
        var garden_cell1 = row2.insertCell();
        var garden_cell2 = row2.insertCell();
        var garden_cell3 = row2.insertCell();
        var garden_cell4 = row2.insertCell();
        var garden_cell5 = row2.insertCell();
        var garden_cell6 = row2.insertCell();
        var garden_cell7 = row2.insertCell();
        var garden_cell8 = row2.insertCell();
        var garden_cell9 = row2.insertCell();
        var garden_cell10 = row2.insertCell();
        var garden_cell11 = row2.insertCell();
        var garden_cell12 = row2.insertCell();
        var garden_cell13 = row2.insertCell();
        var garden_cell14 = row2.insertCell();
        var garden_cell15 = row2.insertCell();
        var garden_cell16 = row2.insertCell();
        var garden_cell17 = row2.insertCell();
        var garden_cell18 = row2.insertCell();
        var garden_cell19 = row2.insertCell();
        var garden_cell20 = row2.insertCell();
        var garden_cell21 = row2.insertCell();
        var garden_cell22 = row2.insertCell();
        var garden_cell23 = row2.insertCell();
        var garden_cell24 = row2.insertCell();
        var garden_cell25 = row2.insertCell();
        var garden_cell26 = row2.insertCell();
        var garden_cell27 = row2.insertCell();
        var garden_cell28 = row2.insertCell();
        var garden_cell29 = row2.insertCell();
        var garden_cell30 = row2.insertCell();
        var garden_cell31 = row2.insertCell();
        var garden_cell32 = row2.insertCell();
        var garden_cell33 = row2.insertCell();
        var garden_cell34 = row2.insertCell();

        // Self
        var row3 = table.insertRow();
        var self_cell1 = row3.insertCell();
        var self_cell2 = row3.insertCell();
        var self_cell3 = row3.insertCell();
        var self_cell4 = row3.insertCell();
        var self_cell5 = row3.insertCell();
        var self_cell6 = row3.insertCell();
        var self_cell7 = row3.insertCell();
        var self_cell8 = row3.insertCell();
        var self_cell9 = row3.insertCell();
        var self_cell10 = row3.insertCell();
        var self_cell11 = row3.insertCell();
        var self_cell12 = row3.insertCell();
        var self_cell13 = row3.insertCell();
        var self_cell14 = row3.insertCell();
        var self_cell15 = row3.insertCell();
        var self_cell16 = row3.insertCell();
        var self_cell17 = row3.insertCell();
        var self_cell18 = row3.insertCell();
        var self_cell19 = row3.insertCell();
        var self_cell20 = row3.insertCell();
        var self_cell21 = row3.insertCell();
        var self_cell22 = row3.insertCell();
        var self_cell23 = row3.insertCell();
        var self_cell24 = row3.insertCell();
        var self_cell25 = row3.insertCell();
        var self_cell26 = row3.insertCell();
        var self_cell27 = row3.insertCell();
        var self_cell28 = row3.insertCell();
        var self_cell29 = row3.insertCell();
        var self_cell30 = row3.insertCell();
        var self_cell31 = row3.insertCell();
        var self_cell32 = row3.insertCell();
        var self_cell33 = row3.insertCell();
        var self_cell34 = row3.insertCell();

        //Simple
        var row4 = table.insertRow();
        var simple_cell1 = row4.insertCell();
        var simple_cell2 = row4.insertCell();
        var simple_cell3 = row4.insertCell();
        var simple_cell4 = row4.insertCell();
        var simple_cell5 = row4.insertCell();
        var simple_cell6 = row4.insertCell();
        var simple_cell7 = row4.insertCell();
        var simple_cell8 = row4.insertCell();
        var simple_cell9 = row4.insertCell();
        var simple_cell10 = row4.insertCell();
        var simple_cell11 = row4.insertCell();
        var simple_cell12 = row4.insertCell();
        var simple_cell13 = row4.insertCell();
        var simple_cell14 = row4.insertCell();
        var simple_cell15 = row4.insertCell();
        var simple_cell16 = row4.insertCell();
        var simple_cell17 = row4.insertCell();
        var simple_cell18 = row4.insertCell();
        var simple_cell19 = row4.insertCell();
        var simple_cell20 = row4.insertCell();
        var simple_cell21 = row4.insertCell();
        var simple_cell22 = row4.insertCell();
        var simple_cell23 = row4.insertCell();
        var simple_cell24 = row4.insertCell();
        var simple_cell25 = row4.insertCell();
        var simple_cell26 = row4.insertCell();
        var simple_cell27 = row4.insertCell();
        var simple_cell28 = row4.insertCell();
        var simple_cell29 = row4.insertCell();
        var simple_cell30 = row4.insertCell();
        var simple_cell31 = row4.insertCell();
        var simple_cell32 = row4.insertCell();
        var simple_cell33 = row4.insertCell();
        var simple_cell34 = row4.insertCell();
        //Thirty
        var row5 = table.insertRow();
        var thirty_cell1 = row5.insertCell();
        var thirty_cell2 = row5.insertCell();
        var thirty_cell3 = row5.insertCell();
        var thirty_cell4 = row5.insertCell();
        var thirty_cell5 = row5.insertCell();
        var thirty_cell6 = row5.insertCell();
        var thirty_cell7 = row5.insertCell();
        var thirty_cell8 = row5.insertCell();
        var thirty_cell9 = row5.insertCell();
        var thirty_cell10 = row5.insertCell();
        var thirty_cell11 = row5.insertCell();
        var thirty_cell12 = row5.insertCell();
        var thirty_cell13 = row5.insertCell();
        var thirty_cell14 = row5.insertCell();
        var thirty_cell15 = row5.insertCell();
        var thirty_cell16 = row5.insertCell();
        var thirty_cell17 = row5.insertCell();
        var thirty_cell18 = row5.insertCell();
        var thirty_cell19 = row5.insertCell();
        var thirty_cell20 = row5.insertCell();
        var thirty_cell21 = row5.insertCell();
        var thirty_cell22 = row5.insertCell();
        var thirty_cell23 = row5.insertCell();
        var thirty_cell24 = row5.insertCell();
        var thirty_cell25 = row5.insertCell();
        var thirty_cell26 = row5.insertCell();
        var thirty_cell27 = row5.insertCell();
        var thirty_cell28 = row5.insertCell();
        var thirty_cell29 = row5.insertCell();
        var thirty_cell30 = row5.insertCell();
        var thirty_cell31 = row5.insertCell();
        var thirty_cell32 = row5.insertCell();
        var thirty_cell33 = row5.insertCell();
        var thirty_cell34 = row5.insertCell();
        //Make
        var row6 = table.insertRow();
        var make_cell1 = row6.insertCell();
        var make_cell2 = row6.insertCell();
        var make_cell3 = row6.insertCell();
        var make_cell4 = row6.insertCell();
        var make_cell5 = row6.insertCell();
        var make_cell6 = row6.insertCell();
        var make_cell7 = row6.insertCell();
        var make_cell8 = row6.insertCell();
        var make_cell9 = row6.insertCell();
        var make_cell10 = row6.insertCell();
        var make_cell11 = row6.insertCell();
        var make_cell12 = row6.insertCell();
        var make_cell13 = row6.insertCell();
        var make_cell14 = row6.insertCell();
        var make_cell15 = row6.insertCell();
        var make_cell16 = row6.insertCell();
        var make_cell17 = row6.insertCell();
        var make_cell18 = row6.insertCell();
        var make_cell19 = row6.insertCell();
        var make_cell20 = row6.insertCell();
        var make_cell21 = row6.insertCell();
        var make_cell22 = row6.insertCell();
        var make_cell23 = row6.insertCell();
        var make_cell24 = row6.insertCell();
        var make_cell25 = row6.insertCell();
        var make_cell26 = row6.insertCell();
        var make_cell27 = row6.insertCell();
        var make_cell28 = row6.insertCell();
        var make_cell29 = row6.insertCell();
        var make_cell30 = row6.insertCell();
        var make_cell31 = row6.insertCell();
        var make_cell32 = row6.insertCell();
        var make_cell33 = row6.insertCell();
        var make_cell34 = row6.insertCell();
        //var i=0;
        
    mikros_cell1.innerHTML = 'Mikros';
    for(var i=0;i<garden.mikro.length;i++){
        ver_mikro('WT', mikros_cell2,i);
        ver_mikro('BC', mikros_cell3,i);
        ver_mikro('DC', mikros_cell4,i);
        ver_mikro('HC', mikros_cell5,i);
        ver_mikro('MC', mikros_cell6,i);
        ver_mikro('SC', mikros_cell7,i);
        ver_mikro('CC', mikros_cell8,i);
        ver_mikro('TC', mikros_cell9,i);
        ver_mikro('B1C', mikros_cell10,i);
        ver_mikro('B2C', mikros_cell11,i);
        ver_mikro('TBC', mikros_cell12,i);
        ver_mikro('YBC', mikros_cell13,i);
        ver_mikro('TIM', mikros_cell14,i);
        SRC_mik('SRC', mikros_cell15,i);
        ver_mikro('MT', mikros_cell16,i);
        ver_mikro('PP', mikros_cell17,i);
        ver_mikro('PS', mikros_cell18,i);
        ver_mikro('PT', mikros_cell19,i);
        ver_mikro('PQ', mikros_cell20,i);
        ver_mikro('PQI', mikros_cell21,i);
        ver_mikro('PSE', mikros_cell22,i);
        ver_mikro('PO', mikros_cell23,i);
        ver_mikro('TP', mikros_cell24,i);
        ver_mikro('TT', mikros_cell25,i);
        ver_mikro('BR1', mikros_cell26,i);
        ver_mikro('BR2', mikros_cell27,i);
        ver_mikro('BT1', mikros_cell28,i);
        ver_mikro('BT2', mikros_cell29,i);
        ver_mikro('BTYPE', mikros_cell30,i);
        ver_mikro('BROT', mikros_cell31,i);
        ver_mikro('TEXT', mikros_cell32,i);
        ver_mikro('TEXT_S', mikros_cell33,i);
        ver_mikro('SBV', mikros_cell34,i);
    }
            
    
    garden_cell1.innerHTML = 'Gardens';
    for( var i=0;i<garden.garden.length;i++){
        
        ver_garden('WT', garden_cell2,i);
        ver_garden('BC', garden_cell3,i);
        ver_garden('DC', garden_cell4,i);
        ver_garden('HC', garden_cell5,i);
        ver_garden('MC', garden_cell6,i);
        ver_garden('SC', garden_cell7,i);
        ver_garden('CC', garden_cell8,i);
        ver_garden('TC', garden_cell9,i);
        ver_garden('B1C', garden_cell10,i);
        ver_garden('B2C', garden_cell11,i);
        ver_garden('TBC', garden_cell12,i);
        ver_garden('YBC', garden_cell13,i);
        ver_garden('TIM', garden_cell14,i);
        SRC_g('SRC', garden_cell15,i);
        ver_garden('MT', garden_cell16,i);
        ver_garden('PP', garden_cell17,i);
        ver_garden('PS', garden_cell18,i);
        ver_garden('PT', garden_cell19,i);
        ver_garden('PQ', garden_cell20,i);
        ver_garden('PQI', garden_cell21,i);
        ver_garden('PSE', garden_cell22,i);
        ver_garden('PO', garden_cell23,i);
        ver_garden('TP', garden_cell24,i);
        ver_garden('TT', garden_cell25,i);
        ver_garden('BR1', garden_cell26,i);
        ver_garden('BR2', garden_cell27,i);
        ver_garden('BT1', garden_cell28,i);
        ver_garden('BT2', garden_cell29,i);
        ver_garden('BTYPE', garden_cell30,i);
        ver_garden('BROT', garden_cell31,i);
        ver_garden('TEXT', garden_cell32,i);
        ver_garden('TEXT_S', garden_cell33,i);
        ver_garden('SBV', garden_cell34,i);
    
    }
    self_cell1.innerHTML = 'Self';
    for( var i=0;i<garden.self.length;i++){
        
        ver_self('WT', self_cell2,i);
        ver_self('BC', self_cell3,i);
        ver_self('DC', self_cell4,i);
        ver_self('HC', self_cell5,i);
        ver_self('MC', self_cell6,i);
        ver_self('SC', self_cell7,i);
        ver_self('CC', self_cell8,i);
        ver_self('TC', self_cell9,i);
        ver_self('B1C', self_cell10,i);
        ver_self('B2C', self_cell11,i);
        ver_self('TBC', self_cell12,i);
        ver_self('YBC', self_cell13,i);
        ver_self('TIM', self_cell14,i);
        SRC_s('SRC', self_cell15,i);
        ver_self('MT', self_cell16,i);
        ver_self('PP', self_cell17,i);
        ver_self('PS', self_cell18,i);
        ver_self('PT', self_cell19,i);
        ver_self('PQ', self_cell20,i);
        ver_self('PQI', self_cell21,i);
        ver_self('PSE', self_cell22,i);
        ver_self('PO', self_cell23,i);
        ver_self('TP', self_cell24,i);
        ver_self('TT', self_cell25,i);
        ver_self('BR1', self_cell26,i);
        ver_self('BR2', self_cell27,i);
        ver_self('BT1', self_cell28,i);
        ver_self('BT2', self_cell29,i);
        ver_self('BTYPE', self_cell30,i);
        ver_self('BROT', self_cell31,i);
        ver_self('TEXT', self_cell32,i);
        ver_self('TEXT_S', self_cell33,i);
        ver_self('SBV', self_cell34,i);
    
    }
    simple_cell1.innerHTML = 'Simple';
    for( var i=0;i<garden.simple.length;i++){
        
        ver_simple('WT', simple_cell2,i);
        ver_simple('BC', simple_cell3,i);
        ver_simple('DC', simple_cell4,i);
        ver_simple('HC', simple_cell5,i);
        ver_simple('MC', simple_cell6,i);
        ver_simple('SC', simple_cell7,i);
        ver_simple('CC', simple_cell8,i);
        ver_simple('TC', simple_cell9,i);
        ver_simple('B1C', simple_cell10,i);
        ver_simple('B2C', simple_cell11,i);
        ver_simple('TBC', simple_cell12,i);
        ver_simple('YBC', simple_cell13,i);
        ver_simple('TIM', simple_cell14,i);
        SRC_si('SRC', simple_cell15,i);
        ver_simple('MT', simple_cell16,i);
        ver_simple('PP', simple_cell17,i);
        ver_simple('PS', simple_cell18,i);
        ver_simple('PT', simple_cell19,i);
        ver_simple('PQ', simple_cell20,i);
        ver_simple('PQI', simple_cell21,i);
        ver_simple('PSE', simple_cell22,i);
        ver_simple('PO', simple_cell23,i);
        ver_simple('TP', simple_cell24,i);
        ver_simple('TT', simple_cell25,i);
        ver_simple('BR1', simple_cell26,i);
        ver_simple('BR2', simple_cell27,i);
        ver_simple('BT1', simple_cell28,i);
        ver_simple('BT2', simple_cell29,i);
        ver_simple('BTYPE', simple_cell30,i);
        ver_simple('BROT', simple_cell31,i);
        ver_simple('TEXT', simple_cell32,i);
        ver_simple('TEXT_S', simple_cell33,i);
        ver_simple('SBV', simple_cell34,i);
    
    }

    thirty_cell1.innerHTML = 'Thirty';
    for( var i=0;i<garden.thirty.length;i++){
        
        ver_thirty('WT', thirty_cell2,i);
        ver_thirty('BC', thirty_cell3,i);
        ver_thirty('DC', thirty_cell4,i);
        ver_thirty('HC', thirty_cell5,i);
        ver_thirty('MC', thirty_cell6,i);
        ver_thirty('SC', thirty_cell7,i);
        ver_thirty('CC', thirty_cell8,i);
        ver_thirty('TC', thirty_cell9,i);
        ver_thirty('B1C', thirty_cell10,i);
        ver_thirty('B2C', thirty_cell11,i);
        ver_thirty('TBC', thirty_cell12,i);
        ver_thirty('YBC', thirty_cell13,i);
        ver_thirty('TIM', thirty_cell14,i);
        SRC_t('SRC', thirty_cell15,i);
        ver_thirty('MT', thirty_cell16,i);
        ver_thirty('PP', thirty_cell17,i);
        ver_thirty('PS', thirty_cell18,i);
        ver_thirty('PT', thirty_cell19,i);
        ver_thirty('PQ', thirty_cell20,i);
        ver_thirty('PQI', thirty_cell21,i);
        ver_thirty('PSE', thirty_cell22,i);
        ver_thirty('PO', thirty_cell23,i);
        ver_thirty('TP', thirty_cell24,i);
        ver_thirty('TT', thirty_cell25,i);
        ver_thirty('BR1', thirty_cell26,i);
        ver_thirty('BR2', thirty_cell27,i);
        ver_thirty('BT1', thirty_cell28,i);
        ver_thirty('BT2', thirty_cell29,i);
        ver_thirty('BTYPE', thirty_cell30,i);
        ver_thirty('BROT', thirty_cell31,i);
        ver_thirty('TEXT', thirty_cell32,i);
        ver_thirty('TEXT_S', thirty_cell33,i);
        ver_thirty('SBV', thirty_cell34,i);
    
    }

    make_cell1.innerHTML = 'Make';
    for( var i=0;i<garden.make.length;i++){
        
        ver_make('WT', make_cell2,i);
        ver_make('BC', make_cell3,i);
        ver_make('DC', make_cell4,i);
        ver_make('HC', make_cell5,i);
        ver_make('MC', make_cell6,i);
        ver_make('SC', make_cell7,i);
        ver_make('CC', make_cell8,i);
        ver_make('TC', make_cell9,i);
        ver_make('B1C', make_cell10,i);
        ver_make('B2C', make_cell11,i);
        ver_make('TBC', make_cell12,i);
        ver_make('YBC', make_cell13,i);
        ver_make('TIM', make_cell14,i);
        SRC_m(make_cell15,i);
        ver_make('MT', make_cell16,i);
        ver_make('PP', make_cell17,i);
        ver_make('PS', make_cell18,i);
        ver_make('PT', make_cell19,i);
        ver_make('PQ', make_cell20,i);
        ver_make('PQI', make_cell21,i);
        ver_make('PSE', make_cell22,i);
        ver_make('PO', make_cell23,i);
        ver_make('TP', make_cell24,i);
        ver_make('TT', make_cell25,i);
        ver_make('BR1', make_cell26,i);
        ver_make('BR2', make_cell27,i);
        ver_make('BT1', make_cell28,i);
        ver_make('BT2', make_cell29,i);
        ver_make('BTYPE', make_cell30,i);
        ver_make('BROT', make_cell31,i);
        ver_make('TEXT', make_cell32,i);
        ver_make('TEXT_S', make_cell33,i);
        ver_make('SBV', make_cell34,i);
    
    }

}

//34
// pagina varchar(45) 
// WT varchar(45) 
// BC varchar(45) 
// DC varchar(45) 
// HC varchar(45) 
// MC varchar(45) 
// SC varchar(45) 
// CC varchar(45) 
// TC varchar(45) 
// TIM varchar(45) 
// // SRC varchar(45) 
// MT varchar(45) 
// PP varchar(45) 
// PS varchar(45) 
// PT varchar(45) 
// PQ varchar(45) 
// PQI varchar(45) 
// PSE varchar(45) 
// PO varchar(45) 
// TT int(11) 
// TP int(11) 
// B1C varchar(45) 
// B2C varchar(45) 
// BR1 int(11) 
// BR2 int(11) 
// BT1 int(11) 
// BT2 int(11) 
// // BTYPE varchar(45) 
// // BROT varchar(45) 
// // TEXT varchar(45) 
// // TEXT_S varchar(45) 
// TBC varchar(45) 
// YBC varchar(45) 
// // SBV

