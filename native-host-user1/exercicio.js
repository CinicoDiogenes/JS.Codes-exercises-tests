// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente taxa',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recibimentoTotal = 0;

transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$', '');
  if (item.descricao.slice(0, 4) === 'Taxa') {
    taxaTotal += numeroLimpo;
  } else {
    recibimentoTotal += numeroLimpo;
  }
});
console.log(taxaTotal);
console.log(recibimentoTotal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const arrayTransport = [transportes.replace(/[;]+/g, ' ,')];
console.log(arrayTransport);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const html1 = html.split('span').join('a');
console.log(html1);
// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = [
  'Taxa do Banco',
  '   TAXA DO PÃO',
  '  taxa do mercado',
  'depósito Bancário',
  'TARIFA especial',
];

tot = 0;
transacoes2.forEach((item) => {
  itenV = item.trim().toLowerCase().slice(0, 4);
  if (itenV === 'taxa') {
    tot++;
  }
});
console.log(tot);
