/* ============================================================
   Para você, Stefhane — interações e animações (GSAP)
   ============================================================ */

/* =================== ⚙️  AJUSTE AQUI  =====================
   Tudo que você provavelmente vai querer mudar está nesse bloco.
   ========================================================== */
const CONFIG = {
  // 📅 Primeira mensagem (estimado pelo foguinho do TikTok). Troque se souber a data certa.
  primeiraMensagem: '2025-10-07 00:00',

  // 🎵 Música: coloque o arquivo em site/musica.mp3 (já ativado).
  temMusica: true,

  // 📸 Fotos: jogue os arquivos em site/fotos/ e liste aqui (nome + legenda fofa).
  fotos: [
    { arquivo: 'fotos/foto1.jpg',  legenda: 'aqui começou tudo, gatinha 💕' },
    { arquivo: 'fotos/foto2.jpg',  legenda: 'sua gargalhada é meu som favorito' },
    { arquivo: 'fotos/foto3.jpg',  legenda: 'eu nem precisei pensar pra te amar' },
    { arquivo: 'fotos/foto4.jpg',  legenda: 'com você o dia fica leve' },
    { arquivo: 'fotos/foto5.jpg',  legenda: 'minha pessoa preferida, sempre' },
    { arquivo: 'fotos/foto6.jpg',  legenda: 'rezo todo dia agradecendo por você' },
    { arquivo: 'fotos/foto7.jpg',  legenda: 'do seu lado é meu lugar' },
    { arquivo: 'fotos/foto8.jpg',  legenda: 'olha a gente… eu te amo demais' },
    { arquivo: 'fotos/foto9.jpg',  legenda: 'você é a melhor parte do meu dia' },
    { arquivo: 'fotos/foto10.jpg', legenda: 'te escolheria de novo, mil vezes' },
    { arquivo: 'fotos/foto11.jpg', legenda: 'esse sorriso me ganhou de vez' },
    { arquivo: 'fotos/foto12.jpg', legenda: 'a gente combina demais, né?' },
    { arquivo: 'fotos/foto13.jpg', legenda: 'guardo cada segundo desse' },
    { arquivo: 'fotos/foto14.jpg', legenda: 'e isso é só o começo, viu 😏' },
    { arquivo: 'fotos/Nos20.jpeg', legenda: 'a gente, do nosso jeitinho 💕' },
  ],

  // 🎶 Músicas: jogue os arquivos .mp3 em site/ (ou em site/musicas/) e liste aqui.
  //    Ela escolhe qual tocar logo no começo. Campos extras são OPCIONAIS:
  //      capa    = imagem da capa do álbum (ex: 'capas/blue.jpg'). Sem capa, vira um vinil estiloso.
  //      artista = nome de quem canta.
  //      letra   = um trechinho da letra (aparece embaixo do disco).
  musicas: [
    { arquivo: 'musicas/TeVivo.mp3', titulo: 'Te Vivo', artista: 'Luan Santana',
      capa: 'capas/TeVivo.jpg', letra: 'enquanto eu viver, te vivo' },
    { arquivo: 'musicas/Fica.mp3', titulo: 'Fica', artista: 'Anavitória & Matheus e Kauan',
      capa: 'capas/Fica.jpg', letra: 'fica, que o lado bom da vida é ter você por perto' },
    { arquivo: 'musicas/AnjosCantam.mp3', titulo: 'Anjos Cantam', artista: 'Jão',
      capa: 'capas/AnjosCantam.webp', letra: 'porque é tudo tão bonito quando você está' },
    { arquivo: 'musicas/Cafecomleite.mp3', titulo: 'Café com Leite', artista: 'Luan Santana',
      capa: 'capas/Cafecomleite.png', letra: 'a gente combina como café com leite' },
    { arquivo: 'musicas/CheiroDeMar.mp3', titulo: 'Cheiro de Mar', artista: 'José Jr.',
      capa: 'capas/CheiroDeMar.jpg', letra: 'você tem o cheiro da minha paz' },
  ],

  // ✍️ Frase que "digita sozinha" na seção da história.
  fraseTypewriter: 'pode contar sempre comigo, eu vou estar com você!!!',

  // 💗 Imagem de coração (OPCIONAL). Coloque uma imagem 3D bonita em
  //    site/coracao.png e escreva o nome aqui ('coracao.png'). Ela vira o
  //    coração da abertura E os corações da explosão. Deixe '' pra usar o
  //    coração desenhado (SVG glossy).
  imagemCoracao: '',

  // 📌 Marcos da linha do tempo (a Stefhane toca em cada um pra abrir um cardzinho).
  //    Pode editar à vontade — frases que tenham a ver com vocês ficam mais fortes.
  marcos: [
    { icone: '💬', titulo: 'Onde começou',
      texto: '07 de outubro. mandei uma mensagem meio na sorte, sem esperar muita coisa. você respondeu, e sei lá, a gente simplesmente não parou mais.' },
    { icone: '🔥', titulo: 'O foguinho',
      texto: 'em uma semana o foguinho do TikTok já tava aceso. era bobo, mas virou a minha desculpa pra te chamar todo dia. e nunca mais apagou.' },
    { icone: '🤍', titulo: 'Primeiro mês',
      texto: 'com um mês eu já tinha apelido pra você e você pra mim. a gente conversava como se fosse de anos. foi ali que eu percebi que era diferente.' },
    { icone: '💯', titulo: '100 dias',
      texto: 'cem dias sem perder nenhum. todo dia a primeira coisa que eu queria era te dar bom dia. nem acredito que já faz tanto tempo.' },
    { icone: '✨', titulo: 'Hoje',
      texto: 'e olha a gente aqui. ficar do seu lado virou o meu lugar favorito. e pode acreditar: a melhor parte ainda nem chegou. 😏' },
  ],

  // 💍 O PEDIDO (o grande final do site). A câmera dela liga (com permissão),
  //    grava a reação, e as frases abaixo aparecem uma a uma antes da pergunta.
  //    Edite à vontade — quanto mais a sua cara, melhor.
  pedido: {
    frases: [
      'Stefhane…',
      'respira fundo, gatinha. e olha pra câmera. 😄',
      'desde a primeira mensagem, não passou um dia sem você. e eu não quero que passe.',
      'eu rezo todo dia agradecendo a Deus por ter te colocado na minha vida.',
      'então eu preciso te perguntar uma coisa…',
    ],
    pergunta: 'quer namorar comigo?',
  },
};
/* ====================== fim dos ajustes ===================== */

// Animações SEMPRE ligadas — o site é uma surpresa, a animação é o ponto.
// (ignoramos o "reduzir movimento" do sistema de propósito.)
const semMov  = false;
const ehTouch = matchMedia('(hover: none), (pointer: coarse)').matches;
const temGsap = typeof window.gsap !== 'undefined';

if (temGsap && !semMov && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

// Se o GSAP não carregou (offline, etc.), mostra tudo (sem depender de animação)
if (!temGsap) document.documentElement.classList.remove('anim');

/* ---------- 1. Abertura (explode → cobre a tela → cai) -----
   Feita em Web Animations API nativo — NÃO depende do GSAP, então
   sempre funciona. O clique vale na tela inteira (mais difícil de errar).
   ----------------------------------------------------------- */
(function abertura() {
  const tela = document.getElementById('abertura');
  const botao = document.getElementById('botaoAbrir');
  if (!tela || !botao) return;
  document.body.style.overflow = 'hidden';
  let abrindo = false;

  // se o usuário forneceu uma imagem de coração, troca o SVG por ela
  if (CONFIG.imagemCoracao) {
    const svg = botao.querySelector('.coracao-svg');
    if (svg) {
      const img = document.createElement('img');
      img.src = CONFIG.imagemCoracao; img.alt = 'coração'; img.className = 'coracao-img';
      img.onerror = () => { img.replaceWith(svg); }; // se não achar, volta o desenho
      svg.replaceWith(img);
    }
  }

  // gera estrelinhas cintilando espalhadas — tamanhos variados (depth!)
  const sparkCont = document.getElementById('aberturaSparkles');
  if (sparkCont) {
    const n = innerWidth < 600 ? 30 : 48;
    for (let i = 0; i < n; i++) {
      const s = document.createElement('span');
      s.style.left = (Math.random() * 100) + '%';
      s.style.top = (Math.random() * 100) + '%';
      // 15% grandes (brilhão), 30% médias, 55% pequenas — variedade de profundidade
      const r = Math.random();
      let sz;
      if (r < 0.15) {
        sz = 7 + Math.random() * 5;          // 7-12px (estrelas brilhantes)
        s.style.boxShadow = '0 0 16px 2px rgba(255, 200, 215, .95)';
      } else if (r < 0.45) {
        sz = 4 + Math.random() * 2;          // 4-6px (médias)
      } else {
        sz = 1.5 + Math.random() * 2;        // 1.5-3.5px (poeira longe)
        s.style.opacity = '.7';
      }
      s.style.width = sz + 'px'; s.style.height = sz + 'px';
      s.style.animationDelay = (Math.random() * 3) + 's';
      s.style.animationDuration = (2 + Math.random() * 2.5) + 's';
      sparkCont.appendChild(s);
    }
  }

  function finalizar() {
    // depois da explosão, abre a vitrine pra ela escolher a trilha
    abrirSeletorMusica();
  }

  // === Canvas + sprite cache (super leve mesmo com 100+ corações) ===
  function abrir() {
    if (abrindo) return; abrindo = true;

    const r = botao.getBoundingClientRect();
    const ox = r.left + r.width / 2;
    const oy = r.top + r.height / 2;

    // pausa pétalas e desliga os orbs/blurs do fundo durante a transição
    document.body.classList.add('transicao');

    botao.style.animation = 'none';
    botao.animate(
      [{ transform: 'scale(1)', opacity: 1 },
       { transform: 'scale(1.5)', opacity: 1, offset: 0.45 },
       { transform: 'scale(0)', opacity: 0 }],
      { duration: 430, easing: 'cubic-bezier(.6,0,.85,.25)', fill: 'forwards' });

    // canvas — DPR fixo em 1 (4x menos pixels que 2x → enorme ganho)
    const canvas = document.createElement('canvas');
    canvas.className = 'explosao-canvas';
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.width = innerWidth + 'px';
    canvas.style.height = innerHeight + 'px';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d', { alpha: true });

    // SPRITE CACHE: renderiza cada emoji uma vez em offscreen canvas
    // (drawImage é MUITO mais rápido que fillText em loop por frame)
    const emojis = ['💗', '❤️', '💕', '💖', '🌹', '💝'];
    const SP = Math.min(320, Math.floor(innerWidth / 4));
    const sprites = emojis.map((ch) => {
      const off = document.createElement('canvas');
      off.width = off.height = SP;
      const c = off.getContext('2d');
      c.textAlign = 'center'; c.textBaseline = 'middle';
      c.font = `${Math.floor(SP * 0.78)}px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif`;
      c.fillText(ch, SP / 2, SP / 2);
      return off;
    });

    // imagem custom (se o usuário forneceu) — vira o sprite único
    let imgSprite = null;
    if (CONFIG.imagemCoracao) { imgSprite = new Image(); imgSprite.src = CONFIG.imagemCoracao; }

    // grade de base — corações GRANDES e BAGUNÇADOS (cobre tudo, sem buracos)
    const cols = innerWidth < 600 ? 5 : 8;
    const cell = innerWidth / cols;
    const rows = Math.ceil(innerHeight / cell) + 1;
    const cx0 = (cols - 1) / 2, cy0 = (rows - 1) / 2;
    const jitter = cell * 0.35;
    let maxDist = 0;
    const hearts = [];
    for (let ry = 0; ry < rows; ry++) for (let cx = 0; cx < cols; cx++) {
      const dist = Math.hypot(cx - cx0, ry - cy0);
      if (dist > maxDist) maxDist = dist;
      hearts.push({
        sp: (Math.random() * sprites.length) | 0,
        tx: cx * cell + cell / 2 + (Math.random() * jitter * 2 - jitter),
        ty: ry * cell + cell / 2 + (Math.random() * jitter * 2 - jitter),
        size: cell * (1.4 + Math.random() * 0.6),    // 1.4-2.0× → overlap garantido
        rot0: Math.random() * 240 - 120,             // -120° a +120° (bem inclinado)
        dist,
        fallDelay: Math.random() * 520,
        driftX: Math.random() * 200 - 100,
      });
    }
    // FILLERS: corações em posições totalmente aleatórias pra tampar qualquer canto
    const fillN = innerWidth < 600 ? 14 : 24;
    for (let i = 0; i < fillN; i++) {
      const rx = Math.random() * innerWidth;
      const ry = Math.random() * innerHeight;
      const fx = (rx / innerWidth - 0.5) * cols * 0.7;
      const fy = (ry / innerHeight - 0.5) * rows * 0.7;
      const dist = Math.hypot(fx, fy);
      if (dist > maxDist) maxDist = dist;
      hearts.push({
        sp: (Math.random() * sprites.length) | 0,
        tx: rx, ty: ry,
        size: cell * (1.1 + Math.random() * 0.7),
        rot0: Math.random() * 240 - 120,
        dist,
        fallDelay: Math.random() * 520,
        driftX: Math.random() * 220 - 110,
      });
    }
    hearts.forEach((h) => { h.explodeDelay = 170 + (h.dist / (maxDist || 1)) * 250; });

    const tCobrir = 170 + 250 + 480;
    const fallStart = tCobrir + 120;
    const totalEnd = fallStart + 1300 + 520 + 100;

    setTimeout(() => {
      tela.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, fill: 'forwards' })
        .onfinish = () => { tela.remove(); finalizar(); };
    }, tCobrir - 130);

    const backOut = (t) => { const s = 1.5; return 1 + (s + 1) * Math.pow(t - 1, 3) + s * Math.pow(t - 1, 2); };
    const easeIn = (t) => t * t * t;

    let t0 = null;
    function frame(ts) {
      if (t0 == null) t0 = ts;
      const t = ts - t0;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < hearts.length; i++) {
        const h = hearts[i];
        const eStart = h.explodeDelay, eEnd = eStart + 480;
        const fStart = fallStart + h.fallDelay, fEnd = fStart + 1300;
        let x, y, scale, rot;
        if (t < eStart) { x = ox; y = oy; scale = 0; rot = h.rot0; }
        else if (t < eEnd) {
          const p = (t - eStart) / 480, e = backOut(p);
          x = ox + (h.tx - ox) * e; y = oy + (h.ty - oy) * e; scale = e; rot = h.rot0;
        }
        else if (t < fStart) { x = h.tx; y = h.ty; scale = 1; rot = h.rot0; }
        else if (t < fEnd) {
          const p = (t - fStart) / 1300, e = easeIn(p);
          x = h.tx + h.driftX * e; y = h.ty + (innerHeight + 280) * e; scale = 1; rot = h.rot0 + 160 * e;
        }
        else continue;
        if (scale < 0.02) continue;

        const dw = h.size * scale;
        const sprite = (imgSprite && imgSprite.complete && imgSprite.naturalWidth > 0) ? imgSprite : sprites[h.sp];
        if (rot === h.rot0 && rot === 0) {
          // sem rotação: desenho direto (mais rápido)
          ctx.drawImage(sprite, x - dw / 2, y - dw / 2, dw, dw);
        } else {
          ctx.setTransform(1, 0, 0, 1, x, y);
          ctx.rotate(rot * Math.PI / 180);
          ctx.drawImage(sprite, -dw / 2, -dw / 2, dw, dw);
        }
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      if (t < totalEnd) requestAnimationFrame(frame);
      else {
        canvas.remove();
        document.body.classList.remove('transicao');
      }
    }
    requestAnimationFrame(frame);
  }

  tela.addEventListener('click', abrir);       // clique em qualquer lugar abre
  botao.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); }
  });
})();

/* ---------- 1.5 Seletor de música (vitrine de vinis) ----------
   Logo depois da explosão, a Stefhane escolhe a trilha que vai tocar
   enquanto navega. Os discos vêm da lista CONFIG.musicas.
   ----------------------------------------------------------- */
(function seletorMusica() {
  const seletor = document.getElementById('seletor');
  const cont = document.getElementById('seletorDiscos');
  const pular = document.getElementById('seletorPular');
  if (!seletor || !cont) { window.abrirSeletorMusica = () => { document.body.style.overflow = ''; introHero(); }; return; }

  const audio = document.getElementById('audioFundo');
  const botaoMus = document.getElementById('botaoMusica');
  let construido = false, escolhido = false, revelado = false;

  function tocar(m) {
    if (!audio || !m || !m.arquivo) return;
    audio.src = m.arquivo;
    audio.volume = 0.45;
    audio.play().then(() => botaoMus && botaoMus.classList.add('tocando')).catch(() => {});
  }

  function construir() {
    CONFIG.musicas.forEach((m, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'disco';
      card.style.transitionDelay = (0.08 * i) + 's';

      const palco = document.createElement('span');
      palco.className = 'disco__palco';
      const vinil = document.createElement('span');
      vinil.className = 'disco__vinil';
      const capa = document.createElement('span');
      capa.className = 'disco__capa';
      if (m.capa) {
        capa.style.backgroundImage = 'url("' + m.capa + '")';
        const im = new Image(); im.src = m.capa;
        im.onerror = () => { capa.style.backgroundImage = ''; capa.classList.add('vazia'); capa.textContent = '♫'; };
      } else { capa.classList.add('vazia'); capa.textContent = '♫'; }
      palco.appendChild(vinil);
      palco.appendChild(capa);
      card.appendChild(palco);

      const nome = document.createElement('p');
      nome.className = 'disco__nome';
      nome.textContent = m.titulo || m.arquivo;
      card.appendChild(nome);

      if (m.artista) {
        const art = document.createElement('p');
        art.className = 'disco__artista';
        art.textContent = m.artista;
        card.appendChild(art);
      }
      if (m.letra) {
        const ltr = document.createElement('p');
        ltr.className = 'disco__letra';
        ltr.textContent = m.letra;
        card.appendChild(ltr);
      }

      card.addEventListener('click', () => escolher(m, card));
      cont.appendChild(card);
    });
    requestAnimationFrame(() => cont.querySelectorAll('.disco').forEach((d) => d.classList.add('disco--on')));
  }

  function fechar() {
    seletor.classList.remove('aberto');
    document.body.style.overflow = '';
    setTimeout(() => { seletor.style.display = 'none'; }, 650);
  }

  function escolher(m, el) {
    if (escolhido) return; escolhido = true;
    if (el) {
      el.classList.add('sel');
      cont.querySelectorAll('.disco').forEach((d) => { if (d !== el) d.classList.add('disco--off'); });
    }
    tocar(m);
    setTimeout(() => { fechar(); if (!revelado) { revelado = true; introHero(); } }, m ? 720 : 120);
  }

  if (pular) pular.addEventListener('click', () => escolher(null, null));

  // no desktop, a rodinha passa as músicas com rolagem suave (animada na mão,
  // porque o smooth nativo brigava com o snap e "teleportava")
  let alvoX = null, animando = false;
  function animaScroll() {
    if (alvoX == null) { animando = false; return; }
    const dx = alvoX - cont.scrollLeft;
    if (Math.abs(dx) < 0.6) { cont.scrollLeft = alvoX; alvoX = null; animando = false; return; }
    cont.scrollLeft += dx * 0.11;   // easing exponencial = deslize macio
    requestAnimationFrame(animaScroll);
  }
  cont.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      const d = cont.querySelector('.disco');
      const passo = d ? d.offsetWidth + 24 : 240;
      const max = cont.scrollWidth - cont.clientWidth;
      if (alvoX == null) alvoX = cont.scrollLeft;
      alvoX = Math.max(0, Math.min(max, alvoX + (e.deltaY > 0 ? 1 : -1) * passo));
      if (!animando) { animando = true; requestAnimationFrame(animaScroll); }
    }
  }, { passive: false });

  window.abrirSeletorMusica = function () {
    if (!CONFIG.temMusica || !CONFIG.musicas || !CONFIG.musicas.length) {
      document.body.style.overflow = '';
      if (!revelado) { revelado = true; introHero(); }
      return;
    }
    if (!construido) { construir(); construido = true; }
    escolhido = false;
    cont.querySelectorAll('.disco').forEach((d) => d.classList.remove('sel', 'disco--off'));
    seletor.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => seletor.classList.add('aberto'));
  };
})();

/* ---------- 2. Animações de entrada (GSAP) ----------------- */
function introHero() {
  scrollTo(0, 0); // o hero sempre aparece do topo
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
  const QTD = innerWidth < 600 ? 10 : 20;
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
    // pausa durante a transição da abertura pra liberar fps
    if (document.body.classList.contains('transicao')) { requestAnimationFrame(loop); return; }
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

/* ---------- 9. Contador ao vivo (com count-up no reveal) -- */
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
  function valoresAgora() {
    let d = Math.max(0, Date.now() - inicio.getTime()) / 1000;
    const dias = Math.floor(d / 86400); d -= dias * 86400;
    const horas = Math.floor(d / 3600); d -= horas * 3600;
    const min = Math.floor(d / 60);
    const seg = Math.floor(d - min * 60);
    return { dias, horas, min, seg };
  }
  function pintar(v) {
    c.dias.textContent = v.dias;
    c.horas.textContent = String(v.horas).padStart(2, '0');
    c.minutos.textContent = String(v.min).padStart(2, '0');
    c.segundos.textContent = String(v.seg).padStart(2, '0');
  }
  // começa zerado
  pintar({ dias: 0, horas: 0, min: 0, seg: 0 });

  let comecou = false;
  function rodarCountUp() {
    if (comecou) return; comecou = true;
    const dur = 1700;
    const t0 = performance.now();
    const alvo = valoresAgora();
    function step(ts) {
      const p = Math.min(1, (ts - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3); // easeOutCubic
      pintar({
        dias: Math.floor(alvo.dias * e),
        horas: Math.floor(alvo.horas * e),
        min: Math.floor(alvo.min * e),
        seg: Math.floor(alvo.seg * e),
      });
      if (p < 1) requestAnimationFrame(step);
      else {
        pintar(valoresAgora());
        setInterval(() => pintar(valoresAgora()), 1000);
      }
    }
    requestAnimationFrame(step);
  }

  const obs = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) rodarCountUp(); });
  }, { threshold: 0.35 });
  obs.observe(caixa);
})();

/* ---------- 9.5 Marcos interativos (linha do tempo) -------- */
(function marcos() {
  const botoes = document.querySelectorAll('.marco');
  const cardEl = document.getElementById('marcoCard');
  if (!botoes.length || !cardEl) return;

  let aberto = -1;
  function fechar() {
    cardEl.classList.remove('aberto');
    setTimeout(() => { cardEl.hidden = true; cardEl.innerHTML = ''; }, 320);
    aberto = -1;
  }
  function abrir(i) {
    const d = CONFIG.marcos[i];
    if (!d) return;
    if (aberto === i) { fechar(); return; }
    aberto = i;
    cardEl.innerHTML = `
      <button class="marco__fechar" type="button" aria-label="Fechar">×</button>
      <span class="marco__selo">${d.icone || '💗'}</span>
      <p class="marco__data">${d.titulo}</p>
      <p class="marco__texto">${d.texto}</p>
    `;
    cardEl.hidden = false;
    requestAnimationFrame(() => cardEl.classList.add('aberto'));
    cardEl.querySelector('.marco__fechar').addEventListener('click', fechar);
  }
  botoes.forEach((b, i) => b.addEventListener('click', () => abrir(i)));
})();

/* ---------- 10. Mural de polaroids + fotos no fundo ----------
   MURAL: todas as fotos viram polaroids no grid da galeria, cada uma
   revelando com um fade-up quando entra na tela. A proporção da janela
   é setada no load = proporção real da foto, então nada é cortado.
   FUNDO: um punhado de fotos flutua suave nas margens (só CSS), como um
   "papel de parede" de momentos — sutil e sem embolar.
   ----------------------------------------------------------- */
(function muralEFundo() {
  const grid = document.getElementById('gridGaleria');
  if (!grid) return;

  // inclinações pra dar cara de parede de fotos (cada polaroid um pouco torta)
  const TILTS = [-5, 4, -3, 5, -4, 3, -2, 6, -5, 2, -3, 4, -4, 3];

  function placeholderHTML(arquivo) {
    return `
      <div class="foto__placeholder">
        <span class="placeholder__icone">🌹</span>
        <p class="placeholder__label">uma foto<br>sua aqui</p>
        <p class="placeholder__path">${arquivo}</p>
      </div>`;
  }

  function montaPolaroid(f, i, extraClass) {
    const fig = document.createElement('figure');
    fig.className = 'pola' + (extraClass ? ' ' + extraClass : '');
    fig.style.setProperty('--tilt', TILTS[i % TILTS.length] + 'deg');

    const cartao = document.createElement('div');
    cartao.className = 'pola__cartao';

    const janela = document.createElement('div');
    janela.className = 'pola__janela';

    const img = new Image();
    img.src = f.arquivo; img.alt = f.legenda || ''; img.loading = 'lazy';
    janela.appendChild(img);

    const leg = document.createElement('figcaption');
    leg.textContent = f.legenda || '';

    cartao.appendChild(janela);
    cartao.appendChild(leg);
    fig.appendChild(cartao);

    let vazia = false;
    img.onload = () => {
      if (img.naturalWidth && img.naturalHeight) {
        // proporção real da foto → sem corte, sem borda
        janela.style.aspectRatio = img.naturalWidth + ' / ' + img.naturalHeight;
        // fotos deitadas (horizontais) ganham um marcador pra ficarem maiores no fundo
        if (img.naturalWidth > img.naturalHeight * 1.15) fig.classList.add('pola--horizontal');
      }
    };
    img.onerror = () => {
      vazia = true;
      janela.classList.add('vazia');
      janela.innerHTML = placeholderHTML(f.arquivo);
    };

    fig.addEventListener('click', () => { if (!vazia) abrirLightbox(f.arquivo, f.legenda); });
    return fig;
  }

  // ---- MURAL: todas as fotos ----
  const polas = [];
  CONFIG.fotos.forEach((f, i) => {
    const fig = montaPolaroid(f, i);
    grid.appendChild(fig);
    polas.push(fig);
  });

  // revela cada polaroid com fade-up quando entra na tela
  if (!semMov && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('pola--on'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    polas.forEach((p) => io.observe(p));
  } else {
    polas.forEach((p) => p.classList.add('pola--on'));
  }

  // ---- FUNDO: fotos descem pelas margens e ENTRAM conforme o scroll ----
  if (!semMov) {
    // fotos pro fundo (alterna lados esq/dir descendo a página)
    const escolha = [0, 2, 4, 6, 8, 10, 12, 13, 1, 5];

    const fundo = document.createElement('div');
    fundo.className = 'fundo-fotos';
    fundo.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(fundo, document.body.firstChild.nextSibling);

    const figsFundo = [];
    escolha.forEach((fi, k) => {
      const f = CONFIG.fotos[fi % CONFIG.fotos.length];
      const fig = montaPolaroid(f, fi, 'pola--fundo');
      fig.dataset.lado = (k % 2) ? 'dir' : 'esq';
      fig.style.setProperty('--dur', (8 + (k % 4) * 1.1) + 's');
      fig.style.setProperty('--delay', (-(k % 5) * 1.3) + 's');
      fundo.appendChild(fig);
      figsFundo.push(fig);
    });

    // distribui as fotos ao longo da altura da página, nas laterais
    function posicionar() {
      const mob = innerWidth <= 520;
      const docH = document.documentElement.scrollHeight;
      fundo.style.height = docH + 'px';
      const top0 = innerHeight * 0.92;            // começa depois do hero
      const top1 = docH - innerHeight * 0.55;     // termina antes do rodapé
      const n = figsFundo.length;
      figsFundo.forEach((fig, k) => {
        fig.style.top = (top0 + (top1 - top0) * (n > 1 ? k / (n - 1) : 0)) + 'px';
        const dir = fig.dataset.lado === 'dir';
        if (mob) {
          // no celular as fotos espiam da borda (meio pra fora) pra não cobrir o texto
          fig.style.left = dir ? 'auto' : '-38px';
          fig.style.right = dir ? '-38px' : 'auto';
          fig.style.setProperty('--from', (dir ? 38 : -38) + 'px');
        } else {
          fig.style.left = dir ? 'auto' : '14px';
          fig.style.right = dir ? '14px' : 'auto';
          fig.style.setProperty('--from', (dir ? 60 : -60) + 'px');
        }
      });
    }
    posicionar();
    addEventListener('resize', posicionar);
    addEventListener('load', posicionar);
    // as imagens mudam a altura da página ao carregar → recalcula depois
    setTimeout(posicionar, 1200);
    setTimeout(posicionar, 3000);

    // entra/sai com o scroll (desliza da borda + fade) via IntersectionObserver
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => e.target.classList.toggle('vista', e.isIntersecting));
      }, { threshold: 0.25, rootMargin: '0px 0px -6% 0px' });
      figsFundo.forEach((f) => io.observe(f));
    } else {
      figsFundo.forEach((f) => f.classList.add('vista'));
    }
  }
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
    // sem música escolhida ainda → reabre a vitrine pra ela escolher/trocar
    if (!audio.src) { if (window.abrirSeletorMusica) window.abrirSeletorMusica(); return; }
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

/* ---------- 14. O PEDIDO 💍 (câmera grava a reação) ---------
   Fluxo: ela autoriza a câmera (o navegador SEMPRE pergunta — vira
   parte da surpresa) → começa a gravar → frases aparecem uma a uma
   → A PERGUNTA → ela diz SIM → festa + o vídeo da reação pronto
   pra ela mandar pelo WhatsApp (Web Share) ou baixar.
   Tudo roda no navegador dela; o vídeo não sai do aparelho sozinho.
   ----------------------------------------------------------- */
(function pedido() {
  const teaser = document.getElementById('pedidoTeaser');
  const palco  = document.getElementById('pedidoPalco');
  const festa  = document.getElementById('pedidoFesta');
  if (!teaser || !palco || !festa) return;

  const btnLigar  = document.getElementById('pedidoLigarCam');
  const btnSem    = document.getElementById('pedidoSemCam');
  const aviso     = document.getElementById('pedidoAviso');
  const camBox    = document.getElementById('pedidoCam');
  const video     = document.getElementById('pedidoVideo');
  const recBadge  = document.getElementById('pedidoRec');
  const fraseEl   = document.getElementById('pedidoFrase');
  const pergunta  = document.getElementById('pedidoPergunta');
  const tituloPer = document.getElementById('pedidoPerguntaTitulo');
  const btnSim    = document.getElementById('pedidoSim');
  const btnFoge   = document.getElementById('pedidoFoge');
  const soSim     = document.getElementById('pedidoSoSim');
  const lixeira   = document.getElementById('pedidoLixeira');
  const replay    = document.getElementById('pedidoReplay');
  const playback  = document.getElementById('pedidoPlayback');
  const btnEnviar = document.getElementById('pedidoEnviar');
  const btnBaixar = document.getElementById('pedidoBaixar');

  if (tituloPer && CONFIG.pedido && CONFIG.pedido.pergunta) tituloPer.textContent = CONFIG.pedido.pergunta;

  let stream = null, recorder = null, chunks = [], blobFinal = null, timerId = null;

  /* ---- câmera + gravação ---- */
  async function ligarCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return false;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: true, // o microfone pega a gargalhada — parte mais importante 😄
      });
    } catch { return false; }
    video.srcObject = stream;
    camBox.hidden = false;

    if (window.MediaRecorder) {
      // iPhone grava mp4; Android/desktop gravam webm — testamos na ordem
      const tipos = ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/mp4',
                     'video/webm;codecs=vp9,opus', 'video/webm'];
      const mime = tipos.find((t) => MediaRecorder.isTypeSupported(t)) || '';
      try {
        recorder = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
        recorder.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
        recorder.start(1000); // chunks de 1s = não perde nada se algo falhar no meio
        const t0 = Date.now();
        const rel = recBadge.querySelector('b');
        timerId = setInterval(() => {
          const s = Math.floor((Date.now() - t0) / 1000);
          if (rel) rel.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
        }, 500);
        setTimeout(() => pararGravacao(), 4 * 60 * 1000); // teto de segurança: 4 min
      } catch { recorder = null; }
    }
    if (!recorder) recBadge.hidden = true;
    return true;
  }

  function encerrarStream() {
    clearInterval(timerId);
    if (stream) { stream.getTracks().forEach((t) => t.stop()); stream = null; }
  }

  function pararGravacao() {
    if (!recorder || recorder.state === 'inactive') { encerrarStream(); return; }
    recorder.onstop = () => {
      encerrarStream();
      if (!chunks.length) return;
      blobFinal = new Blob(chunks, { type: chunks[0].type || 'video/webm' });
      playback.src = URL.createObjectURL(blobFinal);
      replay.hidden = false;
    };
    recorder.stop();
  }

  /* ---- frases uma a uma, depois a pergunta ---- */
  function rodarFrases(fim) {
    const frases = (CONFIG.pedido && CONFIG.pedido.frases) || [];
    let i = 0;
    (function proxima() {
      if (i >= frases.length) { fim(); return; }
      fraseEl.textContent = frases[i++];
      fraseEl.animate([
        { opacity: 0, transform: 'translateY(16px)' },
        { opacity: 1, transform: 'translateY(0)', offset: 0.2 },
        { opacity: 1, transform: 'translateY(0)', offset: 0.82 },
        { opacity: 0, transform: 'translateY(-12px)' },
      ], { duration: 3200, easing: 'ease-in-out' }).onfinish = proxima;
    })();
  }

  function mostrarPergunta() {
    fraseEl.hidden = true;
    pergunta.hidden = false;
    pergunta.animate(
      [{ opacity: 0, transform: 'scale(.55)' }, { opacity: 1, transform: 'scale(1)' }],
      { duration: 750, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'forwards' });
    chuvaDeCoracoes(16);
  }

  /* ---- botão que foge (3 cliques → vai pra lixeira) ----
     Conta CLIQUE de verdade (pointerdown), não o hover. Assim cada
     toque nele = 1 fuga, exatamente 3, igual em qualquer aparelho. */
  const MAX_FUGAS = 3;
  let fugas = 0, ultimaFuga = 0, naLixeira = false, fixado = false;
  let origemX = 0, origemY = 0;   // âncora: a esquiva orbita esse ponto, sem driftar

  function fixarBotao() {
    // troca pra posição fixa preservando o lugar atual (pro 1º deslize ser suave)
    const r0 = btnFoge.getBoundingClientRect();
    origemX = r0.left; origemY = r0.top;
    btnFoge.style.width = r0.width + 'px';
    btnFoge.style.position = 'fixed';
    btnFoge.style.margin = '0';
    btnFoge.style.zIndex = '9600';
    btnFoge.style.left = r0.left + 'px';
    btnFoge.style.top = r0.top + 'px';
    void btnFoge.offsetWidth; // força reflow pra transição pegar o 1º movimento
    fixado = true;
  }

  function fugir(e) {
    if (naLixeira) return;
    if (e && e.cancelable) e.preventDefault();
    if (Date.now() - ultimaFuga < 250) return; // anti duplo-disparo
    ultimaFuga = Date.now();
    fugas++;

    if (fugas >= MAX_FUGAS) { irPraLixeira(); return; }
    if (!fixado) fixarBotao();

    // esquiva CURTA orbitando a posição ORIGINAL (não acumula → nunca foge pro canto)
    const r = btnFoge.getBoundingClientRect();
    const bw = r.width, bh = r.height;
    const px = (e && e.clientX) || (origemX + bw / 2);
    const py = (e && e.clientY) || (origemY + bh / 2);
    // direção: do dedo pra origem (pulo na direção contrária ao toque)
    let vx = (origemX + bw / 2) - px, vy = (origemY + bh / 2) - py;
    let len = Math.hypot(vx, vy);
    if (len < 1) { const a = Math.random() * Math.PI * 2; vx = Math.cos(a); vy = Math.sin(a); len = 1; }
    vx /= len; vy /= len;
    const passo = 90 + Math.random() * 40;            // pulinho de 90–130px só
    const m = 14;
    let bx = origemX + vx * passo;
    let by = origemY + vy * passo;
    // mantém na tela (com folga do header em cima)
    bx = Math.max(m, Math.min(innerWidth - bw - m, bx));
    by = Math.max(86, Math.min(innerHeight - bh - m, by));
    btnFoge.style.left = bx + 'px';
    btnFoge.style.top = by + 'px';
    btnFoge.style.transform = `rotate(${Math.round(Math.random() * 10 - 5)}deg)`;

    if (fugas === 1) btnFoge.textContent = 'ué… 🙈';
    else if (fugas === 2) btnFoge.textContent = 'para! 😝';
  }
  btnFoge.addEventListener('pointerdown', fugir);

  function irPraLixeira() {
    if (naLixeira) return;
    naLixeira = true;
    if (!fixado) fixarBotao();
    btnFoge.style.pointerEvents = 'none';
    btnFoge.textContent = 'tchau 👋';

    // 1) a lixeira surge bem no meio, com um pop nítido
    lixeira.hidden = false;
    lixeira.animate([
      { opacity: 0, transform: 'translateX(-50%) translateY(50px) scale(.2)' },
      { opacity: 1, transform: 'translateX(-50%) translateY(-8px) scale(1.18)', offset: .65 },
      { opacity: 1, transform: 'translateX(-50%) translateY(0) scale(1)' },
    ], { duration: 600, easing: 'cubic-bezier(.34,1.56,.64,1)', fill: 'forwards' });

    // 2) depois da lixeira aparecer, o botão é jogado dentro num arco suave
    setTimeout(() => {
      const lr = lixeira.getBoundingClientRect();
      const br = btnFoge.getBoundingClientRect();
      const dx = (lr.left + lr.width / 2) - (br.left + br.width / 2);
      const dy = (lr.top + lr.height * 0.10) - (br.top + br.height / 2);
      btnFoge.style.transition = 'none'; // a partir daqui quem manda é o animate
      btnFoge.animate([
        { transform: 'translate(0,0) rotate(0) scale(1)', opacity: 1 },
        { transform: `translate(${dx * 0.5}px, ${dy - 150}px) rotate(150deg) scale(.85)`, opacity: 1, offset: 0.5 },
        { transform: `translate(${dx}px, ${dy}px) rotate(360deg) scale(.08)`, opacity: 0 },
      ], { duration: 1100, easing: 'cubic-bezier(.45,.05,.55,.95)', fill: 'forwards' }).onfinish = () => {
        btnFoge.remove();
        // 3) a lixeira "engole" — balança e solta um puffzinho de corações
        lixeira.animate([
          { transform: 'translateX(-50%) rotate(0) scale(1)' },
          { transform: 'translateX(-50%) rotate(-12deg) scale(1.18)', offset: 0.3 },
          { transform: 'translateX(-50%) rotate(9deg) scale(1.08)',   offset: 0.62 },
          { transform: 'translateX(-50%) rotate(0) scale(1)' },
        ], { duration: 660, easing: 'ease-in-out' });
        chuvaDeCoracoes(10, lr.left + lr.width / 2, lr.top);
        // 4) lixeira some e o SIM fica sozinho, grandão, no meio
        setTimeout(() => {
          lixeira.animate(
            [{ opacity: 1, transform: 'translateX(-50%) scale(1)' },
             { opacity: 0, transform: 'translateX(-50%) scale(.55) translateY(24px)' }],
            { duration: 560, easing: 'ease-in', fill: 'forwards' }
          ).onfinish = () => { lixeira.hidden = true; };
          pergunta.classList.add('pedido__pergunta--soSim');
          if (soSim) soSim.hidden = false;
          btnSim.animate(
            [{ transform: 'scale(1)' }, { transform: 'scale(1.18)' }, { transform: 'scale(1)' }],
            { duration: 700, easing: 'ease-out' });
        }, 900);
      };
    }, 520);
  }

  /* ---- ELA DISSE SIM ---- */
  let respondeu = false;
  function disseSim() {
    if (respondeu) return; respondeu = true;
    chuvaDeCoracoes(60);
    setTimeout(() => chuvaDeCoracoes(44), 650);
    setTimeout(() => chuvaDeCoracoes(44), 1400);
    palco.hidden = true;
    festa.hidden = false;
    festa.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // grava mais 5s — é aí que vem o gritinho/a gargalhada 😄
    if (recorder && recorder.state !== 'inactive') setTimeout(pararGravacao, 5000);
    else encerrarStream();
  }
  btnSim.addEventListener('click', disseSim);

  /* ---- mandar pra ele / baixar ---- */
  function nomeArquivo() {
    return 'ela-disse-sim.' + ((blobFinal && blobFinal.type.includes('mp4')) ? 'mp4' : 'webm');
  }
  btnBaixar.addEventListener('click', () => {
    if (!blobFinal) return;
    const a = document.createElement('a');
    a.href = playback.src; a.download = nomeArquivo();
    document.body.appendChild(a); a.click(); a.remove();
  });
  btnEnviar.addEventListener('click', async () => {
    if (!blobFinal) return;
    const file = new File([blobFinal], nomeArquivo(), { type: blobFinal.type || 'video/webm' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: 'minha reação 💍' }); return; }
      catch { /* ela cancelou o compartilhar — sem problema */ }
    } else {
      btnBaixar.click(); // desktop sem Web Share: baixa e ela manda no WhatsApp
    }
  });

  /* ---- início do fluxo ---- */
  let comecou = false;
  async function comecar(comCamera) {
    if (comecou) return; comecou = true;
    btnLigar.disabled = true; if (btnSem) btnSem.disabled = true;
    let ok = false;
    if (comCamera) {
      btnLigar.textContent = 'ligando… ✨';
      ok = await ligarCamera();
      if (!ok) {
        aviso.hidden = false;
        aviso.textContent = 'não consegui ligar a câmera 😅 mas vem assim mesmo, que a pergunta não muda…';
      }
    }
    setTimeout(() => {
      teaser.hidden = true;
      palco.hidden = false;
      palco.scrollIntoView({ behavior: 'smooth', block: 'center' });
      rodarFrases(mostrarPergunta);
    }, ok ? 900 : (comCamera ? 1600 : 250));
  }
  btnLigar.addEventListener('click', () => comecar(true));
  if (btnSem) btnSem.addEventListener('click', () => comecar(false));
})();
