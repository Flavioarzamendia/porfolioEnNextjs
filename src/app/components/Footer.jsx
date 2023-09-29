import React from "react";

const Footer = () => {
    const today = new Date();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>FA</span>
        <p className="text-slate-700"> © Flavio Arzamendia {today.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;