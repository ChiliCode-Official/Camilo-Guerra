(() => {
  const channel = 'https://www.youtube.com/@CamiloGuerraCars';
  document.querySelectorAll('a[href*="@CGSCars"], a[aria-label="Camilo Guerra Cars"], [data-card="8"] a').forEach(link => { link.href = channel; });
  document.querySelectorAll('[data-card="8"]').forEach(card => { card.dataset.destination = channel; });
  document.addEventListener('click', event => {
    const card = event.target.closest('[data-card="8"]');
    if (!card) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.open(channel, '_blank', 'noopener,noreferrer');
  }, true);

  const pending = new WeakSet();
  const resume = () => {
    document.querySelectorAll('[data-card] video').forEach(video => {
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;
      const box = video.getBoundingClientRect();
      if (!document.hidden && box.width && box.bottom > 0 && box.top < innerHeight) {
        if (video.paused && !pending.has(video)) {
          pending.add(video);
          video.play().catch(() => {}).finally(() => pending.delete(video));
        }
      } else if (!video.paused) video.pause();
    });
  };
  const observer = new IntersectionObserver(resume);
  document.querySelectorAll('[data-card] video').forEach(video => {
    observer.observe(video);
    video.addEventListener('canplay', resume);
  });
  let retries = [];
  const restore = () => {
    retries.forEach(clearTimeout);
    resume();
    retries = document.hidden ? [] : [150, 500, 1500, 3000].map(delay => setTimeout(resume, delay));
  };
  window.addEventListener('pageshow', restore);
  window.addEventListener('focus', restore);
  document.addEventListener('visibilitychange', restore);
  document.addEventListener('resume', restore);
  document.addEventListener('pause', event => {
    if (event.target.matches?.('[data-card] video') && !document.hidden) restore();
  }, true);
  document.addEventListener('pointerup', resume, { passive: true });
  resume();

  const style = document.createElement('style');
  style.textContent = '[data-copy-email]{position:relative!important}[data-copy-email] .copy,[data-copy-email] .clipboard-container,[data-copy-email] .site-oiqi2o-container{display:none!important}.email-copy-indicator{position:absolute!important;top:12px!important;right:12px!important;width:44px!important;height:44px!important;display:grid!important;place-items:center!important;z-index:20!important;pointer-events:none;color:#aaa}.email-copy-indicator svg{display:block!important;position:static!important;width:22px!important;height:22px!important;transform:none!important;fill:none!important;stroke:currentColor;stroke-width:1.7}.email-copy-indicator.is-copied{color:#7dff9c}';
  document.head.append(style);
  document.querySelectorAll('[data-copy-email]').forEach(card => {
    const indicator = document.createElement('span');
    indicator.className = 'email-copy-indicator';
    indicator.setAttribute('aria-hidden', 'true');
    const clipboard = '<svg viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="16" rx="2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>';
    indicator.innerHTML = clipboard;
    card.append(indicator);
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.setAttribute('aria-label', 'Copiar correo electrónico');
    let timer;
    const copy = async event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      let success = false;
      try { await navigator.clipboard.writeText(card.dataset.copyEmail); success = true; }
      catch {
        const field = document.createElement('textarea');
        field.value = card.dataset.copyEmail;
        field.style.cssText = 'position:fixed;top:0;left:0;opacity:0;font-size:16px';
        document.body.append(field);
        field.select();
        success = document.execCommand('copy');
        field.remove();
      }
      if (!success) return;
      indicator.innerHTML = '<svg viewBox="0 0 24 24"><path d="m5 12 4 4L19 6"/></svg>';
      indicator.classList.add('is-copied');
      card.setAttribute('aria-label', 'Correo copiado');
      if (!matchMedia('(prefers-reduced-motion: reduce)').matches) indicator.animate([{scale:'.8',opacity:.4},{scale:'1',opacity:1}],{duration:180});
      clearTimeout(timer);
      timer = setTimeout(() => { indicator.innerHTML = clipboard; indicator.classList.remove('is-copied'); card.setAttribute('aria-label','Copiar correo electrónico'); }, 2000);
    };
    card.addEventListener('click', copy, true);
    card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') copy(event); }, true);
  });
})();
