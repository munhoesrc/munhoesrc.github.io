// Efeito máquina de escrever no topo da page
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 120 * i);
  });
}

const titulo = document.querySelector('.navbar-brand');
typeWriter(titulo);

// Botão back to top
let mybutton = document.getElementById("btn-back-to-top");

// Quando o usuário rolar para baixo 20px da parte superior do documento, mostre o botão
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Quando o usuário clicar no botão, role até o topo do documento
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
