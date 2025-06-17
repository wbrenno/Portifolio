// FUNCAOOO HOMEM TEXTO APARECENDO-----------------------------------------------------------------------------------------------------
const textobranco = "Olá, meu nome é ";
const textoverde = "Breno Brum";
const textojr = "Desenvolvedor Júnior| Full Stack";

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
//SCROLL SETA PARA BAIXOOO

document.querySelector('.scroll-down').addEventListener('click', () => {
  const elemento = document.getElementById('container-expertise');
  const offset = 200; // distância em px antes do topo do elemento que você quer parar
  const elementPosition = elemento.getBoundingClientRect().top + window.pageYOffset;
  const scrollToPosition = elementPosition - offset;

  window.scrollTo({
    top: scrollToPosition,
    behavior: 'smooth'
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
    if (revealTop < windowHeight - 150) {
      reveal.classList.add('active');
    } else {
      reveal.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); 

//BTN HOME APARECER

const alvo = document.querySelector("#container-expertise");
const btnSubida = document.querySelector(".btndivisubida");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            btnSubida.classList.add("mostrar");
        } else {
            btnSubida.classList.remove("mostrar");
        }
    });
}, {
    threshold: 0.3
});

observer.observe(alvo);