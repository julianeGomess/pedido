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

function final() {
  // Aqui você pode colocar qualquer mensagem final se quiser
  startFireworks();
}

function startFireworks() {
  const canvas = document.getElementById('fireworksCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  function createParticle(x, y, color) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5 + 2;
    return {
      x,
      y,
      color,
      radius: Math.random() * 3 + 1,
      dx: Math.cos(angle) * speed,
      dy: Math.sin(angle) * speed,
      alpha: 1
    };
  }

  function explode(x, y) {
    const colors = ['#ff5050', '#ffd700', '#00ccff', '#ff66cc', '#66ff66'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle(x, y, color));
    }
  }

  function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;
      p.dy += 0.05; // gravidade
      p.alpha -= 0.01;
      if (p.alpha <= 0) particles.splice(i, 1);
      else {
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
    });
  }

  function loop() {
    updateParticles();
    requestAnimationFrame(loop);
  }

  // Explode fogos aleatórios por 3 segundos
  let duration = 3000;
  const interval = setInterval(() => {
    explode(Math.random() * canvas.width, Math.random() * canvas.height);
  }, 300);

  setTimeout(() => clearInterval(interval), duration);

  loop();
}
