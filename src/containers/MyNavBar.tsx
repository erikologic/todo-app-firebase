import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import React from "react";

export const MyNavBar = ({isAuthenticated, handleLogout}: any) => (
    <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted">
                Scratch
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
                {isAuthenticated ? (
                    <>
                        <LinkContainer to="/settings">
                            <Nav.Link>Settings</Nav.Link>
                        </LinkContainer>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </>
                ) : (
                    <>
                        <LinkContainer to="/signup">
                            <Nav.Link>Signup</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </>
                )}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)