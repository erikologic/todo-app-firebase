import React from "react";
import { Lander } from "../containers/Lander";
import { NotesContainer } from "../containers/NotesContainer";
import { useUserContext } from "../contexts/user/UserContext";

export default function Home() {
  const { user } = useUserContext();

  return user ? <NotesContainer /> : <Lander />;
}
