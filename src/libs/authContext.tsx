import React, {useContext, createContext, useState, useEffect} from "react";
import {auth} from "./firebase";

interface IAuthContext {
    handleLogout: () => void;
    isAuthenticated: boolean;
    uid: string;
}
const unauthenticatedContext: IAuthContext = {
    handleLogout: () => {},
    isAuthenticated: false,
    uid: "",
}

export const AuthContext = createContext<IAuthContext>(unauthenticatedContext);

export function useAuthContext() {
    return useContext(AuthContext);
}

export const MyAuthContext = ({children}: any) => {
    const [context, setContext] = useState(unauthenticatedContext)

    useEffect(() => {
        const unregisterAuthObserver = auth.onAuthStateChanged(user => {
            if (user) {
                setContext({
                    handleLogout: () => {
                        auth.signOut().then(() => setContext(unauthenticatedContext))
                    },
                    isAuthenticated: true,
                    uid: user.uid
                })
            }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, [])


    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
