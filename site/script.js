/* ============================================================
   Para você, Stefhane — interações e animações (GSAP)
   ============================================================ */

/* =================== ⚙️  AJUSTE AQUI  =====================
   Tudo que você provavelmente vai querer mudar está nesse bloco.
   ========================================================== */
const CONFIG = {
  // 📅 Primeira mensagem (estimado pelo foguinho do TikTok). Troque se souber a data certa.
  primeiraMensagem: '2025-11-13 20:00',

  // 🎵 Música: coloque o arquivo em site/musica.mp3 (já ativado).
  temMusica: true,

  // 📸 Fotos: jogue os arquivos em site/fotos/ e liste aqui (nome + legenda fofa).
  fotos: [
    { arquivo: 'fotos/foto1.jpg', legenda: 'Aqui começou tudo. 💕' },
    { arquivo: 'fotos/foto2.jpg', legenda: 'Sua gargalhada é meu som favorito.' },
    { arquivo: 'fotos/foto3.jpg', legenda: 'Eu nem precisei pensar pra te amar.' },
    { arquivo: 'fotos/foto4.jpg', legenda: 'Com você o dia fica leve.' },
    { arquivo: 'fotos/foto5.jpg', legenda: 'Minha pessoa preferida.' },
    { arquivo: 'fotos/foto6.jpg', legenda: 'E isso é só o começo.' },
  ],

  // ✍️ Frase que "digita sozinha" na seção da história.
  fraseTypewriter: 'pode contar sempre comigo, eu vou estar com você!!!',
};
/* ====================== fim dos ajustes ===================== */

const semMov  = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ehTouch = matchMedia('(hover: none), (pointer: coarse)').matches;
const temGsap = typeof window.gsap !== 'undefined';

if (temGsap && !semMov && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

// Se o GSAP não carregou (offline, etc.), mostra tudo (sem depender de animação)
if (!temGsap) document.documentElement.classList.remove('anim');

/* ---------- 1. Abertura (explode → cobre a tela → cai) ----- */
(function abertura() {
  const tela = document.getElementById('abertura');
  const botao = document.getElementById('botaoAbrir');
  if (!tela || !botao) return;
  document.body.style.overflow = 'hidden';
  let abrindo = false;

  function finalizar() {
    document.body.style.overflow = '';
    introHero();
    if (CONFIG.temMusica) tentarTocarMusica();
  }

  // fallback (sem GSAP ou "menos movimento"): fade simples
  function abrirSimples() {
    tela.classList.add('fechando');
    setTimeout(() => tela.remove(), 1100);
    chuvaDeCoracoes(24);
    finalizar();
  }

  function abrir() {
    if (abrindo) return; abrindo = true;
    if (!temGsap || semMov) { abrirSimples(); return; }

    const r = botao.getBoundingClientRect();
    const ox = r.left + r.width / 2;
    const oy = r.top + r.height / 2;
    botao.style.animation = 'none'; // desliga o "bater" pra o GSAP controlar o transform

    // camada que vai cobrir a tela de corações
    const layer = document.createElement('div');
    layer.className = 'explosao';
    document.body.appendChild(layer);

    const cols = innerWidth < 600 ? 6 : 12;
    const cell = innerWidth / cols;
    const rows = Math.ceil(innerHeight / cell) + 1;
    const emojis = ['💗', '❤️', '💕', '💖', '🌹', '💝'];
    const hearts = [];
    for (let ry = 0; ry < rows; ry++) {
      for (let cx = 0; cx < cols; cx++) {
        const h = document.createElement('span');
        h.className = 'exp-coracao';
        h.textContent = emojis[(Math.random() * emojis.length) | 0];
        h.style.fontSize = (cell * (0.95 + Math.random() * 0.45)) + 'px';
        h._tx = cx * cell + cell / 2 + (Math.random() * 30 - 15);
        h._ty = ry * cell + cell / 2 + (Math.random() * 30 - 15);
        // todos começam no centro (de onde o coração "explode"), invisíveis
        gsap.set(h, { x: ox, y: oy, xPercent: -50, yPercent: -50, scale: 0, opacity: 1, rotation: Math.random() * 180 - 90 });
        layer.appendChild(h);
        hearts.push(h);
      }
    }

    const tl = gsap.timeline();
    // 1) carrega e explode o coração central
    tl.to(botao, { scale: 1.4, duration: 0.2, ease: 'power2.in' })
      .to(botao, { scale: 0, opacity: 0, duration: 0.22, ease: 'power2.in' });
    // estourinho radial extra a partir do centro
    tl.add(() => chuvaDeCoracoes(30, ox, oy), '-=0.12');
    // 2) os corações se espalham e COBREM a tela
    tl.to(hearts, {
      x: (i, t) => t._tx, y: (i, t) => t._ty, scale: 1,
      duration: 0.5, ease: 'back.out(1.4)',
      stagger: { amount: 0.4, from: 'center', grid: [rows, cols] },
    }, '-=0.05');
    // 3) some o fundo da abertura (revela o site atrás) e o site começa a animar
    tl.to(tela, {
      opacity: 0, duration: 0.45, ease: 'power2.out',
      onComplete: () => { tela.remove(); finalizar(); },
    }, '-=0.15');
    // 4) os corações CAEM (gravidade), revelando o site bonito atrás
    tl.to(hearts, {
      y: '+=' + (innerHeight + 240),
      x: (i, t) => t._tx + (Math.random() * 180 - 90),
      rotation: '+=140',
      duration: 1.35, ease: 'power1.in',
      stagger: { amount: 0.7, from: 'random' },
    }, '+=0.05')
      .add(() => layer.remove());
  }

  botao.addEventListener('click', abrir);
  botao.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
  });
})();

/* ---------- 2. Animações de entrada (GSAP) ----------------- */
function introHero() {
  if (!temGsap || semMov) return;
  const heroAnims = gsap.utils.toArray('#hero [data-anim]');
  gsap.set(heroAnims, { y: 40 });
  gsap.to(heroAnims, { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out' });
  gsap.from('#heroArte .arte__buque', { scale: 0.4, opacity: 0, duration: 1.2, ease: 'back.out(1.6)', delay: 0.2 });
  gsap.from('#heroArte .arte__coracao', { scale: 0, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(2)', delay: 0.5 });
}

function revealsNoScroll() {
  const todos = gsap.utils.toArray('[data-anim]');
  const fora = todos.filter((el) => !el.closest('#hero')); // hero anima na abertura
  if (semMov || !temGsap || !window.ScrollTrigger) {
    document.documentElement.classList.remove('anim');
    return;
  }
  gsap.set(fora, { y: 40 });
  ScrollTrigger.batch(fora, {
    start: 'top 88%',
    onEnter: (lote) => gsap.to(lote, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }),
  });
}
document.addEventListener('DOMContentLoaded', revealsNoScroll);

/* ---------- 3. Header (sólido no scroll) + menu mobile ----- */
(function header() {
  const head = document.getElementById('header');
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (head) {
    const onScroll = () => head.classList.toggle('solido', scrollY > 30);
    onScroll(); addEventListener('scroll', onScroll, { passive: true });
  }
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('aberto'));
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('aberto')));
  }
})();

/* ---------- 4. Cursor com brilho --------------------------- */
(function cursor() {
  if (ehTouch || semMov) return;
  const ponto = document.getElementById('cursor');
  const glow = document.getElementById('cursorGlow');
  if (!ponto || !glow) return;
  let x = innerWidth / 2, y = innerHeight / 2, gx = x, gy = y;
  addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY;
    ponto.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`; });
  (function loop() {
    gx += (x - gx) * 0.16; gy += (y - gy) * 0.16;
    glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  })();
  const alvos = 'a, button, .foto, .card, [role="button"], .magnetic';
  document.addEventListener('mouseover', (e) => { if (e.target.closest(alvos)) { ponto.classList.add('ativo'); glow.classList.add('ativo'); } });
  document.addEventListener('mouseout', (e) => { if (e.target.closest(alvos)) { ponto.classList.remove('ativo'); glow.classList.remove('ativo'); } });
})();

/* ---------- 5. Pétalas/corações caindo (canvas) ------------ */
(function petalas() {
  if (semMov) return;
  const canvas = document.getElementById('petalas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, ps = [];
  const cores = ['#ff4d6d', '#ff8fa3', '#c9184a', '#ff6b88', '#ffb3c1'];
  const tam = () => { w = canvas.width = innerWidth; h = canvas.height = innerHeight; };
  tam(); addEventListener('resize', tam);
  const QTD = innerWidth < 600 ? 14 : 30;
  for (let i = 0; i < QTD; i++) ps.push(nova(true));
  function nova(ini) {
    return { x: Math.random()*w, y: ini ? Math.random()*h : -20, r: 4+Math.random()*7,
      vy: .5+Math.random()*1.3, vx: -.5+Math.random(), giro: Math.random()*6.28,
      vg: -.03+Math.random()*.06, cor: cores[(Math.random()*cores.length)|0], a: .35+Math.random()*.4 };
  }
  function petala(p) {
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.giro); ctx.globalAlpha = p.a; ctx.fillStyle = p.cor;
    ctx.beginPath(); ctx.moveTo(0,0);
    ctx.bezierCurveTo(p.r,-p.r,p.r,p.r,0,p.r*1.6); ctx.bezierCurveTo(-p.r,p.r,-p.r,-p.r,0,0);
    ctx.fill(); ctx.restore();
  }
  (function loop() {
    ctx.clearRect(0,0,w,h);
    for (const p of ps) { p.y+=p.vy; p.x+=p.vx; p.giro+=p.vg; if (p.y>h+20) Object.assign(p, nova(false)); petala(p); }
    requestAnimationFrame(loop);
  })();
})();

/* ---------- 6. Parallax/tilt da arte no mouse -------------- */
(function parallaxHero() {
  if (ehTouch || semMov || !temGsap) return;
  const arte = document.getElementById('heroArte');
  if (!arte) return;
  const setX = gsap.quickTo(arte, 'rotationY', { duration: 0.6, ease: 'power3' });
  const setY = gsap.quickTo(arte, 'rotationX', { duration: 0.6, ease: 'power3' });
  gsap.set(arte, { transformPerspective: 900, transformOrigin: 'center' });
  addEventListener('mousemove', (e) => {
    const px = e.clientX / innerWidth - 0.5;
    const py = e.clientY / innerHeight - 0.5;
    setX(px * 16); setY(-py * 16);
  });
})();

/* ---------- 7. Botões magnéticos --------------------------- */
(function magneticos() {
  if (ehTouch || semMov || !temGsap) return;
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      gsap.to(btn, { x: mx * 0.35, y: my * 0.45, duration: 0.4, ease: 'power3' });
    });
    btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' }));
  });
})();

/* ---------- 8. Typewriter ---------------------------------- */
(function typewriter() {
  const alvo = document.getElementById('typewriter');
  if (!alvo) return;
  const texto = CONFIG.fraseTypewriter;
  if (semMov) { alvo.textContent = texto; return; }
  const secao = document.getElementById('historia');
  let comecou = false;
  const obs = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting && !comecou) { comecou = true; digitar(); }
  }), { threshold: 0.4 });
  if (secao) obs.observe(secao);
  function digitar() {
    let i = 0;
    (function passo() { if (i <= texto.length) { alvo.textContent = texto.slice(0, i); i++; setTimeout(passo, 55); } })();
  }
})();

/* ---------- 9. Contador ao vivo ---------------------------- */
(function contador() {
  const caixa = document.getElementById('contadorTempo');
  if (!caixa) return;
  const inicio = new Date(CONFIG.primeiraMensagem.replace(' ', 'T'));
  if (isNaN(inicio)) return;
  const c = {
    dias: caixa.querySelector('[data-unit="dias"]'),
    horas: caixa.querySelector('[data-unit="horas"]'),
    minutos: caixa.querySelector('[data-unit="minutos"]'),
    segundos: caixa.querySelector('[data-unit="segundos"]'),
  };
  function tick() {
    let d = Math.max(0, Date.now() - inicio.getTime()) / 1000;
    const dias = Math.floor(d / 86400); d -= dias * 86400;
    const horas = Math.floor(d / 3600); d -= horas * 3600;
    const min = Math.floor(d / 60); const seg = Math.floor(d - min * 60);
    c.dias.textContent = dias;
    c.horas.textContent = String(horas).padStart(2, '0');
    c.minutos.textContent = String(min).padStart(2, '0');
    c.segundos.textContent = String(seg).padStart(2, '0');
  }
  tick(); setInterval(tick, 1000);
})();

/* ---------- 10. Galeria (monta + tilt + lightbox) ---------- */
(function galeria() {
  const grid = document.getElementById('gridGaleria');
  if (!grid) return;
  CONFIG.fotos.forEach((f) => {
    const fig = document.createElement('figure');
    fig.className = 'foto';
    const img = new Image();
    img.src = f.arquivo; img.alt = f.legenda || 'foto do casal'; img.loading = 'lazy';
    const leg = document.createElement('figcaption');
    leg.className = 'foto__legenda'; leg.textContent = f.legenda || '';
    img.onerror = () => {
      fig.classList.add('foto--vazia');
      fig.innerHTML = `<div class="foto__placeholder"><span>🌷</span><strong>foto aqui</strong><br /><small>${f.arquivo}</small></div>`;
    };
    fig.appendChild(img); fig.appendChild(leg); grid.appendChild(fig);
    if (!ehTouch && !semMov) {
      fig.addEventListener('mousemove', (e) => {
        const r = fig.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        fig.style.transform = `perspective(700px) rotateY(${px*12}deg) rotateX(${-py*12}deg) scale(1.04)`;
      });
      fig.addEventListener('mouseleave', () => { fig.style.transform = ''; });
    }
    fig.addEventListener('click', () => { if (!fig.classList.contains('foto--vazia')) abrirLightbox(f.arquivo, f.legenda); });
  });
})();

function abrirLightbox(src, legenda) {
  const box = document.createElement('div');
  box.style.cssText = `position:fixed;inset:0;z-index:11000;display:grid;place-items:center;background:rgba(13,4,7,.9);cursor:pointer;padding:24px;opacity:0;transition:opacity .3s;`;
  box.innerHTML = `<div style="max-width:90vw;max-height:88vh;text-align:center;transform:scale(.9);transition:transform .35s">
    <img src="${src}" style="max-width:100%;max-height:80vh;border-radius:18px;box-shadow:0 30px 80px rgba(255,77,109,.4)" />
    <p style="color:#ff8fa3;font-family:'Dancing Script',cursive;font-size:1.7rem;margin-top:14px">${legenda || ''}</p></div>`;
  document.body.appendChild(box);
  requestAnimationFrame(() => { box.style.opacity = '1'; box.firstElementChild.style.transform = 'scale(1)'; });
  box.addEventListener('click', () => { box.style.opacity = '0'; setTimeout(() => box.remove(), 300); });
}

/* ---------- 11. Música ------------------------------------- */
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

/* ---------- 12. Coraçõezinhos: clique + botão final -------- */
function chuvaDeCoracoes(qtd = 18, ox, oy) {
  if (semMov) return;
  const emojis = ['💕', '💗', '❤️', '🌹', '💖'];
  for (let i = 0; i < qtd; i++) {
    const c = document.createElement('span');
    c.className = 'coracao-flutua';
    c.textContent = emojis[(Math.random()*emojis.length)|0];
    const x = ox ?? Math.random()*innerWidth;
    const y = oy ?? innerHeight*0.6;
    c.style.left = x + 'px'; c.style.top = y + 'px';
    document.body.appendChild(c);
    const dx = (-0.5+Math.random())*260, dy = -(120+Math.random()*320), rot = (-0.5+Math.random())*90;
    c.animate([{ transform:'translate(0,0) rotate(0) scale(1)', opacity:1 },
      { transform:`translate(${dx}px,${dy}px) rotate(${rot}deg) scale(1.5)`, opacity:0 }],
      { duration: 1400+Math.random()*800, easing: 'cubic-bezier(.2,.7,.2,1)' }).onfinish = () => c.remove();
  }
}
addEventListener('click', (e) => {
  if (e.target.closest('#botaoAbrir, #botaoConfete, .foto, .musica, a, .header')) return;
  if (semMov) return;
  chuvaDeCoracoes(1, e.clientX, e.clientY);
});
(function final() {
  const botao = document.getElementById('botaoConfete');
  const assinatura = document.getElementById('assinatura');
  if (!botao) return;
  botao.addEventListener('click', () => { chuvaDeCoracoes(44); if (assinatura) assinatura.hidden = false; botao.style.display = 'none'; });
})();

/* ---------- 13. Ano no rodapé ------------------------------ */
const elAno = document.getElementById('ano');
if (elAno) elAno.textContent = new Date().getFullYear();
