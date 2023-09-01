// import firebase from 'firebase/compat/app'
// import * as firebase from 'firebase/app'
// import auth from '@react-native-firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import 'firebase/compat/auth'
// import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqCwI-V_EIev8jUWvlWBsGvAGgPM7l3_s",
  authDomain: "booking-app-8caca.firebaseapp.com",
  projectId: "booking-app-8caca",
  storageBucket: "booking-app-8caca.appspot.com",
  messagingSenderId: "1093915484024",
  appId: "1:1093915484024:web:a08497a5bb89d885c6728d",
};
// let app
// if (firebaseConfig.apps.length == 0) {
//    app =  firebase.initializeApp(firebaseConfig)
// }
// else {
//     app = firebase.app()
// }
export const app = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(app);
