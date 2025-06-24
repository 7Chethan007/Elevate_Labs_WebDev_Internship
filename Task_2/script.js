const addBtn = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

// Optional: Allow pressing Enter to add task
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  // Toggle complete
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';

  removeBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
}