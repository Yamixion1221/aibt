  // Contoh data rating populer (harus disesuaikan/dibuat dinamis)
  const topRatedPostsData = [
    {title: "Anime A", link: "#", rating: 4.9},
    {title: "Anime B", link: "#", rating: 4.7},
    {title: "Anime C", link: "#", rating: 4.5}
  ];

  function renderTopRatedPosts() {
    const container = document.getElementById("top-rated-posts");
    container.innerHTML = '';
    topRatedPostsData.forEach(post => {
      container.innerHTML += `
        <div class="top-rated-post">
          <a href="${post.link}">${post.title}</a>
          <span>⭐ ${post.rating.toFixed(1)}</span>
        </div>`;
    });
  }

  // Contoh widget popular post sidebar (bisa gunakan feed label "Popular")
  function loadSidebarPopular() {
    fetch('/feeds/posts/summary/-/Popular?alt=json&max-results=5')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("sidebar-popular-posts");
        container.innerHTML = '';
        const entries = data.feed.entry || [];
        entries.forEach(entry => {
          const title = entry.title.$t;
          const link = entry.link.find(l => l.rel === 'alternate').href;
          container.innerHTML += `<div class="sidebar-popular-post"><a href="${link}">${title}</a></div>`;
        });
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderTopRatedPosts();
    loadSidebarPopular();
  });
