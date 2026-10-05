'use strict';
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('lebadung561@gmail.com');
    copyStatus.textContent = 'Đã sao chép email.';
    copyButton.textContent = 'Đã sao chép ✓';
  } catch {
    copyStatus.textContent = 'Email: lebadung561@gmail.com — bạn có thể chọn và sao chép trực tiếp.';
  }
});
if ('IntersectionObserver' in window) {
  const links = [...document.querySelectorAll('nav a')];
  const observer = new IntersectionObserver(entries => {
    const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (current) links.forEach(link => {
      const active = link.getAttribute('href') === '#' + current.target.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }, {rootMargin: '-15% 0px -45% 0px', threshold: [0, .15, .4]});
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
