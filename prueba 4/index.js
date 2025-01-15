function main() {
    let numbers = [10, 7, 8, 9, 1, 5];
    let target = 8;

    console.log("Lista original:", numbers);

    // Ordenar la lista usando QuickSort
    quickSort(numbers, 0, numbers.length - 1);
    console.log("Lista ordenada:", numbers);

    // Buscar el número objetivo usando búsqueda binaria
    let position = binarySearch(numbers, target);

    if (position !== -1) {
        console.log(`El número ${target} está en la posición ${position} de la lista ordenada.`);
    } else {
        console.log(`El número ${target} no está en la lista.`);
    }
}

// Implementación de QuickSort
function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Implementación de Búsqueda Binaria
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

main();
