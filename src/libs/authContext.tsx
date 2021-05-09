import React, {useContext, createContext, useState, useEffect} from "react";
import {auth, signInOptions} from "./firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

interface ToDoUser {
    email: string | null;
    logout: () => void;
}

interface IAuthContext {
    user?: ToDoUser,
    SignInElem: React.FC;
}

// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions,
};

const SignInElem: React.FC = () => (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
)

const defaultUserContext = { SignInElem }
const UserContext = createContext<IAuthContext>(defaultUserContext);
export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({children}: any) => {
    const [context, setContext] = useState<IAuthContext>(defaultUserContext)

    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged(user => {
            if (user) {
                setContext({
                    ...defaultUserContext,
                    user: {
                        logout: () => {
                            auth.signOut().then(() => setContext(defaultUserContext))
                        },
                        email: user.email
                    }
                })
            }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, [])


    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}
