import menuHamburguesa from "./utils/menu.js"

import darkMode from "./utils/darkMode.js"

import {header, footer} from "./templates/template.js"
document.getElementById("header-container").innerHTML = header;
document.getElementById("footer-container").innerHTML = footer;


//Primero se insertan los elementos del HTML y después se llama al menuhamburguesa y al darkmode, si no js no lo encuentra
menuHamburguesa();
darkMode();


import skillsList from "./utils/skillsList.js";
skillsList();




