import React from "react";

const Footer = () => {
    const today = new Date();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white sm:mx-2">
      <div className="container p-12 flex justify-between ">
        <span className=" text-white sm:px-4 ml-4">FA</span>
        <h4 className="text-white px-4">Convierte tu visión en realidad.</h4>
        <p className="text-white"> © Flavio Arzamendia {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;