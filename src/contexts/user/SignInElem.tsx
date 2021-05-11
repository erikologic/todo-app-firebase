// Configure FirebaseUI.
import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import { auth } from "../../libs/firebase";
import { Path } from "../route/path";

const signInOptions = [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
];

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: Path.Notes,
  signInOptions,
};

export const SignInElem: React.FC = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
);
