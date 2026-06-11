const screenshots = document.querySelectorAll('.screenshot');
const descCloud = document.getElementById('descCloud');

screenshots.forEach(img => {
  img.addEventListener('click', () => {
    screenshots.forEach(i => i.classList.remove('active'));
    img.classList.add('active');
    descCloud.innerHTML = `<p>${img.dataset.desc}</p>`;
  });
});
