let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/mester-of-chaos.jpeg') {
      minhaImagem.setAttribute ('src','images/mester-of-chaos2.jpg');
    } else {
      minhaImagem.setAttribute ('src','images/mester-of-chaos.jpeg');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
    let meuNome = prompt('Please, type your name');
    localStorage.setItem('name', meuNome);
    meuCabecalho.textContent = 'Welcome, ' + meuNome;
  }

  if(!localStorage.getItem('nome')) {
    defineNomeUsuario();
  } else {
    let nomeGuardado = localStorage.getItem('nome');
    meuCabecalho.textContent = 'Welcome, ' + nomeGuardado;
  }

  meuBotao.onclick = function() { defineNomeUsuario();
  }

  //tratando exceção
  function defineNomeUsuario() {
    let meuNome = prompt('Please, type your name');
    if(!meuNome || meuNome === null) {
      defineNomeUsuario();
    } else {
      localStorage.setItem('name', meuNome);
      meuCabecalho.innerHTML = 'Welcome, ' + meuNome;
    }
  }