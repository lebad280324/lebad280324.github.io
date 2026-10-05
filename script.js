"use strict";
const menuButton=document.getElementById('menu-button');
const nav=document.getElementById('site-nav');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menuButton.focus();}});
const filters=[...document.querySelectorAll('[data-filter]')];
const cards=[...document.querySelectorAll('.project-card')];
filters.forEach(button=>button.addEventListener('click',()=>{
 const category=button.dataset.filter;
 filters.forEach(filter=>{const active=filter===button;filter.classList.toggle('active',active);filter.setAttribute('aria-pressed',String(active));});
 cards.forEach(card=>{card.hidden=category!=='all'&&card.dataset.category!==category;});
 document.getElementById('filter-status').textContent='Hiển thị '+cards.filter(card=>!card.hidden).length+' phân hệ';
}));
const copyButton=document.getElementById('copy-email');
copyButton.addEventListener('click',async()=>{
 const status=document.getElementById('copy-status');
 try{await navigator.clipboard.writeText('lebadung561@gmail.com');status.textContent='Đã sao chép email.';copyButton.textContent='Đã sao chép ✓';}
 catch{status.textContent='Email: lebadung561@gmail.com — bạn có thể chọn và sao chép trực tiếp.';}
});
if('IntersectionObserver' in window){
 const links=[...nav.querySelectorAll('a')];
 const observer=new IntersectionObserver(entries=>{const current=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(current)links.forEach(link=>{const active=link.getAttribute('href')==='#'+current.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});},{rootMargin:'-15% 0px -45% 0px',threshold:[0,.15,.4]});
 document.querySelectorAll('section[id]').forEach(section=>observer.observe(section));
}
