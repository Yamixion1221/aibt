  function loadPopularPosts() {
    fetch('/feeds/posts/summary/-/Popular?alt=json&max-results=10')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('popular-carousel');
        const entries = data.feed.entry || [];
        entries.forEach(entry => {
          const title = entry.title.$t;
          const link = entry.link.find(l => l.rel === 'alternate').href;
          const media = entry.media$thumbnail?.url || '';
          const html = `
            <div class='popular-post'>
              <a href='${link}' title='${title}'>
                <img src='${media}' alt='${title}' loading='lazy'/>
                <div class='title'>${title}</div>
              </a>
            </div>
          `;
          container.innerHTML += html;
        });
      });
  }

  function popularNext() {
    const container = document.getElementById('popular-carousel');
    container.scrollLeft += 150;
  }

  function popularPrev() {
    const container = document.getElementById('popular-carousel');
    container.scrollLeft -= 150;
  }

  document.addEventListener('DOMContentLoaded', loadPopularPosts);
