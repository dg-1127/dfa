const Button = ({ coffee, num }) => {
  const msg = () => {
    alert(`${coffee}(커피) ${num}개 주문하셨습니다.`);
  };

  return (
    <button onClick={() => msg()} className="border border-black p-2">
      {coffee}
    </button>
  );
};

export default Button;
