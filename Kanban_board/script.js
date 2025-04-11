let boardData = {};

// Utility to generate unique IDs
function generateId() {
    return '_' + Math.random().toString(36);
}

// Load saved board data
window.onload = function () {
    const saved = localStorage.getItem("kanban");
    if (saved) {
        boardData = JSON.parse(saved);
        renderBoards();
    } else {
        boardData = {
            "To-Do": [],
            "Progress": [],
            "Done": []
        };
        saveBoards();
        renderBoards();
    }
};

// Save to localStorage
function saveBoards() {
    localStorage.setItem("kanban", JSON.stringify(boardData));
}

// Render all boards and tasks
function renderBoards() {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    for (const board in boardData) {
        const box = document.createElement("div");
        box.className = "box";
        box.dataset.board = board;

        const title = document.createElement("h3");
        title.className = "title";
        title.textContent = board;

        const taskList = document.createElement("div");
        taskList.className = "task-list";

        boardData[board].forEach(task => {
            const taskDiv = createTaskElement(task.text, task.id);
            taskList.appendChild(taskDiv);
        });

        const btn = document.createElement("button");
        btn.className = "btn";
        btn.textContent = "+ Add Task";
        btn.onclick = () => {
            const text = prompt("Enter task:");
            if (text) {
                const id = generateId();
                const taskEl = createTaskElement(text, id);
                taskList.appendChild(taskEl);
                boardData[board].push({ id, text });
                saveBoards();
            }
        };

        box.appendChild(title);
        box.appendChild(taskList);
        box.appendChild(btn);

        box.addEventListener("dragover", allowDrop);
        box.addEventListener("drop", drop);

        container.appendChild(box);
    }
}

// Create task element
function createTaskElement(text, id) {
    const task = document.createElement("div");
    task.className = "items";
    task.textContent = text;
    task.draggable = true;
    task.id = id;
    task.addEventListener("dragstart", drag);
    return task;
}

// Drag and drop logic
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const task = document.getElementById(id);
    const newBoard = ev.currentTarget.dataset.board;

    // Remove from old board
    for (const board in boardData) {
        boardData[board] = boardData[board].filter(t => t.id !== id);
    }

    // Add to new board
    const text = task.textContent;
    boardData[newBoard].push({ id, text });

    saveBoards();
    renderBoards(); // re-render for accurate DOM
}

// Add new board
document.getElementById("btn2").addEventListener("click", function () {
    const name = prompt("Enter board name:");
    if (name && !boardData[name]) {
        boardData[name] = [];
        saveBoards();
        renderBoards();
    } else {
        alert("Board already exists or invalid name!");
    }
});
