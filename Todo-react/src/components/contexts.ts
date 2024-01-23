import { createContext } from "react";

interface DeleteElementContext  {
    deleteElement: (index: number) => void;
  }
  
  interface EditElement  {
    editElement: (item: string,index:number) => void;
  }
  const EditElementContext = createContext<EditElement | undefined>(undefined!);
  const delContext = createContext<DeleteElementContext | undefined>(
    undefined!
);
export { EditElementContext, delContext };