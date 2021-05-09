import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../user/UserContext";

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
  const { user } = useUserContext();
  const redirect = querystring("redirect");
  return (
    <Route {...rest}>
      {!user ? (
        children
      ) : (
        <Redirect to={redirect === "" || redirect === null ? "/" : redirect} />
      )}
    </Route>
  );
}
