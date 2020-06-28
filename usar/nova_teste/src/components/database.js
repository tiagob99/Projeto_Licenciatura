import firebase from 'firebase';
import { funct } from './Garden';


const firebaseConfig = {
    apiKey: "AIzaSyAmohNsHd616BhiAGZ2JVS4xgVv1kA5GbQ",
    authDomain: "projeto-licenciatura-6e421.firebaseapp.com",
    databaseURL: "https://projeto-licenciatura-6e421.firebaseio.com",
    projectId: "projeto-licenciatura-6e421",
    storageBucket: "projeto-licenciatura-6e421.appspot.com",
    messagingSenderId: "875901143980",
    appId: "1:875901143980:web:e703eca3a12b7972c80809",
    measurementId: "G-4D61W5ZX7V"

  };

  console.log = function () {};

var firebaseApp = firebase.initializeApp(firebaseConfig)
var database = firebase.database();
export function database_new(pagina,key,value){
        firebase.database().ref(pagina + '/' + key).set(
            {
                value: value

            }


    ).then(() => {
        console.log('INSERTED !');
    }).catch((error) => {
        console.log(error);
    });
     

    
   
        
    
}

    
    var ref = database.ref('Gardens');
ref.on('value', gotData,errData)




function gotData(data){
    var res = data.val();
    var keys = Object.keys(res)
    //console.log(data)
    for(var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var initials = res[k].initials;
        var ress = res[k].ress;
        
    }
    
}


function errData(err){
    console.log('Erro');
    console.log(err)
}
// export function database_add_id(email){
//     alert(email);
//     firebase.database().ref(email)
//     }

