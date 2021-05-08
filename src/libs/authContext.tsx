import React, {useContext, createContext, useState, useEffect} from "react";
import {auth} from "./firebase";

interface IAuthContext {
    handleLogout: () => void;
    isAuthenticated: boolean;
}

const defaultContext = {
    handleLogout: () => {},
    isAuthenticated: false,
}

export const AuthContext = createContext<IAuthContext>(defaultContext);

export function useAuthContext() {
    return useContext(AuthContext);
}

export const MyAuthContext = ({children}: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const handleLogout = () => {
        auth.signOut().then(() => setIsAuthenticated(false))
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setIsAuthenticated(true);
            }
        });
    }, [])


    return (
        <AuthContext.Provider value={{isAuthenticated, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}