import { useState } from "react";

const Input = () => {
  const [num, setNum] = useState(0);
  const [isOver10, setIsOver10] = useState(false);

  const change = (e) => {
    setNum((v) => {
      return e.target.value.length;
    });
    setIsOver10((v) => {
      return e.target.value.length > 10;
    });
  };

  return (
    <>
      <input className="bg-slate-300" onChange={(e) => change(e)} type="text" />
      <span style={{ color: isOver10 ? "red" : "black" }}>{num}</span>
    </>
  );
};

export default Input;
