/**
 * SmartEye eQMS v2 - Motion & Cyber-MedTech Interactive Engine
 * Developed for S-Cube Technologies Limited Showcase
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  initParticleCanvas();
  initCardMouseTracking();
  initTraceabilityDemo();
  initRoiCalculator();
  initDemoModal();
  initTemplatesFilter();
  initMobileMenu();
});

// Mobile Navigation
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Particle Canvas Animation (Cinematic Neural / Medical Molecular Network)
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 16), 80);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(34, 211, 238, ' : 'rgba(52, 211, 153, ',
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  let mouse = { x: null, y: null, maxDist: 140 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + p.alpha + ')';
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#06B6D4';
      ctx.fill();

      // Connect lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(6, 182, 212, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.shadowBlur = 0;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// Mouse Radial Glow for Cyber Cards
function initCardMouseTracking() {
  const cards = document.querySelectorAll('.cyber-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Interactive Traceability Matrix Simulator
const traceScenarios = [
  {
    id: 'samd-ai',
    title: 'SaMD AI Diagnostic Arrhythmia Detection',
    userNeed: {
      code: 'UN-014',
      title: 'Real-time Arrhythmia Alerting',
      desc: 'Clinician alert notification within 500ms of irregular atrial rhythm detection.'
    },
    softwareReq: {
      code: 'SRS-204',
      title: 'Inference Latency & Accuracy',
      desc: 'ECG inference model sensitivity >= 98.5% with priority webhook dispatch < 350ms.'
    },
    hazard: {
      code: 'HAZ-089',
      risk: 'Delayed Alert Notification',
      severity: 'Critical (S4)',
      control: 'Dual fallback local alarm + Cloud heartbeat monitor'
    },
    testCase: {
      code: 'TC-VER-512',
      type: 'IEC 62304 Class B Automated Suite',
      result: 'PASSED (100% Coverage, 284ms latency)'
    },
    status: 'DHF & DMR Ready • 21 CFR Part 11 Signed'
  },
  {
    id: 'infusion-pump',
    title: 'Class IIb Infusion Pump Safety Interlock',
    userNeed: {
      code: 'UN-029',
      title: 'Bolus Over-Infusion Safety Lock',
      desc: 'Physically lock fluid flow if delivery rate exceeds programmed prescription limit.'
    },
    softwareReq: {
      code: 'SRS-418',
      title: 'Dynamic Motor Cutoff & Sensor Sync',
      desc: 'Dual optical rotary encoders cross-check stepper pulse count every 50ms.'
    },
    hazard: {
      code: 'HAZ-104',
      risk: 'Over-infusion Toxic Shock',
      severity: 'Catastrophic (S5)',
      control: 'Hardware watchdog circuit + Independent shut-off valve'
    },
    testCase: {
      code: 'TC-VAL-881',
      type: 'Hardware-in-the-Loop Fault Injection',
      result: 'PASSED (0.00ms safety overrun)'
    },
    status: 'MDR Technical File Linked • Audit Ready'
  },
  {
    id: 'cgm-biosensor',
    title: 'Continuous Glucose Monitor (CGM)',
    userNeed: {
      code: 'UN-062',
      title: 'Hypoglycemia Trend Forecasting',
      desc: 'Warn patient 20 minutes prior to anticipated blood glucose drop below 70 mg/dL.'
    },
    softwareReq: {
      code: 'SRS-109',
      title: 'Kalman Filter Prediction Algorithm',
      desc: 'Extrapolation engine computes velocity delta across 15-min sliding window.'
    },
    hazard: {
      code: 'HAZ-047',
      risk: 'Missed Nocturnal Severe Hypoglycemia',
      severity: 'Severe (S4)',
      control: 'Audio override through iOS/Android Do-Not-Disturb modes'
    },
    testCase: {
      code: 'TC-VER-301',
      type: 'Clinical Algorithm Bench Testing',
      result: 'PASSED (99.2% Trend Match)'
    },
    status: 'FDA 21 CFR 820 Validated • Trace Complete'
  }
];

function initTraceabilityDemo() {
  const container = document.getElementById('scenarioSelector');
  if (!container) return;

  function render(idx) {
    const s = traceScenarios[idx] || traceScenarios[0];

    document.getElementById('traceUnCode').textContent = s.userNeed.code;
    document.getElementById('traceUnTitle').textContent = s.userNeed.title;
    document.getElementById('traceUnDesc').textContent = s.userNeed.desc;

    document.getElementById('traceSrsCode').textContent = s.softwareReq.code;
    document.getElementById('traceSrsTitle').textContent = s.softwareReq.title;
    document.getElementById('traceSrsDesc').textContent = s.softwareReq.desc;

    document.getElementById('traceHazCode').textContent = s.hazard.code;
    document.getElementById('traceHazRisk').textContent = s.hazard.risk;
    document.getElementById('traceHazSeverity').textContent = s.hazard.severity;
    document.getElementById('traceHazControl').textContent = s.hazard.control;

    document.getElementById('traceTcCode').textContent = s.testCase.code;
    document.getElementById('traceTcType').textContent = s.testCase.type;
    document.getElementById('traceTcResult').textContent = s.testCase.result;

    document.getElementById('traceStatus').textContent = s.status;

    if (window.lucide) window.lucide.createIcons();
  }

  container.innerHTML = '';
  traceScenarios.forEach((sc, i) => {
    const btn = document.createElement('button');
    btn.className = `px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
      i === 0
        ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30'
        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
    }`;
    btn.textContent = sc.title;
    btn.addEventListener('click', () => {
      container.querySelectorAll('button').forEach(b => {
        b.className = 'px-3.5 py-1.5 rounded-full text-xs font-bold transition-all bg-slate-800/80 text-slate-300 hover:bg-slate-700';
      });
      btn.className = 'px-3.5 py-1.5 rounded-full text-xs font-bold transition-all bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30';
      render(i);
    });
    container.appendChild(btn);
  });

  render(0);
}

// ROI Calculator
function initRoiCalculator() {
  const teamInput = document.getElementById('calcTeamSize');
  const auditInput = document.getElementById('calcAudits');
  const rateInput = document.getElementById('calcHourlyRate');

  const outHours = document.getElementById('outHoursSaved');
  const outCost = document.getElementById('outCostSaved');
  const outVelocity = document.getElementById('outReleaseVelocity');

  if (!teamInput || !auditInput || !rateInput) return;

  function recalculate() {
    const team = parseInt(teamInput.value) || 12;
    const audits = parseInt(auditInput.value) || 3;
    const rate = parseInt(rateInput.value) || 85;

    const annualAdminHours = Math.round(team * 110);
    const auditHours = Math.round(audits * 140);
    const totalHours = annualAdminHours + auditHours;
    const totalDollars = totalHours * rate;

    outHours.textContent = totalHours.toLocaleString() + ' hrs';
    outCost.textContent = '$' + totalDollars.toLocaleString();
    outVelocity.textContent = '3.2x Velocity';
  }

  teamInput.addEventListener('input', recalculate);
  auditInput.addEventListener('input', recalculate);
  rateInput.addEventListener('input', recalculate);

  recalculate();
}

// Demo Booking Modal
function initDemoModal() {
  const openBtns = document.querySelectorAll('.open-demo-modal');
  const modal = document.getElementById('demoModal');
  const closeBtn = document.getElementById('closeDemoModal');
  const form = document.getElementById('demoForm');
  const successState = document.getElementById('demoSuccessState');

  if (!modal) return;

  function open(interest = 'Cinematic Platform Walkthrough') {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (document.getElementById('demoInterest')) {
      document.getElementById('demoInterest').value = interest;
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function close() {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const interest = btn.getAttribute('data-interest') || 'Executive Platform Demo';
      open(interest);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', close);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Connecting with QARA Director...';

      setTimeout(() => {
        form.classList.add('hidden');
        successState.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }, 700);
    });
  }

  const doneBtn = document.getElementById('demoDoneBtn');
  if (doneBtn) {
    doneBtn.addEventListener('click', () => {
      close();
      setTimeout(() => {
        if (form && successState) {
          form.reset();
          form.classList.remove('hidden');
          successState.classList.add('hidden');
          const submitBtn = form.querySelector('button[type="submit"]');
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Schedule Live Demo';
          }
        }
      }, 300);
    });
  }
}

// Template Filtering
function initTemplatesFilter() {
  const buttons = document.querySelectorAll('.template-filter-btn');
  const cards = document.querySelectorAll('.template-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      buttons.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'shadow-lg');
        b.classList.add('bg-slate-900', 'text-slate-300');
      });

      btn.classList.add('bg-cyan-500', 'text-slate-950', 'shadow-lg');
      btn.classList.remove('bg-slate-900', 'text-slate-300');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}
