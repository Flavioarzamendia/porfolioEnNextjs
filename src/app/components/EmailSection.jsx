import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2 py-3">
          Contactame
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md py-5">
          {" "}
         Puedes contactarme ante cualquier duda por los siguentes medios o dejar tu mensaje.
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/Flavioarzamendia">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/flavio-arzamendia-salinas">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" method="POST">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Tu Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-orange-400 placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Juan123@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Nombre
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-orange-400 placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Nombre"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-orange-400 placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5"
              placeholder="Escribe tu mensaje"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;