//Parecer os elementos da Página
const myOberver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");
      entry.target.classList.add("show");
      return;
    }
  });
});
const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => {
  myOberver.observe(element);
});

// Botão Dark Mode
const btnDarkMode = document.querySelector('.btnDarkMode');
const all = document.querySelectorAll('*');
btnDarkMode.addEventListener('click', () => {
    all.forEach(element => {
        element.classList.toggle('darkMode');
    });
    btnDarkMode.classList.toggle('active');
});

const btnDarkModeResponsivo = document.querySelector(".btnDarkModeResponsivo");

btnDarkModeResponsivo.addEventListener('click', () => {
    all.forEach(element => {
        element.classList.toggle('darkMode');
    });
});

// Botão de Dispositivos não ha disponibilidade

const container = document.querySelector(".container");

function verificarTamanho() {
  const larguraTotal = window.innerWidth;
  const btnScrollTop = document.querySelector(".btnScrollTop");
  const mensagem = document.querySelector(".mensagem");
  if (larguraTotal <= 190) {
    container.classList.add("desligar");
    btnScrollTop.classList.add("desligar");
    mensagem.innerText = "Para esse dispositivos não ha disponibilidade";
    mensagem.style.fontSize = "20px";
  } else {
    container.classList.remove("desligar");
  }
}
window.addEventListener("resize", verificarTamanho);
verificarTamanho();
