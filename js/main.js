// Esperar a que el DOM se cargue antes de ejecutar la función.
document.addEventListener('DOMContentLoaded', function () {

    // funciones para cargar 
    eventListeners();
});

// función para el menú responsivo
/**
 * Cuando el usuario hace clic en el icono de la hamburguesa, se llama a la función navbarResponsive.
 */
function eventListeners() {
    // Seleccionamos el icono de hamburguesa
    const mobilMenu = document.querySelector('.mobil-menu');

    // Agregamos un evento de tipo click
    mobilMenu.addEventListener('click',navbarResponsive);
}


/**
 * Si la barra de navegación tiene la clase 'mostrar', elimínala. En caso contrario, añádela.
 */
function navbarResponsive() {
    const nabvar = document.querySelector('.navbar');

    if (nabvar.classList.contains('mostrar')) {
        nabvar.classList.remove('mostrar');
    } else {
        nabvar.classList.add('mostrar');
    }
}