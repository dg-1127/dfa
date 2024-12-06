import { useState } from "react";

const FruitButton = ({ a, b }) => {
  const [fruit, setFruit] = useState(a);

  const change = () => setFruit((v) => (v == a ? b : a));

  return (
    <button onClick={change} className="border p-2">
      {fruit}
    </button>
  );
};

export default FruitButton;
