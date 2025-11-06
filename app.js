const productosJSON =[
    {
        id: 1,
        nombre: "Cafe Moka",
        precio:70.00,
        descripcion: "Exquisito cafe con chocolate y crema",
        imagen: "cafe-moka.jpg"
    },
    {
        id: 2,
        nombre: "Te Verde",
        precio: 50.00,
        descripcion: "Hola de te verde",
        imagen: "te-verde.jpg"
    },
    {
        id: 3,
        nombre:"Smoothie de frutas",
        precio: 40.00,
        descripcion:"Mezcla de frutas",
        imagen: "smoothie-frutas.jpg"
    },
]
// funcion  principal
function mostrarProductos(){
    const contenedor = document.querySelector('#contenedor-productos')
    productosJSON.forEach(productos =>{
        //desde javascrpt se creara un contenedor div
        const card=document.createElement('div')
        //asignar al contenedor de una clase
        card.classList.add('productos-card')
        //construir la tarjeta
        card.innerHTML =`
        <img src= ${productos.imagen}>
        <h2>${productos.nombre}</h2>
        <p>${productos.descripcion}</p>
        <button data-id="${productos.id}">Agregar al carrito</button>`
        //insertar el nuevo elemento a la tarjeta
        contenedor.appendChild(card);
    })
}
//llamar a la funcion
mostrarProductos();