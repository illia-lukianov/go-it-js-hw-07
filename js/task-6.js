const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');
let size = 30;
let amount;

buttonCreate.addEventListener('click', () => {
  if (Number(input.value) > 0 && Number(input.value) <= 100) {
    amount = Number(input.value);
    createBoxes(amount);
    input.value = '';
    size = 30;
  }
});

buttonDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    boxes.insertAdjacentHTML('beforeend',
      `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()};"></div>`);
    size += 10;
  };
};
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
};
  
