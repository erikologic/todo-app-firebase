import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../user/UserContext";
import { RouteProps } from "react-router";

const AuthenticatedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useUserContext();

  return (
    <Route {...rest}>{user ? children : <Redirect to={`/sign-in`} />}</Route>
  );
};

export default AuthenticatedRoute;
