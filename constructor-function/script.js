function Carro(
  marcaAtribuida,
  precoAtribuida,
  portasAtribuida,
  eletricoAtribuida,
  automaticoAtribuida,
) {
  this.taxa = 1.5;
  this.precoInicial = precoAtribuida;
  this.marca = marcaAtribuida;
  this.precoFinal = precoAtribuida * this.taxa;
  this.portas = portasAtribuida;
  this.eletrico = eletricoAtribuida;
  this.automatico = automaticoAtribuida;
}

const bmw = new Carro('BMW', 50000, 4, true, true);
const fiat = new Carro('Fiat', 5000, 2, false, false);
const honda = new Carro('Honda', 220000, 4, true, true);

function Carro2(marcaAtrb, precoInicial) {
  // caso nao queremos que mostre o preco inicial e taxa dos mesmo, mas transformala em um constatnte ao inves de lhe atribuir um this.
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marcaAtrb;
  this.precoFinal = precoFinal;
  return (this.info =
    'O valor final consta com uma atribuição de taxa de 1.2% no valor incial');
}

const ford = new Carro2('Ford', 20000);
