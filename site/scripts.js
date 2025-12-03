// Load content from JSON so editing is easy without touching HTML
(async function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  try {
    const res = await fetch('content.json');
    const data = await res.json();

    const apply = (id, html) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = html;
    };

    apply('tagline', data.tagline);
    apply('subtagline', data.subtagline);
    apply('what_text', data.what_is);
    apply('why_text', data.why);
    apply('champions_intro', data.champions_intro);
  } catch (e) {
    console.warn('Could not load content.json', e);
  }
})();

// Subtle reveal-on-scroll animations
(function() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let observer;
  function initObserver() {
    if (observer) return observer;
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    return observer;
  }

  function observeAllReveals() {
    const obs = initObserver();
    document.querySelectorAll('.reveal:not(.in-view)').forEach(el => obs.observe(el));
  }

  // expose for dynamic content pages
  window.observeReveals = observeAllReveals;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAllReveals);
  } else {
    observeAllReveals();
  }
})();