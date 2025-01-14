// Importa prompt-sync para capturar entrada del usuario
const prompt = require("prompt-sync")({ sigint: true });

let usuarios = [];
let idUsuario = 1;

function menu(){
    return console.log(`
    Seleccione una opción:
    1. Crear un nuevo usuario
    2. Ver todos los usuarios
    3. Buscar un usuario
    4. Modificar un usuario
    5. Eliminar un usuario
    6. Salir
    `);
}

const crearUsuario = () => {
    const nombre = prompt("Ingrese el nombre del usuario: ");
    const edad = prompt("Ingrese la edad del usuario: ");
    const email = prompt("Ingrese el email del usuario: ");

    const usuario = {
        id: idUsuario++,
        nombre,
        edad,
        email,
    };

    usuarios.push(usuario);
};

function verUsuarios() {
    console.log("Lista de usuarios");

    usuarios.forEach((usuario) => {
        console.log(`
        ID: ${usuario.id}
        Nombre: ${usuario.nombre}
        Edad: ${usuario.edad}
        Email: ${usuario.email}
        `);
    });
}

function buscarUsuario(id) {
    const usuario = usuarios.find((usuario) => usuario.id === id);

    if (usuario) {
        console.log(`
        ID: ${usuario.id}
        Nombre: ${usuario.nombre}
        Edad: ${usuario.edad}
        Email: ${usuario.email}
        `);
    } else {
        console.log("Usuario no encontrado");
    }
}

function modificarUsuario(id) {
    const usuario = usuarios.find((usuario) => usuario.id === id);

    if (usuario) {
        const nombre = prompt("Ingrese el nombre del usuario: ");
        const edad = prompt("Ingrese la edad del usuario: ");
        const email = prompt("Ingrese el email del usuario: ");

        usuario.nombre = nombre;
        usuario.edad = edad;
        usuario.email = email;

        console.log("Usuario modificado");
    } else {
        console.log("Usuario no encontrado");
    }
}

function eliminarUsuario(id) {
    const index = usuarios.findIndex((usuario) => usuario.id === id);

    if (index !== -1) {
        usuarios.splice(index, 1);
        console.log("Usuario eliminado");
    } else {
        console.log("Usuario no encontrado");
    }
}

function main() {
    let ejecutando = true;

    while (ejecutando) {
        menu();

        const opcion = prompt("Seleccione una opción: ");

        switch (opcion) {
            case "1":
                crearUsuario();
                break;
            case "2":
                verUsuarios();
                break;
            case "3":
                buscarUsuario(Number(prompt("Ingrese el ID del usuario: ")));
                break;
            case "4":
                modificarUsuario(Number(prompt("Ingrese el ID del usuario: ")));
                break;
            case "5":
                eliminarUsuario(Number(prompt("Ingrese el ID del usuario: ")));
                break;
            case "6":
                console.log("Salir");
                ejecutando = false;
                break;
            default:
                console.log("Opción no válida");
                break;
        }
    }
}

main();