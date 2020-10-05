/* Seleccionar todo
let total = document.all;
elemento = document;

console.log(total);


Mostrar el id buscar
let elemento = document.getElementById('buscar').textContent;
console.log(elemento);


let elemento;
elemento = document.getElementById("demo");
elemento.style.background = '#333';
elemento.style.color = "red";
elemento.style.padding = '20px';
elemento.innerText = "Se aprende";
console.log(elemento);


//let elemento = document.querySelector(".demo") selecciona uno solo
let elemento = document.querySelectorAll("#principal .demo");
elemento[2].style.color = 'red';
elemento[2].textContent = 'Curso'; // agrega texto
console.log(elemento);


let elemento = document.createElement("h1");
elemento.className = "demo";
elemento.id = "h1-nuevo";
elemento.textContent = "DOMS";
document.querySelector("#principal").appendChild(elemento);
console.log(elemento);*/

let forma = document.createElement("p");
forma.id = "parrafo";
forma.appendChild(document.createTextNode("On Code"));


let variable = document.querySelector(".modificar");
let master = document.querySelector("#principal");

master.replaceChild(forma, variable);
console.log(master.parentElement);