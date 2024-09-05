import React from "react";
import "./About.css";
import Avatar from "../../assets/avatar2.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa6";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const About = () => {
  return (
    <div className="pb-12">
      <div className="about pb-20">
        <div className="grid place-items-center">
          <img src={Avatar} alt="" className="abt-img " />
        </div>
        <div className="about-content text-center px-12">
          <h1 className="text-[#fff] text-[30px]">
            Know More <span className="text-[#c863ef]">About Me </span>
          </h1>
          <p className="text-[#fff] text-[20px]">
            Hi Everyone, I am <span className="text-[#c863ef]">S. Dhanush</span>{" "}
            from Trichy, Tamilnadu. I have completed my Bsc in{" "}
            <span className="text-[#c863ef]">Bishop Heber College, </span>
            Trichy. I completed my schooling in{" "}
            <span className="text-[#c863ef]">
              K.A.P Visvanathan Hr. Sec. School. I have skilled in{" "}
              <span className="text-[#c863ef]">Frontend Development</span> and
              have done some projects.
            </span>{" "}
            I am currently looking for{" "}
            <span className="text-[#c863ef]">Frontend Development jobs</span>{" "}
            and{" "}
            <span className="text-[#c863ef]">Freelancing oppotunities.</span>
          </p>
        </div>
      </div>
      <div className="">
        <div className="text-center">
          <h1 className="text-[#c863ef] text-[40px] font-semibold">SKILLS</h1>
          <p className="text-[#fff] text-[20px] px-8">
            Here are some <span className="text-[#c863ef]">skills & tools</span>{" "}
            on which I have learnt.
          </p>
        </div>
        <div className=" flex flex-wrap justify-center p-16 gap-12">
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <FaHtml5 className="text-white w-[100px] h-[100px]" />
          </div>
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <FaCss3Alt className="text-white w-[100px] h-[100px]" />
          </div>
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <AiOutlineJavaScript className="text-white w-[100px] h-[100px]" />
          </div>
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <FaReact className="text-white w-[100px] h-[100px]" />
          </div>
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <FaBootstrap className="text-white w-[100px] h-[100px]" />
          </div>
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <SiTailwindcss className="text-white w-[100px] h-[100px]" />
          </div>
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <FaGitAlt className="text-white w-[100px] h-[100px]" />
          </div>
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <FaGithub className="text-white w-[100px] h-[100px]" />
          </div>
          <div className="tool-icon [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px] h-[120px] grid place-items-center cursor-pointer">
            <VscVscode className="text-white w-[100px] h-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
