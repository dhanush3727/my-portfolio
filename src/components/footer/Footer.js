import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#0b0416]">
      <div className="footer p-4 flex justify-between items-center gap-[20px]">
        <div>
          <p className="text-[#fff] text-center">
            Developed & Designed by <br />
            S. Dhanush
          </p>
        </div>
        <div className="flex gap-[20px]">
          <div>
            <a href="https://github.com/dhanush3727" target="_blank">
              <FaGithub color="#fff" size={20} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/dhanush15/" target="_blank">
              <FaLinkedin color="#fff" size={20} />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/s.dhanush_15" target="_blank">
              <FaSquareInstagram color="#fff" size={20} />
            </a>
          </div>
          <div>
            <a href="mailto:dhanushs4827@gmail.com" target="_blank">
              <IoMdMail color="#fff" size={20} />
            </a>
          </div>
        </div>
        <div>
          <p className="text-[#fff]">Copyright &copy; 2024 SD</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
