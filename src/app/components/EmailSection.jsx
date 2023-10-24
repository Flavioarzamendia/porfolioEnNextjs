"use client";
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
      <div className="z-10 pl-4">
        <h5 className="text-xl font-bold text-white my-2 py-3 border-l-4 border-green-600 pl-4">Contactame</h5>
        <p className="text-white mb-4 max-w-md py-5 bg-violet-700 pl-4 rounded-lg">
          {" "}
          ¡Estoy aquí para ayudar! Si tiene alguna pregunta o necesita asistencia,
           por favor, utilice el formulario de contacto a continuación. 
           También puede conectarse conmigo a través de mis perfiles de LinkedIn y GitHub. 
           Espero recibir su mensaje o visita en cualquiera de mis perfiles.¡Gracias!
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
      <div className="z-10 bg-neutral-800  p-6 rounded-lg">
        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default EmailSection;
