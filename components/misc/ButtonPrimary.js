import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  const onClick = () => {
    window.open("https://app.thecafeteria.tech/signin");
  };
  return (
    <button
      onClick={onClick}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500	 hover:shadow-blue-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
