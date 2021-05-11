import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import { Path } from "./path";
import Lander from "../../pages/Lander";
import SignIn from "../../pages/SignIn";
import NotesContainer from "../../pages/NotesContainer";
import NewNote from "../../pages/NewNote";
import Notes from "../../pages/Notes";
import NotFound from "../../pages/NotFound";

const Routes: React.FC = () => (
  <Switch>
    <UnauthenticatedRoute exact path={Path.Home}>
      <Lander />
    </UnauthenticatedRoute>
    <UnauthenticatedRoute exact path={Path.SignIn}>
      <SignIn />
    </UnauthenticatedRoute>
    <AuthenticatedRoute exact path={Path.Notes}>
      <NotesContainer />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path={Path.NotesNew}>
      <NewNote />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path={Path.Notes + ":id"}>
      <Notes />
    </AuthenticatedRoute>
    {/* Finally, catch all unmatched routes */}
    <Route>
      <NotFound />
    </Route>
  </Switch>
);

export default Routes;
