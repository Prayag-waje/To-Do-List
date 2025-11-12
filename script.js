let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

function save() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function render() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t.text;
    li.dataset.id = t.id;
    li.addEventListener('click', () => li.classList.toggle('done'));

    const btn = document.createElement('button');
    btn.textContent = '🗑️';
    btn.className = 'delete-btn';
    btn.addEventListener('click', e => {
      e.stopPropagation();
      remove(t.id);
    });

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;
  tasks.push({ id: Date.now(), text });
  save();
  render();
  input.value = '';
}

function remove(id) {
  tasks = tasks.filter(t => t.id != id);
  save();
  render();
}

document.addEventListener('DOMContentLoaded', render);