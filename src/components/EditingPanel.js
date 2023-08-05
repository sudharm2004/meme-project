import React from "react";
import Input from "./Input";
import { useInputContext } from "../utils/inputContext";

const EditingPanel = () => {
  const { inputList, addInput } = useInputContext();
  console.log(useInputContext());
  return (
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
        {inputList.map((element) => (
          <Input key={element.id} id={element.id} />
        ))}
      </div>
    </div>
  );
};

export default EditingPanel;
