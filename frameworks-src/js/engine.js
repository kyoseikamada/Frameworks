/**
 * engine.js — レンダリング・ナビゲーションエンジン
 *
 * スライドの中身（HTML）も、カテゴリ定義も持たない。
 * config.js から受け取った SLIDES / CATEGORIES だけで動く。
 * このファイルは原則として編集不要。
 */

import { CATEGORIES, SLIDES } from './config.js';

/* ============================================================
   スライド HTML の fetch & キャッシュ
   ============================================================ */
const _htmlCache = new Map();

async function fetchSlideHtml(id, cat) {
  if (_htmlCache.has(id)) return _htmlCache.get(id);
  // cat='all' のスライド（表紙・まとめ）は shared/ に置く
  const dir = cat === 'all' ? 'shared' : cat;
  const res = await fetch(`slides/${dir}/${id}.html`);
  if (!res.ok) throw new Error(`slide not found: slides/${dir}/${id}.html`);
  const html = await res.text();
  _htmlCache.set(id, html);
  return html;
}

/* ============================================================
   DOM 構築
   ============================================================ */
async function buildSlides() {
  const frame = document.getElementById('slide-frame');
  frame.innerHTML = '';

  // 全スライドを並列 fetch
  const htmlList = await Promise.all(
    SLIDES.map(s => fetchSlideHtml(s.id, s.cat).catch(() => `<div class="s-body" style="padding:40px;color:#c00">⚠ slides/${s.cat === 'all' ? 'shared' : s.cat}/${s.id}.html が見つかりません</div>`))
  );

  SLIDES.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'slide';
    div.id = 'slide-' + i;
    div.setAttribute('data-cat', s.cat);
    div.innerHTML = htmlList[i];
    frame.appendChild(div);
  });
}

function buildSidebar() {
  const container = document.getElementById('sb-content');
  container.innerHTML = '';

  // all カテゴリ（表紙・まとめ）
  const topItems = SLIDES.reduce((acc, s, i) => {
    if (s.cat === 'all') acc.push({ s, i });
    return acc;
  }, []);
  if (topItems.length) {
    const sec = document.createElement('div');
    sec.className = 'sb-section';
    topItems.forEach(({ s, i }) => sec.appendChild(makeSbItem(s, i)));
    container.appendChild(sec);
  }

  // カテゴリをorder順で並べる
  const orderedCats = Object.entries(CATEGORIES)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key]) => key);

  orderedCats.forEach(cat => {
    const items = SLIDES.reduce((acc, s, i) => {
      if (s.cat === cat) acc.push({ s, i });
      return acc;
    }, []);
    if (!items.length) return;

    const { color, name } = CATEGORIES[cat];
    const sec = document.createElement('div');
    sec.className = 'sb-section';
    sec.id = 'sb-sec-' + cat;

    const hdr = document.createElement('div');
    hdr.className = 'sb-section-header';
    hdr.innerHTML = `
      <div class="sb-section-bar" style="background:${color}"></div>
      <div class="sb-section-name">${name}</div>
      <div class="sb-section-arrow">▾</div>`;
    hdr.addEventListener('click', () => sec.classList.toggle('collapsed'));
    sec.appendChild(hdr);

    const wrap = document.createElement('div');
    wrap.className = 'sb-items';
    items.forEach(({ s, i }) => {
      if (s.divider) {
        const lbl = document.createElement('div');
        lbl.className = 'sb-divider-label';
        lbl.textContent = s.title;
        lbl.addEventListener('click', () => isSP() ? spGoTo(i) : goTo(i));
        wrap.appendChild(lbl);
      } else {
        wrap.appendChild(makeSbItem(s, i));
      }
    });
    sec.appendChild(wrap);
    container.appendChild(sec);
  });
}

function makeSbItem(s, i) {
  const el = document.createElement('div');
  el.className = 'sb-item';
  el.id = 'sb-item-' + i;
  el.innerHTML = `
    <div class="sb-item-num">${String(i + 1).padStart(2, '0')}</div>
    <div>
      <div class="sb-item-text">${s.title}</div>
      ${s.tags.length ? `<div class="sb-item-tags">${s.tags.slice(0, 3).map(t => `<span class="sb-item-tag">${t}</span>`).join('')}</div>` : ''}
    </div>`;
  el.addEventListener('click', () => isSP() ? spGoTo(i) : goTo(i));
  return el;
}

function buildDots() {
  const container = document.getElementById('progress-dots');
  if (!container) return;
  container.innerHTML = '';
  filteredIndices.forEach((fi, pos) => {
    const d = document.createElement('div');
    d.className = 'pdot';
    d.title = SLIDES[fi].title;
    d.addEventListener('click', () => goToByPos(pos));
    container.appendChild(d);
  });
}

function buildSpNav() {
  const old = document.getElementById('sp-nav');
  if (old) old.remove();
  const nav = document.createElement('div');
  nav.id = 'sp-nav';
  nav.innerHTML = `
    <button class="sp-nav-btn" id="sp-prev">← PREV</button>
    <div id="sp-counter"></div>
    <button class="sp-nav-btn" id="sp-next">NEXT →</button>`;
  document.body.appendChild(nav);
  document.getElementById('sp-prev').addEventListener('click', () => spChangeSlide(-1));
  document.getElementById('sp-next').addEventListener('click', () => spChangeSlide(1));
}

function buildOverlay() {
  if (document.getElementById('sb-overlay')) return;
  const ov = document.createElement('div');
  ov.id = 'sb-overlay';
  document.body.appendChild(ov);
  ov.addEventListener('click', closeSidebar);
}

/* ============================================================
   状態
   ============================================================ */
let current = 0;
let filteredIndices = SLIDES.map((_, i) => i);
let spCurrentIdx = 0;

const isSP = () => window.innerWidth <= 768;

/* ============================================================
   UI 同期
   ============================================================ */
function syncUI() {
  const pos = filteredIndices.indexOf(current);
  document.querySelectorAll('.pdot').forEach((d, i) => d.classList.toggle('active', i === pos));
  const btnP = document.getElementById('btn-prev');
  const btnN = document.getElementById('btn-next');
  if (btnP) btnP.disabled = pos === 0;
  if (btnN) btnN.disabled = pos === filteredIndices.length - 1;
  const ctr = document.getElementById('header-counter');
  if (ctr) ctr.textContent = `${pos + 1} / ${filteredIndices.length}`;
  highlightSbItem(current);
}

function syncSpNav() {
  const pos = filteredIndices.indexOf(spCurrentIdx);
  const total = filteredIndices.length;
  const prev = document.getElementById('sp-prev');
  const next = document.getElementById('sp-next');
  const ctr  = document.getElementById('sp-counter');
  if (prev) prev.disabled = pos <= 0;
  if (next) next.disabled = pos >= total - 1;
  if (ctr)  ctr.textContent = `${pos + 1} / ${total}`;
  highlightSbItem(spCurrentIdx);
}

function highlightSbItem(idx) {
  document.querySelectorAll('.sb-item').forEach(el => el.classList.remove('active'));
  const el = document.getElementById('sb-item-' + idx);
  if (el) {
    el.classList.add('active');
    el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

/* ============================================================
   ナビゲーション
   ============================================================ */
function goTo(idx) {
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('slide-' + idx);
  if (el) el.classList.add('active');
  current = idx;
  syncUI();
}

function goToByPos(pos) {
  if (pos >= 0 && pos < filteredIndices.length) goTo(filteredIndices[pos]);
}

function spGoTo(idx) {
  spCurrentIdx = idx;
  closeSidebar();
  const el = document.getElementById('slide-' + idx);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  syncSpNav();
}

function spChangeSlide(dir) {
  const pos = filteredIndices.indexOf(spCurrentIdx);
  const next = pos + dir;
  if (next < 0 || next >= filteredIndices.length) return;
  spGoTo(filteredIndices[next]);
}

function applySpFilter() {
  SLIDES.forEach((_, i) => {
    const el = document.getElementById('slide-' + i);
    if (!el) return;
    el.classList.toggle('sp-hidden', !filteredIndices.includes(i));
  });
  spCurrentIdx = filteredIndices[0] ?? 0;
  const first = document.getElementById('slide-' + spCurrentIdx);
  if (first) first.scrollIntoView({ behavior: 'smooth', block: 'start' });
  syncSpNav();
}

function setupScrollObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = parseInt(e.target.id.replace('slide-', ''), 10);
        if (filteredIndices.includes(id)) { spCurrentIdx = id; syncSpNav(); }
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });
  document.querySelectorAll('.slide').forEach(el => obs.observe(el));
}

/* ============================================================
   サイドバー開閉
   ============================================================ */
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('toc-toggle').classList.add('open');
  const ov = document.getElementById('sb-overlay');
  if (ov) ov.classList.add('visible');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('toc-toggle').classList.remove('open');
  const ov = document.getElementById('sb-overlay');
  if (ov) ov.classList.remove('visible');
}

/* ============================================================
   グローバル公開（index.html の onclick から呼ぶ）
   ============================================================ */
window.changeSlide = dir => {
  const pos = filteredIndices.indexOf(current);
  goToByPos(pos + dir);
};

window.filterCat = (cat, btn) => {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  filteredIndices = cat === 'all'
    ? SLIDES.map((_, i) => i)
    : SLIDES.reduce((acc, s, i) => {
        if (s.cat === cat || s.cat === 'all') acc.push(i);
        return acc;
      }, []);
  if (isSP()) { applySpFilter(); closeSidebar(); }
  else { buildDots(); goTo(filteredIndices[0] ?? 0); }
};

window.toggleSidebar = () => {
  if (isSP()) {
    document.getElementById('sidebar').classList.contains('open')
      ? closeSidebar() : openSidebar();
  } else {
    document.getElementById('sidebar').classList.toggle('closed');
    document.getElementById('toc-toggle').classList.toggle('open');
  }
};

/* ============================================================
   初期化
   ============================================================ */
async function init() {
  await buildSlides();   // fetch完了後にDOMを組む
  buildSidebar();
  buildOverlay();

  if (isSP()) {
    buildSpNav();
    spCurrentIdx = 0;
    syncSpNav();
    setupScrollObserver();
  } else {
    buildDots();
    goTo(0);
  }
}

init();

// 画面回転時のみリロード（resizeは使わない）
window.addEventListener('orientationchange', () => setTimeout(() => location.reload(), 300));

// キーボード（PC）
document.addEventListener('keydown', e => {
  if (isSP()) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') window.changeSlide(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   window.changeSlide(-1);
  if (e.key === 'Escape') window.toggleSidebar();
});
