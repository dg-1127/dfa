import { useState } from "react";
import PasswordInput from "../common/Input/PasswordInput";
import Valid from "../common/Buttons/Valid";

const Password = () => {
  const [check, setCheck] = useState({
    password: "",
    passwordCheck: "",
    isValid: true,
  });

  const change1 = (e) => {
    const { value } = e.target;
    setCheck((prev) => {
      return { ...prev, password: value, isValid: value == prev.passwordCheck };
    });
  };

  const change2 = (e) => {
    const { value } = e.target;
    setCheck((prev) => {
      return { ...prev, passwordCheck: value, isValid: value == prev.password };
    });
  };

  return (
    <div>
      <PasswordInput text={"비밀번호"} change={(e) => change1(e)} />
      <PasswordInput text={"비밀번호 확인"} change={(e) => change2(e)} />
      <Valid check={check} />
    </div>
  );
};

export default Password;
