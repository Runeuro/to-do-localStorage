const noteInput = document.getElementById('noteInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const noteList = document.getElementById('noteList');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function addNote() {
  const noteText = noteInput.value;
  if (noteText !== '') {
    const note = { text: noteText, completed: false };
    notes.push(note);
    displayNotes();
    noteInput.value = '';
    saveNotes();
  }
}

function displayNotes() {
  noteList.innerHTML = '';
  notes.forEach(function(note, index) {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = note.completed;
    checkbox.addEventListener('change', function() {
      note.completed = !note.completed;
      li.classList.toggle('completed');
      saveNotes();
    });

    const text = document.createElement('span');
    text.textContent = note.text;
    if (note.completed) {
      li.classList.add('completed');
    }

    li.appendChild(checkbox);
    li.appendChild(text);
    noteList.appendChild(li);
  });
}

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function clearNote() {
  let tasks = document.getElementById('noteList')
  tasks.remove();
  localStorage.clear();




}

addButton.addEventListener('click', addNote);
clearButton.addEventListener('click', clearNote);

displayNotes();