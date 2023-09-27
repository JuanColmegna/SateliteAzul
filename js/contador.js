document.addEventListener("DOMContentLoaded", function() {
    // Función para actualizar el contador
    function actualizarContador(numero) {
      document.getElementById("contador").textContent = "despegamos en " + numero;
    }
  
    // Función para mostrar el mensaje
    function mostrarMensaje(mensaje) {
      document.getElementById("mensaje").textContent = mensaje;
    }
  
    // Iniciar la cuenta regresiva
    function cuentaRegresiva() {
      let contador = 5;
  
      function actualizar() {
        if (contador === 0) {
          clearInterval(intervalo); // Detener la cuenta regresiva
          document.getElementById("contador").remove();
          mostrarMensaje("¡Girá hacia abajo!");
        } else {
          actualizarContador(contador);
          contador--;
        }
      }
  
      actualizar(); // Mostrar el valor inicial (5) de inmediato
  
      const intervalo = setInterval(actualizar, 2000); // Actualizar cada segundo (1000 ms)
    }
  
    cuentaRegresiva(); // Iniciar la cuenta regresiva cuando la página se carga
  });