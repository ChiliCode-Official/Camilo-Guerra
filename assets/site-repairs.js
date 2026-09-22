(() => {
  const phoneLayout = matchMedia('(max-width:809px)');
  const mobileSequence = ['0', '1', '2', '8', '4', '10', '9', '3', '6', '7', '5'];
  const layoutDefaults = new Map();
  document.querySelectorAll('.site-19uivnr > [data-card]').forEach(card => {
    [card, card.firstElementChild].filter(Boolean).forEach(node => {
      layoutDefaults.set(node, ['order', 'grid-column', 'grid-row'].map(name => [name, node.style.getPropertyValue(name), node.style.getPropertyPriority(name)]));
    });
  });
  const arrangePhoneCards = () => {
    layoutDefaults.forEach((properties, node) => {
      properties.forEach(([name, value, priority]) => { if (value) node.style.setProperty(name, value, priority); else node.style.removeProperty(name); });
      if (!phoneLayout.matches) return;
      const id = (node.matches('[data-card]') ? node : node.parentElement).dataset.card;
      const rank = mobileSequence.indexOf(id);
      if (rank < 0) return;
      node.style.setProperty('order', String(rank), 'important');
      node.style.setProperty('grid-row', 'auto', 'important');
      if (id === '2' || id === '8') node.style.setProperty('grid-column', '1 / -1', 'important');
    });
  };
  arrangePhoneCards();
  phoneLayout.addEventListener('change', arrangePhoneCards);
  const directCards = {
    '9': 'https://www.instagram.com/Camiloguerramm',
    '10': 'https://youtube.com/@mexiparces?si=PeqA0f4Sy6DAw4e-'
  };
  Object.entries(directCards).forEach(([id, url]) => {
    document.querySelectorAll(`[data-card="${id}"] a`).forEach(link => {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    });
  });
  document.addEventListener('click', event => {
    const card = event.target.closest('[data-card="9"], [data-card="10"]');
    if (!card) return;
    // Conserva la navegación nativa del enlace e impide los visores heredados.
    event.stopImmediatePropagation();
    if (!event.target.closest('a[href]')) {
      event.preventDefault();
      window.open(directCards[card.dataset.card], '_blank', 'noopener,noreferrer');
    }
  }, true);
  const directCardStyle = document.createElement('style');
  directCardStyle.textContent = '#main [data-card="9"],#main [data-card="10"],#main [data-card="9"] *,#main [data-card="10"] *{cursor:pointer!important}';
  document.head.append(directCardStyle);
  // Un solo visor para las tarjetas de fotos; evita los dos manejadores heredados.
  const viewer = document.createElement('dialog');
  viewer.setAttribute('aria-label', 'Foto ampliada');
  viewer.style.cssText = 'position:fixed;inset:0;margin:auto;padding:16px;border:0;width:100vw;height:100dvh;max-width:100vw;max-height:100dvh;background:rgba(0,0,0,.9);box-sizing:border-box;overflow:hidden';
  document.body.append(viewer);
  let sourceFocus;
  let closing = false;
  const closeViewer = async () => {
    if (!viewer.open || closing) return;
    closing = true;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      await viewer.animate([{opacity:1},{opacity:0}], {duration:160}).finished.catch(() => {});
    }
    viewer.close();
    viewer.style.display = '';
    sourceFocus?.focus({preventScroll:true});
    closing = false;
  };
  viewer.addEventListener('click', event => { if (event.target === viewer) closeViewer(); });
  viewer.addEventListener('cancel', event => { event.preventDefault(); closeViewer(); });
  document.addEventListener('click', event => {
    const card = event.target.closest('[data-card="2"], [data-card="3"], [data-card="6"]');
    const source = card?.querySelector('img');
    if (!source) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    sourceFocus = document.activeElement;
    const photo = document.createElement('img');
    photo.src = source.currentSrc || source.src;
    photo.alt = source.alt;
    photo.style.cssText = 'display:block;width:auto;height:auto;max-width:100%;max-height:calc(100dvh - 80px);object-fit:contain;border-radius:18px;min-width:0;min-height:0';
    const button = document.createElement('button');
    button.textContent = '×';
    button.setAttribute('aria-label', 'Cerrar foto');
    button.style.cssText = 'position:absolute;top:max(16px,env(safe-area-inset-top));right:16px;width:44px;height:44px;border:1px solid #777;border-radius:50%;background:#171717;color:white;font:28px Arial;cursor:pointer';
    button.addEventListener('click', closeViewer);
    viewer.replaceChildren(photo, button);
    viewer.style.display = 'flex';
    viewer.style.alignItems = 'center';
    viewer.style.justifyContent = 'center';
    viewer.showModal();
    button.focus();
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) photo.animate([{opacity:0,transform:'scale(.96)'},{opacity:1,transform:'scale(1)'}],{duration:200});
  }, true);
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
