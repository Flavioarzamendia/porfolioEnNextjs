"use client"
import React, { useState, useRef } from "react";
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
  id: 1,
  title: "Portfolio HTML y CSS",
  decription: "Proyecto de porfolio web wn Html5 y Css3",
  image: "/images/projects/1.webp",
  tag:["All", "Web"],
  gitUrl: "https://github.com/Flavioarzamendia/Portfolio-html-css",
  previewUrl: "https://curious-druid-fc8e90.netlify.app/",
  },
  {
    id: 2,
    title: "Mi porfolio",
    decription: "Mi porfolio web personal",
    image: "/images/projects/2.webp" ,
    tag:["All", "Web"],
    gitUrl:"https://github.com/Flavioarzamendia/porfolioEnNextjs",
    previewUrl: "https://flavioarzamendia.vercel.app/",
  },
  {
      id: 3,
      title: "Web de Fotografia",
      decription: "Proximamente",
      image: "/images/projects/3.webp",
      tag:["All", "Web"],
      gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Proximamente",
    decription: "En Progreso",
    image: "/images/projects/3.webp",
    tag:["All", "móvil"],
    gitUrl: "/",
    previewUrl: "/",
},
]
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };



  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="móvil"
          isSelected={tag === "Móvil"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};


export default ProjectsSection