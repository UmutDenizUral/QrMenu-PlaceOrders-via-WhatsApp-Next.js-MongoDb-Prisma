
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyABo_20YLBiXsTdE0NPmcJdItvggFNDaEs",
    authDomain: "qrmenu-7e046.firebaseapp.com",
    projectId: "qrmenu-7e046",
    storageBucket: "qrmenu-7e046.appspot.com",
    messagingSenderId: "746783811222",
    appId: "1:746783811222:web:c7104ac912457de8e0c4b7"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp

// .env halinde neden kullanamıyorum
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID,
//   };