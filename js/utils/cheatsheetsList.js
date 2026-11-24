import cheats from "../data/cheatsheets.js"; 

//Para exportarlo, indicamos donde queremos que aparezca en el html

export default function cheatsheetsList () {
    const cheatsheetsContainer = document.querySelector("#cheatsheets-container");
    //ahora recorremos el array creado en cheatsheet
    const cheatCard = cheats.map((cheat)=> {
        return `
        <article class="cheat-card">
          <img src="${cheat.icon}" alt="Icono de ${cheat.name}">
          <h3 class="cheatName">${cheat.name}</h3>
          <p class="cheatDescription">${cheat.description}</p>
        </article>`;
    });
     //necesito añadir todas las tarjetas:
        cheatsheetsContainer.innerHTML += cheatCard.join("");
}

