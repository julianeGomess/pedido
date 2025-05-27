function sim() {
  window.location.href = "yes.html";
}

const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * 300);
  const j = Math.floor(Math.random() * 300);
  botaoNao.style.position = "absolute";
  botaoNao.style.top = `${i}px`;
  botaoNao.style.left = `${j}px`;
});
