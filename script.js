'use strict';

const select = document.querySelector('select');
const tdList = document.querySelectorAll('td');

const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

select.addEventListener('change', () => {
  let index = notes.indexOf(select.value);

  for (const td of tdList) {
    td.textContent = notes[index++];
  }
});
