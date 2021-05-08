import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../libs/authContext";

// TODO remove any
function querystring(name: any, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// TODO remove any
export default function UnauthenticatedRoute({ children, ...rest }: any) {
  const { isAuthenticated } = useAuthContext();
  const redirect = querystring("redirect");
  return (
    <Route {...rest}>
      {!isAuthenticated ? (
        children
      ) : (
        <Redirect to={redirect === "" || redirect === null ? "/" : redirect} />
      )}
    </Route>
  );
}
