import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useParams, useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import config from "../config";
import "./Notes.css";

export default function Notes() {
  const file = useRef(null);
  const { id } = useParams() as any;
  const history = useHistory();
  const [note, setNote] = useState(null as any);
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    function loadNote() {
      // return API.get("notes", `/notes/${id}`);
      return [];
    }

    async function onLoad() {
      try {
        const note = (await loadNote()) as any;
        const { content } = note;

        setContent(content);
        setNote(note);
      } catch (e) {
        onError(e);
      }
    }

    onLoad();
  }, [id]);

  function validateForm() {
    return content.length > 0;
  }

  function formatFilename(str) {
    return str.replace(/^\w+-/, "");
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  function saveNote(note) {
    // return API.put("notes", `/notes/${id}`, {
    //   body: note
    // });
  }

  async function handleSubmit(event) {
    let attachment;

    event.preventDefault();


    setIsLoading(true);

    try {

      await saveNote({
        content,
      });
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function deleteNote() {
    // return API.del("notes", `/notes/${id}`);
  }

  async function handleDelete(event) {
    event.preventDefault();

    const confirmed = window.confirm(
      "Are you sure you want to delete this note?"
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);

    try {
      await deleteNote();
      history.push("/");
    } catch (e) {
      onError(e);
      setIsDeleting(false);
    }
  }

  return (
    <div className="Notes">
      {note && (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="content">
            <Form.Control
              as="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="file">
            <Form.Label>Attachment</Form.Label>
            {note?.attachment && (
              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={note?.attachmentURL}
                >
                  {formatFilename(note?.attachment)}
                </a>
              </p>
            )}
            <Form.Control onChange={handleFileChange} type="file" />
          </Form.Group>
          <LoaderButton
            block
            size="lg"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
          >
            Save
          </LoaderButton>
          <LoaderButton
            block
            size="lg"
            variant="danger"
            onClick={handleDelete}
            isLoading={isDeleting}
          >
            Delete
          </LoaderButton>
        </Form>
      )}
    </div>
  );
}
