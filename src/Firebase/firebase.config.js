// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDXI-y1zC9cCNqUR_X7ljBNsW-2bwOOLEg",
//   authDomain: "wedding-photography-aaba3.firebaseapp.com",
//   projectId: "wedding-photography-aaba3",
//   storageBucket: "wedding-photography-aaba3.appspot.com",
//   messagingSenderId: "1067598460008",
//   appId: "1:1067598460008:web:6c5ec0657536c4d28737dd"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;