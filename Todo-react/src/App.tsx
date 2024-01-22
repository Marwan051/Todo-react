import { useEffect, useRef, useState } from "react";
import "./App.css";
import AddingForm from "./components/AddingForm";
import List from "./components/List";
import EditDialog from "./components/EditDialog";
import { EditElementContext, delContext } from "./components/contexts";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>();
  const [inputList, setInputList] = useState<string[]>([]);
  const [editDialog, setEditDialog] = useState<boolean>(false);
  const [editText, setEditText] = useState<string>("");
  const indexRef = useRef<number>(0);

  useEffect(() => {
    if (input) {
      setInputList((prevInputList) => [...prevInputList, input!]);
    }
    setInput("");
  }, [input]);
  useEffect(() => {
    setInputList((prevInputList) => {
      return prevInputList.map((_, i): string => {
        return i === indexRef.current ? editText : prevInputList[i];
      });
    });
  }, [editText]);
  const deleteElement = (index: number) => {
    setInputList((prevInputList) => {
      return prevInputList.filter((_, i): boolean => {
        return i !== index;
      });
    });
  };
  const editElement = (element: string, index: number) => {
    indexRef.current = index;
    setEditText(element);
    setEditDialog(true);
  };
  return (
    <>
      <h1 style={{ color: "white" }}>To-Do React</h1>
      <delContext.Provider value={{ deleteElement }}>
        <EditElementContext.Provider value={{ editElement }}>
          <AddingForm setInput={setInput} inputRef={inputRef} />
          {inputList.length !== 0 && <List inputList={inputList} />}
          {editDialog && (
            <EditDialog
              editDialog={editDialog}
              setEditDialog={setEditDialog}
              editText={editText}
              setEditText={setEditText}
              index={indexRef.current}
            />
          )}
        </EditElementContext.Provider>
      </delContext.Provider>
    </>
  );
}

export default App;
