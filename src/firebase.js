import {initializeApp} from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyBLjT473cVngokPX1Ta2f54NZ8ycCoZHPw",
  authDomain: "react-learn-e3513.firebaseapp.com",
  projectId: "react-learn-e3513",
  storageBucket: "react-learn-e3513.firebasestorage.app",
  messagingSenderId: "1092328583627",
  appId: "1:1092328583627:web:f244606637f9cfb077c64e",
  databaseURL:"https://react-learn-e3513-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);

