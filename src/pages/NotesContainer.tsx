import React, { useEffect, useState } from "react";
import { onError } from "../libs/errorLib";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { BsPencilSquare } from "react-icons/bs";
import { useUserContext } from "../contexts/user/UserContext";

const NotesContainer = () => {
  const [notes] = useState([] as any[]);
  // const [notes, setNotes] = useState([] as any[]);
  // const { user } = useUserContext();

  // useEffect(() => {
  //   if (user?.email) getNotes(user.email).then(setNotes).catch(onError);
  // }, [user?.email]);

  return (
    <div className="notes" data-testid="notes">
      <h2 className="pb-3 mt-4 mb-3 border-bottom">Your Notes</h2>
      <ListGroup>
        <LinkContainer to="/notes/new">
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <BsPencilSquare size={17} />
            <span className="ml-2 font-weight-bold">Create a new note</span>
          </ListGroup.Item>
        </LinkContainer>
        {notes.map(({ id, content, createdAt }) => (
          <LinkContainer key={id} to={`/notes/${id}`}>
            <ListGroup.Item action>
              <span className="font-weight-bold">
                {(content as string)?.trim().split("\n")[0]}{" "}
                {/* TODO fix type*/}
              </span>
              <br />
              <span className="text-muted">
                Created: {new Date(createdAt).toLocaleString()}
              </span>
            </ListGroup.Item>
          </LinkContainer>
        ))}
      </ListGroup>
    </div>
  );
};

export default NotesContainer;
