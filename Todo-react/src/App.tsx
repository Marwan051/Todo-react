import { createContext, useEffect, useRef, useState } from "react";
import "./App.css";
import AddingForm from "./components/AddingForm";
import List from "./components/List";
type DeleteElementContextType = {
  deleteElement: (index: number) => void;
};

const delContext = createContext<DeleteElementContextType | undefined>(
  undefined
);
type EditElement = {
  editElement: (item: string) => void;
};
const EditElementContext = createContext<EditElement | undefined>(undefined!);

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>();
  const [inputList, setInputList] = useState<string[]>([]);

  useEffect(() => {
    if (input) {
      setInputList((prevInputList) => [...prevInputList, input!]);
    }
    setInput("");
  }, [input]);

  const deleteElement = (index: number) => {
    setInputList((prevInputList) => {
      return prevInputList.filter((_, i): boolean => {
        return i !== index;
      });
    });
  };
  function editElement(item: string): void {
    inputRef.current!.value = item;
    inputRef.current!.focus();
  }
  return (
    <delContext.Provider value={{ deleteElement }}>
      <EditElementContext.Provider value={{ editElement }}>
        <AddingForm setInput={setInput} inputRef={inputRef} />
        <List inputList={inputList} />
      </EditElementContext.Provider>
    </delContext.Provider>
  );
}

export default App;
export { delContext, EditElementContext };
