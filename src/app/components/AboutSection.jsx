"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Desarrollo en WordPress</li>
        <li>HTML5, CSS3 y JavaScript</li>
        <li>Experiencia en React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer, Udemy</li>
        <li> Ingenieria en, Universidad Nacional De La Matanza</li>
      </ul>
    ),
  },
  {
    title: "Servicios",
    id: "servicios",
    content: (
      <ul className="list-disc pl-2">
        <li>Desarrollo de páginas web con WordPress</li>
        <li>Mantenimiento especializado para sitios web en WordPress</li>
        <li>Creación de páginas con HTML5, CSS3 y JavaScript</li>
        <li>Auditoría básica de sitios web para una mejora continua</li>
        <li>Asesoramiento experto sobre la creación de tu página web</li>
        <li>Servicios de Marketing Digital para potenciar tu presencia en línea</li>
        <li>Consultoría sobre Estrategias de Marketing Digital para un crecimiento efectivo</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded-3xl"
          src="/images/about-image.webp"
          alt="Working web developer"
          title="Working web developer"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 border-l-4 border-green-600 pl-6 ">
            Sobre Mi
          </h2>
          <div className=" p-6 bg-green-700 rounded-lg">
            <p className="font-2lg lg:text-lg ">
              ¡Hola! Soy Flavio, un apasionado desarrollador web especializado
              en WordPress, con sólidos conocimientos en HTML, CSS, JavaScript y
              React. Mi misión es potenciar la presencia en línea, ya sea para
              grandes empresas o pequeños emprendedores. Diseño sitios web a
              medida, brindando soporte continuo y mantenimiento para garantizar
              una presencia en línea siempre actualizada y óptima. Confíe en mis
              habilidades para impulsar el éxito de su negocio o proyecto
              personal en el vasto mundo digital.
            </p>
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educacion{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("servicios")}
              active={tab === "servicios"}
            >
              {" "}
              Servicios{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
