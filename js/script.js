//Comentário em JavaScript
/* 
    Comentário de múltiplas linhas
    em JavaScript
*/
//Forma de declaração de variantes em JavaScript
/*var nome = "João"; //Evite
let sobrenome = "Silva"; //USA, CARACOLES!
const idade = 30; //Constante, não pode ser alterada ao fluxo do código

console.log(nome);
console.log(sobrenome);
console.log(idade);

//exemplo de diferença entre var e let
if(true){
    var nome = "Maria";
    let sobrenome = "Ana";
}

console.log(nome); //Maria
console.log(sobrenome); //Silva
*/

//tipos de dados em JavaScript
/*
const nome = "Matheus";
console.log(typeof nome); //string
const idade = 25;
console.log(typeof idade); //number
const isStudent = true;
console.log(typeof isStudent); //boolean
const numerodecimal = 3.14;
console.log(typeof numerodecimal); //number
const nulo = null;
console.log(typeof nulo);
const indefinido = undefined;
console.log(typeof indefinido);
const simbolo = Symbol("simbolo");
console.log(typeof simbolo);
const objeto = { nome: "Carlos", idade: 40 };
console.log(typeof objeto);
const array = [1, 2, 3, 4, 5];
console.log(typeof array);

//Como declaramos um objeto em JavaScript
const pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira",
    hobbies: ["leitura", "viagem", "culinária"],
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo",
        estado: "SP"
    }
};

console.log(pessoa);
console.log(pessoa.nome);
*/
//lição de casa:
//criar um objeto que seja semelhandte aos dados do formulário de login
//imprimir o objeto no console
/*
//Objeto Usuário:

const usuario = {
    email: "exemplo@exemplo.com",
    senha: "123456",
    nome: "Exemplo de Exemplo",
    idade: 33,
    avatar: "./img/avatar/avatar-placeholder.png"
}

/*
//log de todos os atributos do objeto

console.log(usuario)
console.table(usuario)

//log de um atributo do objeto

console.log(usuario.nome)

//alterar a informação de um atributo direto no atributo

usuario.nome = "Exemplar dos Exemplissimos"
console.log(usuario.nome)

//Alterar a informação de um atributo com um objeto

let nome = "José"
usuario.nome = nome
console.log(usuario.nome)
*/

//let subtituloH2 = document.getElementById("teste");
//imprimindo o elemento capturado
//console.log(subtituloH2)
//Bora escrever no CORNO desse <h2>
//subtituloH2.textContent =  "Novo texto"
//subtituloH2.innerHTML = "<p>Sou cego</p>".toUpperCase()
/*
//Capturando o elemento de avatar!!
let imgAvatar = document.getElementById("avatar-user")

//Processando o avatar com os dados do objeto usuário
imgAvatar.src = usuario.avatar
imgAvatar.alt = usuario.nome
imgAvatar.width = 40
*/

//Para casa:
//Recuperar os dados dos campos do FORM e armazenar em um objeto e imprimir eles assim que o botão Entrar for clicado!!
