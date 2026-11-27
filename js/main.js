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

import cheatsheetsList from "./utils/cheatsheetsList.js";
cheatsheetsList();

//Añadir sub navegacion a los cheatsheets
import {html, css, js} from "./templates/template.js"
function cheatsheetsNav() {

    const htmlHeader = document.getElementById("html-header");
    const cssHeader = document.getElementById("css-header");
    const jsHeader = document.getElementById("js-header");

    if (htmlHeader) htmlHeader.innerHTML = html;
    if (cssHeader) cssHeader.innerHTML = css;
    if (jsHeader) jsHeader.innerHTML = js;
}
cheatsheetsNav();

//insertar tarjetas en Recursos:
import resourcesGenerator from "./utils/resourcesGenerator.js";
//resourcesGenerator();
resourcesGenerator();

