import React from "react";

const Button = ({ text, type, onClick }) => {
  const bgColor = () => {
    switch (type) {
      case "primary":
        return "bg-teal-500";
      case "secondary":
        return "bg-green-700";
      default:
        return "bg-teal-500";
    }
  };

  return (
    <button className={`text-white px-4 py-2 rounded w-fit max-w-full ${bgColor()}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;