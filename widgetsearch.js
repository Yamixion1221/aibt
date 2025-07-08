 function toggleSearchBox() {
    const box = document.getElementById('search-box');
    box.style.display = box.style.display === 'block' ? 'none' : 'block';
  }

  function searchPosts(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    const loader = document.getElementById('search-loader');
    const results = document.getElementById('search-results');

    if (!query) return;

    loader.style.display = 'block';
    results.innerHTML = '';

    fetch(`/feeds/posts/summary?q=${encodeURIComponent(query)}&alt=json`)
      .then(res => res.json())
      .then(data => {
        loader.style.display = 'none';
        if (data.feed.entry) {
          data.feed.entry.forEach(entry => {
            const title = entry.title.$t;
            const link = entry.link.find(l => l.rel === 'alternate').href;
            const item = `<p><a href="${link}" target="_blank">${title}</a></p>`;
            results.innerHTML += item;
          });
        } else {
          results.innerHTML = "<p>No results found.</p>";
        }
      })
      .catch(err => {
        loader.style.display = 'none';
        results.innerHTML = "<p>Error loading results.</p>";
      });
  }
