import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "asdsads",
  // apiKey: "AIzaSyAMaTTKGhkFgqdMAdBpGdohomTZGjr4XE4",
  authDomain: "todo-react-d021a.firebaseapp.com",
  projectId: "todo-react-d021a",
  // storageBucket: "todo-react-d021a.appspot.com",
  // messagingSenderId: "953237887605",
  // appId: "1:953237887605:web:12f512ccc5b1b47825b63c",
  // measurementId: "G-VF2ZJT9FKF"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

if (true) {
  db.useEmulator("localhost", 8081);
}

export const auth = firebase.auth();
// TODO if test env
auth.useEmulator("http://localhost:9099");
