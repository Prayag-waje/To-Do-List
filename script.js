let tolist = [];

function save() {
  const alltask = JSON.parse(localStorage.getItem("allist"));
  if (alltask) {
    tolist.push(...alltask);
    todoCreate();
  }
}
save();

function todoCreate() {
  localStorage.setItem("allist", JSON.stringify(tolist));
  const todoContainer = document.getElementById("taskList");
  if (!todoContainer) return;
  todoContainer.innerHTML = "";
  for (let i = 0; i < tolist.length; i++) {
    let output = tolist[i];
    todoContainer.innerHTML += `\n    <li class="todo">${output} <button class="btn-delete" type="button" onclick="Delete(${i})">Delete</button></li>`;
  }
}
todoCreate();

function addTask() {
  const taskElement = document.getElementById("taskInput");
  if (!taskElement) return;
  const task = taskElement.value;
  if (!task) {
    alert("Please enter a task")
    return;
  }
  tolist.push(task);
  todoCreate();
  taskElement.value = "";
}

function Delete(index) {
  if (index < 0 || index >= tolist.length) return;
  tolist.splice(index, 1);
  todoCreate();
}

