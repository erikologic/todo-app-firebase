import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, useHistory} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import {AuthContext} from "./libs/authContext";
import Routes from "./Routes";
import "./App.css";
import {MyNavBar} from "./containers/MyNavBar";

function App() {
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
        <React.StrictMode>
            <AuthContext.Provider value={{isAuthenticated, userHasAuthenticated}}>
            <Router>
                {!isAuthenticating && (
                    <div className="App container py-3">
                        <MyNavBar {...{isAuthenticated, handleLogout}} />
                        <ErrorBoundary>
                                <Routes/>
                        </ErrorBoundary>
                    </div>)}
            </Router>
            </AuthContext.Provider>
        </React.StrictMode>
    );
}

export default App;
