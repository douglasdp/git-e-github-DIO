/*var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos.') : console.log('Jogadores são Invalidos');

//usando if
    if (jogador1 > 0 && jogador2 ==0) {
        console.log('Jogador1 marcou ponto');
        placar = jogador1 > jogador2;
    }
    
    //usando else if
    else if (jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador2 marcou ponto');
        placar = jogador2 > jogador1;
    }
    
    //usando else
    else {
        console.log('Ninguem marca ponto')
    }

    //usando switch case
    switch (placar) {
        case placar = jogador1 > jogador2:
            console.log('Jogador 1 ganhou');
            break;
        case placar = jogador2 > jogador1:
            console.log('Jogador 2 ganhou');
            break;
        default:
            console.log('Ninguem ganhou.');
    } */

 /*  // estruturas de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: '12', propriedade2: 'valor2', propriedade3: 'valor3'} */

/* // for - executa até que seja false
for (let i = 0; i < array.length; i++) {
    console.log(i);
} */

// for/in -repetição a partir de uma propriedade
// com array
/*for (i in array) {
    console.log(i);
}
// com object
for (i in object) {
    console.log(i);
} */

// for/of - executa repetição a partir de um valor
// com array
/*for (i of array) {
    console.log(i);
}
// com object não funciona pois não é iterável
for (i of object.propriedade1) {
    console.log(i);
} */

// while - executa enquanto for verdadeira
var a = 0;
 while (a < 10) {
    a++;
    console.log(a)
}

// do - executa até que seja falsa
do {
    a++;
    console.log(a);
} while (a < 10);