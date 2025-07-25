// Máquina de escrever (loop)
const texto = "Clara Lopes";
const elemento = document.getElementById("nome-digitando");
let index = 0;
let apagando = false;

function loopDigitacao() {
  if (!apagando && index <= texto.length) {
    elemento.innerHTML = texto.substring(0, index);
    index++;
    setTimeout(loopDigitacao, 150);
  } else if (apagando && index >= 0) {
    elemento.innerHTML = texto.substring(0, index);
    index--;
    setTimeout(loopDigitacao, 100);
  } else {
    apagando = !apagando;
    setTimeout(loopDigitacao, 800);
  }
}

loopDigitacao();

// Particles.js config
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
    },
    color: {
      value: ["#00ffcc", "#00aaff", "#ff6600", "#00ff00"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.6,
    },
    size: {
      value: 4,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
  retina_detect: true,
});
