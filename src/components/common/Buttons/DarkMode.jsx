import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";

const DarkMode = () => {
  const [modeChange, setModeChange] = useState(false);

  const change = () => {
    alert(modeChange ? "다크모드" : "화이트모드");
    setModeChange((v) => {
      return !v;
    });
  };

  return (
    <button onClick={() => change()}>
      {modeChange ? <MdDarkMode /> : <FaRegSun />}
    </button>
  );
};

export default DarkMode;
