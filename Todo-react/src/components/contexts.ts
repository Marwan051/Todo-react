import { createContext } from "react";

type DeleteElementContextType = {
    deleteElement: (index: number) => void;
  };
  
  type EditElement = {
    editElement: (item: string,index:number) => void;
  };
  const EditElementContext = createContext<EditElement | undefined>(undefined!);
  const delContext = createContext<DeleteElementContextType | undefined>(
    undefined!
);
export { EditElementContext, delContext };