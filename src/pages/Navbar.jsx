import React from "react";
import Logo from "../assets/logo/logo.png";
import Burger from "../assets/icons/burger.png";
import Search from "../assets/icons/search.png";

const navItems = ["Home", "Forecast", "Map", "Alerts", "News"];

export default function Navbar() {
  return (
    <header className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between py-8">
        <div className="flex items-center justify-center">
          <img src={Logo} alt="" style={{ width: "6rem", height: "5rem" }} />
          <span className="font-semibold">Weather App</span>
        </div>
        <ul className="flex gap-6 font-semibold">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#" className="px-5 py-1 rounded-2xl hover:bg-[#103936] hover:text-gray-50 hover:border hover:border:white/20 transition">{item}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between w-20">
          <a href="#"><img src={Search} alt="" style={{ width: "1.5rem", height: "1.5rem" }} /></a>
          <a href="#"><img src={Burger} alt="" style={{ width: "1.5rem", height: "1.5rem" }} /></a>
        </div>
      </div>
    </header>
  );
}
