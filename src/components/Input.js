import React, { useState, useEffect } from "react";
import { useInputContext } from "../utils/inputContext";
const Input = (props) => {
  const { id } = props;
  const { deleteInput, updateInputText } = useInputContext();
  const [text, setText] = useState("");

  console.log(id);

  useEffect(() => {
    updateInputText(id, text);
  }, [text]);
  return (
    <>
      <div className="flex space-x-2">
        <input
          placeholder={"enter the text" + id}
          className="p-2 border-2 rounded-md "
          value={text}
          onChange={(event) => {
            setText(event.target.value);
            console.log(text);
          }}
        />
        <button
          className="text-red-500 border-2 p-2 rounded-md "
          onClick={() => {
            deleteInput(id);
          }}
        >
          <i className="fa-solid fa-trash-can fa-xl"></i>
        </button>
      </div>
    </>
  );
};

export default Input;
