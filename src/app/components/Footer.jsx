import React from "react";

const Footer = () => {
    const today = new Date();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>FA</span>
        <h4 className="text-slate-700">Impulsando tu éxito en línea a través del desarrollo web de vanguardia. Convierte tu visión en realidad.</h4>
        <p className="text-slate-700"> © Flavio Arzamendia {today.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;