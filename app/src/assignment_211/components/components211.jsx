import React, { useState, useEffect, useRef } from "react";
import Input from "./input.component";
import Button from "./button.component";

export default function Components202() {
  let [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [editMode]);

  return (
    <div>
      {editMode && <Input ref={inputRef} />}
      <Button onClick={() => setEditMode((editMode) => !editMode)}>
        {editMode ? "save" : "edit"}
      </Button>
    </div>
  );
};
