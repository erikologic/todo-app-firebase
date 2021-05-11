// Import FirebaseAuth and firebase.
import React from "react";
import { useUserContext } from "../contexts/user/UserContext";

const SignIn: React.FC = () => {
  const { SignInElem } = useUserContext();

  return (
    <div data-testid="sign-in">
      <SignInElem />
    </div>
  );
};

export default SignIn;
