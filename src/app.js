import "./styles.scss"; // Importa los estilos principales

document.addEventListener("DOMContentLoaded", function () {
  const imagenes = document.querySelectorAll(".imagen-interactiva"); // Selecciona todas las imágenes interactivas

  // Añade efectos de zoom al pasar el cursor sobre cada imagen
  imagenes.forEach(function (imagen) {
    imagen.addEventListener("mouseenter", function () {
      imagen.style.transform = "scale(1.1)"; // Aplica un aumento al pasar el cursor
    });

    imagen.addEventListener("mouseleave", function () {
      imagen.style.transform = "scale(1)"; // Restaura el tamaño original al quitar el cursor
    });
  });
});
