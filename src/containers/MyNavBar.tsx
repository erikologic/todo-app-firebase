import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { useUserContext } from "../contexts/user/UserContext";

export const MyNavBar = () => {
  const { user } = useUserContext();

  return (
    <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
      <LinkContainer to="/">
        <Navbar.Brand className="font-weight-bold text-muted">
          Scratch
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav activeKey={window.location.pathname}>
          {user ? (
            <>
              <Nav.Link onClick={user.logout}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <LinkContainer to="/sign-in">
                <Nav.Link>Sign in</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
