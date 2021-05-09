// Configure FirebaseUI.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { auth } from "../../libs/firebase";

const signInOptions = [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
];

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions,
};

export const SignInElem: React.FC = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
);
