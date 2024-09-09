import React from "react";
import "./Project.css";
import Weather from "../../assets/weather.png";
import ShoppingCart from "../../assets/shoppingcart.png";
import FoodReceipe from "../../assets/foodreceipe.png";
import FormValidation from "../../assets/formvalidation.png";

const Project = () => {
  return (
    <div className="my-20">
      <div>
        <div className="text-center mb-12 px-8">
          <h1 className="title text-[#fff] text-[40px]">
            My Recent <span className="text-[#c863ef]">Projects</span>
          </h1>
          <p className="content text-[#fff]">
            Here are the few projects I've worked on recently.
          </p>
        </div>
        <div className="flex justify-center gap-12 flex-wrap px-12">
          <div className="card grid place-items-center w-[300px] px-8 py-12 [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px]">
            <img
              src={Weather}
              alt="weather application"
              className="w-[200px] h-[100px]"
            />
            <h1 className="text-[#fff] text-[20px] pt-8 pb-[20px]">
              Weather Application
            </h1>
            <p className="text-[#fff] text-[15px]">
              Developed a sleek weather application using React, providing
              real-time updates and forecasts with intuitive user interface and
              responsive design. Seamlessly integrates with weather APIs to
              fetch accurate data, enhancing user experience.
            </p>
            <div className="mt-8 flex gap-8">
              <a
                href="https://github.com/dhanush3727/Weather_Project"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn text-[#fff] bg-[#5a327b] py-[10px] px-[20px] rounded-[3px]">
                  Code
                </button>
              </a>
              <a
                href="https://weatherapp03.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn text-[#fff] bg-[#5a327b] py-[10px] px-[20px] rounded-[3px]">
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div className="card grid place-items-center w-[300px] px-8 py-12 [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px]">
            <img
              src={ShoppingCart}
              alt="shopping cart"
              className="w-[200px] h-[100px]"
            />
            <h1 className="text-[#fff] text-[20px] pt-8 pb-[20px]">
              Shopping Cart
            </h1>
            <p className="text-[#fff] text-[15px]">
              Successfully designed and implemented a feature-rich shopping cart
              website utilizing React. Proficient in front-end development,
              emphasizing intuitive user interfaces and responsive design.
            </p>
            <div className="mt-8 flex gap-8">
              <a
                href="https://github.com/dhanush3727/Shopping-Cart"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn text-[#fff] bg-[#5a327b] py-[10px] px-[20px] rounded-[3px]">
                  Code
                </button>
              </a>
              <a
                href="https://shoppingcart15.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn text-[#fff] bg-[#5a327b] py-[10px] px-[20px] rounded-[3px]">
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div className="card grid place-items-center w-[300px] px-8 py-12 [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px]">
            <img
              src={FoodReceipe}
              alt="food receipe"
              className="w-[200px] h-[100px]"
            />
            <h1 className="text-[#fff] text-[20px] pt-8 pb-[20px]">
              Food Receipe
            </h1>
            <p className="text-[#fff] text-[15px]">
              Developed a food recipe web app integrating APIs for seamless data
              retrieval. Strong understanding of front-end technologies with a
              focus on user experience and interface design.
            </p>
            <div className="mt-8 flex gap-8">
              <a
                href="https://github.com/dhanush3727/Food_Recipe"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn text-[#fff] bg-[#5a327b] py-[10px] px-[20px] rounded-[3px]">
                  Code
                </button>
              </a>
              <a
                href="https://foodrecipe15.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn text-[#fff] bg-[#5a327b] py-[10px] px-[20px] rounded-[3px]">
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div className="card grid place-items-center w-[300px] px-8 py-12 [box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] rounded-[5px] border-[1px] border-[solid] border-[#735f82] w-[180px]">
            <img
              src={FormValidation}
              alt="food receipe"
              className="w-[200px] h-[100px]"
            />
            <h1 className="text-[#fff] text-[20px] pt-8 pb-[20px]">
              Form Validation
            </h1>
            <p className="text-[#fff] text-[15px]">
              Developed a React-based registration form featuring user input
              validation, form submission handling, and error messaging.
              Utilized state management for dynamic updates and ensured
              accessibility and responsiveness for enhanced user experience.
            </p>
            <div className="mt-8 flex gap-8">
              <a
                href="https://github.com/dhanush3727/Form-Validation"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn text-[#fff] bg-[#5a327b] py-[10px] px-[20px] rounded-[3px]">
                  Code
                </button>
              </a>
              <a
                href="https://reactformvalidation15.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn text-[#fff] bg-[#5a327b] py-[10px] px-[20px] rounded-[3px]">
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
