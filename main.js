//CARGAR HTML AL JS

const productList = document.getElementById('product-list')


//ARRAY DE PRODUCTOS

const productos = [
    { nombre: "Camiseta", categoria: "ropa", precio: 19.99, disponible: true, imagen: "img/camiseta.jpg" },
    { nombre: "Auriculares", categoria: "electrónica", precio: 49.99, disponible: false },
    { nombre: "Zapatillas", categoria: "calzado", precio: 89.99, disponible: true, imagen: "img/zapatillas.jpg" },
    { nombre: "Teclado", categoria: "electrónica", precio: 35.00, disponible: true, imagen: "img/teclado.png" },
    { nombre: "Chaqueta", categoria: "ropa", precio: 120.00, disponible: false },
    { nombre: "Ratón", categoria: "electrónica", precio: 25.00, disponible: true, imagen: "img/raton.jpg" }
]

const productosDisponibles = productos.filter(productos => productos.disponible)


//TARJETAS JS

productosDisponibles.forEach(producto => {
    const cardTHTML = `
    <article class="product-card">
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.categoria}</p>
    <span>${producto.precio}€</span>
    <button>Añadir al carrito</button>
    </article>
    `

    productList.insertAdjacentHTML('beforeend', cardTHTML)
})