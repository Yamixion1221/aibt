  const themeSwitch = document.getElementById('theme-switch');

  // Cek preferensi tema di localStorage/cookie
  function getPreferredTheme() {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    // Bisa juga cek preferensi sistem OS
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark-mode';
    }
    return 'light-mode';
  }

  function setTheme(theme) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);

    // Ubah ikon tombol switch
    themeSwitch.textContent = (theme === 'dark-mode') ? '☀️' : '🌙';
  }

  themeSwitch.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
  });

  // Set tema saat halaman dimuat
  document.addEventListener('DOMContentLoaded', () => {
    setTheme(getPreferredTheme());
  });
