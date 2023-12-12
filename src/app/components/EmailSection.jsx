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
        <h5 className="text-xl font-bold text-white my-2 py-3 border-l-4 border-green-600 pl-4">
          Contactame
        </h5>
        <p className="font-semibold text-white mb-4 max-w-md py-5 bg-green-700  pl-4 rounded-lg">
          {" "}
          ¡Estoy aquí para ofrecerle asistencia personalizada! Si tiene
          preguntas o necesita ayuda, no dude en utilizar el formulario de
          contacto a continuación. Conéctese conmigo a través de mis perfiles en
          LinkedIn y GitHub para obtener más información sobre mis habilidades y
          proyectos. Espero recibir su mensaje pronto. ¡Gracias por su interés y
          confianza!
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/Flavioarzamendia" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/flavio-arzamendia-salinas"
            target="_blank"
          >
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
