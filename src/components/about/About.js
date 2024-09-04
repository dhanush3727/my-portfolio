import React from "react";
import "./About.css";
import Avatar from "../../assets/avatar2.png";

const About = () => {
  return (
    <div>
      <div className="about pb-8">
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
    </div>
  );
};

export default About;
