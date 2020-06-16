import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyC-e5vPj8Zsf8vY2tyv8r9ZDGQpWsqyW7Y",
    authDomain: "***************",
    databaseURL: "***************",
    projectId: "***************",
    storageBucket: "***************",
    messagingSenderId: "***************"
};
var config = {
    apiKey: "AIzaSyC-e5vPj8Zsf8vY2tyv8r9ZDGQpWsqyW7Y",
    authDomain: "lucti-ionildo.firebaseapp.com",
    databaseURL: "https://lucti-ionildo.firebaseio.com",
    projectId: "lucti-ionildo",
    storageBucket: "lucti-ionildo.appspot.com",
    messagingSenderId: "392347247622",
    appId: "1:392347247622:web:1b473b6d5d162e6b704f87",
    measurementId: "G-R24BVDKNPR"
  };
const devConfig = {
    apiKey: "***************",
    authDomain: "***************",
    databaseURL: "***************",
    projectId: "***************",
    storageBucket: "***************",
    messagingSenderId: "***************"
};

// const config = process.env.NODE_ENV === 'production'
//     ? prodConfig
//     : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();