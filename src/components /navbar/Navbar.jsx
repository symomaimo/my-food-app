import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full flex items-center fixed z-10 bg-black">
      <nav className="flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between">
        <div className="flex items-center">
          <p className="font-bold text-center text-amber-600">
            Falance
          </p>
          <span className="text-green-500 text-xl">Select</span>
        </div>
        <ul className="hidden md:flex lg:flex items-center h-full text-white gap-6">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/recipes">Recipe</NavLink>

          {/* <NavLink to="/favourites">Favourites</NavLink> */}
          <Button
            title="sign in"
            containerStyle="hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]"
          />
        </ul>
        <button
          className="block md:hidden text-white text-xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
        </button>
      </nav>
      <div
        className={`${open ? "flex" : "hidden"} 
      bg-black flex flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}
      >
        <NavLink to="/">Home</NavLink>

        <NavLink to="/recipes">Recipe</NavLink>

        <NavLink to="/favourites">Favourites</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
