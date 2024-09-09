import React from "react";
import { GoHome } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Resume from "../../assets/Resume.pdf";
import { useState } from "react";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);
  const [menuBar, setMenuBar] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);

  const handleClick = () => {
    setMenuBar(!menuBar);
  };

  return (
    <nav
      className="flex justify-between items-center px-28 py-[10px] text-[20px] sticky top-[0] [transition:all_0.5s] z-50 nav-bar"
      id={navColor ? "navbar" : "navId"}
    >
      <div>
        <p className="text-[40px] text-[#c863ef] font-semibold">SD.</p>
      </div>
      <div>
        <div
          className={`menu hidden ${menuBar ? "active" : ""}`}
          onClick={handleClick}
        >
          <span className="bar h-[5px] w-[40px] m-[5px] block [transition:all_0.2s] bg-[#ce5ff6] rounded"></span>
          <span className="bar h-[5px] w-[40px] m-[5px] block [transition:all_0.2s] bg-[#ce5ff6] rounded"></span>
          <span className="bar h-[5px] w-[40px] m-[5px] block [transition:all_0.2s] bg-[#ce5ff6] rounded"></span>
        </div>
        <ul
          className={`nav-list flex justify-between items-center gap-16 text-[#ebebed] ${
            menuBar ? "show" : ""
          }`}
        >
          <li className="relative nav-link">
            <NavLink to={"/"}>
              <GoHome className="absolute right-[3.8rem] top-[5px]" /> Home
            </NavLink>
          </li>
          <li className="relative nav-link">
            <NavLink to={"/about"}>
              <RxAvatar className="absolute right-[3.8rem] top-[5px]" /> About
            </NavLink>
          </li>
          <li className="relative nav-link">
            <NavLink to={"/project"}>
              <AiOutlineFundProjectionScreen className="absolute right-[4.4rem] top-[6px]" />{" "}
              Project
            </NavLink>
          </li>
          <li className="relative nav-link">
            <NavLink to={"/contact"}>
              <SiMinutemailer className="absolute right-[5.2rem] top-[5px]" />{" "}
              Contact
            </NavLink>
          </li>
          <div>
            <a href={Resume} target="_blank" rel="noreferrer">
              <button className="bg-[#c964f1] rounded-[100px]  [box-shadow:rgba(0,_0,_0,_0.35)_0px_5px_15px] text-[white] cursor-pointer inline-block font-[CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif] px-[20px] py-[7px] text-center no-underline [transition:all_250ms] border-[0] text-[15px] select-none">
                Check Resume
              </button>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
