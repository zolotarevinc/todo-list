function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const newTask = taskInput.value;

    if (newTask) {
        const listItem = document.createElement('li');
        listItem.textContent = newTask;
        listItem.addEventListener('click', () => {
            listItem.remove();
        });
        taskList.appendChild(listItem);
        taskInput.value = '';

        // Save tasks to LocalStorage
        saveTasks();
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(task => {
        tasks.push(task.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            listItem.addEventListener('click', () => {
                listItem.remove();
                saveTasks();
            });
            document.getElementById('task-list').appendChild(listItem);
        });
    }
}

// Load tasks when the page loads
window.onload = loadTasks;
