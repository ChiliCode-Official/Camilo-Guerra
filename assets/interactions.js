import createGlobe from './cobe.js';

// La exportación original dejó dos copias completas del sitio; conserva solo la primera.
document.querySelectorAll('[data-site-root]').forEach((node,index)=>{if(index>0)node.remove()});

// Corrige el icono heredado del template en la tarjeta de TikTok.
document.querySelectorAll('a[href*="tiktok.com"]').forEach(link=>{
 const icon=link.querySelector('.site-74019');
 if(icon)icon.outerHTML='<span class="native-tiktok-icon" aria-hidden="true">♪</span>';
});

// El enlace debe comunicar la acción antes de abrir TikTok.
document.querySelectorAll('.native-live-link').forEach(link=>{
 link.replaceChildren(document.createTextNode('Ver los lives en TikTok '),Object.assign(document.createElement('span'),{textContent:'↗',ariaHidden:'true'}));
 link.setAttribute('aria-label','Ver los lives de Camilo Guerra en TikTok');
});

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const links=[['TikTok · lives todos los domingos','https://www.tiktok.com/@Camiloguerramm'],['Instagram','https://www.instagram.com/Camiloguerramm'],['Camilo Guerra Cars','https://www.youtube.com/@CGSCars'],['Mexi Parces','https://youtube.com/@mexiparces?si=PeqA0f4Sy6DAw4e-']];
const dialog=document.createElement('dialog');dialog.className='native-dialog';dialog.setAttribute('aria-label','Vista ampliada');document.body.append(dialog);
let previousFocus;
function close(){dialog.querySelectorAll('video').forEach(v=>v.pause());dialog.close();document.documentElement.style.overflow='';previousFocus?.focus()}
function show(content){previousFocus=document.activeElement;dialog.replaceChildren(content);const button=document.createElement('button');button.className='close';button.textContent='×';button.setAttribute('aria-label','Cerrar');button.addEventListener('click',close);dialog.append(button);dialog.showModal();document.documentElement.style.overflow='hidden';button.focus()}
dialog.addEventListener('click',close);
dialog.addEventListener('pointerdown',close);
dialog.addEventListener('cancel',e=>{e.preventDefault();close()});
function preview(source){const media=source.cloneNode(true);media.removeAttribute('style');media.removeAttribute('class');media.removeAttribute('width');media.removeAttribute('height');media.addEventListener('click',e=>e.stopPropagation());if(media.tagName==='VIDEO'){media.controls=true;media.muted=true;media.autoplay=true}show(media);if(media.tagName==='VIDEO')media.play().catch(()=>{})}
function keyboardClick(node){if(!node.matches('a,button')){node.tabIndex=0;node.setAttribute('role','button');node.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();node.click()}})}}
document.querySelectorAll('[data-card]').forEach(card=>{
 const index=Number(card.dataset.card);
 if([2,3,6,11,21,25,29].includes(index)){const img=card.querySelector('img');if(img){const target=card.firstElementChild;keyboardClick(target);target.setAttribute('aria-label','Ampliar '+(img.alt||'imagen'));target.addEventListener('click',()=>preview(img))}}
 if(card.dataset.destination){const target=card.firstElementChild;keyboardClick(target);target.addEventListener('click',()=>window.open(card.dataset.destination,'_blank','noopener,noreferrer'))}
 if(card.dataset.collection){const target=card.firstElementChild;keyboardClick(target);target.addEventListener('click',()=>{const panel=document.createElement('section');panel.className='native-collection';const title=document.createElement('h2');title.textContent=card.querySelector('p')?.textContent||'Comunidad';panel.append(title);const photos=document.createElement('div');photos.className='photos';card.querySelectorAll('img').forEach(img=>{const clone=img.cloneNode(true);clone.removeAttribute('style');clone.addEventListener('click',()=>preview(img));photos.append(clone)});panel.append(photos);links.forEach(([name,url])=>{const a=document.createElement('a');a.textContent=name+' ↗';a.href=url;a.target='_blank';a.rel='noopener noreferrer';panel.append(a)});show(panel)})}
});
document.querySelectorAll('[data-copy-email]').forEach(card=>{
 const icon=document.createElement('label');
 icon.className='clipboard-container';
 icon.setAttribute('aria-label','Copiar correo electrónico');
 icon.innerHTML='<input type="checkbox" tabindex="-1"><svg viewBox="0 0 384 512" class="clipboard" aria-hidden="true"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 0 0 0 48z"></path></svg><svg viewBox="0 0 384 512" class="clipboard-check" aria-hidden="true"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 0 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>';
 (card.querySelector('.site-b655bd')||card).append(icon);
 keyboardClick(card);card.setAttribute('aria-label','Copiar correo electrónico');let timer;card.addEventListener('click',async()=>{let copied=false;try{await navigator.clipboard.writeText(card.dataset.copyEmail);copied=true}catch{const text=document.createElement('textarea');text.value=card.dataset.copyEmail;text.style.position='fixed';text.style.opacity='0';document.body.append(text);text.select();copied=document.execCommand('copy');text.remove()}if(copied){card.classList.add('copied');icon.querySelector('input').checked=true;clearTimeout(timer);timer=setTimeout(()=>{card.classList.remove('copied');icon.querySelector('input').checked=false},2200)}else{const p=document.createElement('p');p.className='native-collection';p.textContent=card.dataset.copyEmail;show(p)}})});
document.querySelectorAll('[data-card] img').forEach(img=>{
 if(img.closest('[data-card]')?.dataset.collection)return;
 img.style.cursor='zoom-in';
 img.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();preview(img)});
});
const tick=()=>{const label=new Intl.DateTimeFormat('en-US',{weekday:'short',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:true}).format(new Date()).toUpperCase();document.querySelectorAll('[data-clock]>div').forEach(n=>n.textContent=label)};tick();setInterval(tick,30000);document.querySelectorAll('[data-year]').forEach(n=>n.textContent=new Date().getFullYear());
const visibility=new IntersectionObserver(entries=>{entries.forEach(({target,isIntersecting})=>{if(isIntersecting&&!reduced){target.play().catch(()=>{})}else target.pause()})},{rootMargin:'100px'});document.querySelectorAll('video').forEach(v=>{v.muted=true;v.playsInline=true;visibility.observe(v)});
document.querySelectorAll('[data-globe]').forEach(canvas=>{
 let phi=0,last=performance.now(),visible=true,dragging=false,lastX=0;
 const observer=new IntersectionObserver(entries=>visible=entries[0].isIntersecting);observer.observe(canvas);
 canvas.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;canvas.setPointerCapture(e.pointerId)});canvas.addEventListener('pointermove',e=>{if(dragging){phi+=(e.clientX-lastX)*.009;lastX=e.clientX}});canvas.addEventListener('pointerup',()=>dragging=false);canvas.addEventListener('pointercancel',()=>dragging=false);
 try{createGlobe(canvas,{devicePixelRatio:1.5,width:540,height:540,phi,theta:.3,dark:1,diffuse:1.2,mapSamples:16000,mapBrightness:6,baseColor:[.16,.16,.16],markerColor:[1,1,1],glowColor:[.12,.12,.12],markers:[],onRender:state=>{const now=performance.now();if(visible&&!document.hidden&&!reduced&&!dragging)phi+=(now-last)*.00015;last=now;state.phi=phi;const width=canvas.clientWidth*1.5;state.width=width;state.height=width}})}catch(error){console.warn('Globo WebGL no disponible',error)}
});
if(!reduced){document.querySelectorAll('[data-clock],.site-8w4xde,.site-19uivnr').forEach((n,i)=>n.animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:i*100,easing:'cubic-bezier(.2,.8,.2,1)'}))}
