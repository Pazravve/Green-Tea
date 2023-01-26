const contenedorProductos = document.getElementById('contenedor-productos')

let carrito = []

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('allCards')
    div.innerHTML = `
    <div class="allCards">
        <div class="card" style="width: 18rem;">
            <img src=${producto.img}>
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.desc}</p>
                <p class="precioProducto">Precio: $ ${producto.precio}</p>
                <button id="agregar${producto.id}" class="boton-agregar">Add  <i class="fa-solid fa-heart"></i></button>
            </div>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div)


})


const agregarAlCarrito = (prodId) => {
    const item = stockProductos.find((prod) => prod.id === prodId)
    carrito.push(item)

    console.log(carrito)
}