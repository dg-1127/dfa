import { useState } from "react";

const PasswordInput = ({ text, change }) => {
  const [isShow, setIsShow] = useState(false);
  const changeShow = () => setIsShow((prev) => !prev);
  return (
    <div className="p-3 flex gap-1 border border-black bg-blue-300">
      <span>{text}</span>
      <input onChange={change} type={isShow ? "text" : "password"} />
      <button onClick={() => changeShow()}>
        {isShow ? "보이기" : "가리기"}
      </button>
    </div>
  );
};

export default PasswordInput;
