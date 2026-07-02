const finishImage = document.getElementById('finishImage');
const viewerNote = document.getElementById('viewerNote');
const productLayers = document.getElementById('productLayers');

document.querySelectorAll('.finish-tile').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.finish-tile').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    finishImage.classList.remove('active');
    setTimeout(() => {
      finishImage.src = button.dataset.src;
      viewerNote.textContent = button.dataset.note;
      finishImage.onload = () => finishImage.classList.add('active');
      productLayers.classList.remove('show-back');
      document.querySelectorAll('.view-btn').forEach((b) => b.classList.toggle('active', b.dataset.view === 'front'));
    }, 120);
  });
});

document.querySelectorAll('.view-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.view-btn').forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
    const back = button.dataset.view === 'back';
    productLayers.classList.toggle('show-back', back);
    viewerNote.textContent = back ? 'Recessed multi-gig rear IO / cable management bay' : document.querySelector('.finish-tile.active').dataset.note;
  });
});

const card = document.querySelector('.product-card');
card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - .5;
  const y = (e.clientY - rect.top) / rect.height - .5;
  card.style.transform = `perspective(1200px) rotateY(${x * 2.5}deg) rotateX(${-y * 1.5}deg)`;
});
card.addEventListener('mouseleave', () => card.style.transform = 'none');
