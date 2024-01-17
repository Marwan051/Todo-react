import { useContext } from "react";
import { delContext, EditElementContext } from "../App";
type elementProb = {
  element: string;
  index: number;
};
const ListElement = ({ element, index }: elementProb) => {
  const deleteContext = useContext(delContext);
  const { deleteElement } = deleteContext!;
  const editContext = useContext(EditElementContext);
  const { editElement } = editContext!;
  return (
    <div className="ListElement">
      <div>{element}</div>
      <button
        className="edit"
        onClick={(e) => {
          e.preventDefault();
          deleteElement(index);
          editElement(element);
        }}
      >
        Edit
      </button>
      <button
        className="delete"
        onClick={(e) => {
          e.preventDefault();
          deleteElement(index);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListElement;
