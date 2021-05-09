import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const isTestEnv = !!jest;

const firebaseConfig = {
    apiKey: "asdsads",
    // apiKey: "AIzaSyAMaTTKGhkFgqdMAdBpGdohomTZGjr4XE4",
    authDomain: "todo-react-d021a.firebaseapp.com",
    projectId: "todo-react-d021a",
    // storageBucket: "todo-react-d021a.appspot.com",
    // messagingSenderId: "953237887605",
    // appId: "1:953237887605:web:12f512ccc5b1b47825b63c",
    // measurementId: "G-VF2ZJT9FKF"
}

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

if (true) {
    db.useEmulator('localhost',8081)
    auth.useEmulator("http://localhost:9099");
}
export const signInOptions = [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
]