/* =============================================
   簿記3級合格アプリ - メインロジック
   ============================================= */

// ---- 状態管理 ----
const STATE = {
  currentTab: 'home',
  slides: { chapterId: null, themeId: null, currentIndex: 0 },
  questions: {
    mode: null, // 'journal','calc','chapter','weak','random','exam'
    pool: [],
    currentIdx: 0,
    answered: false,
    examStartTime: null,
    examTimer: null,
    examAnswers: [],
    selectedChoice: null,
    shuffledOpts: null,
    shuffledAns: null,
    addedRows: 1,
  },
  glossary: { search: '', cat: 'all' },
};

// ---- LocalStorage ユーティリティ ----
function loadStorage() {
  try {
    return JSON.parse(localStorage.getItem('boki3_progress') || '{}');
  } catch { return {}; }
}
function saveStorage(data) {
  localStorage.setItem('boki3_progress', JSON.stringify(data));
}
function getProgress() {
  const d = loadStorage();
  if (!d.checks) d.checks = {};
  if (!d.results) d.results = {};
  return d;
}
function saveProgress(data) { saveStorage(data); }

// 訪問を記録する（スライド/問題/用語集で呼ぶ）
function recordVisit(themeId, col) {
  // col: 'slides'|'questions'|'glossary'
  const p = getProgress();
  if (!p.checks[themeId]) p.checks[themeId] = { slides: 0, questions: 0, glossary: 0 };
  if (p.checks[themeId][col] < 3) {
    p.checks[themeId][col]++;
  }
  saveProgress(p);
  renderProgressTable();
}

// 問題の正誤を記録
function recordAnswer(qId, correct) {
  const p = getProgress();
  if (!p.results[qId]) p.results[qId] = { correct: 0, wrong: 0 };
  if (correct) p.results[qId].correct++;
  else p.results[qId].wrong++;
  saveProgress(p);
}

function isWeak(qId) {
  const p = getProgress();
  const r = p.results[qId];
  if (!r) return false;
  return r.wrong > r.correct && r.wrong >= 1;
}

// ---- テーマ定義 ----
const THEMES = [
  { id: 'ch1-1', ch: 1, chName: '第1章：簿記の基本', name: '簿記の目的と種類' },
  { id: 'ch1-2', ch: 1, chName: '第1章：簿記の基本', name: '資産・負債・純資産の概念' },
  { id: 'ch1-3', ch: 1, chName: '第1章：簿記の基本', name: '借方と貸方の基本ルール' },
  { id: 'ch1-4', ch: 1, chName: '第1章：簿記の基本', name: '仕訳のルールと考え方' },
  { id: 'ch1-5', ch: 1, chName: '第1章：簿記の基本', name: '勘定科目の分類と覚え方' },
  { id: 'ch2-1', ch: 2, chName: '第2章：各種取引の仕訳', name: '現金・当座預金・普通預金取引' },
  { id: 'ch2-2', ch: 2, chName: '第2章：各種取引の仕訳', name: '売掛金・受取手形' },
  { id: 'ch2-3', ch: 2, chName: '第2章：各種取引の仕訳', name: '買掛金・支払手形' },
  { id: 'ch2-4', ch: 2, chName: '第2章：各種取引の仕訳', name: '商品売買（三分法）' },
  { id: 'ch2-5', ch: 2, chName: '第2章：各種取引の仕訳', name: '固定資産の取得・減価償却・売却' },
  { id: 'ch2-6', ch: 2, chName: '第2章：各種取引の仕訳', name: '貸付金・借入金' },
  { id: 'ch2-7', ch: 2, chName: '第2章：各種取引の仕訳', name: '資本金・引出金' },
  { id: 'ch2-8', ch: 2, chName: '第2章：各種取引の仕訳', name: '給料・租税公課などの費用処理' },
  { id: 'ch2-9', ch: 2, chName: '第2章：各種取引の仕訳', name: '前払い・前受け・未払い・未収の処理' },
  { id: 'ch2-10', ch: 2, chName: '第2章：各種取引の仕訳', name: '貸倒引当金' },
  { id: 'ch3-1', ch: 3, chName: '第3章：帳簿記入', name: '仕訳帳の記入方法' },
  { id: 'ch3-2', ch: 3, chName: '第3章：帳簿記入', name: '総勘定元帳への転記' },
  { id: 'ch3-3', ch: 3, chName: '第3章：帳簿記入', name: '現金出納帳・当座預金出納帳' },
  { id: 'ch3-4', ch: 3, chName: '第3章：帳簿記入', name: '売掛金元帳・買掛金元帳' },
  { id: 'ch3-5', ch: 3, chName: '第3章：帳簿記入', name: '商品有高帳（先入先出法・移動平均法）' },
  { id: 'ch4-1', ch: 4, chName: '第4章：試算表', name: '合計試算表の作成' },
  { id: 'ch4-2', ch: 4, chName: '第4章：試算表', name: '残高試算表の作成' },
  { id: 'ch4-3', ch: 4, chName: '第4章：試算表', name: '合計残高試算表の作成' },
  { id: 'ch4-4', ch: 4, chName: '第4章：試算表', name: '試算表の誤りの発見' },
  { id: 'ch5-1', ch: 5, chName: '第5章：決算・財務諸表', name: '決算整理仕訳の全パターン' },
  { id: 'ch5-2', ch: 5, chName: '第5章：決算・財務諸表', name: '精算表の作成' },
  { id: 'ch5-3', ch: 5, chName: '第5章：決算・財務諸表', name: '損益計算書の作成' },
  { id: 'ch5-4', ch: 5, chName: '第5章：決算・財務諸表', name: '貸借対照表の作成' },
  { id: 'ch5-5', ch: 5, chName: '第5章：決算・財務諸表', name: '当期純利益の計算' },
];

const CHAPTERS = [
  { id: 1, name: '第1章：簿記の基本' },
  { id: 2, name: '第2章：各種取引の仕訳' },
  { id: 3, name: '第3章：帳簿記入' },
  { id: 4, name: '第4章：試算表' },
  { id: 5, name: '第5章：決算・財務諸表' },
];

function getThemeName(id) {
  const t = THEMES.find(t => t.id === id);
  return t ? t.name : id;
}
function getChapterThemes(ch) {
  return THEMES.filter(t => t.ch === ch);
}

// ---- タブ切替 ----
function switchTab(tab) {
  STATE.currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === `tab-${tab}`));
  if (tab === 'home') renderProgressTable();
  if (tab === 'slides') initSlidesTab();
  if (tab === 'questions') showQuestionModeScreen();
  if (tab === 'glossary') renderGlossary();
  if (tab === 'youtube') renderYouTube();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ---- HOME タブ ----

// カウントダウン
function renderCountdown() {
  const target = new Date('2027-04-01T00:00:00');
  const now = new Date();
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  document.getElementById('days-count').textContent = diff > 0 ? diff : 0;
  const msg = document.getElementById('countdown-msg');
  if (diff > 365) msg.textContent = '毎日少しずつ積み重ねていきましょう！';
  else if (diff > 90) msg.textContent = '計画的に学習を進めましょう！';
  else if (diff > 30) msg.textContent = 'ラストスパート！仕訳を中心に復習しましょう！';
  else if (diff > 0) msg.textContent = '試験直前！自信を持って臨みましょう！';
  else msg.textContent = '試験日を過ぎています。次回合格を目指しましょう！';
}

// 進捗表
function renderProgressTable() {
  const p = getProgress();
  const container = document.getElementById('progress-table-container');
  if (!container) return;
  let html = '';
  CHAPTERS.forEach(ch => {
    const themes = getChapterThemes(ch.id);
    html += `<div class="progress-chapter">
      <div class="progress-chapter-header">
        <span>${ch.name}</span>
        <button class="progress-reset-btn" data-ch="${ch.id}">🔄 リセット</button>
      </div>
      <table class="progress-table">
        <thead><tr>
          <th style="width:40%">テーマ</th>
          <th>📖 スライド</th>
          <th>📝 問題</th>
          <th>📚 用語集</th>
        </tr></thead>
        <tbody>`;
    themes.forEach(t => {
      const c = p.checks[t.id] || { slides: 0, questions: 0, glossary: 0 };
      const mastered = c.slides >= 3 && c.questions >= 3 && c.glossary >= 3;
      html += `<tr class="${mastered ? 'mastered' : ''}">
        <td><span class="theme-link" data-theme="${t.id}">${t.name}</span>${mastered ? ' <span class="mastered-badge">✅ 習得済み</span>' : ''}</td>
        <td>${checkBoxes(c.slides)}</td>
        <td>${checkBoxes(c.questions)}</td>
        <td>${checkBoxes(c.glossary)}</td>
      </tr>`;
    });
    html += `</tbody></table></div>`;
  });
  container.innerHTML = html;
  container.querySelectorAll('.theme-link').forEach(el => {
    el.addEventListener('click', () => {
      const tid = el.dataset.theme;
      goToSlide(tid);
    });
  });
  container.querySelectorAll('.progress-reset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ch = parseInt(btn.dataset.ch);
      const themes = getChapterThemes(ch);
      const p = getProgress();
      themes.forEach(t => { delete p.checks[t.id]; });
      saveProgress(p);
      renderProgressTable();
    });
  });
}

function checkBoxes(count) {
  let html = '<div class="checks">';
  for (let i = 0; i < 3; i++) {
    html += `<div class="check-box ${i < count ? 'checked' : ''}"></div>`;
  }
  html += '</div>';
  return html;
}

// グローバル検索
function setupGlobalSearch() {
  const input = document.getElementById('global-search');
  const results = document.getElementById('search-results');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    results.innerHTML = '';
    if (q.length < 1) return;
    const found = [];
    // 用語集から
    if (window.GLOSSARY) {
      window.GLOSSARY.forEach(g => {
        if (g.name.toLowerCase().includes(q) || (g.kana && g.kana.includes(q)) || (g.def && g.def.includes(q))) {
          found.push({ type: '用語集', name: g.name, desc: g.def ? g.def.substring(0, 40) + '...' : '', action: () => { switchTab('glossary'); setTimeout(() => openGlossaryTerm(g.id), 100); } });
        }
      });
    }
    // スライドから
    if (window.SLIDES) {
      window.SLIDES.forEach(s => {
        if (s.title.toLowerCase().includes(q) || (s.explain && s.explain.toLowerCase().includes(q))) {
          found.push({ type: 'スライド', name: s.title, desc: s.chName, action: () => goToSlide(s.id) });
        }
      });
    }
    if (found.length === 0) {
      results.innerHTML = '<div style="padding:10px;color:#aaa;font-size:13px;">見つかりませんでした</div>';
      return;
    }
    found.slice(0, 8).forEach(item => {
      const el = document.createElement('div');
      el.className = 'search-result-item';
      el.innerHTML = `<span class="search-result-type">${item.type}</span><span class="search-result-name">${item.name}</span><span class="search-result-desc">${item.desc}</span>`;
      el.addEventListener('click', () => { results.innerHTML = ''; input.value = ''; item.action(); });
      results.appendChild(el);
    });
  });
  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !results.contains(e.target)) results.innerHTML = '';
  });
}

// ---- SLIDES タブ ----

function initSlidesTab() {
  if (!window.SLIDES) return;
  const chSel = document.getElementById('slide-chapter-select');
  const thSel = document.getElementById('slide-theme-select');
  if (!chSel.options.length || chSel.options.length === 1) {
    CHAPTERS.forEach(ch => {
      const o = document.createElement('option');
      o.value = ch.id;
      o.textContent = ch.name;
      chSel.appendChild(o);
    });
  }
  chSel.addEventListener('change', () => {
    const chId = parseInt(chSel.value);
    thSel.innerHTML = '<option value="">テーマを選択...</option>';
    if (!chId) return;
    getChapterThemes(chId).forEach(t => {
      const o = document.createElement('option');
      o.value = t.id;
      o.textContent = t.name;
      thSel.appendChild(o);
    });
  });
  thSel.addEventListener('change', () => {
    if (thSel.value) showSlide(thSel.value);
  });
  document.getElementById('prev-slide').addEventListener('click', () => {
    const idx = STATE.slides.currentIndex;
    if (idx > 0) showSlideByIndex(idx - 1);
  });
  document.getElementById('next-slide').addEventListener('click', () => {
    const idx = STATE.slides.currentIndex;
    if (idx < window.SLIDES.length - 1) showSlideByIndex(idx + 1);
  });
  document.getElementById('prev-slide-bottom').addEventListener('click', () => {
    const idx = STATE.slides.currentIndex;
    if (idx > 0) showSlideByIndex(idx - 1);
  });
  document.getElementById('next-slide-bottom').addEventListener('click', () => {
    const idx = STATE.slides.currentIndex;
    if (idx < window.SLIDES.length - 1) showSlideByIndex(idx + 1);
  });
  // Show first slide by default if none selected
  if (!STATE.slides.themeId && window.SLIDES.length) {
    showSlideByIndex(0);
  }
}

function goToSlide(themeId) {
  switchTab('slides');
  setTimeout(() => showSlide(themeId), 100);
}

function showSlide(themeId) {
  const slide = window.SLIDES.find(s => s.id === themeId);
  if (!slide) return;
  const idx = window.SLIDES.indexOf(slide);
  STATE.slides.themeId = themeId;
  STATE.slides.currentIndex = idx;
  document.getElementById('slide-chapter-select').value = slide.ch;
  // populate theme select
  const thSel = document.getElementById('slide-theme-select');
  thSel.innerHTML = '<option value="">テーマを選択...</option>';
  getChapterThemes(slide.ch).forEach(t => {
    const o = document.createElement('option');
    o.value = t.id;
    o.textContent = t.name;
    thSel.appendChild(o);
  });
  thSel.value = themeId;
  renderSlideContent(slide);
  // スライドのチェックはクイズ完了時に記録（renderSlideQuiz内で実施）
  updateSlidePosition();
}

function showSlideByIndex(idx) {
  const slide = window.SLIDES[idx];
  if (!slide) return;
  showSlide(slide.id);
}

function updateSlidePosition() {
  const pos = document.getElementById('slide-position');
  const posBottom = document.getElementById('slide-position-bottom');
  const idx = STATE.slides.currentIndex;
  const label = `${idx + 1} / ${window.SLIDES.length}`;
  pos.textContent = label;
  posBottom.textContent = label;
  document.getElementById('prev-slide').disabled = idx === 0;
  document.getElementById('next-slide').disabled = idx === window.SLIDES.length - 1;
  document.getElementById('prev-slide-bottom').disabled = idx === 0;
  document.getElementById('next-slide-bottom').disabled = idx === window.SLIDES.length - 1;
  // 下部ナビを表示
  document.getElementById('slide-bottom-nav').classList.remove('hidden');
}

function renderSlideContent(slide) {
  const area = document.getElementById('slide-content');
  const chColors = ['', '#FFB7C5', '#B5EAD7', '#C7CEEA', '#FFDAC1', '#A8E6CF'];
  const color = chColors[slide.ch] || '#EDE8F5';
  area.innerHTML = `
    <div class="slide-card">
      <span class="slide-chapter-badge" style="background:${color};color:#4A4A68">${slide.chName}</span>
      <h2 class="slide-title">${slide.title}</h2>
      ${slide.subtitle ? `<p class="slide-subtitle">${slide.subtitle}</p>` : ''}
      <div class="slide-section explain">
        <div class="slide-section-title">📘 ① テーマの説明</div>
        <div class="slide-section-body">${slide.explain}</div>
      </div>
      <div class="slide-section diagram">
        <div class="slide-section-title">📊 ② 図解</div>
        <div class="slide-section-body">${slide.diagram}</div>
      </div>
      <div class="slide-section example">
        <div class="slide-section-title">💡 ③ 具体例</div>
        <div class="slide-section-body">${slide.example}</div>
      </div>
      <div class="slide-section rationale">
        <div class="slide-section-title">🎯 ④ このルールの趣旨</div>
        <div class="slide-section-body">${slide.rationale}</div>
      </div>
      <div class="slide-actions">
        <button class="btn-secondary" onclick="goToQuestionsForTheme('${slide.id}')">📝 関連問題を解く</button>
        <button class="btn-secondary" onclick="goToGlossaryForTheme('${slide.id}')">📚 用語集で確認</button>
      </div>
    </div>`;
  // Render quiz
  renderSlideQuiz(slide);
}

function renderSlideQuiz(slide) {
  const area = document.getElementById('slide-quiz-area');
  if (!slide.quiz || !slide.quiz.length) { area.innerHTML = ''; area.classList.add('hidden'); return; }
  area.classList.remove('hidden');
  let html = `<div class="slide-quiz-card"><h3>✍️ 確認クイズ（${slide.quiz.length}問）</h3>`;
  slide.quiz.forEach((q, qi) => {
    // シャッフルして正解位置をランダム化
    const indices = q.opts.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    const shuffledOpts = indices.map(i => q.opts[i]);
    const newAns = indices.indexOf(q.ans);
    html += `<div class="quiz-q" id="sq-${qi}">
      <p>Q${qi + 1}. ${q.q}</p>
      <div class="quiz-opts">`;
    shuffledOpts.forEach((opt, oi) => {
      html += `<button class="quiz-opt" data-qi="${qi}" data-oi="${oi}" data-ans="${newAns}" data-exp="${encodeURIComponent(q.exp)}">${opt}</button>`;
    });
    html += `</div></div>`;
  });
  html += '</div>';
  const totalQuiz = slide.quiz.length;
  let answeredCount = 0;
  area.innerHTML = html;
  area.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', function() {
      const qi = this.dataset.qi;
      const oi = parseInt(this.dataset.oi);
      const ans = parseInt(this.dataset.ans);
      const exp = decodeURIComponent(this.dataset.exp);
      const row = area.querySelector(`#sq-${qi}`);
      if (row.dataset.answered) return;
      row.dataset.answered = '1';
      answeredCount++;
      row.querySelectorAll('.quiz-opt').forEach(b => {
        b.style.pointerEvents = 'none';
        b.style.cursor = 'default';
      });
      if (oi === ans) {
        this.classList.add('correct');
      } else {
        this.classList.add('wrong');
        row.querySelectorAll('.quiz-opt')[ans].classList.add('correct');
      }
      const expEl = document.createElement('div');
      expEl.className = 'quiz-explanation';
      expEl.textContent = exp;
      row.appendChild(expEl);
      // 全問回答でスライドチェックを記録
      if (answeredCount >= totalQuiz) {
        recordVisit(slide.id, 'slides');
      }
    });
  });
}

function goToQuestionsForTheme(themeId) {
  switchTab('questions');
  setTimeout(() => startQuestionMode('chapter', themeId), 100);
}

function goToGlossaryForTheme(themeId) {
  switchTab('glossary');
  setTimeout(() => filterGlossaryByTheme(themeId), 100);
}

// ---- QUESTIONS タブ ----

function showQuestionModeScreen() {
  document.getElementById('question-mode-screen').classList.remove('hidden');
  document.getElementById('chapter-select-screen').classList.add('hidden');
  document.getElementById('question-area').classList.add('hidden');
  document.getElementById('exam-result-screen').classList.add('hidden');
}

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const mode = btn.dataset.mode;
    if (mode === 'chapter') {
      showChapterSelectScreen();
    } else {
      startQuestionMode(mode);
    }
  });
});

function showChapterSelectScreen() {
  document.getElementById('question-mode-screen').classList.add('hidden');
  document.getElementById('chapter-select-screen').classList.remove('hidden');
  const list = document.getElementById('chapter-select-list');
  list.innerHTML = '';
  CHAPTERS.forEach(ch => {
    const themes = getChapterThemes(ch.id);
    const el = document.createElement('div');
    el.className = 'chapter-item';
    el.innerHTML = `<h3>${ch.name}</h3>
      <div class="theme-list">${themes.map(t => `<span class="theme-tag" data-theme="${t.id}">${t.name}</span>`).join('')}</div>`;
    list.appendChild(el);
    el.querySelectorAll('.theme-tag').forEach(tag => {
      tag.addEventListener('click', () => startQuestionMode('chapter', tag.dataset.theme));
    });
  });
  document.getElementById('back-from-chapter').addEventListener('click', showQuestionModeScreen);
}

function startQuestionMode(mode, themeId) {
  STATE.questions.mode = mode;
  STATE.questions.answered = false;
  STATE.questions.selectedChoice = null;
  if (!window.QUESTIONS) { alert('問題データを読み込み中...'); return; }
  let pool = [];
  if (mode === 'journal') pool = window.QUESTIONS.filter(q => q.type === 'journal');
  else if (mode === 'calc') pool = window.QUESTIONS.filter(q => q.type === 'calc' || q.type === 'choice');
  else if (mode === 'chapter') pool = window.QUESTIONS.filter(q => themeId ? q.themeId === themeId : true);
  else if (mode === 'weak') {
    pool = window.QUESTIONS.filter(q => isWeak(q.id));
    if (!pool.length) { alert('苦手問題がまだありません。問題を解いてから使いましょう！'); return; }
  }
  else if (mode === 'random') pool = [...window.QUESTIONS];
  else if (mode === 'exam') pool = buildExamPool();
  pool = shuffle(pool);
  STATE.questions.pool = pool;
  STATE.questions.currentIdx = 0;
  STATE.questions.examAnswers = [];
  document.getElementById('question-mode-screen').classList.add('hidden');
  document.getElementById('chapter-select-screen').classList.add('hidden');
  document.getElementById('exam-result-screen').classList.add('hidden');
  document.getElementById('question-area').classList.remove('hidden');
  if (mode === 'exam') {
    startExamTimer();
    document.getElementById('exam-timer').classList.remove('hidden');
  } else {
    document.getElementById('exam-timer').classList.add('hidden');
    stopExamTimer();
  }
  showCurrentQuestion();
}

function buildExamPool() {
  // 模擬試験：全分野から均等に30問
  const pool = [];
  const perChapter = 6;
  CHAPTERS.forEach(ch => {
    const qs = shuffle(window.QUESTIONS.filter(q => q.ch === ch.id));
    pool.push(...qs.slice(0, perChapter));
  });
  return shuffle(pool);
}

function showCurrentQuestion() {
  const pool = STATE.questions.pool;
  const idx = STATE.questions.currentIdx;
  if (idx >= pool.length) {
    if (STATE.questions.mode === 'exam') {
      stopExamTimer();
      showExamResult();
    } else {
      document.getElementById('answer-result').classList.add('hidden');
      document.getElementById('question-card').innerHTML = `<div style="text-align:center;padding:30px">
        <div style="font-size:48px">🎉</div>
        <h3 style="margin:16px 0">全問終了！お疲れさまでした</h3>
        <button class="btn-primary" id="mode-restart">もう一度</button>
      </div>`;
      document.getElementById('mode-restart').addEventListener('click', showQuestionModeScreen);
    }
    return;
  }
  const q = pool[idx];
  STATE.questions.answered = false;
  STATE.questions.selectedChoice = null;
  STATE.questions.addedRows = 1;
  // Progress
  const pct = Math.round((idx / pool.length) * 100);
  document.getElementById('q-progress-text').textContent = `${idx + 1} / ${pool.length} 問`;
  document.getElementById('q-progress-bar').style.width = pct + '%';
  // Badges
  const theme = THEMES.find(t => t.id === q.themeId);
  document.getElementById('q-chapter-badge').textContent = theme ? theme.chName : `第${q.ch}章`;
  document.getElementById('q-theme-badge').textContent = getThemeName(q.themeId);
  const diffLabels = { 1: '⭐ 基礎', 2: '⭐⭐ 標準', 3: '⭐⭐⭐ 応用' };
  const diffBadge = document.getElementById('q-diff-badge');
  diffBadge.textContent = diffLabels[q.diff] || '標準';
  diffBadge.className = 'badge badge-diff ' + (q.diff === 3 ? 'hard' : q.diff === 2 ? 'medium' : 'easy');
  const typeLabels = { journal: '仕訳問題', choice: '択一問題', calc: '計算問題' };
  document.getElementById('q-type-badge').textContent = typeLabels[q.type] || q.type;
  document.getElementById('question-text').textContent = q.q;
  // Show/hide forms
  document.getElementById('journal-form').classList.toggle('hidden', q.type !== 'journal');
  document.getElementById('choice-form').classList.toggle('hidden', q.type !== 'choice');
  document.getElementById('calc-form').classList.toggle('hidden', q.type !== 'calc');
  document.getElementById('answer-result').classList.add('hidden');
  document.getElementById('question-actions').classList.remove('hidden');
  if (q.type === 'journal') renderJournalForm();
  if (q.type === 'choice') renderChoiceForm(q);
  if (q.type === 'calc') {
    const inp = document.getElementById('calc-answer');
    inp.value = '';
    inp.disabled = false;
  }
  document.getElementById('question-card').style.display = '';
  // 問題演習チェックは正解時のみ（submit ハンドラで実施）
}

function renderJournalForm() {
  const tbody = document.getElementById('journal-rows');
  tbody.innerHTML = '';
  addJournalRow(tbody);
  document.getElementById('add-journal-row').onclick = () => {
    if (tbody.rows.length < 4) addJournalRow(tbody);
  };
}

function addJournalRow(tbody) {
  const tr = tbody.insertRow();
  tr.innerHTML = `
    <td><select class="account-select dr-account"><option value="">勘定科目を選択</option>${accountOptions()}</select></td>
    <td><input type="number" class="amount-input dr-amount" placeholder="0"></td>
    <td><select class="account-select cr-account"><option value="">勘定科目を選択</option>${accountOptions()}</select></td>
    <td><input type="number" class="amount-input cr-amount" placeholder="0"></td>`;
}

function accountOptions() {
  if (!window.ACCOUNTS) return '';
  return window.ACCOUNTS.map(a => `<option value="${a}">${a}</option>`).join('');
}

function renderChoiceForm(q) {
  const container = document.getElementById('choice-options');
  const labels = ['ア', 'イ', 'ウ', 'エ'];
  // シャッフル
  const indices = q.opts.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  const shuffledOpts = indices.map(i => q.opts[i]);
  const shuffledAns = indices.indexOf(q.ans);
  STATE.questions.shuffledOpts = shuffledOpts;
  STATE.questions.shuffledAns = shuffledAns;
  container.innerHTML = shuffledOpts.map((opt, i) =>
    `<button class="choice-opt" data-idx="${i}"><span class="choice-label">${labels[i]}</span>${opt}</button>`
  ).join('');
  container.querySelectorAll('.choice-opt').forEach(btn => {
    btn.addEventListener('click', function() {
      if (STATE.questions.answered) return;
      container.querySelectorAll('.choice-opt').forEach(b => b.classList.remove('selected'));
      this.classList.add('selected');
      STATE.questions.selectedChoice = parseInt(this.dataset.idx);
    });
  });
}

document.getElementById('submit-answer').addEventListener('click', () => {
  const pool = STATE.questions.pool;
  const q = pool[STATE.questions.currentIdx];
  if (!q || STATE.questions.answered) return;
  let correct = false;
  let resultHtml = '';
  if (q.type === 'journal') {
    const rows = document.querySelectorAll('#journal-rows tr');
    const userEntries = [];
    rows.forEach(r => {
      const dr = r.querySelector('.dr-account').value;
      const drAmt = parseInt(r.querySelector('.dr-amount').value) || 0;
      const cr = r.querySelector('.cr-account').value;
      const crAmt = parseInt(r.querySelector('.cr-amount').value) || 0;
      if (dr || cr) userEntries.push({ dr, drAmt, cr, crAmt });
    });
    correct = checkJournalAnswer(userEntries, q.entries);
    resultHtml = buildJournalResultHtml(q.entries);
  } else if (q.type === 'choice') {
    if (STATE.questions.selectedChoice === null) { alert('選択肢を選んでください'); return; }
    const sAns = STATE.questions.shuffledAns;
    const sOpts = STATE.questions.shuffledOpts;
    correct = STATE.questions.selectedChoice === sAns;
    const labels = ['ア', 'イ', 'ウ', 'エ'];
    const container = document.getElementById('choice-options');
    container.querySelectorAll('.choice-opt').forEach((btn, i) => {
      btn.disabled = true;
      if (i === sAns) btn.classList.add('correct');
      else if (i === STATE.questions.selectedChoice && !correct) btn.classList.add('wrong');
    });
    resultHtml = `<div class="correct-answer-display"><div class="label">正解</div><div style="font-weight:700;padding:8px 0">${labels[sAns]}. ${sOpts[sAns]}</div></div>`;
  } else if (q.type === 'calc') {
    const inp = document.getElementById('calc-answer');
    const userAns = parseInt(inp.value);
    if (isNaN(userAns)) { alert('金額を入力してください'); return; }
    correct = userAns === q.ans;
    inp.disabled = true;
    resultHtml = `<div class="correct-answer-display"><div class="label">正解</div><div style="font-weight:700;padding:8px 0">${q.ans.toLocaleString()}${q.unit || '円'}</div></div>`;
  }
  STATE.questions.answered = true;
  recordAnswer(q.id, correct);
  if (STATE.questions.mode === 'exam') {
    STATE.questions.examAnswers.push(correct);
  }
  // 正解時のみ問題演習チェックを記録
  if (correct) {
    const theme = THEMES.find(t => t.id === q.themeId);
    if (theme) recordVisit(theme.id, 'questions');
  }
  // Show result
  const badge = document.getElementById('result-badge');
  badge.textContent = correct ? '⭕ 正解！' : '❌ 不正解';
  badge.style.color = correct ? '#7DCFB6' : '#FF8FAD';
  document.getElementById('correct-answer-display').innerHTML = resultHtml;
  document.getElementById('explanation-text').innerHTML = q.exp || '';
  document.getElementById('answer-result').classList.remove('hidden');
  document.getElementById('question-actions').classList.add('hidden');
  const themeId = q.themeId;
  document.getElementById('go-to-slide').onclick = () => goToSlide(themeId);
});

document.getElementById('next-question').addEventListener('click', () => {
  STATE.questions.currentIdx++;
  showCurrentQuestion();
});
document.getElementById('back-to-modes').addEventListener('click', () => {
  stopExamTimer();
  showQuestionModeScreen();
});

function checkJournalAnswer(user, correct) {
  if (user.length === 0) return false;
  const matched = correct.map(ce => {
    const ceDr = ce.drAmt !== undefined ? ce.drAmt : ce.amt;
    const ceCr = ce.crAmt !== undefined ? ce.crAmt : ce.amt;
    return user.some(ue =>
      ue.dr === ce.dr && ue.cr === ce.cr &&
      Math.abs((ue.drAmt || 0) - ceDr) <= 1 &&
      Math.abs((ue.crAmt || 0) - ceCr) <= 1
    );
  });
  return matched.every(Boolean);
}

function buildJournalResultHtml(entries) {
  let rows = entries.map(e => {
    const dr = e.drAmt !== undefined ? e.drAmt : e.amt;
    const cr = e.crAmt !== undefined ? e.crAmt : e.amt;
    return `<div class="correct-journal-row">
      <span class="cj-dr">${e.dr}</span>
      <span class="cj-dr-amt">${dr.toLocaleString()}</span>
      <span class="cj-cr">${e.cr}</span>
      <span class="cj-cr-amt">${cr.toLocaleString()}</span>
    </div>`;
  }).join('');
  return `<div class="correct-answer-display"><div class="label">正しい仕訳</div><div class="correct-journal">${rows}</div></div>`;
}

// Exam Timer
function startExamTimer() {
  let remaining = 60 * 60;
  STATE.questions.examStartTime = Date.now();
  const display = document.getElementById('timer-display');
  stopExamTimer();
  STATE.questions.examTimer = setInterval(() => {
    remaining--;
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    display.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    if (remaining <= 300) display.style.color = '#FF8FAD';
    if (remaining <= 0) {
      stopExamTimer();
      showExamResult();
    }
  }, 1000);
}
function stopExamTimer() {
  if (STATE.questions.examTimer) { clearInterval(STATE.questions.examTimer); STATE.questions.examTimer = null; }
}

function showExamResult() {
  document.getElementById('question-area').classList.add('hidden');
  document.getElementById('exam-result-screen').classList.remove('hidden');
  const ans = STATE.questions.examAnswers;
  const total = STATE.questions.pool.slice(0, ans.length).length || ans.length;
  const correct = ans.filter(Boolean).length;
  const score = total > 0 ? Math.round((correct / total) * 100) : 0;
  const pass = score >= 70;
  const display = document.getElementById('exam-score-display');
  display.innerHTML = `
    <div class="exam-score-big ${pass ? 'pass' : 'fail'}">${score}点</div>
    <div class="exam-result-label ${pass ? 'pass' : 'fail'}">${pass ? '🎉 合格！' : '😢 不合格'}</div>
    <div class="exam-result-details">${correct}問正解 / ${total}問中 （合格基準：70点以上）</div>
    <div style="margin-top:16px;font-size:13px;color:#888">${pass ? 'おめでとうございます！この調子で本番も頑張りましょう！' : '苦手分野を重点的に復習しましょう。再チャレンジ！'}</div>`;
  document.getElementById('retry-exam').onclick = () => startQuestionMode('exam');
  document.getElementById('back-from-exam').onclick = showQuestionModeScreen;
}

// ---- GLOSSARY タブ ----

function renderGlossary() {
  if (!window.GLOSSARY) return;
  filterGlossary();
}

function filterGlossary() {
  const search = document.getElementById('glossary-search').value.toLowerCase();
  const cat = STATE.glossary.cat;
  let items = window.GLOSSARY;
  if (cat !== 'all') items = items.filter(g => g.cat === cat);
  if (search) items = items.filter(g =>
    (g.term && g.term.toLowerCase().includes(search)) ||
    (g.read && g.read.includes(search)) ||
    (g.def && g.def.toLowerCase().includes(search)) ||
    (g.point && g.point.toLowerCase().includes(search))
  );
  document.getElementById('glossary-count').textContent = `${items.length}件`;
  const container = document.getElementById('glossary-list');
  container.innerHTML = items.map(g => renderGlossaryCard(g)).join('');
  container.querySelectorAll('.glossary-card').forEach(card => {
    card.addEventListener('click', () => {
      const front = card.querySelector('.gc-front');
      const back = card.querySelector('.gc-back');
      const isShowingFront = back.style.display === 'none' || back.style.display === '';
      if (isShowingFront) {
        // 表→裏へ
        front.style.display = 'none';
        back.style.display = 'block';
        // 初回タップでチェック記録
        if (!card.dataset.checked) {
          card.dataset.checked = '1';
          const tid = card.dataset.slide;
          if (tid) recordVisit(tid, 'glossary');
        }
      } else {
        // 裏→表へ
        back.style.display = 'none';
        front.style.display = '';
      }
    });
    const slideLink = card.querySelector('.glossary-slide-link');
    if (slideLink) {
      slideLink.addEventListener('click', e => {
        e.stopPropagation();
        goToSlide(slideLink.dataset.theme);
      });
    }
  });
}

function renderGlossaryCard(g) {
  const catLabels = { asset: '資産', liability: '負債', equity: '純資産', revenue: '収益', expense: '費用', other: 'その他' };
  const badge = `<span class="glossary-cat-badge ${g.cat}">${catLabels[g.cat] || g.cat}</span>`;
  return `<div class="glossary-card ${g.cat}" data-id="${g.term}" data-slide="${g.themeId || ''}">
    <div class="gc-front">
      <div class="gc-front-inner">
        ${badge}
        <div class="gc-term">${g.term}</div>
        ${g.read ? `<div class="gc-read">（${g.read}）</div>` : ''}
      </div>
      <div class="gc-hint">👆 タップして確認</div>
    </div>
    <div class="gc-back" style="display:none">
      <div class="gc-back-header">
        ${badge}
        <span class="gc-term-sm">${g.term}</span>
      </div>
      <div class="gc-def">${g.def}</div>
      ${g.point ? `<div class="gc-point"><span class="gc-point-label">💡 ポイント</span>${g.point}</div>` : ''}
      ${g.themeId ? `<span class="glossary-slide-link" data-theme="${g.themeId}">📖 スライドで詳しく学ぶ</span>` : ''}
      <div class="gc-hint">🔄 タップで戻る</div>
    </div>
  </div>`;
}

function openGlossaryTerm(term) {
  const card = document.querySelector(`.glossary-card[data-id="${term}"]`);
  if (card) { card.classList.add('expanded'); card.scrollIntoView({ behavior: 'smooth' }); }
}

function filterGlossaryByTheme(themeId) {
  const related = window.GLOSSARY ? window.GLOSSARY.filter(g => g.themeId === themeId) : [];
  if (related.length) {
    STATE.glossary.cat = 'all';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
    renderGlossary();
    setTimeout(() => {
      const el = document.querySelector(`.glossary-card[data-id="${related[0].term}"]`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }
}

document.getElementById('glossary-search').addEventListener('input', filterGlossary);
document.getElementById('glossary-filters').addEventListener('click', e => {
  if (e.target.classList.contains('filter-btn')) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    STATE.glossary.cat = e.target.dataset.cat;
    filterGlossary();
  }
});

// ---- YOUTUBE タブ ----

function renderYouTube() {
  const container = document.getElementById('youtube-themes-list');
  let html = '';
  CHAPTERS.forEach(ch => {
    const themes = getChapterThemes(ch.id);
    html += `<div class="yt-chapter">
      <div class="yt-chapter-title">${ch.name}</div>`;
    themes.forEach(t => {
      const keyword = encodeURIComponent(`簿記3級 ${t.name}`);
      const url = `https://www.youtube.com/results?search_query=${keyword}`;
      html += `<div class="yt-theme-item">
        <span class="yt-theme-name">${t.name}</span>
        <a class="yt-search-btn" href="${url}" target="_blank" rel="noopener">▶ YouTube検索</a>
      </div>`;
    });
    html += '</div>';
  });
  container.innerHTML = html;
}

// ---- Utility ----
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  renderCountdown();
  renderProgressTable();
  setupGlobalSearch();
  renderYouTube();
  // Expose for slide buttons
  window.goToSlide = goToSlide;
  window.goToQuestionsForTheme = goToQuestionsForTheme;
  window.goToGlossaryForTheme = goToGlossaryForTheme;
});
