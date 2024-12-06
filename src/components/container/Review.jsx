const Review = ({ text, isSelected, change }) => {
  return (
    <button
      onClick={change}
      style={{ color: isSelected ? "white" : "black" }}
      className={`px-5 py-3 border text-black ${
        isSelected ? "bg-black" : "bg-white"
      }`}
    >
      {text}
    </button>
  );
};

export default Review;
