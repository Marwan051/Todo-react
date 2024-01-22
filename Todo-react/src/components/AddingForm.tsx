import { FormEvent, MouseEvent, RefObject } from "react";
type tableprops = {
  setInput: (input: string) => void;
  inputRef: RefObject<HTMLInputElement>;
};

const AddingForm = ({ setInput, inputRef }: tableprops) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setInput(inputRef.current!.value);
    inputRef.current!.value = "";
    inputRef.current!.focus();
  }

  function clearField(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    inputRef.current!.value = "";
    inputRef.current!.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="Adding-Form">
      <input type="text" ref={inputRef} defaultValue="" />
      <div className="btns">
        <button className="add" type="submit">
          Add
        </button>
        <button className="clear" onClick={clearField}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default AddingForm;
