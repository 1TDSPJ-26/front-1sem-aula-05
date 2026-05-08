// //COmentario em linha

// /*
//     Comentário em bloco
// */

// // VAR NAO PODE SER UTILIZADO.

// // Forma de declaracao de variaveis

// let nome = "Juan";
// let sobrenome = "Souza Marques";
// const idade = 18

// console.log(nome);
// console.log(sobrenome);
// console.log(idade);

// // Exemplo da diferenca entre var e let

// if(true){
//     let nome = "Reinaldo"; 
//     let sobrenome = "Marques"
//     const idade = 44

//     console.log(nome)
//     console.log (sobrenome)
//     console.log (idade)
// }

//Tipos de dados:
// const nome = "Alê";
// console.log(typeof nome);
// const idade = 20;
// console.log(typeof idade);
// const numeroDecimal = 20.345678910111;
// console.log(typeof numeroDecimal);
// const estaAprovado = true;
// console.log(typeof estaAprovado);
// const sobrenome = undefined;
// console.log(typeof sobrenome);
// let naoDeclarada;
// console.log(typeof naoDeclarada);
// const corSelecionada = null;
// console.log(typeof corSelecionada);
// const objeto = {};
// console.log(typeof objeto);
// const array = [];
// console.log(typeof array);
// const objeto2 = {nome: "Alê", sobrenome: "C. de Jesus"};
// console.log(typeof objeto2);
// const array2 = ["Alê", "C. de Jesus", 20, true];
// console.log(typeof array2);
// const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// //Tipagem no JS é dinâmica
// let variavel;
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);

// variavel = "Alê";
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);

// variavel = true;
// console.log("Valor: " + variavel);
// console.log("Tipo: " + typeof variavel);

// //Como declaramos um objeto em javaScript
// const objeto1 = {
//     nome: "Juan",
//     sobrenome: "Marques",
//     idade: 18,
//     estaAprovado: true
// };
// console.log(objeto1);
// console.log(typeof objeto1);

// Lição de Casa:
// Crie um objeto que seja semelhante aos dados do formulário de login
// Imprmir os dados do objeto no console.

//Declarando um objeto espelhado ao formulario de login 
  
// //Imprimindo os dados do objeto:
// console.log(perfil);

// // //Imprimindo um único dado do objeto: 
// console.log(usuario.nome);

// //Alterar um unico dado do objeto:
// usuario.nome = "Antonio das alfaces";
// //Imprimindo um unico dado do objeto:
// console.log(usuario.nome);

// let nome = "Joaquim dos tomates"
// //Alterar um unico dado do objeto:
// usuario.nome = nome
// //Imprimindo um único dado do objeto:
// console.log(usuario.nome)

// const subTitH2 = document.getElementById("teste");
// //Imprimindo o elemento capturado:
// console.log(subTitH2);

// //Vamos escrever no H2
// //subTitH2.textContent = "Novo valor"
// // subTitH2.innerHTML = "<p>Titulo</p>"

// const perfil = {
//     email: "email@email.com",
//     senha: "12345678",
//     nome: "Jose das Couves",
//     idade: 33,
//     avatar:"./img/avatar/img-avatar-01.jpg"
// }

// // Capturando elemento do avatar
// const imgAvatar = document.getElementById("Avatar-user")

// //Preenchendo o avatar com os dados do objeto usúario:
// imgAvatar.src = usuario.avatar;
// imgAvatar.width = "100%";
// imgAvatar.alt = usuario.nome; 

//Para casa 

//Recuperar os dados do form e armazenar em um objeto e imprimir assim que o botão Entrar for clicado