import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    // Construct mailto link
    const mailtoLink = `mailto:abhi7.kartik@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.open(mailtoLink, "_self");
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-2xl mt-8 min-w-96 px-8 py-2">
          <label className="mb-2 mt-4">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name here!"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <label className="mb-2 mt-4">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email here!"
            type="email"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <label className="mb-2 mt-4">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message!"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <button
            type="submit"
            className="my-4 bg-violet-100 rounded-md p-2 hover:bg-violet-950 text-white"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
