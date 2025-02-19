//Exercícios de Arrow Functions e Higher-Order Functions.

//Exercício 1

const dobro = numero => numero * 2;

console.log(dobro(7));  
console.log(dobro(15)); 

// Exercicio 2

const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); 
console.log(dividir(9, 3)); 

// Exercicio 3

const mensagemBoasVindas = nome => `Seja bem-vindo, ${nome}!`;

console.log(mensagemBoasVindas("Carlos")); 
console.log(mensagemBoasVindas("Ana"));   

// Exercicio 4

const executarOperacao = (a, b, operacao) => operacao(a, b);

console.log(executarOperacao(6, 3, (a, b) => a - b)); 
console.log(executarOperacao(4, 5, (a, b) => a * b)); 

// Exercicio 5 

const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(preco => preco * 0.9);

console.log(precosComDesconto); 

// Exercicio 6

const idades = [12, 17, 20, 25, 14];
const menoresDeIdade = idades.filter(idade => idade < 18);

console.log(menoresDeIdade); 

// Exercicio 7
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);

console.log(produto); 
