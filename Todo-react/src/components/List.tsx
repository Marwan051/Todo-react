import ListElement from "./ListElement";
interface listProps {
  inputList: string[];
}
const List = ({ inputList }: listProps) => {
  return (
    <ul className="list">
      {inputList.map((element, index) => {
        return <ListElement key={index} element={element} index={index} />;
      })}
    </ul>
  );
};

export default List;
