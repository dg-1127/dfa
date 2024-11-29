import CarNameText from "./components/CarNameText";
import CarNumber from "./components/CarNumber";
import CarStateText from "./components/CarStateText";
import { stateMap } from "./components/style/car";

const CarCard = (props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "20px",
        backgroundColor: stateMap[props.state].bg,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CarNameText CarName={props.CarName} />
        <CarStateText state={props.state} />
      </div>
      <CarNumber number={props.number} />
    </section>
  );
};

export default CarCard;
