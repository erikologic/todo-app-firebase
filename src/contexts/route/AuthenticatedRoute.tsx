import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useUserContext } from "../user/UserContext";

// TODO remove any
export default function AuthenticatedRoute({ children, ...rest }: any) {
  const { pathname, search } = useLocation();
  const { user } = useUserContext();
  return (
    <Route {...rest}>
      {user ? (
        children
      ) : (
        <Redirect to={`/login?redirect=${pathname}${search}`} />
      )}
    </Route>
  );
}
