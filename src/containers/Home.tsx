import React from "react";
import { Lander } from "./Lander";
import { NotesContainer } from "./NotesContainer";
import { useUserContext } from "../contexts/user/UserContext";

export default function Home() {
  const { user } = useUserContext();

  return user ? <NotesContainer /> : <Lander />;
}
