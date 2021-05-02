import React from "react";
import { Route } from "react-router-dom";
import { NavItem } from "react-bootstrap";

// TODO remove any
export default (props: any) =>
  <Route
    path={props.href}
    exact
    children={({ match, history }) =>
      <NavItem
        onClick={(e: any) => history.push(e.currentTarget.getAttribute("href"))}
        {...props}
        active={match ? true : false}
      >
        {props.children}
      </NavItem>}
  />;
