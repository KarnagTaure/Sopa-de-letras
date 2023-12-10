const contenedorPadre = document.getElementById("situaciones");
const imagenEscenaDiv = document.getElementById("imagenEscena");
const botonSiguiente = document.getElementById("botonSiguiente2");
const imagenEscena = document.getElementById("imagenEscena");
const botonAnterior = document.getElementById("botonAnterior");



var numMax = "";
var situacionNumID = 1;
var escenaNumero = 0; // Inicializa con la primera escena
var escenaActual = "1";

// Función para generar la URL de la imagen de fondo
function obtenerUrlImagen(indice) {
  return `url(./elementos/materiales/materiales-app_ex_s${indice}.png)`;
}

// crear div de Situaciones según la cantidad que haya
function agregarSituacion(num) {
  // Bucle para crear y agregar los divs
  for (let i = 0; i < num; i++) {
    if (i > 0) {
      // Crea un nuevo elemento div
      const nuevoDiv = document.createElement("div");

      // Agrega una clase al nuevo div (opcional, pero útil para estilos)
      nuevoDiv.classList.add("situacion");
      nuevoDiv.id = situacionNumID;
      situacionNumID++;

      // Genera la URL de la imagen de fondo según algún patrón
      const urlImagen = obtenerUrlImagen(i);

      // Agrega imagen de fondo
      nuevoDiv.style.backgroundImage = urlImagen;

      // Establece el atributo data-clicado a false
      nuevoDiv.dataset.clicado = "false";

      // Agrega evento para cambiar la imagen al hacer clic

    
      nuevoDiv.addEventListener("click", clicEnNumeroEscena);

      // Agrega el nuevo div al contenedor padre
      contenedorPadre.appendChild(nuevoDiv);
    }
  }
}

// Función para cargar la primera imagen de la escena actual
function cargarPrimeraImagen(escena) {
  escenaNumero = 0;
  const urlImagen = `./elementos/escena${escena}/escenas_0${escenaNumero}_s${escena}.png`;
  imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;
  //texto.innerHTML= escena+" "+escenaNumero+urlImagen;
}
function numeroMax(escena) {
  switch (escena) {
    case "1":
      numMax = 3;
      break;
    case "2":
      numMax = 2;
      break;
    case "3":
      numMax = 2;
      break;
    case "4":
      numMax = 3;
      break;
    case "5":
      numMax = 3;
      break;
    case "6":
      numMax = 2;
      break;
    case "7":
      numMax = 2;
      break;
    case "8":
      numMax = 3;
      break;
    case "9":
      numMax = 3;
      break;

    default:
      numMax = 5;
      break;
  }
}
// Función para cambiar a la siguiente imagen de la escena actual
function clickSiguienteIMG(escena) {
  numeroMax(escenaActual);
  if (escenaNumero < numMax) {
    escenaNumero++;

    const urlImagen = `./elementos/escena${escena}/escenas_0${escenaNumero}_s${escena}.png`;

    imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;

   
  } else {
    escenaNumero = 1;
    const urlImagen = `./elementos/escena${escena}/escenas_0${escenaNumero}_s${escena}.png`;

    imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;
  }
}
function clickAnteriorIMG(escena) {
  if (escenaNumero > 0) {
    escenaNumero--;
    const urlImagen = `./elementos/escena${escena}/escenas_0${escenaNumero}_s${escena}.png`;
    if (urlImagen) {
      imagenEscenaDiv.style.backgroundImage = `url(${urlImagen})`;

      // texto.innerHTML= escena+" "+escenaNumero+urlImagen;
    }
  }
}
// Función para manejar el clic en un número de escena
function clicEnNumeroEscena() {
  escenaActual = this.id;

  cargarPrimeraImagen(escenaActual);
}

// Ejecuta tus funciones cuando el DOM esté listo
document.addEventListener(
  "DOMContentLoaded",
  agregarSituacion(numeroDeCarpetasJS)
);
botonSiguiente.addEventListener("click", function () {
  // Llama a la función clickSiguienteIMG con los parámetros deseados

  clickSiguienteIMG(escenaActual);
});
imagenEscena.addEventListener("click", function () {
  // Llama a la función clickSiguienteIMG con los parámetros deseados
  clickSiguienteIMG(escenaActual);
});
botonAnterior.addEventListener("click", function () {
  // Llama a la función clickSiguienteIMG con los parámetros deseados
  clickAnteriorIMG(escenaActual);
});
window.onload = cargarPrimeraImagen(escenaActual);
