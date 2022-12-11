// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnviroments } from "../helpers/getEnviroments";


const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnviroments();



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase Main configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC28BhAqfrGx5_nFxaGCoab3Utp2afQ4WY",
//   authDomain: "curso-react-7750a.firebaseapp.com",
//   projectId: "curso-react-7750a",
//   storageBucket: "curso-react-7750a.appspot.com",
//   messagingSenderId: "1080375008820",
//   appId: "1:1080375008820:web:dfa77327047a2590bb3461"
// };


// Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyB9ttPJ0v6AxIk7iuEK0YVTG8iZ-YcaYFI",
//   authDomain: "curso-react-testing-43362.firebaseapp.com",
//   projectId: "curso-react-testing-43362",
//   storageBucket: "curso-react-testing-43362.appspot.com",
//   messagingSenderId: "1001191747148",
//   appId: "1:1001191747148:web:3f33407670a477da784ee9"
// };

//Configurando variables de entorno para testing

const firebaseConfig = {
  apiKey: VITE_APIKEY ,
  authDomain: VITE_AUTHDOMAIN ,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID 
};


// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )

