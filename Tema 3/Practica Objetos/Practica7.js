const alcachofa = { nombre: "alcachofa", precio: 12, stock: 200 }
const manzana = { nombre: "manzana", precio: 3, stock: 4 }
const pan = { nombre: "pan", precio: 2.5, stock: 7 }
const leche = { nombre: "leche", precio: 1.8, stock: 2 }

const productos = [alcachofa, manzana, pan, leche]

const productosBajoStock = productos.filter(producto => producto.stock < 5)
console.log("Productos con menos de 5 unidades:")
console.log(productosBajoStock)

const totalInventario = productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0)
console.log(`Valor total del inventario: ${totalInventario}`)