import React from "react";
import { useState } from "react";
import Input from "./Input";
import inputContext from "../utils/inputContext";

const EditingPanel = () => {
  const [inputList, setInputList] = useState([]);
  const [counter, setCounter] = useState(0);

  const addInput = () => {
    console.log(inputList.length);
    setInputList(inputList.concat(<Input key={counter} id={counter} />));
    const newCounter = counter + 1;
    setCounter(newCounter);
    console.log(inputList);
  };

  return (
    <inputContext.Provider value={{ inputList, setInputList }}>
      <div className="editing-panel rounded-lg">
        <div className="buttons">
          <button
            className="px-4 py-2 bg-orange-400 mx-2 rounded-md text-white hover:bg-orange-500 text-lg"
            onClick={addInput}
          >
            Add Text
          </button>
          <button className="px-4 py-2 bg-orange-400 mx-2 rounded-md text-white hover:bg-orange-500 text-lg">
            Import Image
          </button>
          <button className="px-4 py-2 bg-orange-400 mx-2 rounded-md text-white hover:bg-orange-500 text-lg">
            Export Image
          </button>
        </div>
        <div className="input-buttons flex flex-col space-y-4 p-2">
          {inputList}
        </div>
      </div>
    </inputContext.Provider>
  );
};

export default EditingPanel;
