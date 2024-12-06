import { useState } from "react";
import StatusButton from "./StatusButton";

const Select = ({ menu }) => {
  const [buttons, setButtons] = useState(
    Array(menu.length)
      .fill()
      .map((v) => false)
  );

  const change = (x) => {
    setButtons((prev) => {
      const newArr = prev.map((v, i) => i == x);
      return newArr;
    });
  };

  return (
    <div className="flex">
      {menu.map((v, i) => (
        <StatusButton
          change={() => change(i)}
          isSelected={buttons[i]}
          text={v}
        />
      ))}
    </div>
  );
};

export default Select;
