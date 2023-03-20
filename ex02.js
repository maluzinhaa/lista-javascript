function calcularFatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * calcularFatorial(n - 1);
  }
}

// Exemplo de uso:
console.log(calcularFatorial(5)); // Output: 120
