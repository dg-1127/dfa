import CarCard from "./CarCard";

function App() {
  const data = [
    { state: "await", CarName: "니로 EV", number: "38로2938", bg: "await" },
    { state: "await", CarName: "니로 EV", number: "38로2938", bg: "await" },
    { state: "unComp", CarName: "니로 EV", number: "38로2938", bg: "unComp" },
    { state: "await", CarName: "니로 EV", number: "38로2938", bg: "await" },
    { state: "await", CarName: "니로 EV", number: "38로2938", bg: "await" },
    { state: "unComp", CarName: "니로 EV", number: "38로2938", bg: "unComp" },
    { state: "unComp", CarName: "니로 EV", number: "38로2938", bg: "unComp" },
  ];

  return (
    <>
      {data.map((v) => (
        <CarCard {...v} />
      ))}
    </>
  );
}

export default App;
