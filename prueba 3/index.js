const prompt = require('prompt-sync')();

let productos = [];
let productoId = 0;

function menu(){
    console.log(`
----- Administracion de Productos ------
[1] Mostrar productos
[2] Buscar Producto
[3] Agregar producto
[4] Actualizar producto
[5] Eliminar producto
[6] Reporte de productos
[7] Salir
`);
}

function mostrarProductos(){

    if(productos.length === 0){
        console.log('No hay productos registrados');
        return;
    }

    console.log('Lista de productos');
    console.log('ID\tNombre\t\tCategoria\t\tCantidad\t\tPrecio');
    productos.forEach(producto => {
        console.log(`${producto.id}\t${producto.nombre}\t\t${producto.categoria}\t\t${producto.cantidad}\t\t${producto.precio}`);
    });
}

function buscarProducto(){
    const id = +prompt('Ingrese el ID del producto: ');
    const producto = productos.find(producto => producto.id === id);
    if(producto){
        console.log(`
        ID: ${producto.id}
        Nombre: ${producto.nombre}
        Categoria: ${producto.categoria}
        Cantidad: ${producto.cantidad}
        Precio: ${producto.precio}
        `);
    } else {
        console.log('Producto no encontrado');
    }
}

function agregarProducto(){
    const nombre = prompt('Ingrese el nombre del producto: ');
    const categoria = prompt('Ingrese la categoria del producto: ');
    const cantidad = +prompt('Ingrese la cantidad del producto: ');
    const precio = +prompt('Ingrese el precio del producto: ');

    const producto = {
        id: productoId++,
        nombre,
        categoria,
        cantidad,
        precio
    };

    productos.push(producto);
    console.log('Producto agregado correctamente');
}

function actualizarProducto(){
    const id = +prompt('Ingrese el ID del producto: ');
    const producto = productos.find(producto => producto.id === id);
    if(producto){
        const nombre = prompt('Ingrese el nombre del producto: ');
        const categoria = prompt('Ingrese la categoria del producto: ');
        const cantidad = +prompt('Ingrese la cantidad del producto: ');
        const precio = +prompt('Ingrese el precio del producto: ');

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.cantidad = cantidad;
        producto.precio = precio;

        console.log('Producto actualizado correctamente');
    } else {
        console.log('Producto no encontrado');
    }
}

function eliminarProducto(){
    const id = +prompt('Ingrese el ID del producto: ');
    const index = productos.findIndex(producto => producto.id === id);
    if(index !== -1){
        productos.splice(index, 1);
        console.log('Producto eliminado correctamente');
    } else {
        console.log('Producto no encontrado');
    }
}

function reporteProductos(){
    console.log('Reporte de productos');
    console.log('Cantidad de productos: ' + productos.length);
    const total = productos.reduce((total, producto) => total + producto.precio, 0);
    console.log('Precio total de productos: ' + total);
    console.log('Producto más caro: ' + productos.reduce((max, producto) => producto.precio > max.precio ? producto : max).nombre);
    console.log('Producto más barato: ' + productos.reduce((min, producto) => producto.precio < min.precio ? producto : min).nombre);
}

function main(){
    while(true){
        menu();
        const option = prompt('Seleccione una opción: ');
        switch(option){
            case '1':
                mostrarProductos();
                break;
            case '2':
                buscarProducto();    
                break;
            case '3':
                agregarProducto();
                break;
            case '4':
                console.log('Actualizar producto');
                break;
            case '5':
                eliminarProducto();
                break;
            case '6':
                reporteProductos();
                break;
            case '7':
                console.log('Salir');
                return;
            default:
                console.log('Opción inválida');
        }
    }
}

main();