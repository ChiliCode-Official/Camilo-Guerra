(() => {
  const projectsGrid = document.querySelector('#main .site-19uivnr');
  if (projectsGrid && !document.getElementById('other-projects')) {
    const section = document.createElement('section');
    section.id = 'other-projects';
    section.setAttribute('aria-labelledby', 'other-projects-title');
    const heading = document.createElement('h2');
    heading.id = 'other-projects-title';
    heading.textContent = 'Mis Otros Proyectos';
    const cards = document.createElement('div');
    cards.className = 'other-projects-grid';
    const projects = [
      ['Camilo Guerra', '@camiloguerram1 · TikTok', 'https://www.tiktok.com/@camiloguerram1?_r=1&_t=ZS-9A0ntJCXPTJ', 'tiktok'],
      ['Mexi Parces', '@mexiparces · TikTok', 'https://www.tiktok.com/@mexiparces?_r=1&_t=ZS-9A0nwgHZ2YP', 'tiktok'],
      ['Facebook', 'Visita mi página', 'https://www.facebook.com/share/19sX9AHAVh/?mibextid=wwXIfr', 'facebook']
    ];
    const paths = {
      tiktok: 'M16 2c.4 2.4 1.8 3.9 4 4.1V10a9 9 0 0 1-4-1.2v7.3a6 6 0 1 1-6-6v3.8a2.3 2.3 0 1 0 2.3 2.3V2Z',
      facebook: 'M14 22v-9h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A26 26 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v9Z'
    };
    projects.forEach(([name, description, url, platform]) => {
      const link = document.createElement('a');
      link.className = 'other-project-card';
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', `${name}: ${description} (abre en otra pestaña)`);
      const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('viewBox', '0 0 24 24');
      icon.setAttribute('aria-hidden', 'true');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', paths[platform]);
      icon.append(path);
      const arrow = document.createElement('span');
      arrow.className = 'other-project-arrow';
      arrow.textContent = '↗';
      arrow.setAttribute('aria-hidden', 'true');
      const text = document.createElement('div');
      const title = document.createElement('strong');
      title.textContent = name;
      const subtitle = document.createElement('span');
      subtitle.textContent = description;
      text.append(title, subtitle);
      link.append(icon, arrow, text);
      cards.append(link);
    });
    const gallery = document.createElement('div');
    gallery.className = 'other-projects-gallery';
    ['2', '3', '10'].forEach(id => {
      const photo = projectsGrid.querySelector(`:scope > [data-card="${id}"]`);
      if (photo) gallery.append(photo);
    });
    section.append(heading, gallery, cards);
    projectsGrid.after(section);
    const style = document.createElement('style');
    style.textContent = `
      #other-projects{box-sizing:border-box;width:100%;max-width:848px;margin:28px auto 0;padding:0 12px;font-family:Inter,system-ui,sans-serif;color:var(--token-a95b4afe-3104-4deb-93d5-5885d2a8dad1,#eee)}
      #other-projects h2{font:600 20px/1.3 inherit;font-size:20px;line-height:1.3;letter-spacing:-.03em;margin:0 0 16px}
      .other-projects-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
      #other-projects .other-projects-gallery{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:20px}
      #other-projects .other-projects-gallery>[data-card]{display:block!important;position:relative!important;width:100%!important;min-width:0!important;height:auto!important;aspect-ratio:1!important;order:initial!important;grid-column:auto!important;grid-row:auto!important;overflow:hidden!important;border-radius:24px}
      #other-projects .other-projects-gallery>[data-card]>div{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:0!important;max-width:none!important;transform:none!important}
      #other-projects .other-projects-gallery>[data-card]>div>a{width:100%!important;height:100%!important;box-sizing:border-box!important}
      @media(max-width:809px){#other-projects .other-projects-gallery{grid-template-columns:repeat(2,minmax(0,1fr))}#other-projects .other-projects-gallery>[data-card="2"]{grid-column:1 / -1!important;width:min(76%,280px)!important;justify-self:center!important}}
      #other-projects .other-project-card{box-sizing:border-box;position:relative;display:flex;flex-direction:column;justify-content:space-between;min-width:0;min-height:170px;padding:18px;border-radius:24px;border:1px solid #8882;background:var(--token-a1bbbd6e-47db-4a4a-9287-1fde5982623f,#171717);color:inherit;text-decoration:none;transition:transform .2s ease,border-color .2s ease}
      .other-project-card svg{width:24px;height:24px;fill:currentColor}
      .other-project-arrow{position:absolute;top:16px;right:18px;color:#8c8c8c;font-size:23px}
      .other-project-card strong{display:block;font-size:15px;font-weight:500;line-height:1.4}
      .other-project-card div>span{display:block;margin-top:4px;font-size:12px;line-height:1.5;color:#8c8c8c;overflow-wrap:anywhere}
      #other-projects a:focus-visible{outline:2px solid #8bb9fe;outline-offset:4px}
      @media(hover:hover){#other-projects a:hover{transform:translateY(-3px);border-color:#8886}}
      @media(max-width:809px){#other-projects{max-width:540px}.other-projects-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.other-project-card:last-child{grid-column:1 / -1}#other-projects .other-project-card:last-child{min-height:130px}}
      @media(prefers-reduced-motion:reduce){#other-projects a{transition:none}}
    `;
    document.head.append(style);
  }
  const profileName = document.querySelector('header .site-1smtx7k h1');
  if (profileName && !profileName.querySelector('.profile-cars')) {
    const cars = document.createElement('span');
    cars.className = 'profile-cars';
    cars.textContent = ' Cars';
    profileName.append(cars);
  }
  const mobileGridStyle = document.createElement('style');
  mobileGridStyle.textContent = `header a::after{content:none!important}@media (max-width:809px){#main .site-19uivnr{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-auto-rows:minmax(180px,auto)!important;gap:10px!important;width:100%!important;max-width:540px!important;padding:0 12px!important}#main .site-19uivnr>[data-card]{display:block!important;min-width:0!important;width:auto!important;order:initial!important;grid-column:auto!important;grid-row:auto!important}#main .site-19uivnr>[data-card="1"]{grid-column:1 / -1!important;grid-row:span 2!important}#main .site-19uivnr>[data-card="2"]{grid-column:auto!important;grid-row:auto!important;order:8!important;height:220px!important;aspect-ratio:1!important}#main .site-19uivnr>[data-card="8"]{grid-column:1 / -1!important;order:3!important}#main .site-19uivnr>[data-card="4"]{order:4!important}#main .site-19uivnr>[data-card="3"]{grid-column:1 / -1!important;order:5!important;height:300px!important}#main .site-19uivnr>[data-card="9"]{order:6!important}#main .site-19uivnr>[data-card="6"]{order:7!important}#main .site-19uivnr>[data-card="7"]{order:8!important}#main .site-19uivnr>[data-card="10"]{grid-column:auto!important;order:99!important;aspect-ratio:1!important;height:auto!important}#main .site-19uivnr>[data-card]>div{width:100%!important;min-width:0!important;height:100%!important;min-height:0!important}}`;
  document.head.append(mobileGridStyle);
  const cardLayoutStyle = document.createElement('style');
  cardLayoutStyle.textContent = `
  @media(max-width:809px){
    #main .site-19uivnr{grid-template-rows:none!important;grid-auto-rows:auto!important;gap:12px!important}
    #main .site-19uivnr>[data-card]{height:220px!important;min-height:0!important;align-self:stretch!important}
    #main .site-19uivnr>[data-card="1"]{grid-column:auto!important;grid-row:auto!important}
    #main .site-19uivnr{box-sizing:border-box!important;min-width:0!important;grid-auto-flow:row!important}
    #main .site-19uivnr>[data-card="2"]{grid-column:1 / -1!important;height:auto!important;aspect-ratio:1!important}
    #main .site-19uivnr>[data-card="3"],#main .site-19uivnr>[data-card="10"]{grid-column:auto!important;height:auto!important;aspect-ratio:1!important;overflow:hidden!important;border-radius:24px}
    #main .site-19uivnr>[data-card="6"]{grid-column:auto!important;height:220px!important}
    #main .site-19uivnr>[data-card]>div{position:relative!important;width:100%!important;max-width:100%!important;box-sizing:border-box!important}
    #main .site-19uivnr>[data-card]>div>a{width:100%!important;min-width:0!important;max-width:100%!important;box-sizing:border-box!important}
    #main .site-19uivnr>[data-card="7"]{grid-column:1 / -1!important;height:auto!important;min-height:240px!important}
    #main .site-19uivnr>[data-card]>div{aspect-ratio:auto!important;height:100%!important;min-height:0!important}
    #main .site-19uivnr [data-card="4"]>div.site-o1iydx-container,
    #main .site-19uivnr [data-card="4"] .site-pFRjz{height:220px!important;min-height:220px!important;max-height:none!important}
    #main [data-copy-email] .site-b3untr{position:static!important;display:flex!important;flex-direction:column!important;gap:3px!important;width:100%!important;min-width:0!important;margin-top:auto!important}
    #main [data-copy-email] .site-b3untr p{font-size:clamp(11px,3.1vw,14px)!important;line-height:1.4!important;white-space:normal!important;overflow-wrap:anywhere!important}
    #main [data-card="7"] .site-qzHrB{height:auto!important;min-height:240px!important;padding:16px!important;display:flex!important;flex-direction:column!important;gap:24px!important;justify-content:space-between!important}
    #main [data-card="7"] .site-bj25ky{position:relative!important;flex:none!important;width:100%!important}
    #main [data-card="7"] .site-4xeowm,#main [data-card="7"] .site-1lcn9t6{position:static!important;height:auto!important;min-width:0!important;width:100%!important;display:flex!important;flex-direction:column!important;gap:10px!important;flex:none!important}
    #main [data-card="7"] p{white-space:normal!important;line-height:1.45!important}
    #main [data-card="7"] .native-live-link{position:static!important;align-self:flex-start!important;max-width:100%!important;min-height:44px!important;margin:8px 0 0!important}
  }
  #main .email-purpose{font:400 12px/1.4 Inter,system-ui,sans-serif;color:#8c8c8c;margin:0 0 8px;white-space:normal}
  `;
  document.head.append(cardLayoutStyle);
  const socialLabels = [['tiktok.com','TikTok'],['instagram.com','Instagram'],['youtube.com','YouTube'],['mailto:','Correo']];
  const socialLabelStyle = document.createElement('style');
  socialLabelStyle.textContent = 'header a::after,.site-8w4xde a::after{content:none!important;display:none!important}header a[href]{position:relative!important;overflow:visible!important}header a[href] .native-social-label{position:absolute!important;top:calc(100% + 5px)!important;left:50%!important;transform:translateX(-50%)!important;font:500 10px/1 Inter,Arial,sans-serif!important;color:#8c8c8c!important;white-space:nowrap!important;pointer-events:none!important}';
  document.head.append(socialLabelStyle);
  const youtubeIconStyle = document.createElement('style');
  youtubeIconStyle.textContent = `
    #main [data-card="8"] .site-vlfe5l>img,
    #main [data-card="10"] .site-15kxvm0>img{display:none!important}
    #main [data-card="10"] .site-15kxvm0::before{content:'▶';display:flex;align-items:center;justify-content:center;width:28px;height:20px;border-radius:6px;background:#ff0033;color:#fff;font:700 12px/1 Arial,sans-serif;position:absolute;z-index:3;top:14px;left:14px;box-shadow:0 2px 8px #0008}
  `;
  document.head.append(youtubeIconStyle);
  const videoCardFixStyle = document.createElement('style');
  videoCardFixStyle.textContent = `
    #main [data-card="8"]>div>a{position:relative!important;overflow:hidden!important;display:block!important}
    #main [data-card="8"]>div>a::before{content:'▶';display:flex;align-items:center;justify-content:center;width:30px;height:22px;border-radius:6px;background:#ff0033;color:#fff;font:700 13px/1 Arial,sans-serif;position:absolute;z-index:20;top:14px;left:14px;box-shadow:0 2px 8px #0008}
    #main [data-card="8"] .site-vlfe5l{display:none!important}
    #main [data-card="8"] .site-sdf25k{position:absolute!important;inset:16px 16px auto auto!important;width:calc(100% - 76px)!important;height:auto!important;padding:0!important;display:flex!important;flex-direction:column!important;gap:3px!important;align-items:flex-end!important;justify-content:flex-start!important;transform:none!important;z-index:2!important}
    #main [data-card="8"] .site-sdf25k>div{width:100%!important;min-width:0!important;height:auto!important}
    #main [data-card="8"] .site-sdf25k p{white-space:normal!important;text-align:right!important;line-height:1.3!important;margin:0!important}
    #main [data-card="8"] .site-1j083h8{position:absolute!important;inset:auto auto 0 0!important;width:62%!important;height:62%!important;min-height:0!important;max-width:none!important;transform:none!important;border-radius:6px 6px 0 0!important;overflow:hidden!important}
    #main [data-card="8"] .site-1wt9xpr-container{position:relative!important;inset:auto!important;width:100%!important;height:100%!important;min-height:0!important}
    #main [data-card="8"] video{width:100%!important;height:100%!important;object-fit:cover!important;display:block!important}
    @media(max-width:809px){#main .site-19uivnr>[data-card="8"]{height:230px!important;min-height:230px!important;overflow:hidden!important}#main [data-card="8"] .site-sdf25k p{font-size:14px!important}}
  `;
  document.head.append(videoCardFixStyle);
  document.querySelectorAll('header a[href]').forEach(link => {
    const found = socialLabels.find(([key]) => link.href.includes(key));
    if (!found || link.querySelector('.native-social-label')) return;
    const label = document.createElement('span');
    label.className = 'native-social-label';
    label.textContent = found[1];
    link.append(label);
  });
  document.querySelectorAll('[data-copy-email]').forEach(card => {
    const address = card.querySelector('.site-g4mw3y p');
    if (address) address.textContent = 'camiloguerracars';
    const text = card.querySelector('.site-b3untr');
    if (text && !text.querySelector('.email-purpose')) {
      const purpose = document.createElement('span');
      purpose.className = 'email-purpose';
      purpose.textContent = 'Para contacto, alianzas o publicidad';
      text.prepend(purpose);
    }
  });
  const phoneLayout = matchMedia('(max-width:809px)');
  const mobileSequence = ['0', '5', '8', '9', '1', '4', '7', '2', '3', '10'];
  const mobileMedia = [];
  const grid = document.querySelector('#main .site-19uivnr');
  [].forEach(([id, selector, mediaId]) => {
    const media = grid?.querySelector(`[data-card="${id}"] ${selector}`);
    if (!media) return;
    const placeholder = document.createComment('Original media position');
    media.before(placeholder);
    const tile = document.createElement('div');
    tile.dataset.card = mediaId;
    tile.className = 'mobile-media-tile';
    tile.setAttribute('aria-label', 'Video de autos de Camilo Guerra');
    media.src = 'assets/6.mp4';
    media.setAttribute('muted', '');
    media.setAttribute('playsinline', '');
    media.setAttribute('autoplay', '');
    media.setAttribute('loop', '');
    media.controls = false;
    media.removeAttribute('muted');
    media.muted = true;
    tile.addEventListener('click', event => {
      if (event.target !== media) return;
      const overlay = document.createElement('div');
      overlay.className = 'video-modal';
      const close = document.createElement('button');
      close.type = 'button'; close.className = 'video-modal-close'; close.textContent = '×'; close.setAttribute('aria-label','Cerrar video');
      const enlarged = media.cloneNode(true);
      enlarged.controls = true; enlarged.muted = false; enlarged.autoplay = true; enlarged.loop = true;
      overlay.append(enlarged, close); document.body.append(overlay);
      const dismiss = () => { enlarged.pause(); overlay.remove(); };
      close.addEventListener('click', dismiss);
      overlay.addEventListener('click', event => { if (event.target === overlay) dismiss(); });
      enlarged.play().catch(() => {});
    });
    grid.append(tile);
    mobileMedia.push({ media, placeholder, tile });
  });
  const blockStyle = document.createElement('style');
  blockStyle.textContent = `
    .mobile-media-tile{display:none!important}
    .profile-cars{display:block;font-size:.45em;line-height:1.15;letter-spacing:inherit}
    @media(max-width:809px){
      #main .site-19uivnr>[data-card="2"],
      #main .site-19uivnr>[data-card="3"],
      #main .site-19uivnr>[data-card="6"],
      #main .site-19uivnr>[data-card="10"],
      #main .site-19uivnr>[data-card="gallery-video"]{position:relative!important;width:100%!important;max-width:100%!important;min-width:0!important;height:auto!important;min-height:0!important;aspect-ratio:1!important;overflow:hidden!important;border-radius:24px;box-sizing:border-box!important}
      #main .site-19uivnr>[data-card="2"]>div,
      #main .site-19uivnr>[data-card="3"]>div,
      #main .site-19uivnr>[data-card="6"]>div,
      #main .site-19uivnr>[data-card="10"]>div{position:absolute!important;inset:0!important;width:100%!important;max-width:100%!important;height:100%!important;min-height:0!important;transform:none!important}
      #main .site-19uivnr>[data-card="2"]{width:min(76%,280px)!important;max-width:100%!important;justify-self:center!important;height:auto!important;aspect-ratio:1!important;min-height:0!important}
      #main .site-19uivnr>[data-card="0"] .site-33awz3-container,
      #main .site-19uivnr>[data-card="5"] .site-4xeowm{display:flex!important;align-items:center!important;justify-content:center!important;text-align:center!important}
      #main .site-19uivnr>[data-card="4"] .site-b3untr{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important;width:100%!important}
      #main .site-19uivnr>[data-card="4"] .site-b3untr{position:relative!important;left:2px!important}
      #main .site-19uivnr>[data-card="4"] .site-b3untr{top:-22px!important}
      #main .site-19uivnr>[data-card="4"]:focus,
      #main .site-19uivnr>[data-card="4"]:focus-visible,
      #main .site-19uivnr>[data-card="4"]>div:focus{outline:none!important;box-shadow:none!important}
      #main .site-19uivnr>[data-card="4"] .site-b3untr p,
      #main .site-19uivnr>[data-card="4"] .email-purpose{text-align:center!important;margin-inline:auto!important}
      #main .site-19uivnr>[data-card="0"]>div>div,
      #main .site-19uivnr>[data-card="5"]>div>a{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;text-align:center!important}
      #main .site-19uivnr>[data-card="5"]>div>a{justify-content:flex-end!important;padding:16px!important;padding-top:54px!important}
      #main .site-19uivnr>[data-card="0"] p,
      #main .site-19uivnr>[data-card="5"] p{text-align:center!important;margin-inline:auto!important}
      #main .site-19uivnr>[data-card="8"]{height:220px!important;min-height:220px!important}
      #main [data-card="8"] .site-sdf25k{inset:auto 16px 16px 16px!important;width:auto!important;align-items:flex-start!important}
      #main [data-card="8"] .site-sdf25k p{text-align:left!important}
      #main [data-card="9"] .site-1oy7h5l{position:absolute!important;inset:0!important;width:100%!important;height:100%!important}
      #main .site-19uivnr>.mobile-media-tile{display:block!important;position:relative!important;height:auto!important;aspect-ratio:1!important;overflow:hidden!important;border-radius:24px}
      #main .site-19uivnr>.mobile-media-tile>div{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;transform:none!important}
      #main .mobile-media-tile .site-1wt9xpr-container{width:100%!important;height:100%!important}
      #main .site-19uivnr>[data-card="6"]{display:none!important}
      #main [data-card="8"] .site-1j083h8{display:block!important;position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;z-index:0!important;border-radius:inherit!important}
      #main [data-card="8"] .site-1wt9xpr-container,#main [data-card="8"] .site-1wt9xpr-container video{width:100%!important;height:100%!important;object-fit:cover!important;display:block!important}
    }
  `;
  document.head.append(blockStyle);
  const communityButtonStyle = document.createElement('style');
  communityButtonStyle.textContent = '#main .native-live-link{box-shadow:none!important;filter:none!important}#main .native-live-link:hover{box-shadow:none!important;filter:none!important}';
  document.head.append(communityButtonStyle);
  const socialPreviewStyle = document.createElement('style');
  socialPreviewStyle.textContent = `
    #main [data-card="5"]>div>a,
    #main [data-card="8"]>div>a{background-position:center!important;background-size:cover!important;background-repeat:no-repeat!important;isolation:isolate!important}
    #main [data-card="5"]>div>a{background-image:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.82)),url('assets/5.jpg')!important}
    #main [data-card="8"]>div>a{background-image:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.82)),url('assets/2.jpg')!important}
    #main [data-card="5"]>div>a>* ,#main [data-card="8"]>div>a>*{position:relative;z-index:1}
  `;
  document.head.append(socialPreviewStyle);
  const videoModalStyle = document.createElement('style');
  videoModalStyle.textContent = `.video-modal{position:fixed!important;inset:0!important;z-index:99999!important;display:grid!important;place-items:center!important;padding:24px!important;background:rgba(0,0,0,.88)!important}.video-modal video{width:min(92vw,900px)!important;height:min(78vh,620px)!important;object-fit:contain!important;background:#000!important;border-radius:16px!important}.video-modal-close{position:fixed!important;top:18px!important;right:18px!important;width:44px!important;height:44px!important;border:1px solid #666!important;border-radius:50%!important;background:#222!important;color:#fff!important;font-size:30px!important;line-height:1!important;cursor:pointer!important}`;
  document.head.append(videoModalStyle);
  const layoutDefaults = new Map();
  document.querySelectorAll('.site-19uivnr > [data-card]').forEach(card => {
    [card, card.firstElementChild].filter(Boolean).forEach(node => {
      layoutDefaults.set(node, ['order', 'grid-column', 'grid-row'].map(name => [name, node.style.getPropertyValue(name), node.style.getPropertyPriority(name)]));
    });
  });
  const arrangePhoneCards = () => {
    mobileMedia.forEach(({ media, placeholder, tile }) => {
      if (phoneLayout.matches) tile.append(media);
      else placeholder.after(media);
    });
    layoutDefaults.forEach((properties, node) => {
      properties.forEach(([name, value, priority]) => { if (value) node.style.setProperty(name, value, priority); else node.style.removeProperty(name); });
      if (!phoneLayout.matches) return;
      const id = (node.matches('[data-card]') ? node : node.parentElement).dataset.card;
      const rank = mobileSequence.indexOf(id);
      if (rank < 0) return;
      node.style.setProperty('order', String(rank), 'important');
      node.style.setProperty('grid-row', 'auto', 'important');
      if (node.matches('[data-card]')) {
        const column = id === 'gallery-video' ? '1' : id === '10' ? '2' : ['2', '7'].includes(id) ? '1 / -1' : 'auto';
        node.style.setProperty('grid-column', column, 'important');
      }
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
