export const header = `
  <header>
      <nav class="nav header">
        <a class="logo" href="index.html"><img src="https://res.cloudinary.com/ues3uf7h/image/upload/v1793793476/Logotipo_VCC_en_tonos_oliva.png" alt="VC (logo)"/></a>
        <ul class="menu-burguer" id="menu-burguer">
            <li class="menu">
                <a href="about.html">About</a>
            </li>
            <li class="menu">
                <a href="index.html#skills">Skills</a>
            </li>
            <li class="menu">
                <a href="#">Cheatsheets</a>
            </li>
            <li class="menu">
                <a href="#">Recursos</a>
            </li>
            <li class="menu contacto">
                <a href="contacto.html">Contacto</a>
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
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/victoria-crespo-918b86371" target="_blank"
            rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="contacto.html">Contacto</a>
          </li>
        </ul>
      </article>
      
      <p class="text-footer">&copy; 2026 Victoria Crespo Cruz - Embryologist & Full Stack Developer</p>
    </footer>`;
