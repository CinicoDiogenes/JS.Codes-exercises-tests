// Retorne um número aleatório
// entre 1050 e 2000
const min = 1050;
const max = 2000;
let random = Math.floor(Math.random() * (max - min + 1) + min);
console.log(random);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 28, 8, 9';
const arrayNum = numeros.split(', ');
const numeroMaximo = Math.max(...arrayNum); // os 3 pontos se chama spread operator
console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

// Minha Solução
tot = 0;
function limparPreco() {
  listaPrecos.forEach((item) => {
    const precoLimpo = item.trim().toLocaleLowerCase().replace('r$', '');
    const precoP = precoLimpo.replace(',', '.');
    const precoP2 = +precoP;
    console.log(precoP2);
    const numerosRedondos = Math.round(precoP2);
    tot += numerosRedondos;
  });
  console.log(tot);
}
limparPreco();

//Solução sugerido pelo professor
function limpaPrice(price) {
  price = +price.toUpperCase().replace('R$', '').trim().replace(',', '.');
  price = +price.toFixed(2);
  console.log(price);
}

let soma = 0;

listaPrecos.forEach((price) => {
  soma += limpaPrice(price);
});

const moeda = soma.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
console.log(moeda);
limpaPrice(listaPrecos[1]);
