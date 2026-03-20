//CARGAR HTML AL JS

const productList = document.getElementById('product-list')


//ARRAY DE PRODUCTOS

const productos = [
    { nombre: "Camiseta", categoria: "ropa", precio: 19.99, disponible: true },
    { nombre: "Auriculares", categoria: "electrónica", precio: 49.99, disponible: false },
    { nombre: "Zapatillas", categoria: "ropa", precio: 89.99, disponible: true },
    { nombre: "Teclado", categoria: "electrónica", precio: 35.00, disponible: true },
    { nombre: "Chaqueta", categoria: "ropa", precio: 120.00, disponible: false },
    { nombre: "Ratón", categoria: "electrónica", precio: 25.00, disponible: true }
]

const productosDisponibles = productos.filter(productos => productos.disponible)


//TARJETAS JS

productosDisponibles.forEach(producto => {
    const cardTHTML = `
    <article class="product-card">
    <img src="https://picsum.photos/500/300" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.categoria}</p>
    <span>${producto.precio}€</span>
    <button>Añadir al carrito</button>
    </article>
    `

    productList.insertAdjacentHTML('beforeend', cardTHTML)
})