let soma = 0;

for (let i = 1; i <= 5; i++) {
  let valor = parseFloat(prompt("Digite um valor real:"));
  console.log(`O quadrado de ${valor} é ${valor ** 2}`);
  soma += valor;
}

console.log(`A soma dos valores é ${soma}`);
