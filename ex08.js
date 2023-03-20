let salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário:"));
let inss = 0.08; // 8% de desconto para salários menores que R$ 1.500
let ir = 0.05; // 5% de desconto para salários a partir de R$ 1.500

if (salarioBruto >= 1500) {
  inss = 0.11; // 11% de desconto para salários a partir de R$ 1.500
  ir = 0
