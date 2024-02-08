const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let quantasNotas = 2;
let provas = [];

function obterNota(i) {
  rl.question(`Insira a nota ${i + 1}: `, (resposta) => {
    let nota = parseInt(resposta);
    provas.push(nota);
    
    if (provas.length < quantasNotas) {
      obterNota(provas.length);
    } else {
      let soma = 0;
      let reprovou = "REPROVOU OTÁRIO >:)";
      let aprovou = "APROVAMO POHA :D";
      let media = 0;

      for (let i = 0; i < provas.length; i++) {
        soma += provas[i];
      }

      media = soma / provas.length;

      if (media >= 7) {
        console.log("\n" + aprovou);
      } else {
        console.log("\n" + reprovou);
      }
      rl.close();
    }
  });
}

obterNota(0);
