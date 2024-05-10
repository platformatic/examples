import { useEffect } from "react";
import "./App.css";
import { useFetchPrompt, handlePromptSubmit, handleKeyDown } from "./utils.js";

function AIWarp() {
  const { prompt, setPrompt, response, setResponse, fetchPrompt, loading } =
    useFetchPrompt();

  useEffect(() => {
    fetchPrompt();
  }, [fetchPrompt]);

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const submit = () => handlePromptSubmit(prompt, setResponse);

  return (
    <div className="container">
      <div className="ai-root">
        <div className="label-container">
          <label className="label-text" htmlFor="prompt-text">
            Ask AI warp:
          </label>
        </div>
        <div className="textarea-container">
          <textarea
            className="textarea-text"
            name="prompt text"
            id="prompt-text"
            cols="60"
            rows="1"
            value={prompt}
            onChange={handlePromptChange}
            onKeyDown={(e) => handleKeyDown(e, submit)}
          />
        </div>
        <div className="button-container">
          <button className="button-text" onClick={submit}>
            Prompt
          </button>
        </div>
        <div className="card">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <p className="card-card">{response}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AIWarp;
