import React from "react";
import Editor from "./Editor";

function App() {
  return (
    <>
      <div className="pane top-pane">
        <Editor displayName="HTML"></Editor>
        <Editor displayName="CSS"></Editor>
        <Editor displayName="Javascript"></Editor>
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
