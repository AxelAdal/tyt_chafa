document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
  
    // Obtener los valores ingresados por el usuario
    var username = document.getElementById("usuario").value;
    var password = document.getElementById("12345").value;
  
    // Verificar si las credenciales son correctas
    if (username === "usuario" && password === "contraseña") {
      document.getElementById("status").textContent = "Inicio de sesión exitoso";
      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
    } else {
      document.getElementById("status").textContent = "Credenciales inválidas. Por favor, inténtalo de nuevo.";
    }
  });