(() => {
  const key = 'yeonjae-theme';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch { /* Storage may be unavailable for local files or private browsing. */ }

  function applyTheme() {
    const theme = preference || (system.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    const color = document.querySelector('meta[name="theme-color"]');
    if (color) color.content = theme === 'dark' ? '#101923' : '#ffffff';
    const button = document.querySelector('.theme-toggle');
    if (button) {
      const next = theme === 'dark' ? 'Light mode' : 'Dark mode';
      button.setAttribute('aria-label', `Switch to ${next.toLowerCase()}`);
      button.title = `Switch to ${next.toLowerCase()}`;
    }
  }

  // Set the palette before the stylesheet paints to avoid a light flash.
  applyTheme();
  system.addEventListener('change', () => {
    if (!preference) applyTheme();
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark'
      ? event.newValue : null;
    applyTheme();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    applyTheme();
    button.hidden = false;
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(key, preference); } catch { /* Keep the in-page choice. */ }
      applyTheme();
    });
  });
})();
