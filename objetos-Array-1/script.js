const instrumentos = [
  'Guitarra',
  'Baixo',
  'Bateria',
  'Microfone',
  'Saxofone',
  'Violão',
];
const precos = [59, 89, 69, 29, 109, , 49, 103];

const dados = [
  new String('Tipo 1'),
  ['Carro', 'Portas', { cor: 'Verde', preco: 2500 }],
  function andar(nome) {
    console.log(nome);
  },
];
console.log(dados[0][5]); // Acesso de Array dentro de array
console.log(dados[2]('André Felipe')); //Acessando uma função dentro do objeto e em seguida ativando-a mediante parenteses + paramentro
console.log(dados[1][2].cor); // Acessando a segunda cadeia de Array dentro de dados > acessando o objeto dentro da array > acessando a propriedad cor dentro do objeto

let carros = ['Honda', 'Chevrolet', 'VolksWagen', 'Fiat', 'BMW'];
carros[1] = 'Ferrari'; //Substitui 'Chevrolet' por 'Ferrari'
carros[5] = 'Mustang'; //Adicionou 'Mustang' na posição 5
carros[15] = 'Chevrolet'; //Adicionou 'Chevrolet? na posição 15, e criou 9 vazios  entre a posição 5 a 15
console.log(carros);
console.log(carros.length);

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li); // transformando aquilo que parece uma Array (como un NodeList) em um vdd Array.

const objNome = {
  0: 'André',
  1: 'Felipe',
  2: 'Oliveira',
  3: 'Costa',
  length: 5, // Essa propreidade permite que o objeto seja convertido em uma Array mediante o metodo from(). Sem especificar o length, será feito uma array vazio. Ps: O objeto contém 4 propriedades, e nao 5. O feito de declarar 5 te retornar a ultima posiçao da cadeia como undefined
};
const objNameArray = Array.from(objNome);
console.log(Array.isArray(objNameArray));
console.log(Array.isArray(li));

const arrayDez = Array.of(10);
const arrayPlus = Array.of(10, 11, 12, 3, 'ouro');
const arrayNovo = new Array('ei', 'oi', 'olá');
const arrayCinco = new Array(5);

const frutas = ['Banana', 'Uva', ['Pêra', 'Uva verde']];
console.log(frutas[0].length); //acessando posiçao 0 e retornando o lenth da posiçao 0. // 6 pois Banana tem 6 caracteres
console.log(frutas[2][1].length); // acesso a posição 2, subacesso a posição 1 da 2, retorna o lengt de Uva verde
console.log(frutas.length); // retornando a quantidade de posiço€s dentro do Array frutas

if (frutas[2][1].length === 9) {
  console.log('funcionou!');
} else {
  console.log('Estude mais');
}

// METODOS MODIFICADORES

const alfabeto = ['z', 'x', 'n', 'l', 'u', 'k', 'j', 'u'];
const numSequncia = [81, 13, 62, 19, 42, 78, 13, 12];
const numSequncia2 = [32, 21, 33, 43, 1, 12, 8];
alfabeto.sort();
console.log(alfabeto);
console.log(numSequncia.sort());
console.log(numSequncia2.sort()); // sort() para nuemros eh analisado caracteres por vez. Assim a ordem será tbm respeitada para os segundos algarismos.

const legumes = ['batata', 'beterraba', 'pepino', 'nabo'];
legumes.unshift('mandioca', 'cenoura'); // incremento na primeira posição da cadeia, e retornar todos elementos dentro do Array

const newArray = legumes.push('Cará', 'Quiabo');
console.log(newArray); // aqui sera retornardo a quantidade de itens no Array, e nao sua listagem
console.log(legumes); // Neste caso é retornado a lista completa com seus valores

console.log(legumes.pop()); // removeu a ultima e retornou
console.log(legumes); // retornado com o ultimo valor removido
console.log(legumes.shift()); // mesmo efeito que o pop porem para o primeiro da lista
console.log(legumes); // return without mandioca

const reverso = legumes.reverse();
console.log(reverso);
console.log(legumes);

const corpoHumano = ['cabeça', 'pernas', 'nariz', 'boca', 'braços', 'cerebro'];
corpoHumano.splice(2, 2, 'orelhas', 'olhos'); // adicionou os valores a partir da posiçao do primeiro valor, o segundo valor seria a quantidade que pedimos para remover.
console.log(corpoHumano);

const arrayItem = ['item1', 'item2', 'item3', 'item4', 'item5'];
const newItem = arrayItem.copyWithin(1, 0, 3); //Copias dentro da array a partir do item 1, de 0 a 3. Kind of Complex
console.log(newItem);
const newItem1 = arrayItem.copyWithin(-1);
console.log(newItem1);
const fulfill = arrayItem.fill('item6', 0, 2); // preenche a array ccom o valor declarado.
console.log(fulfill);

// Metodos de acesso
const transporte1 = ['Avião', 'Trem', 'Navio'];
const transporte2 = ['Carro', 'Moto', 'Bike'];
const transporte3 = ['Metro', 'Ônibus', 'bonde'];
const transportes = transporte1.concat(transporte2);
console.log(transportes);
const maisTransportes = [].concat(transporte1, transporte2, 'Disco voador');
console.log(maisTransportes);
todosTransportes = transporte3.concat(maisTransportes);
console.log(todosTransportes);

const techSkills = ['html', 'css', 'python', 'java', 'php', 'js'];
console.log(techSkills.includes('java'));
console.log(techSkills.includes('mysql'));
console.log(techSkills.indexOf('python'));
console.log(techSkills.lastIndexOf('js'));
console.log(techSkills.slice(2, 5));
console.log(techSkills.slice(0));
console.log(techSkills.slice(3, 4));
let htmlTitle = '<h2>Titulo principal</h2>';
htmlTitle = htmlTitle.split('h2');
htmlTitle = htmlTitle.join('h1');
console.log(htmlTitle);
// Tecnica para clonar Array
const cloneSkills = techSkills.slice(); //sem o slice o [] nao eh clonado. Faça o teste tirando o slice e veja o resultado retornado no cloneSkills. O mesmo retornara sem o ultimo valor 'js'
console.log(techSkills.pop());
console.log(cloneSkills);
