    alert('Informe dois números para:\n ►Conferir se serão iguais\n ►Se a sua soma será maior que 10 ou menor que 20');

    let n1 = Number(prompt('Insira o primeiro número:'));
    let n2 = Number(prompt('Insira o segundo número:'));
    let result;

        if (n1 === n2){
        console.log(`Os números ${n1} e ${n2} são iguais`);
        }else {
            console.log(`Os números ${n1} e ${n2} são diferentes`);
        }

            result = n1 + n2;
            console.log(`${result} é a soma dos dois números`)
        
            if (result <= 19){
                alert(`O resultado da soma de ${n1} + ${n2} é = a ${result}, e é igual ou maior que 10`);
                } else if (result  ) {
                        console.log(`O resultado da soma de ${n1} + ${n2} é = a ${result}, e é menor que 20`);
                }
