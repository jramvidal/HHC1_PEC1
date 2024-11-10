import "./styles.scss";


document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen-interactiva');
  
    imagenes.forEach(function(imagen) {
      imagen.addEventListener('mouseenter', function() {
        imagen.style.transform = 'scale(1.1)';
      });
  
      imagen.addEventListener('mouseleave', function() {
        imagen.style.transform = 'scale(1)';
      });
    });
  });
  
  
  
