const CoffeeButton = ({ text, isSelected, change }) => {
  return (
    <button
      onClick={change}
      style={{ color: isSelected ? "white" : "black" }}
      className={`px-6 py-4 text-base text-slate-600 border ${
        isSelected ? "bg-black" : "bg-white"
      }`}
    >
      {text}
    </button>
  );
};

export default CoffeeButton;
