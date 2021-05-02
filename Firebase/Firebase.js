import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD1tSi9Pxf7Ur5jSGPGPePMTQnh6f6bvTk",
    authDomain: "react-chatapp-9fcc5.firebaseapp.com",
    projectId: "react-chatapp-9fcc5",
    storageBucket: "react-chatapp-9fcc5.appspot.com",
    messagingSenderId: "615645734952",
    appId: "1:615645734952:web:cdb304cc05a51707486d1d",
    measurementId: "G-PVYP62DGB7"
  };

  export default Firebase = firebase.default.initializeApp(firebaseConfig);