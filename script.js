const images = {
  front: {
    natural: 'assets/Prod_Base_Front.webp',
    black: 'assets/Prod_Base_Front_black.webp',
    white: 'assets/Prod_Base_Front_white.webp',
    rose: 'assets/Prod_Base_Front_rose.webp',
    glass: 'assets/Prod_Base_Front_glass.webp',
    teal: 'assets/Prod_Base_Front_teal.webp',
    wood: 'assets/Prod_Base_Front_wood.webp'
  },
  back: {
    natural: 'assets/Prod_Base_Back.webp',
    black: 'assets/Prod_Base_Back.webp',
    white: 'assets/Prod_Base_Back.webp',
    rose: 'assets/Prod_Base_Back.webp',
    glass: 'assets/Prod_Base_Back.webp',
    teal: 'assets/Prod_Base_Back.webp',
    wood: 'assets/Prod_Base_Back.webp'
  }
};

const copy = {
  natural: ['Natural Aluminum', 'Warm anodized aluminum with a calm architectural presence.'],
  black: ['Obsidian', 'Deep matte black with low reflection and a quiet technical character.'],
  white: ['Soft White', 'A clean ceramic-inspired finish designed for bright interiors.'],
  rose: ['Rose Metal', 'A warm metallic tone that feels softer than traditional hardware.'],
  glass: ['Smoked Glass', 'A reflective architectural finish with hidden depth.'],
  teal: ['Deep Teal', 'A muted colorway for interiors that want a little personality.'],
  wood: ['Walnut', 'A furniture-inspired finish built to live naturally on a shelf.']
};

let state = { finish: 'natural', view: 'front' };
const productImage = document.getElementById('productImage');
const finishName = document.getElementById('finishName');
const finishNote = document.getElementById('finishNote');

function updateProduct() {
  const nextSrc = images[state.view][state.finish];
  productImage.classList.add('is-changing');
  window.setTimeout(() => {
    productImage.src = nextSrc;
    productImage.alt = `HI-re M3 ${state.view} view in ${copy[state.finish][0]}`;
    finishName.textContent = copy[state.finish][0];
    finishNote.textContent = copy[state.finish][1];
    productImage.classList.remove('is-changing');
  }, 160);
}

document.querySelectorAll('.finish').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.finish').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    state.finish = button.dataset.finish;
    updateProduct();
  });
});

document.querySelectorAll('.pill').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.pill').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    state.view = button.dataset.view;
    updateProduct();
  });
});

Object.values(images.front).concat(Object.values(images.back)).forEach(src => {
  const img = new Image();
  img.src = src;
});
