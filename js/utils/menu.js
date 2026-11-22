export default function menuHamburguesa() {

  const hamburguer = document.getElementById("hamburguer");
  const menuburguer = document.querySelector("#menu-burguer");
  const liburguer = document.querySelectorAll(".menu") //Esto si te fijas es un array

//Con el toggle, al hacer click en el boton hamburguesa si esta abierto lo cierra y si está cerrado lo abre
  hamburguer.addEventListener('click', () => {
      menuburguer.classList.toggle("abierto")
  })

//con remove hago que al clicar en una de las opciones (uno de los elementos de nuestro array) desaparezca el menú, es decir, lo cierre
  liburguer.forEach ((a) => {
      a.addEventListener("click", () => {
          menuburguer.classList.remove("abierto")
      })
  })

//si no hacemos click en el boton hamburguesa o en el menu que contiene estará cerrado:
  document.addEventListener ('click', (e) => {
      if(
          !menuburguer.contains(e.target) &&
          !hamburguer.contains(e.target)
      ) {
          menuburguer.classList.remove("abierto")
      }
  })
}