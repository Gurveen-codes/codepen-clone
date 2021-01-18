import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";

const Editor = (props) => {
  const { displayName, language, value, onChange } = props;

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName} <button>O/C</button>
      </div>
      <ControlledEditor
        className="code-mirror-wrapper"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineNumbers: true,
          lineWrapping: true,
          mode: language,
          lint: true,
          theme: "material",
        }}
      ></ControlledEditor>
    </div>
  );
};

export default Editor;
