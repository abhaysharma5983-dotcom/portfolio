// Dark mode toggle
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// More About Me toggle
const moreBtn = document.getElementById('moreBtn');
const moreContent = document.getElementById('moreContent');

moreBtn.addEventListener('click', () => {
  moreContent.classList.toggle('hidden');
});
