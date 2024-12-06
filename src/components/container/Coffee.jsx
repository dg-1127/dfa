import { useState } from "react";
import CoffeeButton from "./CoffeeButton";

const Coffee = ({ menu }) => {
  const [coffee, setCoffee] = useState(
    Array(menu.length)
      .fill()
      .map((v) => false)
  );

  const change = (num) => {
    setCoffee((prev) => {
      const newArr = prev.map((v, i) => i == num);
      return newArr;
    });
  };

  return (
    <div className="flex">
      {menu.map((v, i) => (
        <CoffeeButton
          change={() => change(i)}
          isSelected={coffee[i]}
          text={v}
        />
      ))}
    </div>
  );
};

export default Coffee;
