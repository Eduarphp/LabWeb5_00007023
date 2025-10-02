const estanteria = {
  libros: [
    { nombre: 'El caballero oscuro', autor: 'Dan Brown', leido: false },
    { nombre: 'El mundo amarillo', autor: 'Albert Espinosa', leido: false },
    { nombre: 'Harry Potter y el cáliz de fuego', autor: 'J. K. Rowling', leido: true },
    { nombre: 'El ingenioso hidalgo', autor: 'Miguel de Cervantes', leido: false },
    { nombre: 'Berserk', autor: 'Kentaro Miura', leido: true },
    { nombre: 'Ilíada', autor: 'Homero', leido: false }
  ],

//Log
  log() {
    let resultado = "";
    for (const libro of this.libros) {
      const prefijo = libro.leido ? "Ya has leído" : "Aún no has leído";
      resultado += `${prefijo} ${libro.nombre} de ${libro.autor}\n`;
    }
    console.log(resultado);
    document.getElementById("resultado").textContent = resultado;
  },

  //sugerencia
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    if (librosNoLeidos.length === 0) {
      console.log("¡Ya leíste todos los libros!");
      document.getElementById("resultado").textContent = "¡Ya leíste todos los libros!";
      return;
    }
    const indiceRandom = Math.floor(Math.random() * librosNoLeidos.length);
    const elementoRandom = librosNoLeidos[indiceRandom];
    const mensaje = `Te sugiero leer ${elementoRandom.nombre} de ${elementoRandom.autor}`;
    console.log(mensaje);
    document.getElementById("resultado").textContent = mensaje;
  }
};
