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
        <li>Wordpress</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer, Udemy</li>
        <li>Universidad Nacional De La Matanza</li>
      </ul>
    ),
  },
  {
    title: "Servicios",
    id: "servicios",
    content: (
      <ul className="list-disc pl-2">
        <li>Paginas con Wordpress</li>
        <li>Mantenimiento de paginas web de Wordpress</li>
        <li>Paginas con HTML5,CSS3 y JavaScript</li>
        <li>Auditoria simple de sitio web</li>
        <li>Asesoramiento sobre como hacer tu pagina web</li>
        <li>Asesoramiento sobre Estrategias de Marketing Digital</li>
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
        <Image className="rounded-3xl" src="/images/about-image.webp" alt="Working web developer" title="Working web developer" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 border-l-4 border-green-600 pl-6 ">Sobre Mi</h2>
          <div className=" p-6 bg-violet-700 rounded-lg">
          <p className="text-base lg:text-lg ">
          Hola, soy Flavio, un desarrollador web con experiencia en WordPress y conocimientos sólidos de HTML, CSS y JavaScript.
           Mi objetivo es ayudar a las empresas a destacar en línea y atraer a su audiencia.
           No solo creo su sitio web, sino que también ofrezco soporte continuo y mantenimiento para garantizar que su presencia en línea
          esté siempre actualizada y funcione sin problemas.
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