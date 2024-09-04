import React from "react";
import "./Home.css";
import Photo from "../../assets/photo.jpg";
import Typewriter from "typewriter-effect";
import Avatar from "../../assets/avatar1.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <div className="flex m-8 home">
        <div className="w-1/2 grid place-items-center text-left home-content">
          <h1>
            <span className="span1 text-[2.5rem] text-[white]">Hi There!</span>
            <br />
            <span className="span2 text-[3rem] text-[white]">I'M </span>
            <span className="text-[#c863ef] text-[3rem]">
              <b className="name">S. DHANUSH</b>
            </span>
            <br />
            <span className="span3 text-[2rem] text-[#c863ef]  font-medium">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "React Developer",
                    "Web Developer",
                    "Freelancer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
              />
            </span>
          </h1>
        </div>
        <div className="grid place-items-center w-1/2 home-img">
          <img
            src={Photo}
            alt="S. Dhanush"
            className="w-[400px] h-[400px] rounded-[50%] border-[3px] border-[solid] border-[#c863ef] myImg"
          />
        </div>
      </div>
      <div className="home2 flex gap-[50px] px-16 bg-[#000]">
        <div className="home-avatar grid place-items-center h-[400px]">
          <img src={Avatar} alt="Avatar" className="w-[300px] h-[300px]" />
        </div>
        <div className="home2-content pt-8">
          <h2 className=" text-[2rem] text-[white] pb-8">
            LET ME <span className="text-[#c863ef]">INTRODUCE</span> MYSELF
          </h2>
          <p className="text-[white] text-[18px] pb-4">
            A passionate{" "}
            <span className="text-[#c863ef]">Frontend Developer </span>
            with a strong foundation in creating responsive and visually
            appealing web applications.
          </p>
          <p className="text-[white] text-[18px] pb-4">
            Proficient in{" "}
            <span className="text-[#c863ef]">HTML, CSS and JavaScript </span>
            with experience in frameworks and library like{" "}
            <span className="text-[#c863ef]">Bootsrap and React.js.</span>
          </p>
          <p className="text-[white] text-[18px] pb-4">
            I have a keen eye for <span className="text-[#c863ef]">design</span>{" "}
            and <span className="text-[#c863ef]"> usability,</span> ensuring
            that <span className="text-[#c863ef]"> user experiences</span> are
            both intuitive and engaging.
          </p>
          <p className="text-[white] text-[18px]">
            I bring{" "}
            <span className="text-[#c863ef]">
              creativity, technical expertise, and a problem-solving
            </span>{" "}
            mindset to every project I work on.
          </p>
        </div>
      </div>
      <div className="link  py-16">
        <h1 className="text-center text-[#fff] text-[30px]">REACH ME ON</h1>
        <p className="text-center text-[#fff] text-[20px]">
          Feel free to <span className="text-[#c863ef]">connect</span> with me
        </p>
        <div className="links flex gap-4 justify-center mt-[20px]">
          <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%]">
            <a
              href="https://github.com/dhanush3727"
              target="_blank"
              className="grid place-items-center pt-[10px]"
            >
              <FaGithub color="#6f0d85" size={30} />
            </a>
          </div>
          <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%]">
            <a
              href="https://www.linkedin.com/in/dhanush15/"
              target="_blank"
              className="grid place-items-center pt-[10px]"
            >
              <FaLinkedin color="#6f0d85" size={30} />
            </a>
          </div>
          <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%]">
            <a
              href="https://www.instagram.com/s.dhanush_15"
              target="_blank"
              className="grid place-items-center pt-[10px]"
            >
              <FaSquareInstagram color="#6f0d85" size={30} />
            </a>
          </div>
          <div className="w-[50px] h-[50px] bg-[#fff] rounded-[50%]">
            <a
              href="mailto:dhanushs4827@gmail.com"
              target="_blank"
              className="grid place-items-center pt-[10px]"
            >
              <IoMdMail color="#6f0d85" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
