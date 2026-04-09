<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>WorkforceIQ — README</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&family=Orbitron:wght@400;700;900&display=swap" rel="stylesheet"/>
<style>
  :root {
    --cyan: #00f5ff;
    --blue: #0066ff;
    --dark: #050a14;
    --card: #0a1628;
    --border: rgba(0,245,255,0.15);
    --text: #c8d8f0;
  }
 
  * { margin: 0; padding: 0; box-sizing: border-box; }
 
  body {
    background: var(--dark);
    color: var(--text);
    font-family: 'Space Grotesk', sans-serif;
    overflow-x: hidden;
  }
 
  /* SCROLL FADE IN */
  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
 
  /* STAR BACKGROUND */
  #stars {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }
  .star {
    position: absolute;
    border-radius: 50%;
    background: white;
    animation: twinkle var(--d) ease-in-out infinite;
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.9; }
  }
 
  /* HERO */
  .hero {
    position: relative;
    z-index: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
  }
 
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0,245,255,0.08);
    border: 1px solid var(--border);
    border-radius: 999px;
    padding: 6px 18px;
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 32px;
    animation: fadeDown 1s ease both;
  }
  .live-dot {
    width: 7px; height: 7px;
    background: #00ff88;
    border-radius: 50%;
    animation: pulse 1.5s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,136,0.5); }
    50% { box-shadow: 0 0 0 6px rgba(0,255,136,0); }
  }
 
  .hero h1 {
    font-family: 'Orbitron', monospace;
    font-size: clamp(2.8rem, 8vw, 6rem);
    font-weight: 900;
    line-height: 1;
    background: linear-gradient(135deg, #ffffff 0%, var(--cyan) 50%, var(--blue) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 12px;
    animation: fadeDown 1s 0.2s ease both;
  }
 
  .hero-sub {
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    color: rgba(200,216,240,0.6);
    margin-bottom: 40px;
    animation: fadeDown 1s 0.4s ease both;
  }
 
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
 
  /* GLOBE */
  .globe-wrap {
    position: relative;
    width: 220px;
    height: 220px;
    margin: 0 auto 48px;
    animation: fadeDown 1s 0.3s ease both;
  }
  canvas#globe {
    border-radius: 50%;
    box-shadow: 0 0 60px rgba(0,245,255,0.3), 0 0 120px rgba(0,102,255,0.15);
  }
  .globe-ring {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%) rotateX(75deg);
    width: 260px; height: 260px;
    border-radius: 50%;
    border: 1px solid rgba(0,245,255,0.2);
    animation: spin 8s linear infinite;
  }
  .globe-ring2 {
    width: 300px; height: 300px;
    border-color: rgba(0,102,255,0.12);
    animation: spin 12s linear infinite reverse;
  }
  @keyframes spin {
    from { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg); }
    to { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg); }
  }
 
  /* CTA BUTTON */
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, var(--cyan), var(--blue));
    color: #000;
    font-family: 'Orbitron', monospace;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 1px;
    padding: 14px 32px;
    border-radius: 8px;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    animation: fadeDown 1s 0.6s ease both;
    position: relative;
    overflow: hidden;
  }
  .cta-btn::before {
    content: '';
    position: absolute;
    top: -50%; left: -60%;
    width: 40%; height: 200%;
    background: rgba(255,255,255,0.3);
    transform: skewX(-20deg);
    animation: shine 3s ease-in-out infinite;
  }
  @keyframes shine {
    0% { left: -60%; }
    100% { left: 160%; }
  }
  .cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0,245,255,0.4);
  }
 
  /* STATS ROW */
  .stats {
    display: flex;
    gap: 32px;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 48px;
    animation: fadeDown 1s 0.8s ease both;
  }
  .stat {
    text-align: center;
  }
  .stat-num {
    font-family: 'Orbitron', monospace;
    font-size: 2rem;
    font-weight: 700;
    color: var(--cyan);
    display: block;
  }
  .stat-label {
    font-size: 0.7rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(200,216,240,0.4);
  }
 
  /* SECTION */
  section {
    position: relative;
    z-index: 1;
    max-width: 1000px;
    margin: 0 auto;
    padding: 80px 24px;
  }
 
  .section-label {
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 12px;
  }
 
  .section-title {
    font-family: 'Orbitron', monospace;
    font-size: clamp(1.6rem, 4vw, 2.4rem);
    font-weight: 700;
    color: white;
    margin-bottom: 48px;
  }
 
  /* CHARACTER */
  .character-wrap {
    display: flex;
    align-items: center;
    gap: 48px;
    flex-wrap: wrap;
  }
  .character-svg {
    flex: 0 0 200px;
    animation: float 4s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-16px); }
  }
  .character-text h3 {
    font-family: 'Orbitron', monospace;
    font-size: 1.4rem;
    color: white;
    margin-bottom: 12px;
  }
  .character-text p {
    color: rgba(200,216,240,0.6);
    line-height: 1.7;
    font-size: 0.95rem;
  }
 
  /* STACK GRID */
  .stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
  }
  .stack-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
    cursor: default;
  }
  .stack-card:hover {
    transform: translateY(-6px);
    border-color: var(--cyan);
    box-shadow: 0 8px 32px rgba(0,245,255,0.15);
  }
  .stack-icon {
    font-size: 2.2rem;
    margin-bottom: 12px;
    display: block;
  }
  .stack-name {
    font-family: 'Orbitron', monospace;
    font-size: 0.8rem;
    color: var(--cyan);
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
  .stack-desc {
    font-size: 0.75rem;
    color: rgba(200,216,240,0.4);
  }
 
  /* FEATURES */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
  }
  .feature-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .feature-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--cyan), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,245,255,0.1);
  }
  .feature-card:hover::before { opacity: 1; }
  .feature-emoji { font-size: 1.8rem; margin-bottom: 12px; display: block; }
  .feature-title {
    font-family: 'Orbitron', monospace;
    font-size: 0.85rem;
    color: white;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
  }
  .feature-desc { font-size: 0.82rem; color: rgba(200,216,240,0.5); line-height: 1.6; }
 
  /* PIPELINE */
  .pipeline {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .pipe-node {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 20px;
    text-align: center;
    min-width: 110px;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .pipe-node:hover {
    border-color: var(--cyan);
    box-shadow: 0 0 20px rgba(0,245,255,0.2);
  }
  .pipe-icon { font-size: 1.5rem; display: block; margin-bottom: 6px; }
  .pipe-name { font-family: 'Orbitron', monospace; font-size: 0.65rem; color: var(--cyan); letter-spacing: 1px; }
  .pipe-arrow {
    color: var(--cyan);
    font-size: 1.2rem;
    padding: 0 8px;
    animation: arrowPulse 1.5s ease-in-out infinite;
  }
  @keyframes arrowPulse {
    0%, 100% { opacity: 0.3; transform: translateX(0); }
    50% { opacity: 1; transform: translateX(4px); }
  }
 
  /* IMPACT */
  .impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  .impact-card {
    background: linear-gradient(135deg, rgba(0,245,255,0.05), rgba(0,102,255,0.05));
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px;
    text-align: center;
  }
  .impact-num {
    font-family: 'Orbitron', monospace;
    font-size: 2rem;
    font-weight: 900;
    color: var(--cyan);
    display: block;
    margin-bottom: 6px;
  }
  .impact-label { font-size: 0.75rem; color: rgba(200,216,240,0.5); letter-spacing: 1px; text-transform: uppercase; }
 
  /* DIVIDER */
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
    margin: 0 24px;
  }
 
  /* FOOTER */
  footer {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 60px 24px;
    border-top: 1px solid var(--border);
  }
  footer p { font-size: 0.8rem; color: rgba(200,216,240,0.3); letter-spacing: 1px; }
  footer a { color: var(--cyan); text-decoration: none; }
 
  /* SCAN LINE */
  .scanline {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 999;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.03) 2px,
      rgba(0,0,0,0.03) 4px
    );
  }
 
  /* SCROLL INDICATOR */
  .scroll-hint {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.4;
    animation: fadeDown 1s 1.2s ease both;
  }
  .scroll-hint span { font-size: 0.65rem; letter-spacing: 3px; text-transform: uppercase; }
  .scroll-mouse {
    width: 20px; height: 32px;
    border: 1px solid rgba(200,216,240,0.4);
    border-radius: 10px;
    position: relative;
  }
  .scroll-mouse::after {
    content: '';
    position: absolute;
    top: 5px; left: 50%;
    transform: translateX(-50%);
    width: 3px; height: 6px;
    background: var(--cyan);
    border-radius: 2px;
    animation: scrollDot 1.5s ease-in-out infinite;
  }
  @keyframes scrollDot {
    0%, 100% { top: 5px; opacity: 1; }
    100% { top: 18px; opacity: 0; }
  }
</style>
</head>
<body>
 
<div class="scanline"></div>
<div id="stars"></div>
 
<!-- HERO -->
<div class="hero">
  <div class="hero-badge"><span class="live-dot"></span> Live Project</div>
 
  <div class="globe-wrap">
    <div class="globe-ring"></div>
    <div class="globe-ring globe-ring2"></div>
    <canvas id="globe" width="220" height="220"></canvas>
  </div>
 
  <h1>WorkforceIQ</h1>
  <p class="hero-sub">People analytics that drive decisions</p>
 
  <a href="https://workforceiq.netlify.app/" target="_blank" class="cta-btn">
    🚀 Launch Live Demo
  </a>
 
  <div class="stats">
    <div class="stat"><span class="stat-num">5K</span><span class="stat-label">Employees</span></div>
    <div class="stat"><span class="stat-num">47</span><span class="stat-label">dbt Models</span></div>
    <div class="stat"><span class="stat-num">99.7%</span><span class="stat-label">Uptime</span></div>
    <div class="stat"><span class="stat-num">&lt;24h</span><span class="stat-label">Alert SLA</span></div>
  </div>
 
  <div class="scroll-hint">
    <div class="scroll-mouse"></div>
    <span>Scroll</span>
  </div>
</div>
 
<div class="divider"></div>
 
<!-- CHARACTER SECTION -->
<section>
  <div class="reveal">
    <p class="section-label">The Story</p>
    <h2 class="section-title">Why I built this</h2>
  </div>
  <div class="character-wrap reveal">
    <div class="character-svg">
      <svg viewBox="0 0 200 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Body -->
        <rect x="60" y="130" width="80" height="90" rx="16" fill="#0a1628" stroke="#00f5ff" stroke-width="1.5"/>
        <!-- Head -->
        <circle cx="100" cy="95" r="38" fill="#0a1628" stroke="#00f5ff" stroke-width="1.5"/>
        <!-- Eyes -->
        <circle cx="86" cy="90" r="6" fill="#00f5ff"/>
        <circle cx="114" cy="90" r="6" fill="#00f5ff"/>
        <circle cx="88" cy="88" r="2" fill="#050a14"/>
        <circle cx="116" cy="88" r="2" fill="#050a14"/>
        <!-- Smile -->
        <path d="M88 106 Q100 116 112 106" stroke="#00f5ff" stroke-width="2" stroke-linecap="round" fill="none"/>
        <!-- Tie -->
        <polygon points="100,130 93,150 100,145 107,150" fill="#0066ff"/>
        <polygon points="93,150 107,150 103,175 97,175" fill="#0044cc"/>
        <!-- Arms -->
        <rect x="20" y="135" width="40" height="14" rx="7" fill="#0a1628" stroke="#00f5ff" stroke-width="1.5" transform="rotate(-15 40 142)"/>
        <rect x="140" y="135" width="40" height="14" rx="7" fill="#0a1628" stroke="#00f5ff" stroke-width="1.5" transform="rotate(15 160 142)"/>
        <!-- Clipboard in hand -->
        <rect x="148" y="148" width="28" height="36" rx="4" fill="#050a14" stroke="#00f5ff" stroke-width="1"/>
        <line x1="153" y1="157" x2="171" y2="157" stroke="#00f5ff" stroke-width="1" opacity="0.5"/>
        <line x1="153" y1="163" x2="171" y2="163" stroke="#00f5ff" stroke-width="1" opacity="0.5"/>
        <line x1="153" y1="169" x2="165" y2="169" stroke="#00f5ff" stroke-width="1" opacity="0.5"/>
        <!-- Legs -->
        <rect x="72" y="218" width="22" height="45" rx="8" fill="#0a1628" stroke="#00f5ff" stroke-width="1.5"/>
        <rect x="106" y="218" width="22" height="45" rx="8" fill="#0a1628" stroke="#00f5ff" stroke-width="1.5"/>
        <!-- Antenna -->
        <line x1="100" y1="57" x2="100" y2="40" stroke="#00f5ff" stroke-width="1.5"/>
        <circle cx="100" cy="37" r="4" fill="#00f5ff">
          <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        <!-- Screen on chest -->
        <rect x="72" y="140" width="56" height="36" rx="6" fill="#050a14" stroke="#00f5ff" stroke-width="1"/>
        <polyline points="76,168 84,155 92,162 102,148 112,158 120,152 124,160" stroke="#00ff88" stroke-width="1.5" fill="none"/>
      </svg>
    </div>
    <div class="character-text">
      <h3>Meet the Problem Solver</h3>
      <p>An HR friend mentioned her team spent <strong style="color:var(--cyan)">18+ hours weekly</strong> building Excel reports — and by the time they were ready, the data was already stale. Leaders were making major workforce decisions in the dark.</p>
      <br/>
      <p>I had free time, a builder mindset, and a clear problem. So I built <strong style="color:var(--cyan)">WorkforceIQ</strong> — a real-time people analytics platform that eliminates manual reporting entirely.</p>
    </div>
  </div>
</section>
 
<div class="divider"></div>
 
<!-- STACK -->
<section>
  <div class="reveal">
    <p class="section-label">Infrastructure</p>
    <h2 class="section-title">The Stack</h2>
  </div>
 
  <div class="pipeline reveal" style="margin-bottom:40px;">
    <div class="pipe-node"><span class="pipe-icon">🗄️</span><span class="pipe-name">Snowflake</span></div>
    <span class="pipe-arrow">→</span>
    <div class="pipe-node"><span class="pipe-icon">⚙️</span><span class="pipe-name">dbt Core</span></div>
    <span class="pipe-arrow">→</span>
    <div class="pipe-node"><span class="pipe-icon">🔄</span><span class="pipe-name">Airflow</span></div>
    <span class="pipe-arrow">→</span>
    <div class="pipe-node"><span class="pipe-icon">📊</span><span class="pipe-name">Tableau</span></div>
  </div>
 
  <div class="stack-grid reveal">
    <div class="stack-card"><span class="stack-icon">🗄️</span><div class="stack-name">Snowflake</div><div class="stack-desc">Data Warehouse · Star Schema</div></div>
    <div class="stack-card"><span class="stack-icon">⚙️</span><div class="stack-name">dbt Core</div><div class="stack-desc">47 Models · Tests · Lineage</div></div>
    <div class="stack-card"><span class="stack-icon">🔄</span><div class="stack-name">Airflow</div><div class="stack-desc">Orchestration · Anomaly Alerts</div></div>
    <div class="stack-card"><span class="stack-icon">📊</span><div class="stack-name">Tableau</div><div class="stack-desc">RLS · 4 Stakeholder Views</div></div>
    <div class="stack-card"><span class="stack-icon">🐍</span><div class="stack-name">Python</div><div class="stack-desc">ETL · Data Validation</div></div>
    <div class="stack-card"><span class="stack-icon">☁️</span><div class="stack-name">Netlify</div><div class="stack-desc">Live Deployment · CI/CD</div></div>
  </div>
</section>
 
<div class="divider"></div>
 
<!-- FEATURES -->
<section>
  <div class="reveal">
    <p class="section-label">What it does</p>
    <h2 class="section-title">Key Features</h2>
  </div>
  <div class="features-grid reveal">
    <div class="feature-card"><span class="feature-emoji">📈</span><div class="feature-title">Overview Dashboard</div><div class="feature-desc">Live headcount, attrition rate, open reqs & days to fill — all in one view.</div></div>
    <div class="feature-card"><span class="feature-emoji">⚠️</span><div class="feature-title">Turnover Risk</div><div class="feature-desc">Risk scores by department, 12-month trends, and red-flagged teams before crisis hits.</div></div>
    <div class="feature-card"><span class="feature-emoji">🌍</span><div class="feature-title">Diversity Metrics</div><div class="feature-desc">Gender, ethnicity, pay equity ratio, and ERG participation tracked quarter over quarter.</div></div>
    <div class="feature-card"><span class="feature-emoji">🎯</span><div class="feature-title">Recruitment Pipeline</div><div class="feature-desc">Full hiring funnel — 340 applicants to 24 hires — with requisition aging distribution.</div></div>
    <div class="feature-card"><span class="feature-emoji">🔔</span><div class="feature-title">Airflow Alerts</div><div class="feature-desc">Automated anomaly detection flags attrition breaches within 24 hours. Zero manual scans.</div></div>
    <div class="feature-card"><span class="feature-emoji">🔐</span><div class="feature-title">Row-Level Security</div><div class="feature-desc">4 stakeholder groups — each sees only what's relevant to them. Clean data governance.</div></div>
  </div>
</section>
 
<div class="divider"></div>
 
<!-- IMPACT -->
<section>
  <div class="reveal">
    <p class="section-label">Results</p>
    <h2 class="section-title">Real Impact</h2>
  </div>
  <div class="impact-grid reveal">
    <div class="impact-card"><span class="impact-num">0h</span><span class="impact-label">Manual Reporting<br/>(was 18h/week)</span></div>
    <div class="impact-card"><span class="impact-num">Hourly</span><span class="impact-label">Data Refresh<br/>(was daily)</span></div>
    <div class="impact-card"><span class="impact-num">99.7%</span><span class="impact-label">Pipeline Uptime</span></div>
    <div class="impact-card"><span class="impact-num">&lt;24h</span><span class="impact-label">Alert Detection<br/>Latency</span></div>
  </div>
</section>
 
<div class="divider"></div>
 
<!-- FOOTER -->
<footer>
  <a href="https://workforceiq.netlify.app/" target="_blank" class="cta-btn" style="margin-bottom:32px; display:inline-flex;">
    🚀 View Live Demo
  </a>
  <br/><br/>
  <p>Built by <a href="https://linkedin.com/in/chetanchiragkh">Chetan Chirag KH</a> · Snowflake · dbt · Airflow · Tableau</p>
  <br/>
  <p style="font-size:0.7rem; opacity:0.5;">© 2025 WorkforceIQ · People analytics that drive decisions</p>
</footer>
 
<script>
// STARS
const starsEl = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random() * 2 + 0.5;
  s.style.cssText = `
    width:${size}px; height:${size}px;
    top:${Math.random()*100}%; left:${Math.random()*100}%;
    --d:${2 + Math.random()*4}s;
    animation-delay:${Math.random()*4}s;
  `;
  starsEl.appendChild(s);
}
 
// GLOBE
const canvas = document.getElementById('globe');
const ctx = canvas.getContext('2d');
const W = 220, H = 220, R = 100;
let angle = 0;
 
const dots = [];
for (let i = 0; i < 300; i++) {
  const lat = (Math.random() - 0.5) * Math.PI;
  const lon = Math.random() * Math.PI * 2;
  dots.push({ lat, lon });
}
 
function project(lat, lon, rot) {
  const x = Math.cos(lat) * Math.sin(lon + rot);
  const y = Math.sin(lat);
  const z = Math.cos(lat) * Math.cos(lon + rot);
  return { x: x * R + W/2, y: -y * R + H/2, z };
}
 
function drawGlobe() {
  ctx.clearRect(0, 0, W, H);
 
  // Globe base
  const grad = ctx.createRadialGradient(W/2-20, H/2-20, 10, W/2, H/2, R);
  grad.addColorStop(0, 'rgba(0,102,255,0.15)');
  grad.addColorStop(1, 'rgba(0,245,255,0.03)');
  ctx.beginPath();
  ctx.arc(W/2, H/2, R, 0, Math.PI*2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,245,255,0.2)';
  ctx.lineWidth = 1;
  ctx.stroke();
 
  // Latitude lines
  for (let lat = -60; lat <= 60; lat += 30) {
    ctx.beginPath();
    const latR = (lat * Math.PI) / 180;
    const r2 = Math.cos(latR) * R;
    const yy = -Math.sin(latR) * R + H/2;
    ctx.ellipse(W/2, yy, r2, r2 * 0.2, 0, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(0,245,255,0.08)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
 
  // Dots
  dots.forEach(d => {
    const p = project(d.lat, d.lon, angle);
    if (p.z > 0) {
      const alpha = p.z * 0.8;
      const size = p.z * 2.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI*2);
      ctx.fillStyle = `rgba(0,245,255,${alpha})`;
      ctx.fill();
    }
  });
 
  // Glow
  const glow = ctx.createRadialGradient(W/2+30, H/2-30, 0, W/2, H/2, R);
  glow.addColorStop(0, 'rgba(255,255,255,0.04)');
  glow.addColorStop(1, 'transparent');
  ctx.beginPath();
  ctx.arc(W/2, H/2, R, 0, Math.PI*2);
  ctx.fillStyle = glow;
  ctx.fill();
 
  angle += 0.008;
  requestAnimationFrame(drawGlobe);
}
drawGlobe();
 
// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));
 
// COUNT UP ANIMATION
function countUp(el, target, suffix = '') {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}
</script>
</body>
</html>
