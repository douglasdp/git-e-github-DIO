# JAVASCRIPT

- Introdução ao Javascript
- Variáveis, constantes e funções
-Introdução ao NodeJS

- Estrutura de Projeto básico
-Como importar javascript para uma pagina html


## PRIMEIRO PROJETO DE JAVASCRIPT
_Contador_

> Copiei a estrutura de html e css conforme indicado pela orientadora. Editei o css conforme meu gosto em cores e acrecentando um filtro de sombra em textos e botões.
- adicionei animação em css na seleção de botões;

## SINTAXE BÁSICA EM JAVASCRIPT

- **Tipos de dados**

*boolean*
```
var vouf = false;
console.log(typeof(vouf));
```

*number*
```
var nroqlqr = 1;
console.log(typeof(nroqlqr));
```

*string*
```
var nome = 'douglas';
console.log(typeof(nome));
```

- **Atribuição , Comparação e Comparação ideêntica**

*=*
>Aqui o = atribui o numero 0 a variavel x.
```
var x = 0;
console.log(x);
```
*==*
>Aqui o == compara se o dado é igual independente do tipo, neste caso no terminal vai rodar o booleano como *true*
```
var x = '0' == 0;
console.log(x);
```
*===*
>Aqui o === compara se o dado é igual nao somente em caractere e valor, mas tambem o tipo neste caso a variavel se trata de uma string e foi comparado com o tipo *number* 0 no terminal vai rodar o booleano como *false*
```
var x = '0' === 0;
console.log(x);
```

- **Operadores Aritméticos**

* + adição, - subtração, * multiplicação, / divisão real, % divisão inteira e ** potenciação.

```
var adicao = 1 + 1;
console.log(adicao);

var subtracao = 2 - 1;
console.log(subtracao);

var multiplicacao = 2 * 2;
console.log(multiplicacao);

var divisaoreal = 8 / 2;
console.log(divisaoreal);

var divisaointeira = 5 % 2;
console.log(divisaointeira);

var potenciacao = 2 ** 10;
console.log(potenciacao);
```

- **Operadores Relacionais**

```
>maior que
<menor que
>= maior ou igual a
<= menor ou igual a

```
```
var maiorQue = 5 > 2;
console.log(maiorQue);

var menorQue = 5 < 2;
console.log(menorQue);

var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);
```


- **Operadores Lógicos**

&& (e) • considera que todos os valores sejam true (verdadeiro);
|| (ou) • considera que qualquer valor seja true (verdadeiro);
! (não) • inverte o valor de treu para false (falso) ou vice-versa.

