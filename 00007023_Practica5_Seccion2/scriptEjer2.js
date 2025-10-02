const carrito = {
  productos: [
    {
      nombre: 'Papel higiénico',
      unidades: 10,
      precio: 100
    },
    {
      nombre: 'Chocolate',
      unidades: 5,
      precio: 20
    }
  ],

  // getter que calcula el precio total dinámicamente
  get precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.productos.length; i++) {
      precio += this.productos[i].unidades * this.productos[i].precio;
    }
    return precio;
  }
};

// Mostramos el resultado en consola y en la página
console.log("Precio total del carrito:", carrito.precioTotal);
document.getElementById("resultado").textContent =
  "El precio total del carrito es: $" + carrito.precioTotal;
