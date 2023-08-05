import { createContext, useContext, useState } from "react";

const InputContext = createContext([]);

const useInputContext = () => useContext(InputContext);

const InputContextProvider = ({ children }) => {
  const [inputList, setInputList] = useState([]);
  const [counter, setCounter] = useState(0);
  console.log("contextprovider", inputList);
  const addInput = () => {
    // console.log(inputList.length);
    setInputList(inputList.concat({ id: counter, text: null }));
    const newCounter = counter + 1;
    setCounter(newCounter);
    // console.log(inputList);
  };

  const deleteInput = (id) => {
    console.log("inputlist in deleteinput ", inputList);
    const updateList = inputList.filter((element) => element.id !== id);
    setInputList(updateList);
    // console.log("updatelist in deleteinput ", updateList);
  };

  const updateInputText = (id, text) => {
    // console.log("inputlist in deleteinput ", inputList);
    const updateList = inputList.map((element) => {
      if (element.id == id) {
        return { ...element, text };
      }
      return element;
    });
    setInputList(updateList);
    // console.log("updatelist in deleteinput ", updateList);
  };

  return (
    <InputContext.Provider
      value={{ inputList, addInput, deleteInput, updateInputText }}
    >
      {children}
    </InputContext.Provider>
  );
};

InputContext.displayName = "InputContext";

export { InputContextProvider, useInputContext };
