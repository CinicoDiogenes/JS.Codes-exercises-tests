function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return this.nome + ' andou pelo objeto';
  };
}
const andre = new Pessoa('André', 34);

Pessoa.prototype.andar = function () {
  return this.nome + ' Pessoa andou';
};

const pais = 'Brasil';
const cidade = new String('Barcelona');

// transformando uma NodeList em Array para aproveitar uso de mais metodos e propriedades

const listas = document.querySelectorAll('li');

const listaAnimais = ['passaro', 'peixe', 'quadrupides'];

const listaArray = Array.prototype.slice.call(listas);
const bestLiArray = Array.from(listas);
// codigo transforma NodeLists em Arrays.

// O que importa é o valor que retorna. O valor q for retornado pela sua syntax, é o que da fato ela é. Exemplos:

const carro = {
  marca: 'BMW',
  preco: 80000,
  automatico: true,
};

console.log(typeof carro.marca);
console.log(typeof carro.preco);
console.log(typeof carro.automatico);

// No exemplo acima é mostrado o resultado de cada syntax, validando que é o resultado retornado que decide o tipo de cada linha. Dessa forma entedemos que o carro por ser um objeto e o que vem depois do ponto (.) é o que decidirá o tipo da mesma. Assim o valor retornado se valida na sentença completa e nunca jamas em base do elemento ''principal'' que nesse caso seria o ''carro''.
