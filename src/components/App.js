import React, { useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");

  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        ></Editor>
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        ></Editor>
        <Editor
          displayName="Javascript"
          language="javascript"
          value={javascript}
          onChange={setJavascript}
        ></Editor>
      </div>
      <div className="pane">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
