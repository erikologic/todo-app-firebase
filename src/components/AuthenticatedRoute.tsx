import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAuthContext } from "../libs/authContext";

// TODO remove any
export default function AuthenticatedRoute({ children, ...rest }: any) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAuthContext();
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={
          `/login?redirect=${pathname}${search}`
        } />
      )}
    </Route>
  );
}
