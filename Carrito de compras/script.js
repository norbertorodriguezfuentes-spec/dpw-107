const productos = [
    { id: 1, nombre: "Playera Barcelona", precio: 100, imagen: "IMG/1.jpg" },
    { id: 2, nombre: "Playera Real Madrid", precio: 75, imagen: "IMG/2.jpg" },
    { id: 3, nombre: "Playera Manchester City", precio: 80, imagen: "IMG/3.jpg" },
    { id: 4, nombre: "Playera Chelsea", precio: 80, imagen: "IMG/4.jpg" },
    { id: 5, nombre: "Playera Bayern de Múnich", precio: 95, imagen: "IMG/5.jpg" },
    { id: 6, nombre: "Playera Borussia Dortmund", precio: 90, imagen: "IMG/6.jpg" }
  ];
  
  const contenedor = document.getElementById("productos");
  const carritoModal = document.getElementById("modalCarrito");
  const verCarrito = document.getElementById("verCarrito");
  const cerrarCarrito = document.getElementById("cerrarCarrito");
  const vaciarCarrito = document.getElementById("vaciarCarrito");
  const itemsCarrito = document.getElementById("itemsCarrito");
  const totalCarrito = document.getElementById("totalCarrito");
  const contador = document.getElementById("contador");
  
  let carrito = [];
  
  function mostrarProductos() {
    productos.forEach(prod => {
      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>$${prod.precio}</p>
        <button onclick="agregarCarrito(${prod.id})">Agregar al carrito</button>
      `;
      contenedor.appendChild(div);
    });
  }
  
  function agregarCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const repetido = carrito.find(p => p.id === id);
  
    if (repetido) {
      repetido.cantidad++;
    } else {
      carrito.push({ ...producto, cantidad: 1 });
    }
  
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    itemsCarrito.innerHTML = "";
    let total = 0;
  
    carrito.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p>${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}</p>
        <button onclick="eliminarDelCarrito(${item.id})">❌</button>
      `;
      itemsCarrito.appendChild(div);
      total += item.precio * item.cantidad;
    });
  
    totalCarrito.textContent = `Total: $${total}`;
    contador.textContent = carrito.reduce((acc, el) => acc + el.cantidad, 0);
  }
  
  function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
  }
  
  verCarrito.addEventListener("click", () => {
    carritoModal.style.display = "flex";
  });
  
  cerrarCarrito.addEventListener("click", () => {
    carritoModal.style.display = "none";
  });
  
  vaciarCarrito.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
  });
  
  mostrarProductos();
  