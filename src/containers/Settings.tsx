import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { onError } from "../libs/errorLib";
import config from "../config";
import "./Settings.css";

export default function Settings() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  async function handleFormSubmit(storage, { token, error }) {
    if (error) {
      onError(error);
      return;
    }

    setIsLoading(true);

  }

  return (
    <div className="Settings">
    </div>
  );
}
