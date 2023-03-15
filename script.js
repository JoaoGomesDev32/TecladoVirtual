const entradaTexto = document.getElementById('text');
const tecladoVirtual = document.getElementById('tecladoVirtual');

const botoes = [  ['1','2','3','4','5','6','7','8','9','0','backspace'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l','ç'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm',',','.'],
  [ 'space', 'enter']
];

function criarBotoes() {
    for (let i = 0; i < botoes.length; i++) {
      const linha = document.createElement('div');
      linha.classList.add('linha');
  
      for (let j = 0; j < botoes[i].length; j++) {
        const botao = document.createElement('button');
        botao.innerHTML = botoes[i][j];
        botao.addEventListener('click', function() {
          adicionarTexto(botoes[i][j]);
        });
        linha.appendChild(botao);
      }
  
      tecladoVirtual.appendChild(linha);
    }
  }

  function adicionarTexto(valor) {
    if (valor === 'space') {
      valor = ' ';
    } else if (valor === 'backspace') {
      text.value = text.value.slice(0, -1);
      return;
    } else if (valor === 'enter') {
      text.value += '\n';
      return;
    }
  
    text.value += valor;
  }

  window.addEventListener('load', criarBotoes);

