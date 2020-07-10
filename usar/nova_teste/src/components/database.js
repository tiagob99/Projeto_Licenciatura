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
    var uti = firebase.auth().currentUser;
      email = uti.uid;
        firebase.database().ref(email + '/' + pagina + '/' + key).set(
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
// ref.on('value', gotData,errData)




// function gotData(data){
//     var res = data.val();
//     var keys = Object.keys(res)
//     //console.log(data)
//     for(var i = 0; i < keys.length; i++) {
//         var k = keys[i];
//         var initials = res[k].initials;
//         var ress = res[k].ress;
        
//     }
    
// }


function errData(err){
    console.log('Erro');
    console.log(err)
}
// export function database_add_id(email){
//     alert(email);
//     firebase.database().ref(email)
//     }

//login
var provider = new firebase.auth.GoogleAuthProvider();
var email; // username
export function login(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        window.location.href ="./Predefine"
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      firebase.auth().getRedirectResult().then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // ...
        }
        // The signed-in user info.
        var user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      
      
}

export function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
      window.location.href = "./";    
      email = ''
}

// export function recover(){
//   // Import Admin SDK
// //var admin = require("firebase-admin");

// // Get a database reference to our posts
// //var db = admin.database();
// var ref = db.ref("server/saving-data/fireblog/posts");

// // Attach an asynchronous callback to read the data at our posts reference
// ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// }