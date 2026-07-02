const labels = {
  natural: 'Natural Aluminum',
  black: 'Obsidian',
  white: 'White',
  rose: 'Rose',
  glass: 'Glass',
  teal: 'Teal',
  bamboo: 'Bamboo'
};

let currentFinish = 'bamboo';
let currentView = 'front';

const stage = document.getElementById('productStage');
const overlays = [...document.querySelectorAll('.product-layer.overlay')];
const chips = [...document.querySelectorAll('.chip')];
const finishName = document.getElementById('finishName');
const finishPanel = document.querySelector('.finish-panel');
const viewButtons = [...document.querySelectorAll('.seg')];

function setFinish(finish){
  if(currentView === 'rear') return;
  currentFinish = finish;
  finishName.textContent = labels[finish];
  chips.forEach(chip => chip.classList.toggle('active', chip.dataset.finish === finish));
  overlays.forEach(layer => layer.classList.toggle('active', layer.dataset.finish === finish && finish !== 'natural'));
}

function setView(view){
  currentView = view;
  viewButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.view === view));
  stage.classList.toggle('rear-mode', view === 'rear');
  finishPanel.classList.toggle('disabled', view === 'rear');
  if(view === 'rear'){
    finishName.textContent = 'Rear View';
  } else {
    finishName.textContent = labels[currentFinish];
  }
}

chips.forEach(chip => chip.addEventListener('click', () => setFinish(chip.dataset.finish)));
viewButtons.forEach(btn => btn.addEventListener('click', () => setView(btn.dataset.view)));

// Preload overlays after first paint.
requestIdleCallback?.(() => {
  ['black','white','rose','glass','teal','bamboo','rear','home','office','sketches'].forEach(name => {
    const img = new Image();
    img.src = `assets/${name}.webp`;
  });
});
