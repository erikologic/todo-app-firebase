import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../user/UserContext";
import { RouteProps } from "react-router";
import { Path } from "./path";

const UnauthenticatedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { user } = useUserContext();

  return (
    <Route {...rest}>{user ? <Redirect to={Path.Notes} /> : children}</Route>
  );
};

export default UnauthenticatedRoute;
