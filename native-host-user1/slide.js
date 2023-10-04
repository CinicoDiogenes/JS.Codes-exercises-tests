// Native

// Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host.

// Construtores de objetos nativos
Object;
String;
Array;
Function;

// Host

// Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.

// Objetos do browser
NodeList;
HTMLCollection;
Element;

// User

// Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.

const Pessoa = {
  nome: 'André',
};

// Diferentes Versões

//     Browsers diferentes

//     Apesar de tentarem ao máximo manter um padrão, browsers diferentes possuem objetos com propriedades e métodos diferentes.

//     Versões de browsers

//     Sempre que o browser é atualizado, novos objetos, métodos e propriedades podem ser implementados.

//     Host e Native Objects

//     Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), não possuem o método find de Array.

// Versões de JavaScript

//     ECMA

//     Organização responsável por definir padrões para tecnologias. ECMAScript é o padrão de JavaScript.

//     ECMAScript 2015 ou ES6

//     ES é uma abreviação de ECMAScript, ES6 é a sexta versão do ECMAScript, que foi lançada em 2015. Por isso ECMAScript 2015 é igual a ES6. A partir da ES6, existe uma tendência anual de atualizações. ECMAScript 2015, 2016, 2017, 2018 e Next.

//     Engine

//     Existem diversas engines que implementam o ECMAScript como V8, SpiderMonkey, Chakra, JavaScriptCore e mais.

// Bibliotecas

// Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.

$('a').addClass('ativo');
$('a').hide();
$('a').show();

// Verificar se Existe

// O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.

if (typeof Array.from !== 'undefined') if (typeof NodeList !== 'undefined');

// API

// Application Programming Interface, é uma interface de software criada para a interação com outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser.

// Metodos e propreidades da construtora String

// String

// É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.

const comida0 = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

// str.length

// Propriedade com o total de caracteres da string.

const comida = 'Pizza';
const frase = 'A melhor comida';

comida.length; // 5
frase.length; // 15

comida[0]; // P
frase[0]; // A
frase[frase.length - 1]; // a

// str.charAt(n)

// Retorna o caracter de acordo com o index de (n).

const linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t

// str.concat(str2, str3, ...)

// Concatena as strings e retorna o resultado.
const frase1 = 'A melhor linguagem é ';
const linguagem1 = 'JavaScript';

const fraseCompleta = frase.concat(linguagem, '!!');

// str.includes(search, position)

// Procura pela string exata dentro de outra string. A procura é case sensitive.

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false

// str.endsWith(search) e str.startsWith(search)

// Procura pela string exata dentro de outra string. A procura é case sensitive.

const fruta1 = 'Banana';

fruta1.endsWith('nana'); // true
fruta1.startsWith('Ba'); // true
fruta1.startsWith('na'); // false

// str.slice(start, end)

// Corta a string de acordo com os valores de start e end.

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

// str.substring(start, end)

// Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.

const linguagem2 = 'JavaScript';
linguagem2.substring(3, 5); // aS
linguagem2.substring(0, 4); // Java
linguagem2.substring(4); // Script
linguagem2.substring(-3); // JavaScript

// str.indexOf(search) e str.lastIndexOf(search)

// Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.indexOf('ta'); // 3

// str.padStart(n, str) e str.padEnd(n, str)

// Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99.....

// str.repeat(n)

// Repete a string (n) vezes.
const frase4 = 'Ta';

frase4.repeat(5); // TaTaTaTaTa

// str.replace(regexp|substr, newstr|function)

// Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

// str.split(padrao)

// Divide a string de acordo com o padrão passado e retorna uma array.

const listaItens1 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens1.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');

// str.trim(), str.trimStart(), str.trimEnd()

// Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   ';
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'
