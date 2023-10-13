// ts
"use client";
import React, { useState } from "react";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

function ContactFormComponent() {
  axios.defaults.withCredentials = true;
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    company_name: "",
    company_title: "",
    request_type: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (event: any) => {
    let name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      //Checks if input is a switch or checkbox to handle the boolean value.
      name = event.target.name;
      value = event.target.checked;
    } else if (event.target.type === "number") {
      name = event.target.name;
      value = parseInt(event.target.value);
    } else {
      name = event.target.name;
      value = event.target.value;
    }

    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function handleSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);
    //const ip = await ipGetter();

    try {
      const form = {
        origin: "iMConstruct",
        first_name: inputs.first_name,
        last_name: inputs.last_name,
        email: inputs.email,
        phone: inputs.phone,
        company_name: inputs.company_name,
        company_title: inputs.company_title,
        request_type: inputs.request_type,
        subject: inputs.subject,
        message: inputs.message,
      };

      const response = await axios.post(
        baseUrl + "/public/v1/contact-message",
        form
      );

      setInputs({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company_name: "",
        company_title: "",
        request_type: "",
        subject: "",
        message: "",
      });
      setIsLoading(false);
      //insert toast here
      alert(response.data?.msg);
    } catch (err) {
      setIsLoading(false);
      //insert toast here
    }
  }

  return (
    <div className="p-4 my-10 rounded-md shadow-[0_8px_30px_rgb(0,0,0,0.2)] max-w-[700px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex flex-col mb-2 mx-1">
            <label className="text-black mb-1">First Name</label>
            <input
              className="text-black p-2 border-2 border-gray-300 rounded-md h-[40px] min-w-[280px]"
              aria-label="First Name"
              name={"first_name"}
              onChange={handleChange}
              value={inputs.first_name}
            />
          </div>
          <div className="flex flex-col mb-2 mx-1">
            <label className="text-black mb-1">Last Name</label>
            <input
              className="text-black p-2 border-2 border-gray-300 rounded-md h-[40px] min-w-[280px]"
              aria-label="Last Name"
              name={"last_name"}
              onChange={handleChange}
              value={inputs.last_name}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="flex flex-col mb-2 mx-1">
            <label className="text-black mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="text-black p-2 border-2 border-gray-300 rounded-md h-[40px] min-w-[280px]"
              aria-label="Email"
              name={"email"}
              type={"email"}
              required
              onChange={handleChange}
              value={inputs.email}
            />
          </div>
          <div className="flex flex-col mb-2 mx-1">
            <label className="text-black mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              className="text-black p-2 border-2 border-gray-300 rounded-md h-[40px] min-w-[280px]"
              aria-label="Subject"
              name={"subject"}
              onChange={handleChange}
              required
              value={inputs.subject}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="flex flex-col mb-2 mx-1">
            <label className="text-black mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              className="text-black p-2 border-2 border-gray-300 rounded-md h-[120px] w-[280px] sm:w-[570px]"
              aria-label="Message"
              name={"message"}
              onChange={handleChange}
              required
              value={inputs.message}
            />
          </div>
        </div>
        <br />
        {isLoading ? (
          <div className="flex items-center justify-center">
            <p className={"text-black"}>Sending... </p>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-black text-white text-center mt-4 p-1 rounded-lg transition hover:bg-gray-700 w-[150px]"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactFormComponent;
