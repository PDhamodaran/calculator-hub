/**
 * Shared theme toggle — included by all pages.
 * Applies saved theme instantly (before paint) then injects a floating toggle button.
 */
(function () {
  const STORAGE_KEY = 'pf-theme';

  // ── Apply theme to <html> element ─────────────────────────────────────────
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Apply immediately so there's no flash of wrong theme
  applyTheme(localStorage.getItem(STORAGE_KEY) || 'dark');

  // ── Inject floating toggle button after DOM is ready ──────────────────────
  function injectButton() {
    if (document.getElementById('theme-toggle-btn')) return;

    const btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.title = 'Toggle light / dark theme';
    btn.setAttribute('aria-label', 'Toggle theme');
    btn.style.cssText = [
      'position:fixed', 'top:14px', 'right:16px', 'z-index:9999',
      'width:38px', 'height:38px', 'border-radius:50%',
      'font-size:1.05rem', 'cursor:pointer',
      'display:flex', 'align-items:center', 'justify-content:center',
      'transition:all 0.22s', 'box-shadow:0 2px 10px rgba(0,0,0,.35)',
      'outline:none',
    ].join(';');

    btn.addEventListener('click', function () {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      refreshBtn(btn);
    });

    document.body.appendChild(btn);
    refreshBtn(btn);
  }

  function refreshBtn(btn) {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.textContent    = isDark ? '☀' : '🌙';
    btn.title          = isDark ? 'Switch to Light theme' : 'Switch to Dark theme';
    btn.style.background  = isDark ? '#161d26' : '#ffffff';
    btn.style.color       = isDark ? '#d4a04e' : '#1c2b3a';
    btn.style.border      = isDark ? '1px solid #1e2a38' : '1px solid #cdd5e0';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectButton);
  } else {
    injectButton();
  }
})();
