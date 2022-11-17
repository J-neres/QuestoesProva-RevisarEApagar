let prompt = require('prompt-sync')();

 function acertou () {
    let numeroSortido = parseInt(Math.random() * 1000);
    let chance = 1;
    

    while (chance <= 10) {

        let a = prompt('Insira um número: ');
        let tentativa = Number(a);
        if (chance > 10) {
          console.log('Perdeu. Tentativas Esgotadas')
        }

        if (tentativa == numeroSortido) {
            console.log( 'Ganhou');
            
        } 
        else if (tentativa < numeroSortido) {
            console.log('Número passado é menor')
        }

        else {
            console.log('Número passado é maior')
        } 

        chance++;
        
        
    }   return numeroSortido;
 }

 
    
    let x = acertou(500);
    console.log (x);
