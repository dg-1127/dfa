import { stateMap } from "./style/car";

const CarStateText = (props) => {
  return (
    <span style={{ fontWeight: "bold", color: stateMap[props.state].color }}>
      {stateMap[props.state].text}
    </span>
  );
};

export default CarStateText;
