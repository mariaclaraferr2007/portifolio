import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Fundo de partículas em constelação, fixo atrás de toda a página
// (não só de uma seção). Renderizado uma única vez em App.jsx.
export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="portfolio-particles"
      className="particles-background"
      init={init}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: {
            value: 90,
            density: { enable: true, area: 900 },
          },
          color: { value: "#db9f75" },
          links: {
            enable: true,
            color: "#db9f75",
            distance: 140,
            opacity: 0.2,
            width: 1,
          },
          opacity: { value: 0.45 },
          size: { value: { min: 1, max: 2.5 } },
          move: {
            enable: true,
            speed: 0.5,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 160,
              links: { opacity: 0.45 },
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
