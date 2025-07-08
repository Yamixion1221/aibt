  document.addEventListener('DOMContentLoaded', () => {
    const ratingContainer = document.getElementById('post-rating');
    if (!ratingContainer) return;

    const postId = ratingContainer.getAttribute('data-post-id');
    const stars = ratingContainer.querySelectorAll('.star');
    const msg = document.getElementById('rating-message');

    // Load rating dari localStorage
    let savedRating = localStorage.getItem('post-rating-' + postId);
    if (savedRating) {
      setRating(parseInt(savedRating));
      msg.textContent = `Terima kasih sudah memberikan rating ${savedRating} bintang!`;
    }

    stars.forEach(star => {
      star.addEventListener('mouseenter', () => {
        const val = parseInt(star.getAttribute('data-value'));
        highlightStars(val);
      });
      star.addEventListener('mouseleave', () => {
        if (savedRating) {
          setRating(savedRating);
        } else {
          clearHighlight();
        }
      });
      star.addEventListener('click', () => {
        const val = parseInt(star.getAttribute('data-value'));
        localStorage.setItem('post-rating-' + postId, val);
        savedRating = val;
        setRating(val);
        msg.textContent = `Terima kasih sudah memberikan rating ${val} bintang!`;
      });
    });

    function highlightStars(count) {
      stars.forEach(s => {
        s.classList.toggle('hover', parseInt(s.getAttribute('data-value')) <= count);
      });
    }

    function clearHighlight() {
      stars.forEach(s => s.classList.remove('hover'));
    }

    function setRating(count) {
      stars.forEach(s => {
        s.classList.toggle('selected', parseInt(s.getAttribute('data-value')) <= count);
      });
    }
  });
