import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import React from "react";

const footer = () => {
  return (
    <footer className="text-white  py-20 bg_gradient">
      <div className="container mx-auto px-20 lg:px-20 py-20 flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className="font-bold text-center text-amber-200">
            Falance<span className="text-green-500 text-xl">Select</span>
          </p>
          <div className="flex-">
          <p>QUICK LINKS </p>
        </div>
        </div>
        
      </div>
    </footer>
  );
};

export default footer;
