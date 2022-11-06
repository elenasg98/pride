//capturamos las constantes del menú desplegable, el nav y los span para hacer los botones de abrir y cerrar
const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrirMenu,.cerrarMenu");
//capturamos las miniaturas, el modal, las imágenes en el modal y las flechas
const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const flechas = document.querySelectorAll(".modal a");
//creamos dos variables para el funcionamiento d e la galería
let imagenActual = 0;//esta variable define que imagen estamos viendo en grande
let rutasImagenes = [];//almacena todas las rutas de las imágenes para un acceso más óptimo

//menú desplegable -------------------------------------------------------------------------------------------

//creamos una función para añadir y quitar la clase desplegado al nav
function desplegarMenu(evento){
	evento.preventDefault();
	navegacion.classList.toggle("desplegado");
}

//a los dos botones los "escuchamos" y cuando se les hace click, salta la función desplegarMenu
botones.forEach(function(boton){
	boton.addEventListener("click",desplegarMenu);
});

//Galería modal LGSM ----------------------------------------------------------------------------------------
//abrir modal
miniaturas.forEach(function(miniatura,indice){
	//rellenamos las rutas de img
	rutasImagenes.push(miniatura.getAttribute("href"));
	//al hacer click en la miniatura, disparamos un evento
	miniatura.addEventListener("click", function(evento){

		//evitamos que se abra el enlace
		evento.preventDefault();

		//guardamos en qué imagen nos encontramos e insertamos su enlace al src de la imagen de la modal
		imagenActual = indice;
		imgModal.setAttribute("src",rutasImagenes[imagenActual]);

		//a modal le añadimos la calse visible para que aparezca en pantalla
		modal.classList.add("visible");
	});
});


//cerrar la modal al hacer click fuera de la imagen
modal.addEventListener("click", function(){

	//quitamos la clase visible a la modal y vuelve a display: none
	modal.classList.remove("visible");
});

//navegación de la galería con las flechas
flechas.forEach(function(flecha,indice){
	flecha.addEventListener("click", function(evento){
		evento.preventDefault();
		evento.stopPropagation();
		
		if(indice == 0){
			imagenActual = imagenActual > 0 ? imagenActual - 1 : rutasImagenes.length - 1;
		}else{
			imagenActual = imagenActual < rutasImagenes.length - 1 ? imagenActual + 1 : 0;
		}
		imgModal.setAttribute("src",rutasImagenes[imagenActual]);
	});
});