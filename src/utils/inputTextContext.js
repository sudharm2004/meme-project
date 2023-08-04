// inputTextContext.js
import { createContext, useContext, useState } from "react";

const InputTextContext = createContext();

const useInputText = () => useContext(InputTextContext);

const InputTextProvider = ({ children }) => {
  const [inputTextData, setInputTextData] = useState({});

  const updateInputText = (id, text) => {
    setInputTextData((prevData) => ({ ...prevData, [id]: text }));
  };

  return (
    <InputTextContext.Provider value={{ inputTextData, updateInputText }}>
      {children}
    </InputTextContext.Provider>
  );
};

export { InputTextProvider, useInputText };
