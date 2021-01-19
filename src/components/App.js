import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [javascript, setJavascript] = useLocalStorage("javascript", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
                    <body>${html}</body>
                    <style>${css}</style>
                    <script>${javascript}</script>
                  </html>`);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, javascript]);
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
          srcDoc={srcDoc}
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
