import React from "react";
import {useAuthContext} from "../libs/authContext";
import "./Home.css";
import {Lander} from "./Lander";
import {NotesContainer} from "./NotesContainer";

export default function Home() {
    const {isAuthenticated} = useAuthContext();

    return (
        <div className="Home">
            {isAuthenticated ? (<NotesContainer/>) : (<Lander/>)}
        </div>
    );
}
