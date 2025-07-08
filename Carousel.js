  let carouselIndex = 0;
  let carouselItems = [];

  function loadCarouselPosts() {
    fetch('/feeds/posts/summary?alt=json&max-results=10')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('post-carousel');
        const entries = data.feed.entry || [];
        entries.forEach(entry => {
          const title = entry.title.$t;
          const link = entry.link.find(l => l.rel === 'alternate').href;
          const media = entry.media$thumbnail?.url || '';
          const html = `
            <div class='carousel-item'>
              <a href='${link}'>
                <img src='${media}' alt='${title}' loading='lazy'/>
                <div class='title'>${title}</div>
              </a>
            </div>
          `;
          container.innerHTML += html;
        });

        carouselItems = document.querySelectorAll('.carousel-item');
        autoScrollCarousel();
      });
  }

  function autoScrollCarousel() {
    setInterval(() => {
      nextSlide();
    }, 4000); // tiap 4 detik
  }

  function nextSlide() {
    const carousel = document.getElementById('post-carousel');
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
    carousel.style.transform = `translateX(-${carouselIndex * (carouselItems[0].offsetWidth + 10)}px)`;
  }

  function prevSlide() {
    const carousel = document.getElementById('post-carousel');
    carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
    carousel.style.transform = `translateX(-${carouselIndex * (carouselItems[0].offsetWidth + 10)}px)`;
  }

  document.addEventListener('DOMContentLoaded', loadCarouselPosts);
