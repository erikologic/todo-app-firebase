import React from "react";
import { IAuthContext, UserContext } from "../contexts/user/UserContext";
import { fireEvent, render } from "@testing-library/react";
import { MyNavBar } from "./MyNavBar";
import { MemoryRouter, Route, Switch } from "react-router-dom";

describe("MyNavBar", () => {
  describe("when not logged in", () => {
    let res;

    beforeEach(() => {
      const unauthenticatedContext: IAuthContext = {
        SignInElem() {
          return <div />;
        },
      };

      res = render(
        <UserContext.Provider value={unauthenticatedContext}>
          <MemoryRouter>
            <Switch>
              <Route exact path="/">
                <MyNavBar />
              </Route>
              <Route exact path="/sign-in">
                <div data-testid="sign-in-page" />
              </Route>
            </Switch>
          </MemoryRouter>
        </UserContext.Provider>
      );
    });

    test("shows login", () => {
      expect(res.getByText("Sign in")).toBeInTheDocument();
    });

    test("click log in will redirect to /sign-in", async () => {
      fireEvent.click(res.getByText("Sign in"));
      expect(res.getByTestId("sign-in-page")).toBeInTheDocument();
    });
  });
});