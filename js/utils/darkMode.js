export default function darkMode() {

  //Vamos a guardar preferencias
  const sun = document.querySelector(".sun");
  const body = document.querySelector("body");

  const modoGuardado = localStorage.getItem("darkmode");
  if (modoGuardado === "true") {
          body.classList.add("darkmode");
  };

  //Añadir estrellas

  function lanzarEstrellas() {

      const contenedor = document.createElement("div");
      contenedor.classList.add("star-container");

      document.body.appendChild(contenedor);

      for (let i = 0; i < 30; i++) {

          const estrella = document.createElement("span");

          estrella.classList.add("falling-star");
          estrella.textContent = "✦";

          estrella.style.left = Math.random() * 100 + "vw";
          estrella.style.fontSize = (Math.random() * 12 + 8) + "px";
          estrella.style.animationDuration = (Math.random() * 2 + 2) + "s";
          estrella.style.animationDelay = Math.random() * 1.5 + "s";

          contenedor.appendChild(estrella);

          estrella.addEventListener("animationend", () => {
              estrella.remove();
          });
      }

      setTimeout(() => {
          contenedor.remove();
      }, 6000);
  }


//Activar/ Desactivar modo oscuro

 sun.addEventListener("click", () =>{
      body.classList.toggle("darkmode");
    
      const modoOscuroActivo = body.classList.contains("darkmode"); //comprueba si existe la clase darkmode en ese momento
      localStorage.setItem("darkmode", modoOscuroActivo);

      if (modoOscuroActivo===true){
        lanzarEstrellas();
      }
  });
}
