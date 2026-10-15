/**
 * ============================================================================
 * 수학 탐정 아카이브: 집합의 비밀을 풀어라! - 메인 스크립트 (app.js)
 * 기술 스택: Pure Vanilla JavaScript (No Frameworks, No Build, No External Libs)
 * ============================================================================
 */

/* ============================================================================
   [선생님을 위한 문제 편집 공간]
   선생님께서 나중에 다른 문제나 단원으로 바꾸실 때는 아래 STAGES 배열의
   내용(story, question, answer, hint 등)을 수정하시면 됩니다!
   ============================================================================ */
const STAGES = [
  {
    id: 1,
    name: "집합의 발견",
    story: "보안문 1: 집합 판별 센서가 가동 중입니다. 단서를 풀어 2자리 암호를 입력하세요!",
    codeLength: 2,
    answer: "27",
    renderClue: () => `
      <div class="puzzle-question-text">
        📁 [단서 1] 다음 보기 중 수학적 <span class="math-badge">집합</span>인 것의 번호는?<br>
        <div class="clue-options-grid">
          <div class="clue-opt-item"><strong>①</strong> 우리 학교에서 키가 큰 학생들의 모임</div>
          <div class="clue-opt-item"><strong>②</strong> 10 이하의 홀수의 모임</div>
          <div class="clue-opt-item"><strong>③</strong> 맛있는 과일들의 모임</div>
          <div class="clue-opt-item"><strong>④</strong> 아름다운 꽃들의 모임</div>
        </div>
      </div>
      <div class="puzzle-question-text" style="margin-top:14px;">
        📁 [단서 2] 집합 <span class="math-badge">A = {1, 3, 5, 7, 9}</span>에 속하는 원소 중<br>
        가장 큰 <span class="math-badge">소수(Prime Number)</span>는 얼마인가?
      </div>
      <div class="rule-tip" style="margin-top:12px;">
        🔐 <strong>암호 조합 규칙:</strong> [단서 1의 번호] + [단서 2의 소수] (총 2자리)
      </div>
    `,
    hintHtml: `
      <h4>💡 제1관 단서 해설</h4>
      <p><strong>1. 집합의 조건:</strong> 어떤 대상이 그 모임에 들어갈 수 있는지 기준이 <em>명확</em>해야 집합입니다. '키가 크다', '맛있다', '예쁘다'는 사람마다 기준이 주관적이므로 집합이 아닙니다. 따라서 <strong>②번(10 이하의 홀수)</strong>이 집합입니다.</p>
      <div class="hint-diagram">
        <strong>2. 소수(1보다 큰 자연수 중 1과 자기 자신만을 약수로 갖는 수):</strong><br>
        A의 원소 {1, 3, 5, 7, 9} 중에서<br>
        - 1은 소수가 아님<br>
        - 3, 5, 7은 소수<br>
        - 9는 3×3이므로 합성수<br>
        👉 따라서 가장 큰 소수는 <strong>7</strong>입니다!
      </div>
      <p>💡 결론: 단서 1의 번호 <strong>2</strong>와 단서 2의 소수 <strong>7</strong>을 조합하면 암호는 <strong>27</strong>입니다!</p>
    `
  },
  {
    id: 2,
    name: "부분집합의 서재",
    story: "보안문 2: 부분집합의 비밀 서재입니다. 금고의 개수 규칙을 계산해 암호를 맞히세요!",
    codeLength: 2,
    answer: "15",
    renderClue: () => `
      <div class="puzzle-question-text">
        📁 비밀 서재의 보관함에 집합 <span class="math-badge">S = {2, 4, 6}</span>이 적혀 있습니다.
      </div>
      <div class="clue-options-grid">
        <div class="clue-opt-item">
          <strong>단서 ①</strong> 집합 S의 <strong>모든 부분집합의 개수</strong>는 몇 개인가?
        </div>
        <div class="clue-opt-item">
          <strong>단서 ②</strong> 집합 S의 부분집합 중 자기 자신을 제외한 <strong>진부분집합의 개수</strong>는 몇 개인가?
        </div>
      </div>
      <div class="rule-tip" style="margin-top:14px;">
        🔐 <strong>암호 계산 규칙:</strong> [단서 ①의 개수] + [단서 ②의 개수]의 <strong>합</strong> (2자리 숫자)
      </div>
    `,
    hintHtml: `
      <h4>💡 제2관 부분집합 공식 힌트</h4>
      <p>원소의 개수가 n개인 집합의 부분집합 개수는 <strong>2ⁿ개</strong>입니다!</p>
      <div class="hint-diagram">
        집합 S = {2, 4, 6}의 원소 개수는 3개입니다.<br>
        - <strong>부분집합의 총 개수:</strong> 2³ = 2 × 2 × 2 = <strong>8개</strong><br>
        - <strong>진부분집합의 개수:</strong> 진짜 부분집합(자기 자신 1개 제외) = 8 - 1 = <strong>7개</strong>
      </div>
      <p>💡 두 개수를 합산하라고 했으므로: <strong>8 + 7 = 15</strong>가 암호입니다!</p>
    `
  },
  {
    id: 3,
    name: "교차로의 게이트",
    story: "보안문 3: 교차로에 벤 다이어그램 홀로그램이 나타났습니다. 겹치는 영역을 분석하세요!",
    codeLength: 2,
    answer: "56",
    renderClue: () => `
      <div class="puzzle-question-text">
        전체집합 <span class="math-badge">U = {1, 2, 3, 4, 5, 6, 7, 8}</span>에 대하여,<br>
        집합 <span class="math-badge">A = {1, 2, 3, 6}</span> (6의 약수)<br>
        집합 <span class="math-badge">B = {2, 3, 5, 7}</span> (8 이하의 소수)
      </div>
      <div class="venn-container">
        <!-- SVG 벤 다이어그램 -->
        <svg class="venn-svg" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <!-- 전체집합 U 사각형 -->
          <rect x="5" y="5" width="310" height="170" rx="12" fill="#0f172a" stroke="#00e5ff" stroke-width="1.5" stroke-dasharray="4"/>
          <text x="18" y="24" fill="#00e5ff" font-size="12" font-weight="bold">전체집합 U</text>
          
          <!-- 원 A -->
          <circle cx="120" cy="95" r="58" fill="rgba(0, 229, 255, 0.2)" stroke="#00e5ff" stroke-width="2"/>
          <text x="80" y="52" fill="#00e5ff" font-size="14" font-weight="bold">집합 A</text>
          
          <!-- 원 B -->
          <circle cx="200" cy="95" r="58" fill="rgba(157, 78, 221, 0.2)" stroke="#9d4edd" stroke-width="2"/>
          <text x="225" y="52" fill="#9d4edd" font-size="14" font-weight="bold">집합 B</text>

          <!-- 원소 텍스트 배치 -->
          <!-- A만의 영역 -->
          <text x="95" y="90" fill="#f0f4fc" font-size="13" font-weight="bold">1</text>
          <text x="95" y="115" fill="#f0f4fc" font-size="13" font-weight="bold">6</text>
          
          <!-- 교집합 A ∩ B 영역 -->
          <text x="156" y="88" fill="#ffd166" font-size="14" font-weight="bold">2</text>
          <text x="156" y="112" fill="#ffd166" font-size="14" font-weight="bold">3</text>
          
          <!-- B만의 영역 -->
          <text x="218" y="90" fill="#f0f4fc" font-size="13" font-weight="bold">5</text>
          <text x="218" y="115" fill="#f0f4fc" font-size="13" font-weight="bold">7</text>
          
          <!-- 바깥 원소 (4, 8) -->
          <text x="30" y="145" fill="#94a3b8" font-size="12">4</text>
          <text x="285" y="145" fill="#94a3b8" font-size="12">8</text>
        </svg>
        <span class="venn-desc">▲ 홀로그램 벤 다이어그램 분석 결과</span>
      </div>

      <div class="clue-options-grid">
        <div class="clue-opt-item">
          <strong>단서 ①</strong> 교집합 <span class="math-badge">A ∩ B</span>에 속한 모든 원소의 <strong>합</strong>은?
        </div>
        <div class="clue-opt-item">
          <strong>단서 ②</strong> 합집합 <span class="math-badge">A ∪ B</span>에 속한 원소의 <strong>개수</strong>는?
        </div>
      </div>
      <div class="rule-tip" style="margin-top:12px;">
        🔐 <strong>암호 조합 규칙:</strong> [단서 ①의 합] 뒤에 [단서 ②의 개수]를 이어붙인 2자리 암호
      </div>
    `,
    hintHtml: `
      <h4>💡 제3관 교집합과 합집합 힌트</h4>
      <p><strong>1. 교집합(A ∩ B):</strong> A와 B 양쪽에 공통으로 들어있는 가운데 영역입니다!</p>
      <div class="hint-diagram">
        그림의 노란색 가운데 교집합 영역에는 <strong>2, 3</strong>이 있습니다.<br>
        따라서 원소의 합은: 2 + 3 = <strong>5</strong>
      </div>
      <p><strong>2. 합집합(A ∪ B):</strong> A 또는 B에 속하는 모든 원소를 하나로 모은 것입니다!</p>
      <div class="hint-diagram">
        A ∪ B = {1, 2, 3, 5, 6, 7}<br>
        원소의 개수는 총 <strong>6개</strong>입니다.
      </div>
      <p>💡 결론: 단서 ①의 값 <strong>5</strong>와 단서 ②의 값 <strong>6</strong>을 이어붙이면 <strong>56</strong>입니다!</p>
    `
  },
  {
    id: 4,
    name: "여집합과 차집합의 금고",
    story: "최종 마스터 게이트: 마지막 문입니다! 여집합과 차집합의 순수 영역을 해독하세요.",
    codeLength: 2,
    answer: "63",
    renderClue: () => `
      <div class="puzzle-question-text">
        전체집합 <span class="math-badge">U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</span><br>
        <span class="math-badge">A = {2, 4, 6, 8, 10}</span> (짝수)<br>
        <span class="math-badge">B = {6, 7, 8, 9, 10}</span>
      </div>
      <div class="clue-options-grid">
        <div class="clue-opt-item">
          <strong>단서 ①</strong> 순수한 A만의 영역인 차집합 <span class="math-badge">A - B</span>의 <strong>원소들의 합</strong>은 얼마인가?
        </div>
        <div class="clue-opt-item">
          <strong>단서 ②</strong> 바깥 여집합 영역인 <span class="math-badge">(A ∪ B)ᶜ</span>에 속한 <strong>원소의 개수</strong>는 몇 개인가?
        </div>
      </div>
      <div class="rule-tip" style="margin-top:14px;">
        🔐 <strong>최종 암호 규칙:</strong> [단서 ①의 합] 뒤에 [단서 ②의 개수]를 이어붙인 2자리 마스터 코드
      </div>
    `,
    hintHtml: `
      <h4>💡 제4관 여집합과 차집합 힌트</h4>
      <p><strong>1. 차집합(A - B):</strong> 집합 A에서 B와 겹치는 부분을 뺀 <em>순수한 A만의 원소</em>입니다.</p>
      <div class="hint-diagram">
        A = {2, 4, 6, 8, 10} 중 B와 겹치는 원소는 {6, 8, 10}입니다.<br>
        이걸 빼면 남는 순수 A = {2, 4}<br>
        원소들의 합: 2 + 4 = <strong>6</strong>
      </div>
      <p><strong>2. 여집합 (A ∪ B)ᶜ:</strong> 전체집합 U 중에서 A와 B에 속하지 않는 바깥 원소들입니다.</p>
      <div class="hint-diagram">
        A ∪ B = {2, 4, 6, 7, 8, 9, 10}<br>
        전체 U = {1, 2, 3, ..., 10} 중 남은 원소 = <strong>{1, 3, 5}</strong><br>
        따라서 개수는 <strong>3개</strong>입니다!
      </div>
      <p>💡 결론: 6과 3을 이어붙인 <strong>63</strong>이 최종 마스터 암호입니다!</p>
    `
  }
];

/* ============================================================================
   효과음 신디사이저 엔진 (Web Audio API - 외부 음원 파일 없이 100% 자체 생성)
   ============================================================================ */
class SoundEngine {
  constructor() {
    this.audioCtx = null;
    this.enabled = true;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.15) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.audioCtx) return;

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  playKeyClick() {
    this.playTone(650, 'triangle', 0.04, 0.1);
  }

  playError() {
    this.playTone(180, 'sawtooth', 0.25, 0.25);
    setTimeout(() => this.playTone(140, 'sawtooth', 0.3, 0.25), 120);
  }

  playUnlock() {
    // 쾌활한 3단 상향 화음
    this.playTone(440, 'sine', 0.12, 0.2); // A4
    setTimeout(() => this.playTone(554.37, 'sine', 0.12, 0.2), 100); // C#5
    setTimeout(() => this.playTone(659.25, 'sine', 0.25, 0.25), 200); // E5
  }

  playFanfare() {
    // 최종 탈출 팡파르
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.3, 0.25), idx * 150);
    });
  }
}

/* ============================================================================
   폭죽 애니메이션 (Confetti Canvas)
   ============================================================================ */
class ConfettiEffect {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.animationId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start() {
    this.particles = [];
    const colors = ['#00e5ff', '#ffd166', '#ff4d6d', '#06d6a0', '#9d4edd', '#ffffff'];
    for (let i = 0; i < 90; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * -this.canvas.height,
        w: Math.random() * 9 + 4,
        h: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 4 + 2.5,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 6
      });
    }

    const loop = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        if (p.y > this.canvas.height) {
          p.y = -20;
          p.x = Math.random() * this.canvas.width;
        }

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rot * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        this.ctx.restore();
      });

      this.animationId = requestAnimationFrame(loop);
    };

    if (this.animationId) cancelAnimationFrame(this.animationId);
    loop();
  }

  stop() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

/* ============================================================================
   게임 메인 컨트롤러 클래스
   ============================================================================ */
class MathEscapeGame {
  constructor() {
    this.currentStageIndex = 0;
    this.hearts = 3;
    this.inputCode = "";
    this.studentName = "수학 탐정";
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.sound = new SoundEngine();
    this.confetti = new ConfettiEffect('confetti-canvas');

    // DOM 요소 캐싱
    this.screens = {
      intro: document.getElementById('screen-intro'),
      game: document.getElementById('screen-game'),
      success: document.getElementById('screen-success')
    };

    this.dom = {
      studentNameInput: document.getElementById('student-name-input'),
      btnStartGame: document.getElementById('btn-start-game'),
      stageBadge: document.getElementById('stage-badge'),
      stageNameDisplay: document.getElementById('stage-name-display'),
      timerDisplay: document.getElementById('timer-display'),
      heartsDisplay: document.getElementById('hearts-display'),
      btnSoundToggle: document.getElementById('btn-sound-toggle'),
      soundIcon: document.getElementById('sound-icon'),
      progressFill: document.getElementById('progress-fill'),
      progressSteps: document.getElementById('progress-steps'),
      roomCard: document.getElementById('room-card'),
      storyText: document.getElementById('story-text'),
      clueContent: document.getElementById('clue-content'),
      codeSlots: document.getElementById('code-slots'),
      codeMessage: document.getElementById('code-message'),
      lockIcon: document.getElementById('lock-icon'),
      btnOpenHint: document.getElementById('btn-open-hint'),
      hintModal: document.getElementById('hint-modal'),
      hintBody: document.getElementById('hint-body'),
      btnCloseHint: document.getElementById('btn-close-hint'),
      btnConfirmHint: document.getElementById('btn-confirm-hint'),
      btnSubmitCode: document.getElementById('btn-submit-code'),
      btnClearKey: document.getElementById('btn-clear-key'),
      btnBackspaceKey: document.getElementById('btn-backspace-key'),
      btnRestartGame: document.getElementById('btn-restart-game'),
      btnCaptureCert: document.getElementById('btn-capture-cert'),
      // 인증서 항목들
      certName: document.getElementById('cert-name'),
      certTime: document.getElementById('cert-time'),
      certHearts: document.getElementById('cert-hearts'),
      certGrade: document.getElementById('cert-grade'),
      certDate: document.getElementById('cert-date'),
      certNo: document.getElementById('cert-no')
    };

    this.bindEvents();
  }

  bindEvents() {
    // 1. 시작 버튼
    this.dom.btnStartGame.addEventListener('click', () => this.startGame());
    this.dom.studentNameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.startGame();
    });

    // 2. 키패드 숫자 입력
    document.querySelectorAll('.key-btn[data-key]').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-key');
        this.appendKey(key);
      });
    });

    // 키패드 보조 키
    this.dom.btnClearKey.addEventListener('click', () => this.clearCode());
    this.dom.btnBackspaceKey.addEventListener('click', () => this.backspaceCode());

    // 잠금 해제 제출
    this.dom.btnSubmitCode.addEventListener('click', () => this.verifyCode());

    // 키보드 직접 입력 지원 (PC 환경 배려)
    window.addEventListener('keydown', (e) => {
      if (!this.screens.game.classList.contains('active')) return;
      if (this.dom.hintModal.classList.contains('active')) return;

      if (e.key >= '0' && e.key <= '9') {
        this.appendKey(e.key);
      } else if (e.key === 'Backspace') {
        this.backspaceCode();
      } else if (e.key === 'Enter') {
        this.verifyCode();
      } else if (e.key === 'Escape') {
        this.clearCode();
      }
    });

    // 3. SOS 힌트 모달
    this.dom.btnOpenHint.addEventListener('click', () => this.openHint());
    this.dom.btnCloseHint.addEventListener('click', () => this.closeHint());
    this.dom.btnConfirmHint.addEventListener('click', () => this.closeHint());
    this.dom.hintModal.addEventListener('click', (e) => {
      if (e.target === this.dom.hintModal) this.closeHint();
    });

    // 4. 소리 토글
    this.dom.btnSoundToggle.addEventListener('click', () => {
      this.sound.enabled = !this.sound.enabled;
      this.dom.soundIcon.textContent = this.sound.enabled ? '🔊' : '🔇';
      if (this.sound.enabled) this.sound.playKeyClick();
    });

    // 5. 다시 시작 & 인쇄
    this.dom.btnRestartGame.addEventListener('click', () => this.resetGame());
    this.dom.btnCaptureCert.addEventListener('click', () => window.print());
  }

  showScreen(name) {
    Object.values(this.screens).forEach(scr => scr.classList.remove('active'));
    this.screens[name].classList.add('active');
  }

  startGame() {
    const rawName = this.dom.studentNameInput.value.trim();
    this.studentName = rawName || "수학 탐정";
    this.sound.init();
    this.sound.playUnlock();

    this.currentStageIndex = 0;
    this.hearts = 3;
    this.timerSeconds = 0;
    this.inputCode = "";

    this.startTimer();
    this.renderStage();
    this.showScreen('game');
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.updateTimerDisplay();
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      this.updateTimerDisplay();
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  updateTimerDisplay() {
    const mm = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
    const ss = String(this.timerSeconds % 60).padStart(2, '0');
    this.dom.timerDisplay.textContent = `${mm}:${ss}`;
  }

  renderStage() {
    const stage = STAGES[this.currentStageIndex];
    if (!stage) return;

    this.inputCode = "";
    this.dom.lockIcon.textContent = '🔒';
    this.dom.codeMessage.textContent = "자물쇠에 암호 숫자를 입력하세요.";
    this.dom.codeMessage.className = "code-message";

    // 상단 스테이지 헤더 업데이트
    this.dom.stageBadge.textContent = `제${stage.id}관`;
    this.dom.stageNameDisplay.textContent = stage.name;
    this.dom.storyText.textContent = stage.story;

    // 진행 바 업데이트
    const progressPercent = ((this.currentStageIndex + 1) / STAGES.length) * 100;
    this.dom.progressFill.style.width = `${progressPercent}%`;

    // 스텝 도트 업데이트
    const dots = this.dom.progressSteps.querySelectorAll('.step-dot');
    dots.forEach((dot, idx) => {
      dot.className = 'step-dot';
      if (idx < this.currentStageIndex) {
        dot.classList.add('completed');
        dot.textContent = `✓ ${idx + 1}관`;
      } else if (idx === this.currentStageIndex) {
        dot.classList.add('active');
        dot.textContent = `${idx + 1}관`;
      } else {
        dot.textContent = `${idx + 1}관`;
      }
    });

    // 하트 표시
    this.updateHeartsDisplay();

    // 단서 & 문제 렌더링
    this.dom.clueContent.innerHTML = stage.renderClue();

    // 슬롯 생성 (암호 자릿수만큼)
    this.renderCodeSlots(stage.codeLength);
  }

  renderCodeSlots(length) {
    this.dom.codeSlots.innerHTML = "";
    for (let i = 0; i < length; i++) {
      const char = this.inputCode[i] || "_";
      const isFilled = i < this.inputCode.length;
      const slotEl = document.createElement('span');
      slotEl.className = `slot ${isFilled ? 'filled' : 'empty'}`;
      slotEl.textContent = char;
      this.dom.codeSlots.appendChild(slotEl);
    }
  }

  appendKey(key) {
    const stage = STAGES[this.currentStageIndex];
    if (this.inputCode.length >= stage.codeLength) {
      this.sound.playTone(300, 'sine', 0.05, 0.1);
      return;
    }
    this.inputCode += key;
    this.sound.playKeyClick();
    this.renderCodeSlots(stage.codeLength);

    // 슬롯이 가득 찼으면 안내
    if (this.inputCode.length === stage.codeLength) {
      this.dom.codeMessage.textContent = "🔓 [잠금 해제 시도] 버튼을 누르세요!";
      this.dom.codeMessage.className = "code-message";
    }
  }

  clearCode() {
    this.inputCode = "";
    this.sound.playKeyClick();
    const stage = STAGES[this.currentStageIndex];
    this.renderCodeSlots(stage.codeLength);
    this.dom.codeMessage.textContent = "입력이 초기화되었습니다.";
    this.dom.codeMessage.className = "code-message";
  }

  backspaceCode() {
    if (this.inputCode.length > 0) {
      this.inputCode = this.inputCode.slice(0, -1);
      this.sound.playKeyClick();
      const stage = STAGES[this.currentStageIndex];
      this.renderCodeSlots(stage.codeLength);
    }
  }

  verifyCode() {
    const stage = STAGES[this.currentStageIndex];

    if (this.inputCode.length < stage.codeLength) {
      this.dom.codeMessage.textContent = `암호 ${stage.codeLength}자리를 모두 입력해 주세요.`;
      this.dom.codeMessage.className = "code-message error";
      this.sound.playError();
      this.shakeRoom();
      return;
    }

    if (this.inputCode === stage.answer) {
      // 정답! 잠금 해제
      this.sound.playUnlock();
      this.dom.lockIcon.textContent = '🔓';
      this.dom.codeMessage.textContent = "✨ 정답입니다! 잠금장치가 해제되었습니다!";
      this.dom.codeMessage.className = "code-message success";
      this.dom.roomCard.classList.add('unlock-pulse');

      setTimeout(() => {
        this.dom.roomCard.classList.remove('unlock-pulse');
        this.nextStage();
      }, 950);
    } else {
      // 오답 처리
      this.sound.playError();
      this.shakeRoom();
      this.hearts--;
      this.updateHeartsDisplay();

      if (this.hearts <= 0) {
        // 기회 소진 시: 학생을 좌절시키지 않고 SOS 힌트를 즉시 열어주고 하트 1개를 충전해 줌!
        this.dom.codeMessage.textContent = "⚠️ 모든 기회가 소진되어 긴급 SOS 힌트가 열립니다!";
        this.dom.codeMessage.className = "code-message error";
        setTimeout(() => {
          this.hearts = 1;
          this.updateHeartsDisplay();
          this.openHint();
        }, 600);
      } else {
        this.dom.codeMessage.textContent = `❌ 암호가 틀렸습니다! (남은 기회: ${this.hearts}회)`;
        this.dom.codeMessage.className = "code-message error";
      }

      // 오답 시 슬롯 초기화
      setTimeout(() => {
        this.inputCode = "";
        this.renderCodeSlots(stage.codeLength);
      }, 500);
    }
  }

  shakeRoom() {
    this.dom.roomCard.classList.remove('shake');
    void this.dom.roomCard.offsetWidth; // 리플로우 강제
    this.dom.roomCard.classList.add('shake');
  }

  updateHeartsDisplay() {
    let heartStr = "";
    for (let i = 0; i < 3; i++) {
      heartStr += i < this.hearts ? "❤️" : "🖤";
    }
    this.dom.heartsDisplay.textContent = heartStr;
  }

  nextStage() {
    this.currentStageIndex++;
    if (this.currentStageIndex >= STAGES.length) {
      this.gameClear();
    } else {
      this.renderStage();
    }
  }

  openHint() {
    const stage = STAGES[this.currentStageIndex];
    this.sound.playKeyClick();
    this.dom.hintBody.innerHTML = stage.hintHtml;
    this.dom.hintModal.classList.add('active');
  }

  closeHint() {
    this.sound.playKeyClick();
    this.dom.hintModal.classList.remove('active');
  }

  gameClear() {
    this.stopTimer();
    this.sound.playFanfare();
    this.confetti.start();

    // 인증서 데이터 바인딩
    const mm = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
    const ss = String(this.timerSeconds % 60).padStart(2, '0');
    const clearTimeStr = `${mm}분 ${ss}초`;

    // 랭크 계산
    let grade = "S 등급 (집합의 마스터)";
    let gradeClass = "grade-s";
    if (this.hearts < 2 || this.timerSeconds > 480) {
      grade = "A 등급 (노련한 탐정)";
    } else if (this.hearts < 3 || this.timerSeconds > 240) {
      grade = "S 등급 (집합의 마스터)";
    } else {
      grade = "Special S+ (전설의 수학 탐정)";
    }

    const today = new Date();
    const dateStr = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
    const randomCertNo = `SET-${today.getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    this.dom.certName.textContent = `탐정 ${this.studentName}`;
    this.dom.certTime.textContent = clearTimeStr;
    this.dom.certHearts.textContent = this.dom.heartsDisplay.textContent;
    this.dom.certGrade.textContent = grade;
    this.dom.certGrade.className = `stat-value ${gradeClass}`;
    this.dom.certDate.textContent = dateStr;
    this.dom.certNo.textContent = `NO. ${randomCertNo}`;

    this.showScreen('success');
  }

  resetGame() {
    this.confetti.stop();
    this.showScreen('intro');
  }
}

// 브라우저 DOM 로드 완료 시 인스턴스 실행
document.addEventListener('DOMContentLoaded', () => {
  window.mathEscapeGame = new MathEscapeGame();
});
