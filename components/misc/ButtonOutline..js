import React from "react";

const ButtonOutline = ({ children }) => {
  const onClick = () => {
    window.open("https://app.thecafeteria.tech/signin");
  };
  return (
    <button
      onClick={onClick}
      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-blue-500 text-blue-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-blue-500 hover:text-white-500 transition-all hover:shadow-blue "
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
