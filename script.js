'use strict';

const input = document.querySelector('input');
const p = document.querySelector('p');

input.addEventListener('change', () => {
  console.log('A');
  p.textContent = 'change!';
});
