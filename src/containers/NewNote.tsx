import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";
import config from "../config";
import "./NewNote.css";

export default function NewNote() {
  const file = useRef(null as any);
  const history = useHistory();
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return content.length > 0;
  }

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {

      await createNote({ content });
      history.push("/");
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  function createNote(note) {
    // return API.post("notes", "/notes", {
    //   body: note
    // });
  }

  return (
    <div className="NewNote">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="content">
          <Form.Control
            value={content}
            as="textarea"
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="file">
          <Form.Label>Attachment</Form.Label>
          <Form.Control onChange={handleFileChange} type="file" />
        </Form.Group>
        <LoaderButton
          block
          type="submit"
          size="lg"
          variant="primary"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Create
        </LoaderButton>
      </Form>
    </div>
  );
}
