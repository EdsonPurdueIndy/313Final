import CompCard from "./Card";
import components from "./componentsData";

const List = () => {
  return (
    <div className="comp_container">
      {components.map((item, index) => (
        <CompCard key={index} item={item} />
      ))}
    </div>
  );
};

export default List;
