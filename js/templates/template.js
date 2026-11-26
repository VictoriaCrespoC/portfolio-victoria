export const header = `
  <header>
      <nav class="nav header">
        <a class="logo" href="../index.html"><img src="https://res.cloudinary.com/ues3uf7h/image/upload/v1793793476/Logotipo_VCC_en_tonos_oliva.png" alt="VC (logo)"/></a>
        <ul class="menu-burguer" id="menu-burguer">
            <li class="menu">
                <a href="../pages/about.html">About</a>
            </li>
            <li class="menu">
                <a href="../index.html#skills">Skills</a>
            </li>
            <li class="menu">
                <a href="../index.html#cheatsheets">Cheatsheets</a>
            </li>
            <li class="menu">
                <a href="#">Recursos</a>
            </li>
            <li class="menu contacto">
                <a href="../pages/contacto.html">Contacto</a>
            </li>
        </ul>
        <button class="sun">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon preview-icon">
            <path d="M12 2v2"/>
            <path d="M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715"/>
            <path d="M16 12a4 4 0 0 0-4-4"/>
            <path d="m19 5-1.256 1.256"/>
            <path d="M20 12h2"/></svg>
        </button>

        <button
        class="hamburguer"
        id="hamburguer"
        aria-label="Menú de navegación"
        >
        <span></span>
        <span></span>
        <span></span>
        </button>
    </nav>
  </header>`;



export const footer = `
    <footer>
      <article>
        <ul class="enlaces">
          <li>
            <a href="../pages/about.html">About</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/victoria-crespo-918b86371" target="_blank"
            rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="../pages/contacto.html">Contacto</a>
          </li>
        </ul>
      </article>
      
      <p class="text-footer">&copy; 2026 Victoria Crespo Cruz - Embryologist & Full Stack Developer</p>
    </footer>`;

    export const html = `
    <div class="cheatsheet-nav">
      <ul>
        <li><a href="#estructure">Estructura</a></li>
        <li><a href="#openGraph">openGraph</a></li>
        <li><a href="#scripts">Enlaces</a></li>
        <li><a href="#maquetaacion">Maquetación</a></li>
        <li><a href="#titles">Encabezados</a></li>
        <li><a href="#formularies">Formularios</a></li>
        <li><a href="#atributos">Atributos</a></li>
        <li><a href="#listas">Listas</a></li>
        <li><a href="#multimedia">Multimedia</a></li>
        <li><a href="#htmlConclusion">Buenas prácticas</a></li>
      </ul>
    </div>`;

    export const css =`
    <nav class="cheatsheet-nav" aria-label="cheatsheet-nav">
      <ul>
        <li><a href="#reset">reset</a></li>
        <li><a href="#customProperties">customProperties</a></li>
        <li><a href="#selectors">selectores</a></li>
        <li><a href="#display">display</a></li>
        <li><a href="#position">position</a></li>
        <li><a href="#flexbox">flexbox</a></li>
        <li><a href="#cssGrid">cssGrid</a></li>
        <li><a href="#mediaQueries">MediaQueries</a></li>
        <li><a href="#animaciones">animaciones</a></li>
        <li><a href="#cssConclusion">Buenas prácticas</a></li>
      </ul>
    </nav>`

    export const js =`
    <nav class="cheatsheet-nav" aria-label="cheatsheet-nav">
      <ul>
        <li><a href="#operaciones">Operaciones</a></li>
        <li><a href="#arrowFunction">Funciones</a></li>
        <li><a href="#arrays">Arrays</a></li>
        <li><a href="#objetos">Objetos</a></li>
        <li><a href="#destructuring">Destructuring</a></li>
        <li><a href="#DOM">DOM</a></li>
        <li><a href="#addEventListener">addEventListener</a></li>
        <li><a href="#ES6">Módulo ES6</a></li>
        <li><a href="#persistencia">persistencia</a></li>
        <li><a href="#jsConclusion">Buenas prácticas</a></li>
      </ul>
    </nav>`