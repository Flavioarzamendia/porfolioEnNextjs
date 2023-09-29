"use client"
import Rect from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

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
        <ContactForm></ContactForm>
       
      </div>
    </section>
  );
};

export default EmailSection;