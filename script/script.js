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
const conteudos = document.querySelectorAll('#experiencia .toggleconteudo');

toggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {

    const conteudo = conteudos[index];
    const isActive = conteudo.classList.contains('ativo');

    // Fecha todos os conteúdos
    conteudos.forEach(c => c.classList.remove('ativo'));

    // Remove classe ativo de todos os toggles
    toggles.forEach(t => t.classList.remove('ativo'));

    if (!isActive) {
      // Abre apenas o clicado
      conteudo.classList.add('ativo');
      toggle.classList.add('ativo');
    }
    // Se estava aberto, ele fecha automaticamente pois remove a classe
  });
});

// SCROLL ANIMATION

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;
    
    // Quando a seção estiver a 150px do final da viewport, ativa.
    if (revealTop < windowHeight - 200) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // já ativa se alguma estiver visível