// script.js

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskList = document.getElementById("task-list");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.draggable = true;
    taskItem.ondragstart = drag;
    
    taskItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button onclick="deleteTask(this)">&#10006;</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = "";
}

function deleteTask(element) {
    element.parentElement.remove();
}

// Drag and Drop Functionality
let draggedItem = null;

function drag(event) {
    draggedItem = event.target;
    setTimeout(() => event.target.style.display = "none", 0);
}

document.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('dragstart', drag);
});

document.getElementById("task-list").addEventListener('dragover', function (event) {
    event.preventDefault();
});

document.getElementById("task-list").addEventListener('drop', function (event) {
    event.preventDefault();
    setTimeout(() => draggedItem.style.display = "block", 0);
    if (draggedItem) {
        this.appendChild(draggedItem);
        draggedItem = null;
    }
});