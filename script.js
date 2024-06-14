document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Add a new task
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    // Remove a task
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.parentElement;
            taskList.removeChild(taskItem);
        }
    });
});
