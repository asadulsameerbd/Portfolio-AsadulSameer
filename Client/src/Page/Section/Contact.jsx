import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

import ScrollProgress from "../../Components/ScrolProgress";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://server-mu-bice-23.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire({
        title: "Thank You ❤️",
        text: "Your Mail is Submitted Successfully!",
        icon: "success",
      });

      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong ❌");
    }
  };

  return (
    <div id="contact" className="px-4 pb-10 md:py-20">
      {/* heading */}
      <p className="text-center text-sm text-[#D366DC]">CONTACT</p>

      <h1 className="text-2xl md:text-4xl text-center py-4 font-semibold">
        Let’s work{" "}
        <span className="bg-gradient-to-r from-[#AC70DB] to-[#635BC0] bg-clip-text text-transparent">
          together
        </span>
      </h1>

      <p className="text-sm md:w-[500px] mx-auto text-gray-500 text-center mb-12">
        Have a project in mind? I'd love to hear about it. Drop me a message and
        let's create something amazing.
      </p>

      {/* main container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-xl bg-[#0B0120] border border-[#2A1B5E] focus:outline-none focus:border-[#5227FD]"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 pr-10 rounded-xl bg-[#0B0120] border border-[#2A1B5E] focus:outline-none focus:border-[#5227FD]"
                required
              />
              <FaEnvelope className="absolute right-3 top-5 text-gray-500" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={handleChange}
              rows="5"
              className="w-full mt-2 p-3 rounded-xl bg-[#0B0120] border border-[#2A1B5E] focus:outline-none focus:border-[#5227FD]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer py-3 rounded-xl bg-gradient-to-r from-[#5227FD] to-[#AC70DB] text-white font-semibold shadow-lg shadow-[#5227FD]/30 hover:scale-105 transition"
          >
            Send Message 📩
          </button>
        </form>

        {/* RIGHT: SOCIAL */}
        <div className="flex flex-col items-center  md:items-center gap-6">
          <h2 className="text-gray-400 text-lg text-center">Or find me on</h2>

          {/* social icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/asadulsameerbd"
              target="_blank"
              className="p-4 rounded-xl bg-[#0B0120] border border-[#2a1b5e8e] hover:border-[#5227FD]/50 hover:scale-115 transition"
            >
              <FaGithub className="text-xl text-gray-300" />
            </a>

            <a
              href="https://linkedin.com/in/asadulsameer"
              target="_blank"
              className="p-4 rounded-xl bg-[#0B0120] border border-[#2A1B5E] hover:border-[#5227FD]/50 hover:scale-115 transition"
            >
              <FaLinkedinIn className="text-xl text-gray-300" />
            </a>

            <a
              href="https://x.com/webbuzzbd"
              target="_blank"
              className="p-4 rounded-xl bg-[#0B0120] border border-[#2A1B5E] hover:border-[#5227FD]/50 hover:scale-115 transition"
            >
              <FaTwitter className="text-xl text-gray-300" />
            </a>

            <a
              href="https://wa.me/8801933200699"
              target="_blank"
              className="p-4 rounded-xl bg-[#0B0120] border border-[#2A1B5E] hover:border-[#5227FD]/50 hover:scale-115 transition"
            >
              <FaWhatsapp className="text-xl text-gray-300" />
            </a>
          </div>

          {/* email box */}
          <div className="w-full md:w-80 p-6 rounded-2xl bg-[#0B0120] border border-[#2A1B5E] mt-4">
            <p className="text-[#AC70DB] font-medium">asadulff55@gmail.com</p>
            <p className="text-sm text-gray-500 mt-1">
              Response within 24 hours
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <ScrollProgress />
      </div>
    </div>
  );
};

export default Contact;
