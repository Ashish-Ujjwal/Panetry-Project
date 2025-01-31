// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgsypzt_csxVyU5aWP_4yhIg1FmbCbSoA",
  authDomain: "inventory-management-app-5d5c6.firebaseapp.com",
  projectId: "inventory-management-app-5d5c6",
  storageBucket: "inventory-management-app-5d5c6.appspot.com",
  messagingSenderId: "583474588544",
  appId: "1:583474588544:web:13a9299ef3f60c067eef65",
  measurementId: "G-VDQSBHKKCR",
  
  // apiKey: "AIzaSyAPk5OLnMMIku23q6y3ftUySn5O70YfgFg",
  // authDomain: "panetart-project.firebaseapp.com",
  // projectId: "panetart-project",
  // storageBucket: "panetart-project.appspot.com",
  // messagingSenderId: "575941881276",
  // appId: "1:575941881276:web:4eb0e122f1b93e8df04fb9",
  // measurementId: "G-SWX8WMSSPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };
