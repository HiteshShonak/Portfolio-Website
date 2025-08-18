// Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const href = a.getAttribute('href');
        if (href.startsWith('#')) {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Reveal elements on scroll
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('show');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(n => obs.observe(n));

    // Function to open social issue link
    function openIssueLink() {
      window.open('https://en.wikipedia.org/wiki/Crop_residue#Burning', '_blank', 'noopener');
    }