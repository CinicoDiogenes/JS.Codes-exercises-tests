const carros0 = ['Ford', 'Fiat', 'Honda'];
carros0.forEach((item, index, array) => {
  // array[index] = 'teste'; iteração de mudança da AArray
  console.log(item, index, array);
});
const li = document.querySelectorAll('li');
li.forEach((i, index) => i.classList.add('ativa' + index));

// map() e forEach() são ambos metodos de iteração de arrays, NodeLista e HTMLelements. A diferença entre os dois é o fato de podermos guardar o map em uma variavel e o mesmo nao me retornar um valor undefined senao o proprio efeito do metodo. Lembrando que padrao de funcao para que retorne um valor, é declarando seu valor em ''return'' SIga o exemplo abaixo.
const carros = ['Ford', 'Fiat', 'Honda'];

const newArray = carros.map((item, index, array) => {
  return item.toUpperCase();
});
console.log((newArray[1] = 'Ferrari'));
console.log(newArray);
console.log(carros);
const numeros = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 5058];
const numerosX2 = numeros.map((n) => n * 2);
console.log(numerosX2);

const aulas = [
  { nome: 'HTML1', min: 15 },
  { nome: 'HTML2', min: 10 },
  { nome: 'CSS1', min: 20 },
  { nome: 'JS 1', min: 25 },
];
const tempoAulasNome = aulas.map((i) => i.nome + '-' + i.min + 'min');
console.log(tempoAulasNome);
//metodo function dentro de variavel nome aula
const nomeAulas = function (aula) {
  return aula.nome;
};
const arrayNomeAulas = aulas.map(nomeAulas);
//metodo function dentro de variavel nome aula
const minAula = function (min) {
  return min.min;
};
const arrayMinAulas = aulas.map(minAula);
console.log(arrayNomeAulas);
console.log(arrayMinAulas);

const cars = [
  {
    brand: 'BMW',
    color: 'Balck',
  },
  {
    brand: 'Ferrari',
    color: 'Red',
  },
  {
    brand: 'Ford',
    color: 'Brown',
  },
];

const brandName = function (car) {
  return car.brand;
};
const arrayCarBrand = cars.map(brandName);
console.log(arrayCarBrand);

const arrayColor = cars.map((c) => c.color);
console.log(arrayColor);

const algarismos = [10, 13, 19];
const reduceAlgarismos = algarismos.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item);
  return acumulador + item;
}, 0); // se nao passarmos esse valor inicial que no caso eh o '0zero', ele vai pular a primeira iteração, e realizando o acumulo ou soma a partir da segunda iteraçao do array, que no caso seria na posição 1 do array, e assim por diante.
console.log(reduceAlgarismos);

const numeros2 = [10, 25, 30, 3, 54, 33, 39];
const maiorNum = numeros2.reduce(
  (anterior, atual) => (anterior > atual ? anterior : atual),
  0,
);
console.log(maiorNum);

const aulas2 = [
  { nome: 'Python', min: 20 },
  { nome: 'PHP', min: 18 },
  { nome: 'JAVA', min: 27 },
  { nome: 'MySql', min: 21 },
  { nome: 'Django', min: 17 },
];
const listaAulas = aulas2.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {});
const listaMinutos = aulas2.reduce((acumulador, tempo, index) => {
  acumulador[index] = tempo.min;
  return acumulador;
}, {});
console.log(listaAulas);
console.log(listaMinutos);

// O metodo reduce pode retornar nao so valores numericos como tbm valores objetos
