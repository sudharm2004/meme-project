import React, { useContext } from "react";
import inputContext from "../utils/inputContext";
const Input = (props) => {
  const { id } = props;
  const { inputList, setInputList } = useContext(inputContext);

  const deleteInput = () => {
    console.log("inputlist in deleteinput ", inputList);
    const updateList = inputList.filter((element) => element.props.id !== id);
    setInputList(updateList);
    console.log("updatelist in deleteinput ", updateList);
  };
  return (
    <>
      <div className="flex space-x-2">
        <input
          placeholder={"enter the text" + id}
          className="p-2 border-2 rounded-md "
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
