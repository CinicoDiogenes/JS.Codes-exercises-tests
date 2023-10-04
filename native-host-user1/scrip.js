// Exercícios

// Liste 5 objetos nativos
// Array;
// Number;
// String;
// Function;
// Object;
// Liste 5 objetos do browser
// NodeList;
// Window;
// Location;
// Navigator;
// HTMLCollection;

// Liste 2 Métodos, Propriedades ou Objetos
// webkitHidden;
// webkitCurrentFullScreenElement;
// webkitFullscreenElement;
// xmlEncoding;
// presentes no Chrome que não existem no Firefox
if (typeof document.xmlEncoding !== 'undefined') {
  console.log('Existe');
} else {
  console.log('Não Existe');
}

//  String Classe 0404 String1

const comida = 'Pizza';
const agua = new String('Agua');

const frase = 'André programador';

console.log(frase[frase.length - 1]);
console.log(frase.charAt(frase.length - 5));

const frase0 = 'A linguegem mais usada é ';
const linguagem = 'JavaScript';
const fraseFinal = frase0 + linguagem;
const concatFrase = frase0.concat(linguagem, ' ?!');

const ciriguela = 'ciriguela';
const banana = 'banana';
const listaFrutas = 'ciriguela, uva, manga';

console.log(listaFrutas.includes(ciriguela, 0));
console.log(listaFrutas.includes(ciriguela, 5));
console.log(listaFrutas.includes(banana));

console.log(banana.endsWith('na'));
console.log(banana.startsWith('na'));
console.log(banana.startsWith('ba')); // its case sensive
//Esses metodos nao modficam a string, apenas retorna valores

const trans1 = 'deposito do cliente';
const trans2 = 'chegou na conta';
const trans3 = 'saquei o dinheiro';
console.log(trans2.slice(0, 5)); // retorna do 0 ao 5 caracter
console.log(trans1.slice(0, -2)); // retorna do 0 ao ultimo carcter cortando os 2 ultimo carcteres da cadeia
console.log(trans3.slice(-5)); //retorna os ultimos 5 caracteres
console.log(trans3.slice(0)); // retorna toda cadeia
console.log(trans3.slice(1)); // retorna a cadei menos o primeira caracter

const lingua = 'JavaScript';
console.log(lingua.substring(3)); // corta as 3 primeiras
console.log(lingua.substring(0, 3)); // da primeira a terceira
console.log(lingua.substring(-3)); // nao funciona bem com valores negativos

const instrumento = 'pianoa';
console.log(instrumento.indexOf('a')); // retorna a posicap que esta o caracter na cadeia, se ha mais de dois do mesmo como por exemplo a letra 'a' esse retronar o primeiro que ele vê
console.log(instrumento.indexOf('pi'));
console.log(instrumento.lastIndexOf('a')); // retorna a ultima posicao que estiver a caracter na cadeia, nesse caso como ha duas letras 'a', entao este retornar a ultima posição ocupada pelo carcter

// padStart

const listaPrecos = ['99€', '18€', '1200€', '541€'];
const listaPrecos2 = ['55€', '2€', '88€', '66€', '8541€'];
const price = '12€';

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(15, '*')); //Completa a cadeia de caracter com o valor declarado antes da virgula, nesse caso seriam 10
});
console.log(price.padStart(25, '+')); // aumentou no inicio da cadeia
console.log(price.padEnd(25, '/')); // aumentou no final da cadeia
// Alinhamento com forEach + padStatr/End

listaPrecos2.forEach((item) => {
  // alinhado precos a la vez
  console.log(item.padStart(15, '-'));
});

const ta = 'ta';
console.log(ta.repeat(10));

let listaVestuarios = 'blusas chapeus meias calças sapatos';
listaVestuarios = listaVestuarios.replace(/[ ]+/g, ', ');
('/[ ]+/g => regular expression');
console.log(listaVestuarios);

const arrayLista = listaVestuarios.split('a'); // retornar todos os valores removendo o valor declarado, quebrando a setença no valor onde foi declarado.

const htmlText = '<div> O melhor item </div> <div>a melhor lista</div> ';

const htmlArray = htmlText.split('div');
const newHtml = htmlArray.join('section');

const genero1 = 'Feminino';
const genero2 = 'FEMININO';
const genero3 = 'feminino';

console.log(
  genero1.toLocaleLowerCase() &&
    genero2.toLocaleLowerCase() &&
    genero3.toLocaleLowerCase() === 'feminino',
);

const valor = ' 23,00€   ';
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());
