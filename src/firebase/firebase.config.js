// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyCIIL1Nq2gJtvNDO1FE6Ic3uSWfqxPlO7M",
  authDomain: "authentication-with-fire-6a682.firebaseapp.com",
  projectId: "authentication-with-fire-6a682",
  storageBucket: "authentication-with-fire-6a682.appspot.com",
  messagingSenderId: "1002886699889",
  appId: "1:1002886699889:web:f8a7e2e73ef16e9a3274d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
