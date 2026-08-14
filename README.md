# Clara Lopes — Portfólio

Portfólio pessoal desenvolvido em **React**, com seções de apresentação, sobre mim, projetos e contato, navegação por scroll com indicador visual, e um efeito de fundo com partículas em constelação animado em cada seção.

## Stack

- **React 19** + **Vite**
- **React Icons** — ícones de redes sociais e contato
- **react-tsparticles** / **tsparticles-slim** — efeito de partículas interativo
- **ESLint** — padronização de código



Abre em `https://portifolio-sigma-two-89.vercel.app/`.



## Estrutura

```
src/
├── components/
│   ├── Header/
│   │   ├── Navigation.jsx      # Cabeçalho fixo com menu de navegação
│   │   └── Navigation.css
│   ├── Hero/
│   │   ├── Hero.jsx            # Seção de abertura (foto, nome, redes sociais)
│   │   └── Hero.css
│   ├── About/
│   │   ├── About.jsx           # Seção "Sobre mim"
│   │   └── About.css
│   ├── Projects/
│   │   ├── Projects.jsx        # Seção de projetos (grid de cards)
│   │   ├── ProjectCard.jsx     # Card individual, reutilizável por projeto
│   │   └── Projects.css
│   ├── Contact/
│   │   ├── Contact.jsx         # Seção de contato (email, telefone, redes)
│   │   └── Contact.css
│   ├── Footer/
│   │   ├── Footer.jsx          # Rodapé com navegação e redes sociais
│   │   └── Footer.css
│   ├── Circle/
│   │   ├── Circle.jsx          # Indicador de seção ativa (bolinhas laterais)
│   │   └── Circle.css
│   ├── ParticlesBackground.jsx # Efeito de partículas, reutilizado em cada seção
│   ├── SocialIcons.jsx         # Ícones de redes sociais (Instagram, LinkedIn, GitHub)
│   └── TitleHeaderFooter.jsx   # Logo/nome, usado no header e no footer
├── App.jsx                     # Composição das seções + scroll tracking
├── index.css                   # Estilos globais e tokens de cor
└── main.jsx                    # Ponto de entrada
```

## Funcionalidades

- **Navegação por scroll**: o menu e o indicador lateral (`Circle`) acompanham automaticamente qual seção está visível na tela, usando o evento de scroll da página.
- **Projetos dinâmicos**: a seção `Projects` renderiza os cards a partir de um array de dados — adicionar um novo projeto é só incluir um objeto novo, sem tocar em `ProjectCard.jsx`.
- **Efeito de partículas**: `ParticlesBackground` é um componente único, reaproveitado em todas as seções (`Hero`, `About`, `Projects`, `Contact`), cada instância limitada à sua própria seção via `position: relative` no container.

## Identidade visual

- Fundo preto (`#000000`), texto branco
- Cor de destaque terracota (`#db9f75` / laranja) para hovers, tags e realces de texto
- Tipografia serifada (**Playfair Display**) no logo/título, sans-serif no corpo

## Contato

- **Email**: mariaclaraferreiralopes82@gmail.com
- **LinkedIn**: [linkedin.com/in/maria-clara-ferreira-lopes](https://www.linkedin.com/in/maria-clara-ferreira-lopes/)
- **GitHub**: [github.com/mariaclaraferr2007](https://github.com/mariaclaraferr2007)
