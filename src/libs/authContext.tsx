import React, {useContext, createContext, Dispatch, SetStateAction, useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

export const AuthContext = createContext({
    isAuthenticated: false,
    userHasAuthenticated: (() => { }) as any,       // TODO this is wrong
    handleLogout: () => {}
});

export function useAuthContext() {
    return useContext(AuthContext);
}

export const MyAuthContext = ({children}: any) => {
    const history = useHistory();
    const [isAuthenticating, setIsAuthenticating] = useState(false); // TODO why?
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        // try {
        //   await Auth.currentSession();
        //   userHasAuthenticated(true);
        // }
        // catch(e) {
        //   if (e !== 'No current user') {
        //     onError(e);
        //   }
        // }
        //
        // setIsAuthenticating(false);
    }

    async function handleLogout() {
        // await Auth.signOut();
        //
        // userHasAuthenticated(false);
        //
        // history.push("/login");
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, userHasAuthenticated, handleLogout}}>
            {{...children}}
        </AuthContext.Provider>
    )
}