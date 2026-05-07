

// Comenterio em linha
/*
Comentario em bloco
*/

//Forma de declarar de variavel
//var nome = "João"; //Deve ser evitado
//let sobrenome = "C. de Lima";// Deve ser ultilizado
//const idade = 19; //Constante, não pode ser alterada depois de declarada, deve ser ultilizada quando o valor não for alterado

//console.log(nome);
//console.log(sobrenome);
//console.log(idade);      

//Exemplo de diferencia entre var, let e const

//if(true){
    //var nome = "Ana";
    //let sobrenome = "C. Cavalcante";
   // const idade = 18;
//}
    //console.log(nome);
    //console.log(sobrenome);
    // console.log(idade);
    
//Tipos de dados:
const nome = "João";
console.log(typeof nome);
const idade = 19;
console.log(typeof idade);
const numeroDecimal = 20.345678910111;
console.log(typeof numeroDecimal);
const estaAprovado = true;
console.log(typeof estaAprovado);
const sobrenome = undefined;
console.log(typeof sobrenome);
let naoDeclarada;
console.log(typeof naoDeclarada);
const corSelecionada = null;
console.log(typeof corSelecionada);
const objeto = {};
console.log(typeof objeto);
const array = [];
console.log(typeof array);
const objeto2 = {nome: "Joao", sobrenome: "C. de Lima"};
console.log(typeof objeto2);
const array2 = ["Joao", "C. de Lima", 19, true];
console.log(typeof array2);
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Tipagem no JS é dinâmica
let variavel;
console.log("Valor: " + variavel);
console.log("Tipo: " + typeof variavel);

variavel = "JV";
console.log("Valor: " + variavel);
console.log("Tipo: " + typeof variavel);

variavel = true;
console.log("Valor: " + variavel);
console.log("Tipo: " + typeof variavel);

//Como declaramos um Objeto em javaScript
const objeto1 = {
  nome: "JV",
  sobrenome: "C. de Lima",
  idade: 19,
  estaAprovado: true
  };
console.log(objeto1);
console.log(typeof objeto1);

//Licao para casa:
//Crie um objeto que seja semelhante aos dados do formulario de login, ou seja, com os campos email e senha. Depois imprima o objeto no console.
//imprima o tipo do objeto criado no console.

const login = {
    email: "joao@example.com",
    senha: "123456"
}; 
console.log(login);
console.log(typeof login);