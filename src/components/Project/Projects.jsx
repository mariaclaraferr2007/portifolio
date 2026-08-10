import React from "react";
import "./Projects.css"; // arquivo de estilo separado
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Acervo — Sistema de Biblioteca",
    description:
      "Sistema de gestão de biblioteca com cadastro, empréstimo e devolução de itens. Construído para aplicar Programação Orientada a Objetos e arquitetura em camadas (domínio, persistência e serviços) na prática, usando herança e polimorfismo para modelar diferentes tipos de usuário e de item.",
    tech: ["React", "TypeScript", "Vite"],
    github: "https://github.com/seu-usuario/biblioteca-app",
    demo: "https://sistema-bibliotecario-eta.vercel.app/",
    image: "/biblioteca.png",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="projects-content">
        <h2>Projects</h2>
        <hr />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
