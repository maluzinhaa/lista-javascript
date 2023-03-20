let continuar = true;

while (continuar) {
  let salario = parseFloat(prompt("Digite o salário do funcionário:"));
  
  if (salario <= 500) {
    salario *= 1.1; // Aumento de 10%
  } else {
    salario *= 1.08; // Aumento de 8%
  }
  
  console.log(`Novo salário: R$ ${salario.toFixed(2)}`);
  
  let resposta = prompt("Deseja digitar outro salário? (s/n)").toLowerCase();
  continuar = (resposta === "s" || resposta === "sim");
}
