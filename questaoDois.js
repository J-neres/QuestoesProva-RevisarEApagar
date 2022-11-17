let prompt = require('prompt-sync')();

function troca(fgs1, fgs2) {
    let fig1 = fgs1;
    let fig2 = fgs2; 
    let qtdUm = [];
    let qtdDois = [];

    let inicio1 = 1;
    let inicio2 = 1;
    let comp2 = 0;
    let comp1 = 0;
    let iguais = 0

    while (inicio1 <= fig1) {
        let vl = prompt('Usuario 1 informe o número da figurinha ');
        qtdUm = [...vl]
        inicio1++;
    }

    while (inicio2 <= fig2) {
        let vl2 = prompt('Usuario 2 informe o número da figurinha ');
        qtdDois = [...vl2]
        inicio2++;
    }

    while (comp1 < qtdDois.length) {
        if(qtdUm[comp1] == qtdDois[comp2]){
            iguais++;
        }
        while (comp2 < qtdUm) {
            if(qtdDois[comp2] == qtdUm[comp2]) {
                iguais++;
            }
            comp2++;
        }
        comp1++;
    }
    console.log(iguais);
}

let x = troca(4, 4);
console.log(x);