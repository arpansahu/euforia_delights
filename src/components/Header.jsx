import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="Euforia Delights Logo" className="h-10 mr-2" />
        <h1 className="text-xl font-bold">Euforia Delights</h1>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="text-gray-700 hover:text-primary">
            Home
          </a>
        </li>
        <li>
          <a href="#menu" className="text-gray-700 hover:text-primary">
            Menu
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-primary">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
