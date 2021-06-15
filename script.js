
const imagemDaposicao1 = document.querySelector('#imagemDaposicao1');
const imagemDaposicao2 = document.querySelector('#imagemDaposicao2');
const imagemDaposicao3 = document.querySelector('#imagemDaposicao3');
const imagemDaposicao4 = document.querySelector('#imagemDaposicao4');

const nomeDopersonagem1 = document.querySelector('#nomeDopersonagem1');
const nomeDopersonagem2 = document.querySelector('#nomeDopersonagem2');
const nomeDopersonagem3 = document.querySelector('#nomeDopersonagem3');
const nomeDopersonagem4 = document.querySelector('#nomeDopersonagem4');


let numeroMaximodepersonagens = 671;

gerarValorAleatorio = () => {
  return Math.floor(Math.random() * numeroMaximodepersonagens);
}


pegarPersonagem1 = () => {
  let idPersonagem = gerarValorAleatorio();

  return fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`, {
    method: 'GET',
    headers: {
      Accept: 'application/jason',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagemDaposicao1.src = data.image;
    nomeDopersonagem1.innerHTML = data.name;
  });
}

pegarPersonagem2 = () => {
  let idPersonagem = gerarValorAleatorio();

  return fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`, {
    method: 'GET',
    headers: {
      Accept: 'application/jason',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagemDaposicao2.src = data.image;
    nomeDopersonagem2.innerHTML = data.name;
  });
}

pegarPersonagem3 = () => {
  let idPersonagem = gerarValorAleatorio();

  return fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`, {
    method: 'GET',
    headers: {
      Accept: 'application/jason',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagemDaposicao3.src = data.image;
    nomeDopersonagem3.innerHTML = data.name;
  });
}

pegarPersonagem4 = () => {
  let idPersonagem = gerarValorAleatorio();

  return fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`, {
    method: 'GET',
    headers: {
      Accept: 'application/jason',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagemDaposicao4.src = data.image;
    nomeDopersonagem4.innerHTML = data.name;
  });
}

os4personagens = () => {
  this.pegarPersonagem1 (); this.pegarPersonagem2 (); this.pegarPersonagem3 (); this.pegarPersonagem4 ();
}

window.onload = os4personagens();