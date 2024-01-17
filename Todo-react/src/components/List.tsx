import ListElement from "./ListElement";
type listProps = {
  inputList: string[];
};
const List = ({ inputList }: listProps) => {
  return (
    <div className="List">
      {inputList.map((element, index) => {
        return <ListElement key={index} element={element} index={index} />;
      })}
    </div>
  );
};

export default List;
