import React from "react";
import { Route } from "react-router-dom";

// TODO remove any
export default function AppliedRoute({ component: C, appProps, ...rest }: any) {
  return (
    <Route {...rest} render={props => <C {...props} {...appProps} />} />
  );
}
