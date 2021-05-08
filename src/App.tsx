import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { MyAuthContext} from "./libs/authContext";
import Routes from "./Routes";
import "./App.css";
import {MyNavBar} from "./containers/MyNavBar";

function App() {
    return (
        <React.StrictMode>
            <MyAuthContext>
            <Router>
                {/* TODO {!isAuthenticating && (*/}
                    <div className="App container py-3">
                        <ErrorBoundary>
                            <MyNavBar />
                            <Routes/>
                        </ErrorBoundary>
                    </div>
            </Router>
            </MyAuthContext>
        </React.StrictMode>
    );
}

export default App;
