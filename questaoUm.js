let prompt = require('prompt-sync')();

function inverter(numero) {
    let qtd = [];
    let inicio = 1;
    while (inicio <= numero) {
        let vl = prompt('Passe um valor: ');
        qtd.push(...vl);
        inicio++
    }
    qtd.reverse();
    console.log(qtd);

}

let x = inverter (5);
console.log(x);