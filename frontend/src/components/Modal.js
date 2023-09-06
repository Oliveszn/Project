import React from "react";
import { useState } from "react";

const Modal_styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "15px",
  zIndex: 1000,
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  borderRadius: "12px",
  width: "400px",
};

const overlay = {
  position: "fixed",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  background: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const Modal = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = { email, name };

    const response = await fetch("/api/appointment/listing", {
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      console.log("not okay");
    }
    if (response.ok) {
      setEmail("");
      setName("");
      console.log("new appontment added", json);
    }
  };

  return (
    <>
      <div style={overlay} />
      <div className="modalBack" style={Modal_styles}>
        <div className="flex justify-between items-center mb-4">
          <div className="">
            <h3 className="">Sign in to our platform</h3>
          </div>
          <div>
            <button
              onClick={() => {
                closeModal(false);
              }}
              type="button"
              className="text-xl hover:text-[crimson] font-medium "
            >
              X<span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2  appearance-none dark:border-gray-600 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-lg bg-transparent border-0 border-b-2  appearance-none dark:border-gray-600 focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First Name
              </label>
            </div>
            <button className="">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
