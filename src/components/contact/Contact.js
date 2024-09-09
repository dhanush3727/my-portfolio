import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const initialValue = {
    fullName: "",
    email: "",
    msg: "",
  };
  const [formValues, setFormValues] = useState(initialValue);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formValues);
    emailjs
      .sendForm("service_z7c0dib", "template_ax68rhh", form.current, {
        publicKey: "TN8WCWgSB8UzePSZv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message Sent Succesfully");
          setFormValues({
            fullName: "",
            email: "",
            msg: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Message wasn't sent");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div>
      <div className="grid place-items-center my-8">
        <form
          ref={form}
          action=""
          className="[box-shadow:rgba(115,_95,_130,_0.24)_0px_5px_20px] border-[1px] border-[solid] border-[#735f82] rounded-[5px] py-8 px-12 mx-8"
          onSubmit={handleForm}
        >
          <h1 className="text-[#c863ef] text-[30px] pb-4">Contact Me</h1>
          <label htmlFor="name" className="text-[#fff] text-[20px]">
            Full Name :{" "}
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="fullName"
            placeholder="Full Name"
            className="p-[15px] mb-4 w-full rounded-[5px] "
            value={formValues.fullName}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="email" className="text-[#fff] text-[20px]">
            Email :
          </label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="p-4 mb-4 w-full rounded-[5px]"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="msg" className="text-[#fff] text-[20px]">
            Message :{" "}
          </label>
          <br />
          <textarea
            name="msg"
            id="msg"
            cols="50"
            rows="5"
            className="p-4 mb-4 w-full rounded-[5px]"
            placeholder="Message"
            value={formValues.msg}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <button
            type="submit"
            className="w-full text-[#fff] p-[10px]  text-[20px] bg-[#5a327b] rounded-[5px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
