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