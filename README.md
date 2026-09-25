<h1 align="center">
  <br>
  💼 Personal Portfolio - Jesus Adiv
  <br>
</h1>

<p align="center">
  <strong>Mi portafolio construido con React.js, React-Bootstrap y animaciones interactivas.</strong>
</p>

<p align="center">
  <a href="https://forthebadge.com">
    <img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Built With Love" />
  </a> &nbsp;
  <a href="https://forthebadge.com">
    <img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made With JavaScript" />
  </a> &nbsp;
  <a href="https://forthebadge.com">
    <img src="https://forthebadge.com/images/badges/open-source.svg" alt="Open Source" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/soumyajit4419/Portfolio/stargazers">
    <img src="https://img.shields.io/github/stars/soumyajit4419/Portfolio?color=red&logo=github&style=for-the-badge" alt="GitHub Repo stars" />
  </a> &nbsp;
  <a href="https://github.com/soumyajit4419/Portfolio/network/members">
    <img src="https://img.shields.io/github/forks/soumyajit4419/Portfolio?color=red&logo=github&style=for-the-badge" alt="GitHub forks" />
  </a> &nbsp;
  <a href="https://github.com/JesusAdiv/Portfolio/blob/master/package.json">
    <img src="https://img.shields.io/badge/React-17.0.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  </a>
</p>


<div align="center">
  <img alt="Portfolio Preview" src="./Images/readme-img1.png" width="90%" />
</div>

<br/>

---

## 📋 Tabla de Contenidos / Table of Contents

- [✨ Características / Features](#-características--features)
- [🛠️ Tecnologías Utilizadas / Tech Stack](#️-tecnologías-utilizadas--tech-stack)
- [🚀 Instalación y Puesta en Marcha / Getting Started](#-instalación-y-puesta-en-marcha--getting-started)
- [📂 Estructura del Proyecto / Project Structure](#-estructura-del-proyecto--project-structure)
- [⚙️ Guía de Personalización / Customization](#️-guía-de-personalización--customization)
- [👏 Créditos y Agradecimientos / Credits](#-créditos-y-agradecimientos--credits)

---

## ✨ Características / Features

- 📱 **Diseño 100% Responsivo:** Adaptado para dispositivos móviles, tablets y monitores de escritorio.
- 🎨 **Estética Moderna y Dinámica:** Fondo con partículas interactivas (`tsparticles`), transiciones suaves y efectos tilt en tarjetas (`react-parallax-tilt`).
- ✍️ **Efecto Máquina de Escribir (Typewriter):** Presentación dinámica de habilidades y roles en la cabecera.
- 📊 **Calendario de Actividad de GitHub:** Integración directa para mostrar el historial de contribuciones (`react-github-calendar`).
- 📑 **Visualizador y Descarga de CV:** Sección de currículum interactiva con visor de PDF y botón de descarga directa (`react-pdf`).
- 🧭 **Navegación Fluida:** Enrutamiento cliente usando `react-router-dom`.

---

## 🛠️ Tecnologías Utilizadas / Tech Stack

- **Frontend:** [React.js](https://reactjs.org/)
- **Estilos:** [React-Bootstrap](https://react-bootstrap.github.io/) & Vanilla CSS3
- **Iconos:** [React-Icons](https://react-icons.github.io/react-icons/)
- **Animaciones & Efectos:** 
  - `react-tsparticles`
  - `typewriter-effect`
  - `react-parallax-tilt`
- **Renderizado de Documentos:** `react-pdf` & `@react-pdf/renderer`
- **Despliegue sugerido:** [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/) / [GitHub Pages](https://pages.github.com/)

---

## 🚀 Instalación y Puesta en Marcha / Getting Started

### Prerrequisitos

Asegúrate de tener instalado en tu sistema:
- [Node.js](https://nodejs.org/) (versión 16.x o superior recomendada)
- [Git](https://git-scm.com/)
- Gestor de paquetes `npm` o `yarn`

### Pasos de instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/JesusAdiv/Portfolio.git
   cd Portfolio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```
   *(Nota: Si encuentras algún conflicto de dependencias entre versiones secundarias, puedes usar `npm install --legacy-peer-deps`)*

3. **Iniciar en entorno de desarrollo:**
   ```bash
   npm start
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en vivo. Los cambios se recargarán automáticamente.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Genera una versión optimizada en la carpeta `build/` lista para ser desplegada en Vercel, Netlify o GitHub Pages.

---

## 📂 Estructura del Proyecto / Project Structure

```text
Portfolio/
├── public/                 # Archivos estáticos y favicon
├── src/
│   ├── Assets/             # Imágenes, iconos, avatar y archivo de currículum (PDF)
│   ├── components/
│   │   ├── About/          # Sección Sobre Mí, Techstack, Toolstack y Github
│   │   ├── Home/           # Portada principal, saludo, Typewriter y redes sociales
│   │   ├── Projects/       # Tarjetas de proyectos y enlaces a repositorios
│   │   ├── Resume/         # Visualización y descarga del CV (PDF)
│   │   ├── Footer.js       # Pie de página y enlaces sociales
│   │   ├── Navbar.js       # Barra de navegación principal
│   │   └── Particle.js     # Configuración de partículas flotantes
│   ├── App.js              # Enrutador principal y layout
│   ├── index.js            # Punto de entrada de React
│   └── style.css           # Estilos globales y temas de color
└── README.md
```

---

## ⚙️ Guía de Personalización / Customization

Para adaptar este portafolio a tu perfil personal, modifica los siguientes archivos:

1. **Información Personal y Redes Sociales:**
   - Edita `src/components/Home/Home.js` y `src/components/Home/Home2.js` para cambiar tu nombre, bio y enlaces a GitHub, LinkedIn, Twitter, etc.
   - Actualiza `src/components/Home/Type.js` para configurar los textos del efecto Typewriter.
   - Actualiza `src/components/Footer.js` y `src/components/Navbar.js` con tus redes.

2. **Tecnologías y Actividad de GitHub:**
   - Edita `src/components/About/Techstack.js` y `Toolstack.js` con las herramientas que dominas.
   - En `src/components/About/Github.js`, cambia el prop `username` a tu usuario de GitHub (`JesusAdiv`).

3. **Proyectos:**
   - Modifica `src/components/Projects/Projects.js` con las imágenes, descripciones y enlaces (código y demo) de tus propios proyectos.

4. **Currículum Vitae (CV):**
   - Reemplaza el archivo PDF de currículum ubicado en `src/Assets/` con tu propio CV y ajusta la ruta en `src/components/Resume/ResumeNew.js`.

---

## 👏 Créditos y Agradecimientos / Credits

Este proyecto está basado originalmente en la plantilla de portafolio desarrollada por **[Soumyajit Behera (soumyajit4419)](https://github.com/soumyajit4419/Portfolio)** mucjas gracias.

---

## 📬 Contacto / Connect

- **GitHub:** [@JesusAdiv](https://github.com/JesusAdiv)
