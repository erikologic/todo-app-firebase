import { render, RenderResult, act, fireEvent } from "@testing-library/react";
import React from "react";
import firebase from "firebase";
import { UserContextProvider, useUserContext } from "./UserContext";
import { auth } from "../../libs/firebase";

const UserContextConsumer = () => {
  const { user } = useUserContext();
  return user ? (
    <div data-testid="authenticated" onClick={user.logout}>
      {user.email}
    </div>
  ) : (
    <div data-testid="not-authenticated" />
  );
};

describe("authLib", () => {
  let res: RenderResult;

  beforeEach(() => {
    res = render(
      <UserContextProvider>
        <UserContextConsumer />
      </UserContextProvider>
    );
  });

  describe("when a user is not logged in", () => {
    beforeEach(async () => {
      await act(async () => {
        await auth.signOut();
      });
    });

    test("can know if is not logged in", async () => {
      expect(await res.findByTestId("not-authenticated")).toBeInTheDocument();
    });
  });

  describe("when a user is logged in", () => {
    beforeEach(async () => {
      await act(async () => {
        await auth.signOut();
        await auth.signInWithCredential(
          firebase.auth.GoogleAuthProvider.credential(
            `{"sub": "abc123", "email": "foo@example.com", "email_verified": true}`
          )
        );
      });
    });

    afterEach(async () => {
      await act(async () => {
        await auth.signOut();
      });
    });

    test("can know if is logged in", async () => {
      expect(await res.findByTestId("authenticated")).toBeInTheDocument();
      expect(await res.findByTestId("authenticated")).toHaveTextContent(
        "foo@example.com"
      );
    });

    test("can log out", async () => {
      const authenticated = await res.findByTestId("authenticated");
      fireEvent.click(authenticated);
      expect(await res.findByTestId("not-authenticated")).toBeInTheDocument();
    });
  });
});
