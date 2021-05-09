import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./pages/ErrorBoundary";
import Routes from "./contexts/route/Routes";
import "./App.css";
import { MyNavBar } from "./containers/MyNavBar";
import { UserContextProvider } from "./contexts/user/UserContext";

const App: React.FC = () => (
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <div className="App container py-3">
          <ErrorBoundary>
            <MyNavBar />
            <Routes />
          </ErrorBoundary>
        </div>
      </Router>
    </UserContextProvider>
  </React.StrictMode>
);

export default App;
