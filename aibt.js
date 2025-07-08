<script>
// === Light / Dark Mode ===
document.getElementById('modeToggle').addEventListener('click', function () {
  const body = document.body;
  body.classList.toggle('dark');
  body.classList.toggle('light');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Load theme preference
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(savedTheme);
  }
});

// === Sidenav Toggle ===
document.getElementById('openNav').addEventListener('click', function () {
  document.getElementById('sidenav').style.width = '250px';
});
document.getElementById('closeNav').addEventListener('click', function () {
  document.getElementById('sidenav').style.width = '0';
});

// === Grid / List View Toggle ===
document.getElementById('gridView')?.addEventListener('click', () => {
  document.getElementById('postContainer').className = 'post-grid';
});
document.getElementById('listView')?.addEventListener('click', () => {
  document.getElementById('postContainer').className = 'post-list';
});

// === Komentar Switcher ===
function showComment(type) {
  const sections = ['blogger', 'disqus', 'facebook'];
  sections.forEach(s => {
    const el = document.getElementById(s + '-comments');
    if (el) el.style.display = (s === type) ? 'block' : 'none';
  });

  if (type === 'disqus' && !window.disqus_loaded) {
    var d = document, s = d.createElement('script');
    s.src = 'https://YOUR-DISQUS-SHORTNAME.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    window.disqus_loaded = true;
  }

  if (type === 'facebook' && !window.fb_loaded) {
    var fbScript = document.createElement('script');
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.crossOrigin = 'anonymous';
    fbScript.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v12.0";
    document.body.appendChild(fbScript);
    window.fb_loaded = true;
  }
}
</script>
