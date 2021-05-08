import React from "react";
import {useAuthContext} from "../libs/authContext";
import {Lander} from "./Lander";
import {NotesContainer} from "./NotesContainer";

export default function Home() {
    const {isAuthenticated} = useAuthContext();

    return isAuthenticated ? (<NotesContainer/>) : (<Lander/>)
}
