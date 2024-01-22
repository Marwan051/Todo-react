import { useContext } from "react";
import { delContext, EditElementContext } from "./contexts";
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
    <div className="list-element">
      <div>{element}</div>
      <div className="element-btns">
        <button
          className="edit"
          onClick={(e) => {
            e.preventDefault();
            editElement(element, index);
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
    </div>
  );
};

export default ListElement;
