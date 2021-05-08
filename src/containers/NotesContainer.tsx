import React, {useEffect, useState} from "react";
import {onError} from "../libs/errorLib";
import ListGroup from "react-bootstrap/ListGroup";
import {LinkContainer} from "react-router-bootstrap";
import {BsPencilSquare} from "react-icons/bs";

export const NotesContainer = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
            try {
                const notes = await loadNotes();
                setNotes(notes);
            } catch (e) {
                onError(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, []);

    function loadNotes() {
        // return API.get("notes", "/notes");
        return []; // TODO
    }

    return (
        <div className="notes">
            <h2 className="pb-3 mt-4 mb-3 border-bottom">Your Notes</h2>
            <ListGroup>
                <LinkContainer to="/notes/new">
                    <ListGroup.Item action className="py-3 text-nowrap text-truncate">
                        <BsPencilSquare size={17}/>
                        <span className="ml-2 font-weight-bold">Create a new note</span>
                    </ListGroup.Item>
                </LinkContainer>
                {notes.map(({noteId, content, createdAt}) => (
                    <LinkContainer key={noteId} to={`/notes/${noteId}`}>
                        <ListGroup.Item action>
                            <span className="font-weight-bold">
                            {(content as string).trim().split("\n")[0]} // TODO fix type
                            </span>
                            <br/>
                            <span className="text-muted">
                            Created: {new Date(createdAt).toLocaleString()}
                          </span>
                        </ListGroup.Item>
                    </LinkContainer>
                ))}
            </ListGroup> // TODO fix types
        </div>
    )
};