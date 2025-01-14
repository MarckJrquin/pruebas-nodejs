// Importa prompt-sync para capturar entrada del usuario
const prompt = require("prompt-sync")({ sigint: true });

// Crear una matriz para representar los asientos del teatro
const filas = 5;
const columnas = 8;
let teatro = Array.from({ length: filas }, () => Array(columnas).fill(" "));

function menu() {
  console.log(`
----- Reserva de asientos ------

[1] Mostrar asientos
[2] Reservar asiento
[3] Cancelar asiento
[4] Salir
`);
}

function mostrarAsientos() {
    console.log("\nMapa de asientos:");
    console.log("   " + Array.from({ length: columnas }, (_, i) => ` ${i + 1}`).join("  "));
    teatro.forEach((fila, index) => {
        const filaNumerada = fila.map(asiento => `[${asiento}]`).join(" ");
        console.log(`F${index + 1} ${filaNumerada}`);
    });
    console.log();
}

function reservarAsiento() {
    const fila = +prompt("Ingrese el número de fila: ");
    const columna = +prompt("Ingrese el número de columna: ");

    if (fila < 1 || fila > filas || columna < 1 || columna > columnas) {
        console.log("Asiento inválido. Inténtelo de nuevo.");
        return;
    }

    if (teatro[fila - 1][columna - 1] === "X") {
        console.log("Este asiento ya está reservado. Inténtelo con otro asiento diferente.");
        return;
    }

    teatro[fila - 1][columna - 1] = "X";
    console.log("¡Reserva exitosa!");
}

function cancelarAsiento() {
    const fila = +prompt("Ingrese el número de fila: ");
    const columna = +prompt("Ingrese el número de columna: ");

    if (fila < 1 || fila > filas || columna < 1 || columna > columnas) {
        console.log("Asiento inválido. Inténtelo de nuevo.");
        return;
    }

    if (teatro[fila - 1][columna - 1] === " ") {
        console.log("Este asiento ya está libre. Inténtelo con otro asiento diferente.");
        return;
    }

    teatro[fila - 1][columna - 1] = " ";
    console.log("¡Cancelación exitosa!");
}

function main() {
    
    while (true) {
        menu();

        const option = prompt('Seleccione una opción: ');

        switch (option) {
            case '1':
                mostrarAsientos(teatro);
                break;
            case '2':
                reservarAsiento(teatro);
                break;
            case '3':
                cancelarAsiento(teatro);
                break;
            case '4':
                console.log('Salir');
                return;
            default:
                console.log('Opción inválida');
                break;
        }
    }
}

main();