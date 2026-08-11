import React from "react";
import "./About.css";
import ParticlesBackground from "../ParticlesBackground";

const About = () => {
  return (
    <div id="about" className="about-container">
      <ParticlesBackground />
      <div className="about-content">
        {/* Foto */}
        <div className="about-image">
          <img src="/About.jpg" alt="Maria Clara Ferreira Lopes" />
        </div>

        {/* Texto */}
        <div className="about-text">
          <h2>About Me</h2>
          <hr />
          <p>
            Sou <span className="highlight">Maria Clara Ferreira Lopes</span>,
            estudante de Análise e Desenvolvimento de Sistemas, com formação
            técnica em Informática e experiência em desenvolvimento web. Atuei
            no desenvolvimento e manutenção de sites, atualização de interfaces
            e implementação de melhorias funcionais durante meu estágio. Possuo
            conhecimentos em React, JavaScript, TypeScript, Node.js, HTML, CSS,
            SQL, Git e GitHub, além de fundamentos em banco de dados e modelagem
            de dados. Tenho perfil proativo, facilidade de aprendizado,
            organização e interesse em desenvolvimento front-end, back-end e
            banco de dados, buscando constantemente aprimorar minhas habilidades
            por meio de projetos práticos e estudos contínuos.
          </p>

          <p>
            <br />
            <b>Phone:</b> (31) 97238-5350
          </p>
          <p>
            <b>Email:</b> mariaclaraferreiralopes82@gmail.com
          </p>
          <p>
            <b>Age:</b> 19
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
