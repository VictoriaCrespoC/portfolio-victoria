import cheats from "../data/cheatsheets.js"; 

//Para exportarlo, indicamos donde queremos que aparezca en el html

export default function cheatsheetsList () {
    const cheatsheetsContainer = document.querySelector("#cheatsheets-container");
    // Si no existe el contenedor en la página actual, salimos de la función sin hacer nada
    if (!cheatsheetsContainer) return;
    
    //ahora recorremos el array creado en cheatsheet
    const cheatCard = cheats.map((cheat)=> {
        return `
        <a href="${cheat.link}" class="cheat-card">
          <img src="${cheat.icon}" alt="Icono de ${cheat.name}">
          <h3 class="cheatName">${cheat.name}</h3>
          <p class="cheatDescription">${cheat.description}</p>
        </a>`;
    });
     //necesito añadir todas las tarjetas:
        cheatsheetsContainer.innerHTML += cheatCard.join("");
}



