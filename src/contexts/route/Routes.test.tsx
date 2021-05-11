import { IAuthContext, UserContext } from "../user/UserContext";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import Routes from "./Routes";

const renderRoutes = (authContext: IAuthContext, path: string) =>
  render(
    <UserContext.Provider value={authContext}>
      <MemoryRouter initialEntries={[path]}>
        <Routes />
      </MemoryRouter>
    </UserContext.Provider>
  );

describe("routes", () => {
  describe("when unauthenticated", () => {
    const unauthenticatedContext: IAuthContext = {
      SignInElem() {
        return <div />;
      },
    };

    test("navigating to the home page will take to the lander page", () => {
      const res = renderRoutes(unauthenticatedContext, "/");
      expect(res.getByTestId("lander")).toBeInTheDocument();
    });

    test("navigating to a private page will land on the sign-in page", () => {
      const res = renderRoutes(unauthenticatedContext, "/notes/");
      expect(res.getByTestId("sign-in")).toBeInTheDocument();
    });
  });

  describe("when authenticated", () => {
    const authenticatedContext: IAuthContext = {
      SignInElem() {
        return <div />;
      },
      user: {
        email: null,
        logout: () => undefined,
      },
    };

    test("can navigate to a private page", () => {
      const res = renderRoutes(authenticatedContext, "/notes/");
      expect(res.getByTestId("notes")).toBeInTheDocument();
    });

    test("navigating to a public page will take to the notes page", () => {
      const res = renderRoutes(authenticatedContext, "/");
      expect(res.getByTestId("notes")).toBeInTheDocument();
    });
  });
});
