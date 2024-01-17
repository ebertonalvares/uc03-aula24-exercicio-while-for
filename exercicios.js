//1-Faça um programa que leia quatro notas, acumule o valor das notas e depois do loop calcule a média. Em seguida,
//usando if/else if/else, se a média for maior ou igual a 7 imprima na tela, aluno aprovado,
//se for maior ou igual a 5 imprima aluno em recuperação e se for menor que 5 aluno reprovado.


const readline = require('readline-sync');

// let soma_notas = 0;
// let mediaNotas = 0; 
// for (i = 1; i <=4; i++) {
//     const nota = readline.questionFloat("Informe uma nota: "); // questionFloat para numero 1.5 
//     soma_notas += nota;


// }
// mediaNotas = soma_notas / 4;

//  if (mediaNotas >= 7) {
//     console.log("Aluno Aprovado");
// }else if(mediaNotas >= 5){
//     console.log("Aluno em Recuperação");
// }else{
//     console.log("Aluno Reprovado");
// }


//2-Crie um programa que simula a movimentação de uma conta bancaria, onde deverá ser solicitado o saldo inicial e em seguida, 
//através de um loop, deve pedir a operação (deposito, saque ou saldo) e o valor caso seja deposito ou saque.
//O programa deverá incrementar o saldo na operação de depósito e decrementar na operação de saque, sendo que nessa última, 
//deve validar se o saldo do saque não ficara negativo. O programa será encerrado quando informada a operação sair.

//peça um saldo inicial 

//atraves de um loop pedir a operacao (deposito, saque ou saldo)
// do {
//     saldoinicial = readline.questionFloat("Informe seu saldo?");
//     deposito = readline.questionFloat("Deseja realizar um deposito?");
//     saque = readline.questionFloat("Deseja realizar um saque?");
//     novosaldo = saldoinicial+deposito-saque;
//     if(novosaldo <= 0 ){
//         console.log("Seu saldo esta abaixo de zero");
//     }else{
//         console.log(novosaldo);
//     }
//     break;
// } while (novosaldo <= 0)
//caso seja deposito ou saque o progrma deve incrementar ou decrementar
//a ultima deve validar se o saldo do saque nao ficara negativo
// programa sera encerrado quando informada a operacao sair


let saldo = readline.questionFloat("Informe o saldo inicial: ");

let operacao;

do {
  operacao = readline
    .question("Informe a operação (Deposito, Saque, Saldo ou Sair)")
    .toLowerCase();
  if (operacao === "deposito" || operacao === "saque") {
    const valorOperacao = readline.questionFloat("Informe o valor da operação: ")

    if (valorOperacao <= 0) {
      console.log("Valor inválido");
      continue;
    }

    if (operacao === "deposito") {
      saldo += valorOperacao;
    } else if (operacao === "saque") {
      if (valorOperacao > saldo) {
        console.log("Operação inválida - Saldo insuficiente");
        continue;
      }
      saldo -= valorOperacao;
    }
  } else if (operacao === "saldo") {
    console.log(`Saldo atual: R$ ${saldo.toFixed(2)}`);
  } else if (operacao === "sair") {
    continue;
  } else {
    console.log("Operação inválida")
  }
} while (operacao !== "sair")