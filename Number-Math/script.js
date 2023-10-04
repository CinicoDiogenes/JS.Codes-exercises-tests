console.log(Number.isNaN(NaN));
console.log(Number.isNaN(8));
console.log(Number.isInteger(8));
console.log(Number.isInteger(8.9));

console.log(Number.parseFloat('89.99')); //return string as Number Float
console.log(Number.parseFloat('100'));
console.log(Number.parseInt('99.89')); //return string as Number Inter
console.log(Number.parseInt('100'));
console.log(parseInt(4.5896651, 20));
console.log(Number.parseInt('98€', 10));

const numeroDoido = Number.parseInt('98 reais', 20);

const price = 49.99;
console.log(price.toFixed());

const pc = 7800.556;
console.log(pc.toFixed(2));

const price2 = 1499.49; // se esta abaixa de 50% o mesmo vai arredondar para baixo. A regra se aplica caso esteja acima de 50%, o mesmo arredondara para cima
console.log(+price2.toFixed() + 88.33);
console.log((99.99).toFixed(2));

let price3 = 2.99;
console.log(price3.toString(10));

let valor = 48.88;

const currencies = ['BRL', 'USD', 'EUR'];
const countries = ['pt-BR', 'en-US', 'es-CA'];

console.log(
  valor.toLocaleString(countries[0], {
    style: 'currency',
    currency: currencies[0],
  }),
);

console.log(Math.abs(3 - 6)); //take any negative value and trnasform it as a positive value
console.log(Math.ceil(8.4)); // sempre ira retornar o valor inteiro arredondado para cima
console.log(Math.floor(8.4)); //sempre ira retornar o valor inteiro arredondado para baixo
console.log(Math.round(8.5)); //arredodamento em estilo matematica tradional
console.log(Math.round(8.4)); //arredodamento em estilo matematica tradional
console.log(Math.max(5, 9, 7, 10, 88, 2, 20, 23232));
console.log(Math.min(5, 9, 7, 10, 88, 2, 20, 23232));
console.log(Math.random()); //retorna um valor aleatorio menor que 1 ou de casas decimais
console.log(Math.random() * 100); //retorna um valor aleatorio  até 100
console.log(Math.random() * 1000); //retorna um valor aleatorio até 1000. e assim por diante

const random = Math.floor(Math.random() * 11);
console.log(random);
// Formula para retornar numero aleatorio entre dois valor de mim e maximo

const min = 25;
const max = 50;

let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min; // o min no final nao permitira retornar um valor 0
console.log(aleatorio);
