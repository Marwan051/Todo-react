import { useRef } from "react";
import Modal from "react-modal";
interface EditDialogProps {
  setEditDialog: React.Dispatch<React.SetStateAction<boolean>>;
  editDialog: boolean;
  editText: string;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
  index: number;
}
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    width: "30%",
    height: "30%",
    transform: "translate(-50%, -50%)",
    background: "#333", // dark background
    color: "#fff", // light text
    border: "1px solid #444", // darker border
  },
};
const EditDialog = ({
  editDialog,
  setEditText,
  setEditDialog,
  editText,
}: EditDialogProps) => {
  const setEditDialogFalse = () => {
    setEditDialog(false);
  };
  const inputText = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEditText(inputText.current!.value);
    setEditDialog(false);
  };
  return (
    <Modal isOpen={editDialog} style={customStyles}>
      <form onSubmit={handleSubmit} method="dialog" className="dialog-form">
        <input
          type="text"
          defaultValue={editText}
          ref={inputText}
          className="dialog-input"
        />
        <div className="form-btns">
          <button className="edit" type="submit">
            Edit
          </button>
          <button className="clear" onClick={setEditDialogFalse}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditDialog;
