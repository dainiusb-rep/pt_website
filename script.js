(() => {
  'use strict';
  const header = document.querySelector('.site-header');
  const progress = document.getElementById('reading-progress');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const form = document.getElementById('consultation-form');
  const status = document.getElementById('form-status');

  const closeMenu = (restoreFocus = false) => {
    if (!menuButton || !mobileNav) return;
    const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    mobileNav.hidden = true;
    document.body.classList.remove('menu-open');
    if (restoreFocus && wasOpen) menuButton.focus();
  };

  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    mobileNav.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) mobileNav.querySelector('a')?.focus();
  });
  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (menuButton?.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width: 721px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  let queued = false;
  const handleScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollLength = document.documentElement.scrollHeight - window.innerHeight;
      header?.classList.toggle('is-scrolled', scrollTop > 12);
      if (progress) progress.style.width = `${scrollLength > 0 ? Math.min(scrollTop / scrollLength * 100, 100) : 0}%`;
      queued = false;
    });
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll, { passive: true });
  handleScroll();

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('motion-ready');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(item => revealObserver.observe(item));
  }

  // Native <details> elements provide keyboard support and work without JS.
  const faqItems = document.querySelectorAll('.faq-list details');
  faqItems.forEach(item => item.addEventListener('toggle', () => {
    if (item.open) faqItems.forEach(other => { if (other !== item) other.open = false; });
  }));

  // Netlify Forms processes POSTs after you enable detection and deploy the static site.
  // In a local preview there is no form endpoint; be transparent instead of claiming success.
  const isLocalPreview = location.protocol === 'file:' || ['localhost', '127.0.0.1', '0.0.0.0'].includes(location.hostname);
  if (isLocalPreview) {
    form?.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      status.textContent = 'Preview mode: your details were not sent. Deploy to Netlify and enable Forms to receive enquiries.';
      status.classList.add('is-preview');
    });
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
