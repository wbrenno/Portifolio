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
      setTimeout(digitarverde, 80);
    }else{
        digitarjr();
    }
  }
    function digitarjr() {
    if (y < textojr.length) {
      jrEl.innerHTML += textojr.charAt(y);
      y++;
      setTimeout(digitarjr, 80);
    }
  }

  function digitarbranco() {
    if (i < textobranco.length) {
      brancoEl.innerHTML += textobranco.charAt(i);
      i++;
      setTimeout(digitarbranco, 80);
    } else{
      digitarverde();
    }
}


  digitarbranco(); // inicia tudo