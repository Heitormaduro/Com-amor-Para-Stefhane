/* ============================================================
   Para você, Stefhane — interações e animações
   ============================================================ */

/* =================== ⚙️  AJUSTE AQUI  =====================
   Tudo que você provavelmente vai querer mudar está nesse bloco.
   ========================================================== */
const CONFIG = {
  // 📅 Data e hora (aproximada) da PRIMEIRA mensagem que você mandou pra ela.
  //    Formato: 'ANO-MÊS-DIA HH:MM'. Estimado pelo foguinho do TikTok (188 dias
  //    + ~1 semana). Se souber a data certa, é só trocar aqui.
  primeiraMensagem: '2025-11-13 20:00',

  // 🎵 Música de fundo? Coloque o arquivo em site/musica.mp3 (já está ativado).
  temMusica: true,

  // 📸 Suas fotos. Coloque os arquivos na pasta site/fotos/ e liste aqui.
  //    'legenda' é o textinho fofo que aparece ao passar o mouse.
  //    Pode adicionar/remover quantas quiser.
  fotos: [
    { arquivo: 'fotos/foto1.jpg', legenda: 'Aqui começou tudo. 💕' },
    { arquivo: 'fotos/foto2.jpg', legenda: 'Sua gargalhada é meu som favorito.' },
    { arquivo: 'fotos/foto3.jpg', legenda: 'Eu nem precisei pensar pra te amar.' },
    { arquivo: 'fotos/foto4.jpg', legenda: 'Com você o dia fica leve.' },
    { arquivo: 'fotos/foto5.jpg', legenda: 'Minha pessoa preferida.' },
    { arquivo: 'fotos/foto6.jpg', legenda: 'E isso é só o começo.' },
  ],

  // ✍️ A frase que "digita sozinha" na seção da história (typewriter).
  fraseTypewriter: 'pode contar sempre comigo, eu vou estar com você!!!',
};
/* ====================== fim dos ajustes ===================== */


const semMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ehTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

/* ---------- 1. Abertura (toque pra abrir) ------------------ */
(function abertura() {
  const tela = document.getElementById('abertura');
  const botao = document.getElementById('botaoAbrir');
  if (!tela || !botao) return;

  document.body.classList.add('travado');

  function abrir() {
    document.body.classList.remove('travado');
    tela.classList.add('fechando');
    setTimeout(() => tela.remove(), 1100);
    chuvaDeCoracoes(28);          // explosão de coraçõezinhos ao abrir
    iniciarReveal();              // começa a observar os reveals
    if (CONFIG.temMusica) tentarTocarMusica();
  }

  botao.addEventListener('click', abrir);
  botao.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
  });
})();

/* ---------- 2. Cursor customizado (desktop) ---------------- */
(function cursorCustom() {
  if (ehTouch || semMovimento) return;
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;

  addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; });

  (function loop() {
    cx += (x - cx) * 0.18;
    cy += (y - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();

  // aumenta sobre coisas clicáveis
  const alvos = 'a, button, .foto, .card, [role="button"]';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(alvos)) cursor.classList.add('ativo');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(alvos)) cursor.classList.remove('ativo');
  });
})();

/* ---------- 3. Pétalas caindo (canvas) --------------------- */
(function petalas() {
  if (semMovimento) return;
  const canvas = document.getElementById('petalas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particulas = [];
  const cores = ['#E63956', '#ff7a98', '#ffb6c9', '#ff4d6d', '#ffc2d1'];

  function tamanho() { w = canvas.width = innerWidth; h = canvas.height = innerHeight; }
  tamanho();
  addEventListener('resize', tamanho);

  const QTD = innerWidth < 600 ? 16 : 34;
  for (let i = 0; i < QTD; i++) particulas.push(nova(true));

  function nova(inicio) {
    return {
      x: Math.random() * w,
      y: inicio ? Math.random() * h : -20,
      r: 5 + Math.random() * 8,
      vy: 0.6 + Math.random() * 1.4,
      vx: -0.6 + Math.random() * 1.2,
      giro: Math.random() * Math.PI * 2,
      vGiro: -0.03 + Math.random() * 0.06,
      cor: cores[(Math.random() * cores.length) | 0],
      alpha: 0.5 + Math.random() * 0.4,
    };
  }

  function petala(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.giro);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.cor;
    ctx.beginPath();
    // forma de pétala (duas curvas)
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(p.r, -p.r, p.r, p.r, 0, p.r * 1.6);
    ctx.bezierCurveTo(-p.r, p.r, -p.r, -p.r, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  (function loop() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particulas) {
      p.y += p.vy; p.x += p.vx; p.giro += p.vGiro;
      if (p.y > h + 20) Object.assign(p, nova(false));
      petala(p);
    }
    requestAnimationFrame(loop);
  })();
})();

/* ---------- 4. Reveal no scroll (IntersectionObserver) ----- */
function iniciarReveal() {
  const itens = document.querySelectorAll('.reveal');
  if (semMovimento) { itens.forEach((i) => i.classList.add('visivel')); return; }

  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.15 });

  itens.forEach((i) => obs.observe(i));
}
// o hero aparece mesmo antes de "abrir" — observado já:
document.addEventListener('DOMContentLoaded', () => {
  // garante que se a abertura for removida cedo, os reveals do hero ativem
  setTimeout(iniciarReveal, 50);
});

/* ---------- 5. Parallax leve no hero ----------------------- */
(function parallax() {
  if (semMovimento) return;
  const els = document.querySelectorAll('[data-parallax]');
  if (!els.length) return;
  addEventListener('scroll', () => {
    const y = scrollY;
    els.forEach((el) => {
      const f = parseFloat(el.dataset.parallax) || 0.2;
      el.style.transform = `translateY(${y * f}px)`;
    });
  }, { passive: true });
})();

/* ---------- 6. Typewriter ---------------------------------- */
(function typewriter() {
  const alvo = document.getElementById('typewriter');
  if (!alvo) return;
  const texto = CONFIG.fraseTypewriter;

  if (semMovimento) { alvo.textContent = texto; return; }

  const secao = document.getElementById('historia');
  let comecou = false;
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting && !comecou) { comecou = true; digitar(); }
    });
  }, { threshold: 0.4 });
  if (secao) obs.observe(secao);

  function digitar() {
    let i = 0;
    (function passo() {
      if (i <= texto.length) {
        alvo.textContent = texto.slice(0, i);
        i++;
        setTimeout(passo, 55);
      }
    })();
  }
})();

/* ---------- 7. Contador ao vivo ---------------------------- */
(function contador() {
  const caixa = document.getElementById('contadorTempo');
  if (!caixa) return;
  const inicio = new Date(CONFIG.primeiraMensagem.replace(' ', 'T'));
  if (isNaN(inicio)) return;

  const campos = {
    dias: caixa.querySelector('[data-unit="dias"]'),
    horas: caixa.querySelector('[data-unit="horas"]'),
    minutos: caixa.querySelector('[data-unit="minutos"]'),
    segundos: caixa.querySelector('[data-unit="segundos"]'),
  };

  function tick() {
    let diff = Math.max(0, Date.now() - inicio.getTime()) / 1000;
    const dias = Math.floor(diff / 86400); diff -= dias * 86400;
    const horas = Math.floor(diff / 3600); diff -= horas * 3600;
    const minutos = Math.floor(diff / 60);
    const segundos = Math.floor(diff - minutos * 60);
    campos.dias.textContent = dias;
    campos.horas.textContent = String(horas).padStart(2, '0');
    campos.minutos.textContent = String(minutos).padStart(2, '0');
    campos.segundos.textContent = String(segundos).padStart(2, '0');
  }
  tick();
  setInterval(tick, 1000);
})();

/* ---------- 8. Galeria (monta + tilt 3D + lightbox) -------- */
(function galeria() {
  const grid = document.getElementById('gridGaleria');
  if (!grid) return;

  CONFIG.fotos.forEach((f) => {
    const fig = document.createElement('figure');
    fig.className = 'foto';

    const img = new Image();
    img.src = f.arquivo;
    img.alt = f.legenda || 'foto do casal';
    img.loading = 'lazy';

    const legenda = document.createElement('figcaption');
    legenda.className = 'foto__legenda';
    legenda.textContent = f.legenda || '';

    // se a imagem não existir ainda, mostra placeholder bonito
    img.onerror = () => {
      fig.classList.add('foto--vazia');
      fig.innerHTML = `<div class="foto__placeholder">
        <span>🌷</span>
        <strong>foto aqui</strong><br />
        <small>${f.arquivo}</small>
      </div>`;
    };

    fig.appendChild(img);
    fig.appendChild(legenda);
    grid.appendChild(fig);

    // tilt 3D no hover (desktop)
    if (!ehTouch && !semMovimento) {
      fig.addEventListener('mousemove', (e) => {
        const r = fig.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        fig.style.transform = `perspective(700px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg) scale(1.03)`;
      });
      fig.addEventListener('mouseleave', () => { fig.style.transform = ''; });
    }

    // lightbox ao clicar (só se tiver imagem real)
    fig.addEventListener('click', () => {
      if (fig.classList.contains('foto--vazia')) return;
      abrirLightbox(f.arquivo, f.legenda);
    });
  });
})();

function abrirLightbox(src, legenda) {
  const box = document.createElement('div');
  box.style.cssText = `position:fixed;inset:0;z-index:11000;display:grid;place-items:center;
    background:rgba(92,26,43,.82);cursor:pointer;padding:24px;opacity:0;transition:opacity .3s;`;
  box.innerHTML = `
    <div style="max-width:90vw;max-height:88vh;text-align:center;transform:scale(.9);transition:transform .35s">
      <img src="${src}" style="max-width:100%;max-height:80vh;border-radius:18px;box-shadow:0 30px 70px rgba(0,0,0,.4)" />
      <p style="color:#fff;font-family:'Dancing Script',cursive;font-size:1.6rem;margin-top:14px">${legenda || ''}</p>
    </div>`;
  document.body.appendChild(box);
  requestAnimationFrame(() => {
    box.style.opacity = '1';
    box.firstElementChild.style.transform = 'scale(1)';
  });
  box.addEventListener('click', () => {
    box.style.opacity = '0';
    setTimeout(() => box.remove(), 300);
  });
}

/* ---------- 9. Música ------------------------------------- */
function tentarTocarMusica() {
  const audio = document.getElementById('audioFundo');
  const botao = document.getElementById('botaoMusica');
  if (!audio || !botao) return;
  audio.volume = 0.45;
  audio.play().then(() => botao.classList.add('tocando')).catch(() => {});
}
(function musica() {
  const audio = document.getElementById('audioFundo');
  const botao = document.getElementById('botaoMusica');
  if (!botao) return;
  if (!CONFIG.temMusica) { botao.style.display = 'none'; return; }

  botao.addEventListener('click', () => {
    if (audio.paused) { audio.play(); botao.classList.add('tocando'); }
    else { audio.pause(); botao.classList.remove('tocando'); }
  });
})();

/* ---------- 10. Coraçõezinhos: clique + botão final -------- */
function chuvaDeCoracoes(qtd = 18, origemX, origemY) {
  if (semMovimento) return;
  const emojis = ['💕', '💗', '❤️', '🌷', '💖'];
  for (let i = 0; i < qtd; i++) {
    const c = document.createElement('span');
    c.className = 'coracao-flutua';
    c.textContent = emojis[(Math.random() * emojis.length) | 0];
    const x = origemX ?? Math.random() * innerWidth;
    const y = origemY ?? innerHeight * 0.6;
    c.style.left = x + 'px';
    c.style.top = y + 'px';
    document.body.appendChild(c);

    const dx = (-0.5 + Math.random()) * 260;
    const dy = -(120 + Math.random() * 320);
    const rot = (-0.5 + Math.random()) * 90;
    c.animate([
      { transform: 'translate(0,0) rotate(0) scale(1)', opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px) rotate(${rot}deg) scale(1.5)`, opacity: 0 },
    ], { duration: 1400 + Math.random() * 800, easing: 'cubic-bezier(.2,.7,.2,1)' })
      .onfinish = () => c.remove();
  }
}

// clique em qualquer lugar solta um coraçãozinho (delícia de detalhe)
addEventListener('click', (e) => {
  if (e.target.closest('#botaoAbrir, #botaoConfete, .foto, .musica')) return;
  if (semMovimento) return;
  chuvaDeCoracoes(1, e.clientX, e.clientY);
});

// botão "tem mais uma coisa…" → revela assinatura + festa de corações
(function final() {
  const botao = document.getElementById('botaoConfete');
  const assinatura = document.getElementById('assinatura');
  if (!botao) return;
  botao.addEventListener('click', () => {
    chuvaDeCoracoes(40);
    if (assinatura) assinatura.hidden = false;
    botao.style.display = 'none';
  });
})();

/* ---------- 11. Ano no rodapé ------------------------------ */
document.getElementById('ano') && (document.getElementById('ano').textContent = new Date().getFullYear());
