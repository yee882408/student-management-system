import React from "react";

const Button = ({ onClick, name }) => {
  return (
    <button
      onClick={onClick}
      className="print:hidden bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    >
      {name}
    </button>
  );
};

export default Button;
