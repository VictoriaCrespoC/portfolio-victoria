import skills from "../data/skills.js"; //Se usa ../ porque skillsList está en una carpeta llamada utils y queremos subir de nivel para entrar en skills

export default function skillsList () {
    const skillsContainer = document.querySelector("#skills-container"); //variable que almacena el HTML de una tarjeta
   
    // Si no existe el contenedor en la página actual, salimos de la función sin hacer nada
    if (!skillsContainer) return;

    skills.forEach((skill) => {
        const skillTags = skill.tags.map((tag) => {
            return `<span class="skill-tag">${tag}</span>`
        }).join("");
        const skillCard = `
          <article class="skill-card">
              <img src="${skill.icon}" alt="Icono de ${skill.name}">
              <h3 class="skillName">${skill.name}</h3>
              <p class="skillDescription">${skill.description}</p>
              <p class="skillLevel">${skill.level}</p>

              <div class="skill-tags">${skillTags}</div>
          </article>`;

        skillsContainer.innerHTML += skillCard; //me permite añadir tarjetas sin borrar las anteriroes
    });
};