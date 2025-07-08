  function switchComment(type) {
    const boxes = ["blogger", "disqus", "facebook"];
    boxes.forEach(id => {
      document.getElementById("comment-" + id).style.display = (id === type) ? "block" : "none";
    });

    // Load Disqus only once
    if (type === "disqus" && !window.disqus_loaded) {
      var d = document, s = d.createElement('script');
      s.src = 'https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
      window.disqus_loaded = true;
    }
  }

