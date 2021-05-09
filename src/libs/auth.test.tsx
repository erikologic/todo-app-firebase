import {auth} from "./firebase";
import {screen, render, RenderResult, act, waitFor, fireEvent} from "@testing-library/react";
import React from "react";
import {MyAuthContext, useAuthContext} from "./authContext";
import firebase from "firebase";

const MyAuthContextConsumer = () => {
    const {handleLogout, isAuthenticated, uid} = useAuthContext()
    return isAuthenticated
        ? (
            <div data-testid="authenticated" onClick={handleLogout}>
                <div data-testid="uid">${uid}</div>
            </div>
        )
        : (<div data-testid="not-authenticated"/>)
}

describe('authLib', () => {
    let res: RenderResult;

    beforeEach(() => {
        res = render(
            <MyAuthContext>
                <MyAuthContextConsumer/>
            </MyAuthContext>
        )
    })

    describe('when a user is not logged in ', () => {
        beforeEach(async () => {
            await act(async () => {
                await auth.signOut();
            })
        })

        test('can know if is not logged in', async () => {
            expect(await res.findByTestId("not-authenticated")).toBeInTheDocument()
        })
    })

    describe('when a user is logged in', () => {
        beforeEach(async () => {
            await act(async () => {
                await auth.signOut();
                await auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(
                    `{"sub": "abc123", "email": "foo@example.com", "email_verified": true}`
                ));
            })
        })

        afterEach(async () => {
            await act(async () => {
                await auth.signOut();
            })
        })

        test('can know if is logged in', async () => {
            expect(await res.findByTestId("authenticated")).toBeInTheDocument()
        })

        test('can get the user email', async () => {
            expect(await res.findByTestId("uid")).toHaveTextContent('8SMfsITXKpi8D9vY4t0qe05CwEoL')
        })

        test('can log out', async () => {
            const authenticated = await res.findByTestId("authenticated");
            fireEvent.click(authenticated)
            expect(await res.findByTestId("not-authenticated")).toBeInTheDocument()
        })
    })
})