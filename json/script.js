var alumnos = [
{
    "nombre":"Victoria",
    "apellido":"Gagliardi"
},
{
    "nombre":"Maximiliano",
    "apellido":"Mamani"
},
{
    "nombre":"Jose",
    "apellido":"Villalobos"
},
{
    "nombre":"Nicolás",
    "apellido":"Savo"
}
]
window.onload=function(){
    var contenedor = document.getElementById("contenedor");
    for (let index = 0; index < alumnos.length; index++) {
    var titulo = document.createElement("h1"); 
    titulo.textContent= alumnos[index].nombre;
    titulo.classList.add("nombre");

    var titulo2 = document.createElement("h1");
    titulo2.textContent= alumnos[index].apellido;
    titulo.classList.add("apellido");


    var section = document.createElement("section");
    section.classList.add("contenedorchiquito");
    
    contenedor.appendChild(titulo);
    contenedor.appendChild(titulo2);

    contenedor.appendChild(section);

    var boton = document.createElement("input");
    boton.type= "checkbox";
    contenedor.appendChild(section);

}
}
