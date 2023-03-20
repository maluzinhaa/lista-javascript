let salario = parseFloat(prompt("Informe o salário do funcionário:"));
let classe = prompt("Informe a classe do funcionário (A, B ou C):");

let aumento;

switch(classe) {
  case 'A':
    aumento = 0.1;
    break;
  case 'B':
    aumento = 0.15;
    break;
  case 'C':
    aumento = 0.2;
    break;
  default:
    console.log("Classe inválida!");
    break;
}

if(aumento !== undefined) {
  let novoSalario = salario * (1 + aumento);
  console.log(`O novo salário do funcionário é: R$ ${novoSalario.toFixed(2)}`);
}
