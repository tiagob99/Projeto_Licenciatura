import firebase from 'firebase';
import { funct } from './Garden';
import * as login from './Login/Login';

const firebaseConfig = {
    apiKey: "AIzaSyDAcpp-AHr2I_-jsBHHq_6egdEB92e8lHI",
      authDomain: "projeto-licenciatura.firebaseapp.com",
      databaseURL: "https://projeto-licenciatura.firebaseio.com",
      projectId: "projeto-licenciatura",
      storageBucket: "projeto-licenciatura.appspot.com",
      messagingSenderId: "390906639482",
      appId: "1:390906639482:web:0a47fec5174f0da273b7c3",
      measurementId: "G-JXYR3M72K5"
  };

  console.log = function () {};

var firebaseApp = firebase.initializeApp(firebaseConfig)

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
// export function database_add_id(email){
//     alert(email);
//     firebase.database().ref(email)
//     }
