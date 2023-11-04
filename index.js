
  function borrar() {
    
    document.getElementById("cantidad").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.querySelector(".total").textContent = "Total a pagar: $";

  }

  function calcularTotal() {
    
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const categoria = document.getElementById("category").value;

    
    let precioTicket = 200;

    
    if (categoria === "Estudiante") {
      precioTicket = precioTicket * 0.2; 
    } else if (categoria === "Trainee") {
      precioTicket = precioTicket * 0.5; 
    } else if (categoria === "Junior") {
      precioTicket = precioTicket * 0.85; 
    }
    
    const totalPagar = cantidad * precioTicket;

    document.querySelector(".total").textContent = `Total a pagar: $${totalPagar}`;
  }

