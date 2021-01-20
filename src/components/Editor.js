import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Editor = (props) => {
  const { displayName, language, value, onChange } = props;

  const [open, setOpen] = useState(true);

  const handleChange = (_editor, _data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}{" "}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => {
            setOpen((prevOpen) => !prevOpen);
          }}
        >
          <FontAwesomeIcon
            icon={open ? faCompressAlt : faExpandAlt}
          ></FontAwesomeIcon>
        </button>
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
