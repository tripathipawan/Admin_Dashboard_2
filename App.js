/* ═══════════════════════════════════════════════════════════════
   AdminDash — app.js  (Single shared JS file)
   
   SECTIONS:
     1.  SIDEBAR HTML          — injected into every page
     2.  NAVBAR HTML           — injected into every page
     3.  initLayout(page)      — call on every page
     4.  Sidebar toggle        — ✅ FIX: CSS class .collapsed (no inline styles)
     5.  Theme toggle          — dark / light mode
     6.  Notification panel    — bell dropdown
     7.  Fullscreen toggle
     8.  Top progress bar      — NProgress style
     9.  Toast notification    — bottom-right pop
     10. countUp()             — animated stat counter
     11. sparkline()           — mini bar chart
     12. Helpers               — ini(), avHtml(), gc()
   ═══════════════════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────────────
   1. SIDEBAR HTML
   - data-page attribute used for active state matching
   - .logo-wrap / .nav-label / .nav-badge / .sec-label / .user-name
     are hidden via CSS when #sidebar has .collapsed class
   ───────────────────────────────────────────────────────────── */
const SIDEBAR_HTML = `
<aside id="sidebar">

  <!-- Logo -->
  <div class="logo-wrap" style="display:flex;align-items:center;gap:12px;padding:16px 14px;border-bottom:1px solid var(--border);flex-shrink:0;overflow:hidden;transition:padding .28s">
    <div style="width:36px;height:36px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;color:#fff;letter-spacing:-.5px;font-family:var(--font-display);background:linear-gradient(135deg,#3b82f6,#6366f1);box-shadow:0 0 18px rgba(99,102,241,.5)">AD</div>
    <span class="logo-text" style="font-family:var(--font-display);font-size:17px;font-weight:800;color:var(--text);white-space:nowrap;letter-spacing:-.4px;transition:opacity .2s,width .28s">AdminDash</span>
  </div>

  <!-- Navigation -->
  <nav style="flex:1;overflow-y:auto;overflow-x:hidden;padding:8px">

    <p class="sec-label">Main</p>
    <hr class="sec-div"/>
    <a href="index.html"    data-page="dashboard" class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
      <span class="nav-label">Dashboard</span>
      <span class="tip">Dashboard</span>
    </a>
    <a href="profile.html"  data-page="profile"   class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
      <span class="nav-label">Profile</span>
      <span class="tip">Profile</span>
    </a>

    <p class="sec-label">Lists</p>
    <hr class="sec-div"/>
    <a href="users.html"    data-page="users"    class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
      <span class="nav-label">Users</span>
      <span class="nav-badge">248</span>
      <span class="tip">Users</span>
    </a>
    <a href="products.html" data-page="products" class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg></span>
      <span class="nav-label">Products</span>
      <span class="tip">Products</span>
    </a>
    <a href="orders.html"   data-page="orders"   class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" x2="21" y1="6" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg></span>
      <span class="nav-label">Orders</span>
      <span class="nav-badge">12</span>
      <span class="tip">Orders</span>
    </a>
    <a href="posts.html"    data-page="posts"    class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/></svg></span>
      <span class="nav-label">Posts</span>
      <span class="tip">Posts</span>
    </a>

    <p class="sec-label">Analytics</p>
    <hr class="sec-div"/>
    <a href="analytics.html" data-page="analytics" class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg></span>
      <span class="nav-label">Analytics</span>
      <span class="tip">Analytics</span>
    </a>
    <a href="reports.html"   data-page="reports"   class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
      <span class="nav-label">Reports</span>
      <span class="tip">Reports</span>
    </a>

    <p class="sec-label">General</p>
    <hr class="sec-div"/>
    <a href="messages.html" data-page="messages" class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
      <span class="nav-label">Messages</span>
      <span class="nav-badge">5</span>
      <span class="tip">Messages</span>
    </a>
    <a href="elements.html"  data-page="elements"  class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg></span>
      <span class="nav-label">Elements</span>
      <span class="tip">Elements</span>
    </a>
    <a href="calendar.html"  data-page="calendar"  class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg></span>
      <span class="nav-label">Calendar</span>
      <span class="tip">Calendar</span>
    </a>

    <p class="sec-label">Maintenance</p>
    <hr class="sec-div"/>
    <a href="settings.html"  data-page="settings"  class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg></span>
      <span class="nav-label">Settings</span>
      <span class="tip">Settings</span>
    </a>
    <a href="backups.html"   data-page="backups"   class="nav-item">
      <span class="nav-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg></span>
      <span class="nav-label">Backups</span>
      <span class="tip">Backups</span>
    </a>
  </nav>

  <!-- User Card -->
  <div class="user-card" style="display:flex;align-items:center;gap:10px;padding:12px 14px;border-top:1px solid var(--border);flex-shrink:0;cursor:pointer;overflow:hidden;transition:background .12s,padding .28s">
    <img src="https://ui-avatars.com/api/?name=Pawan+Tripathi&background=4f46e5&color=fff&size=80"
      style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid rgba(99,102,241,.45);box-shadow:0 0 10px rgba(99,102,241,.3)" alt="user"/>
    <div style="min-width:0;flex:1;overflow:hidden">
      <div class="user-name" style="font-size:13px;font-weight:600;color:var(--text);white-space:nowrap;transition:opacity .2s,width .28s;font-family:var(--font-body)">Pawan Tripathi</div>
      <div class="user-role" style="font-size:10.5px;color:var(--muted2);white-space:nowrap;transition:opacity .2s,width .28s">Super Admin</div>
    </div>
  </div>
</aside>`;


/* ─────────────────────────────────────────────────────────────
   2. NAVBAR HTML
   - Injects as first child of #main-wrapper
   - Includes search, theme toggle, notifications, user pill
   ───────────────────────────────────────────────────────────── */
const NAVBAR_HTML = `
<div class="navbar-inner">

  <!-- Hamburger -->
  <button class="hamburger" onclick="toggleSidebar()" aria-label="Toggle sidebar">
    <span></span><span></span><span></span>
  </button>

  <!-- Search -->
  <div class="search-wrap">
    <svg width="14" height="14" fill="none" stroke="var(--muted2)" stroke-width="2" viewBox="0 0 24 24" style="flex-shrink:0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
    <input id="searchInput" placeholder="Search anything... (Ctrl+K)" autocomplete="off"/>
    <kbd style="font-size:10px;padding:2px 7px;border-radius:5px;border:1px solid var(--border2);color:var(--muted2);background:var(--surface3);white-space:nowrap;font-family:var(--font-body)">Ctrl K</kbd>
  </div>

  <!-- Right Actions -->
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">

    <!-- Theme Pill -->
    <div class="theme-pill" id="themePill" onclick="toggleTheme()" title="Toggle theme">
      <div class="theme-pill-thumb" id="themePillThumb">🌙</div>
    </div>

    <!-- Notifications -->
    <button class="icon-btn" onclick="toggleNotif(event)" style="position:relative" title="Notifications">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      <span id="notifBadge" style="position:absolute;top:-4px;right:-4px;width:16px;height:16px;border-radius:50%;background:#ef4444;color:#fff;font-size:8.5px;font-weight:700;display:flex;align-items:center;justify-content:center;border:2px solid var(--surface);font-family:var(--font-body)">3</span>
    </button>

    <!-- Fullscreen -->
    <button class="icon-btn" onclick="toggleFS()" title="Fullscreen">
      <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.9" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
    </button>

    <div style="width:1px;height:22px;background:var(--border2);margin:0 2px"></div>

    <!-- User Pill -->
    <div style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:5px 8px;border-radius:10px;transition:background .12s" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background=''">
      <img src="https://ui-avatars.com/api/?name=Pawan+Tripathi&background=4f46e5&color=fff&size=80"
        style="width:30px;height:30px;border-radius:50%;object-fit:cover;border:2px solid rgba(99,102,241,.4)" alt="user"/>
      <div style="display:none" class="user-pill-text">
        <div style="font-size:13px;font-weight:600;line-height:1.2;color:var(--text);font-family:var(--font-body)">Pawan</div>
        <div style="font-size:10px;color:var(--muted2);font-family:var(--font-body)">Admin</div>
      </div>
    </div>
  </div>
</div>

<!-- Notification Panel -->
<div id="notifPanel" class="hidden" style="display:none">
  <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid var(--border)">
    <span style="font-family:var(--font-display);font-size:14px;font-weight:700;color:var(--text)">Notifications</span>
    <span style="font-size:12px;font-weight:600;color:var(--blue);cursor:pointer" onclick="clearNotifs()">Mark all read</span>
  </div>
  <div class="notif-item unread" onclick="clearNotifs()" style="display:flex;gap:10px;padding:12px 16px;border-bottom:1px solid var(--border);cursor:pointer;background:var(--blue-dim);transition:background .12s">
    <div style="width:8px;height:8px;border-radius:50%;background:var(--blue);flex-shrink:0;margin-top:4px"></div>
    <div><div style="font-size:12.5px;color:var(--text);font-family:var(--font-body)">New user <strong>Sarah Connor</strong> registered</div><div style="font-size:11px;color:var(--muted2);margin-top:2px;font-family:var(--font-body)">2 minutes ago</div></div>
  </div>
  <div class="notif-item unread" onclick="clearNotifs()" style="display:flex;gap:10px;padding:12px 16px;border-bottom:1px solid var(--border);cursor:pointer;background:var(--blue-dim);transition:background .12s">
    <div style="width:8px;height:8px;border-radius:50%;background:var(--blue);flex-shrink:0;margin-top:4px"></div>
    <div><div style="font-size:12.5px;color:var(--text);font-family:var(--font-body)">Order <strong>#4821</strong> needs approval</div><div style="font-size:11px;color:var(--muted2);margin-top:2px;font-family:var(--font-body)">15 minutes ago</div></div>
  </div>
  <div class="notif-item unread" onclick="clearNotifs()" style="display:flex;gap:10px;padding:12px 16px;border-bottom:1px solid var(--border);cursor:pointer;background:var(--blue-dim);transition:background .12s">
    <div style="width:8px;height:8px;border-radius:50%;background:var(--blue);flex-shrink:0;margin-top:4px"></div>
    <div><div style="font-size:12.5px;color:var(--text);font-family:var(--font-body)">Monthly report is ready to <strong>download</strong></div><div style="font-size:11px;color:var(--muted2);margin-top:2px;font-family:var(--font-body)">1 hour ago</div></div>
  </div>
  <div style="display:flex;gap:10px;padding:12px 16px;cursor:pointer;transition:background .12s" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background=''">
    <div style="width:8px;height:8px;border-radius:50%;background:var(--muted2);flex-shrink:0;margin-top:4px"></div>
    <div><div style="font-size:12.5px;color:var(--text);font-family:var(--font-body)">Server backup completed successfully</div><div style="font-size:11px;color:var(--muted2);margin-top:2px;font-family:var(--font-body)">3 hours ago</div></div>
  </div>
</div>`;


/* ─────────────────────────────────────────────────────────────
   3. initLayout(currentPage)
   Call this at the END of every page's <script>
   Injects sidebar, navbar, sets active nav, applies theme+sidebar state
   ───────────────────────────────────────────────────────────── */
function initLayout(currentPage) {

  /* Show user pill text on sm+ screens */
  const pillText = document.querySelector('.user-pill-text');
  if (pillText && window.innerWidth >= 640) pillText.style.display = 'block';

  /* Page loader */
  document.body.insertAdjacentHTML('afterbegin', `
    <div id="page-loader" style="position:fixed;inset:0;z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;background:var(--bg);transition:opacity .5s,visibility .5s">
      <div style="font-family:var(--font-display);font-size:32px;font-weight:800;letter-spacing:-.5px;background:linear-gradient(135deg,#3b82f6,#6366f1,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent" class="loader-pulse">AdminDash</div>
      <div style="font-size:12px;letter-spacing:.15em;color:var(--muted2);font-family:var(--font-body);text-transform:uppercase">Loading ${currentPage}...</div>
      <div style="width:180px;height:2px;border-radius:99px;overflow:hidden;background:var(--surface3)"><div class="loader-bar" style="height:100%;background:linear-gradient(90deg,#3b82f6,#6366f1,#a855f7);border-radius:99px"></div></div>
    </div>
    <div id="nprogress" style="position:fixed;top:0;left:0;right:0;height:2px;z-index:9998;border-radius:0 99px 99px 0;background:linear-gradient(90deg,#3b82f6,#6366f1,#a855f7);transform:scaleX(0);transform-origin:left;box-shadow:0 0 10px rgba(99,102,241,.7);opacity:1"></div>
    <div id="mob-overlay" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);z-index:40" onclick="closeMob()"></div>
    <div id="toast" style="position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:12px;border:1px solid rgba(255,255,255,.12);font-size:13px;font-weight:500;font-family:var(--font-body);opacity:0;transform:translateY(10px);transition:opacity .2s,transform .2s;pointer-events:none;max-width:300px;background:#1a2235;color:#e2e8f0;box-shadow:0 10px 40px rgba(0,0,0,.6)"></div>
  `);

  /* Wrap sidebar + main in flex row */
  const wrapper = document.getElementById('main-wrapper');
  const row = document.createElement('div');
  row.style.cssText = 'display:flex;height:100vh;overflow:hidden;width:100%';
  wrapper.parentNode.insertBefore(row, wrapper);

  /* Inject sidebar */
  row.insertAdjacentHTML('afterbegin', SIDEBAR_HTML);
  row.appendChild(wrapper);

  /* Inject navbar */
  wrapper.insertAdjacentHTML('afterbegin', NAVBAR_HTML);

  /* Set active nav link */
  document.querySelectorAll('.nav-item[data-page]').forEach(a => {
    if (a.dataset.page === currentPage) a.classList.add('active');
  });

  /* Apply saved theme */
  try {
    const t = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', t);
    _applyThemeUI(t);
  } catch (e) { }

  /* Apply saved sidebar collapsed state */
  try {
    if (localStorage.getItem('sb') === '1') {
      document.getElementById('sidebar')?.classList.add('collapsed');
    }
  } catch (e) { }

  /* Hide loader */
  window.addEventListener('load', () => {
    setTimeout(() => {
      const l = document.getElementById('page-loader');
      if (l) { l.style.opacity = '0'; l.style.visibility = 'hidden'; }
    }, 1100);
  });

  showProgress();

  /* Live clock */
  function tick() {
    const el = document.getElementById('liveTime');
    if (el) el.textContent = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  setInterval(tick, 1000); tick();

  /* Close notif on outside click */
  document.addEventListener('click', e => {
    const p = document.getElementById('notifPanel');
    if (p && !p.contains(e.target)) { p.style.display = 'none'; }
  });

  /* Ctrl+K → focus search */
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      document.getElementById('searchInput')?.focus();
    }
    if (e.key === 'Escape') document.activeElement?.blur();
  });

  /* Mobile: init sidebar hidden */
  if (window.innerWidth <= 768) {
    const sb = document.getElementById('sidebar');
    if (sb) sb.style.left = '-260px';
  }
}


/* ─────────────────────────────────────────────────────────────
   4. SIDEBAR TOGGLE
   ✅ FIX: Uses CSS .collapsed class ONLY — no inline styles
   JS does NOT set justifyContent/padding/opacity inline anymore
   Those are all handled by styles.css selectors
   ───────────────────────────────────────────────────────────── */
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('mob-overlay');
  if (!sb) return;

  if (window.innerWidth <= 768) {
    /* Mobile: slide in/out */
    const open = sb.style.left !== '0px';
    sb.style.left = open ? '0px' : '-260px';
    if (ov) ov.style.display = open ? 'block' : 'none';
  } else {
    /* Desktop: toggle .collapsed class */
    const wasCollapsed = sb.classList.toggle('collapsed');
    try { localStorage.setItem('sb', wasCollapsed ? '1' : '0'); } catch (e) { }
  }
}

function closeMob() {
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('mob-overlay');
  if (sb) sb.style.left = '-260px';
  if (ov) ov.style.display = 'none';
}


/* ─────────────────────────────────────────────────────────────
   5. THEME TOGGLE
   ───────────────────────────────────────────────────────────── */
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) { }
  _applyThemeUI(next);
}

function _applyThemeUI(theme) {
  const pill = document.getElementById('themePill');
  const thumb = document.getElementById('themePillThumb');
  if (!pill || !thumb) return;
  if (theme === 'light') {
    pill.classList.add('light-mode');
    thumb.textContent = '☀️';
  } else {
    pill.classList.remove('light-mode');
    thumb.textContent = '🌙';
  }
}


/* ─────────────────────────────────────────────────────────────
   6. NOTIFICATION PANEL
   ───────────────────────────────────────────────────────────── */
function toggleNotif(e) {
  e.stopPropagation();
  const p = document.getElementById('notifPanel');
  if (!p) return;
  p.style.display = p.style.display === 'block' ? 'none' : 'block';
}

function clearNotifs() {
  document.querySelectorAll('.notif-item.unread').forEach(i => {
    i.classList.remove('unread');
    i.style.background = '';
  });
  const b = document.getElementById('notifBadge');
  if (b) b.style.display = 'none';
  document.getElementById('notifPanel').style.display = 'none';
  showToast('All notifications cleared ✓');
}


/* ─────────────────────────────────────────────────────────────
   7. FULLSCREEN TOGGLE
   ───────────────────────────────────────────────────────────── */
function toggleFS() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => { });
  } else {
    document.exitFullscreen();
  }
}


/* ─────────────────────────────────────────────────────────────
   8. TOP PROGRESS BAR (NProgress style)
   ───────────────────────────────────────────────────────────── */
function showProgress() {
  const b = document.getElementById('nprogress');
  if (!b) return;
  b.style.transition = 'none';
  b.style.transform = 'scaleX(0)';
  b.style.opacity = '1';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      b.style.transition = 'transform 1.1s cubic-bezier(.1,0,.2,1)';
      b.style.transform = 'scaleX(1)';
    });
  });
  setTimeout(() => {
    b.style.transition = 'opacity .4s';
    b.style.opacity = '0';
  }, 1000);
}


/* ─────────────────────────────────────────────────────────────
   9. TOAST NOTIFICATION
   showToast(msg) — brief success toast, bottom-right
   ───────────────────────────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.innerHTML = '✅ ' + msg;
  t.style.opacity = '1';
  t.style.transform = 'translateY(0)';
  t.style.pointerEvents = 'auto';
  clearTimeout(t._t);
  t._t = setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(10px)';
    t.style.pointerEvents = 'none';
  }, 3000);
}


/* ─────────────────────────────────────────────────────────────
   10. COUNTER ANIMATION
   countUp(id, target, pre='', suf='')
   Used on stat cards — animates from 0 → target value
   ───────────────────────────────────────────────────────────── */
function countUp(id, target, pre = '', suf = '') {
  const el = document.getElementById(id);
  if (!el) return;
  const dur = 1400, start = Date.now();
  const fmt = v => {
    if (target >= 10000) return (v / 1000).toFixed(1) + 'k';
    if (target >= 1000) return v.toLocaleString();
    return v.toString();
  };
  const step = () => {
    const p = Math.min((Date.now() - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3); // cubic ease-out
    const v = Math.floor(ease * target);
    el.textContent = pre + fmt(v) + suf;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = pre + target.toLocaleString() + suf;
  };
  requestAnimationFrame(step);
}


/* ─────────────────────────────────────────────────────────────
   11. SPARKLINE BARS
   sparkline(id, data, color)
   Renders animated mini bar chart in stat cards
   ───────────────────────────────────────────────────────────── */
function sparkline(id, data, color) {
  const el = document.getElementById(id);
  if (!el) return;
  const max = Math.max(...data);
  el.innerHTML = data.map((v, i) => {
    const h = Math.max(4, Math.round((v / max) * 32));
    const opacity = 0.3 + 0.7 * (v / max);
    return `<div style="flex:1;height:${h}px;background:${color};opacity:${opacity};border-radius:3px 3px 0 0;animation:growUp .6s cubic-bezier(.4,0,.2,1) ${i * 0.04}s both"></div>`;
  }).join('');
}


/* ─────────────────────────────────────────────────────────────
   12. HELPERS
   ini(name)         — "Pawan Tripathi" → "PT"
   AVATAR_COLORS     — 8 distinct colors for avatars
   avHtml(name,i,sz) — returns avatar div html string
   gc()              — chart colors for current theme
   ───────────────────────────────────────────────────────────── */
const AVATAR_COLORS = [
  '#3b82f6', '#22c55e', '#a855f7', '#f59e0b',
  '#06b6d4', '#ec4899', '#ef4444', '#10b981'
];

function ini(name) {
  return name.trim().split(/\s+/).map(p => p[0]).join('').toUpperCase().slice(0, 2);
}

function avHtml(name, i, size = 32) {
  const bg = AVATAR_COLORS[i % AVATAR_COLORS.length];
  const fs = size < 28 ? 10 : size < 36 ? 11.5 : 13;
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${bg};display:flex;align-items:center;justify-content:center;font-size:${fs}px;font-weight:700;color:#fff;flex-shrink:0;font-family:var(--font-body)">${ini(name)}</div>`;
}

/* Chart color helper — returns grid/text colors for current theme */
function gc() {
  const dark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    grid: dark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.06)',
    text: dark ? 'rgba(148,163,184,.6)' : 'rgba(100,116,139,.7)'
  };
}