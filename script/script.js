// FUNCAOOO HOMEM TEXTO APARECENDO-----------------------------------------------------------------------------------------------------
const textobranco = "Olá, me chamo ";
const textoverde = "Breno Brum";
const textojr = "Junior Developer";

  const brancoEl = document.querySelector('.branco');
  const verdeEl = document.querySelector('.verde');
  const jrEl = document.querySelector('.jr');

  let i = 0;
  let x = 0;
  let y = 0;
 
    function digitarverde() {
    if (x < textoverde.length) {
      verdeEl.innerHTML += textoverde.charAt(x);
      x++;
      setTimeout(digitarverde, 60);
    }else{
        digitarjr();
    }
  }
    function digitarjr() {
    if (y < textojr.length) {
      jrEl.innerHTML += textojr.charAt(y);
      y++;
      setTimeout(digitarjr, 60);
    }
  }

  function digitarbranco() {
    if (i < textobranco.length) {
      brancoEl.innerHTML += textobranco.charAt(i);
      i++;
      setTimeout(digitarbranco, 60);
    } else{
      digitarverde();
    }
}

const simbnome = document.querySelector('.code-simb');
simbnome.textContent = " </>";

  digitarbranco(); // inicia tudo

// FUNCAO TROCA DE IMG REDES SOSCIAIS-----------------------------------------------------------------------------------------------------

const links = document.querySelectorAll('.redes-sociais a');

links.forEach(link => {
  const imgStandard = link.querySelector('.standardjs');
  const imgHover = link.querySelector('.hoverjs');

  link.addEventListener('mouseenter', () => {
    imgStandard.style.display = 'none';
    imgHover.style.display = 'block';
  });

  link.addEventListener('mouseleave', () => {
    imgStandard.style.display = 'block';
    imgHover.style.display = 'none';
  });
});

// FUNCAO ADD CLASS .ATIVO-----------------------------------------------------------------------------------------------------
const toggles = document.querySelectorAll('#experiencia .toggle');

toggles.forEach(toggle => {
  const conteudo = toggle.querySelector('.conteudo');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('ativo'); // ativa/desativa a classe
    
    if (conteudo.style.display === 'none' || conteudo.style.display === '') {
      conteudo.style.display = 'block';
    } else {
      conteudo.style.display = 'none';
    }
  });
});