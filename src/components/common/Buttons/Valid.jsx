const Valid = ({ check }) => {
  return (
    <button
      className={`border border-black ${
        check.isValid ? "bg-blue-700" : "bg-red-300"
      }`}
    >
      {check.isValid ? "일치" : "불일치"}
    </button>
  );
};

export default Valid;
