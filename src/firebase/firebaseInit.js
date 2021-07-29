import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhmlGo3SWhWzeNNbT0lIEuhLMhaHtaPW0",
    authDomain: "invoice-app-39c5e.firebaseapp.com",
    projectId: "invoice-app-39c5e",
    storageBucket: "invoice-app-39c5e.appspot.com",
    messagingSenderId: "139626108462",
    appId: "1:139626108462:web:c29cf60b9b2273833b71bf"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();