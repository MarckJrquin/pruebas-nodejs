function isBalanced(expression) {
    // Mapa de pares de apertura y cierre
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Pila para mantener los paréntesis de apertura
    let stack = [];

    for (let char of expression) {
        // Si es un paréntesis de apertura, lo empujamos a la pila
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // Si es un paréntesis de cierre
        else if (char === ')' || char === '}' || char === ']') {
            // Verificamos si coincide con el último elemento en la pila
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    // Si la pila está vacía, la expresión está balanceada
    return stack.length === 0;
}

// Ejemplo de uso
const expressions = [
    "{[()()]}",
    "{[(])}",
    "(()[]{})",
    "(([])"
];

expressions.forEach(expression => {
    console.log(`La expresión "${expression}" está balanceada: ${isBalanced(expression)}`);
});
