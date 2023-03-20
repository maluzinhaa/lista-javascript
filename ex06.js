let salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário:"));

if (salarioBruto <= 500) {
  salarioBruto *= 1.1; // Aumento de 10%
}

console.log(`Novo salário: R$ ${salarioBruto.toFixed(2)}`);
