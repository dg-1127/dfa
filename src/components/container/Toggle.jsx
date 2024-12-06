import { useState } from "react";

const Toggle = () => {
  const [num, setNum] = useState(2);
  const change = () => setNum((v) => v ** 2);

  return (
    <button onClick={change} className="border bg-pink-400 p-2">
      {num}
    </button>
  );
};

export default Toggle;
