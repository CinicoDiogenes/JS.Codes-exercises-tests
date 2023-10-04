// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  };
}
// const filho1 = new Pessoa('Bruno', 46);
// const filho2 = new Pessoa('Vitor', 42);
// const filho3 = new Pessoa('Thiago', 41);
// const filha4 = new Pessoa('Vanessa', 39);
// const filho5 = new Pessoa('André', 34);
// const filha6 = new Pessoa('Flávia', 32);
// console.log(filho1);
// console.log(filho2);
// console.log(filho3);
// console.log(filha4);
// console.log(filho5);
// console.log(filha6);
// filho5.andar();
// filho2.andar();
// filho3.andar();
// filha4.andar();
// filha6.andar();
// filho1.andar();

// Create a Constructor Function (Dom) to manipulate
// DOM elements lists. Should have propeties and methods:
//
// elements, return a NodeList with selected elements
// addClass(class), add a classe to all elements
// removeClass(class), removeclass to all of them.

function Dom(selector) {
  const elementList = document.querySelectorAll(selector);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}
const listItens = new Dom('li');
listItens.addClass('green');
listItens.addClass('red');
listItens.removeClass('red');
