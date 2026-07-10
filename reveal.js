document.addEventListener('DOMContentLoaded', function () {
  const els = Array.from(document.querySelectorAll('[data-reveal]'));
  const DIST = 52;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  els.forEach(el => { el.style.willChange = 'opacity, transform'; el.style.opacity = '0'; });
  const update = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const startY = vh * 0.96;
    const endY = vh * 0.58;
    els.forEach(el => {
      const top = el.getBoundingClientRect().top;
      let p = (startY - top) / (startY - endY);
      p = p < 0 ? 0 : (p > 1 ? 1 : p);
      const e = ease(p);
      el.style.opacity = String(e);
      el.style.transform = 'translateY(' + (DIST * (1 - e)).toFixed(1) + 'px)';
    });
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  setInterval(update, 100);
});
