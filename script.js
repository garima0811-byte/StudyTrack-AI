let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let taskCount = document.getElementById("taskCount");

let totalTasks = 0;

addButton.addEventListener("click", function () {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    let taskText = document.createElement("span");
    taskText.innerText = " " + task;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.style.marginLeft = "20px";

    li.appendChild(checkBox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
    totalTasks++;
    taskCount.innerText = totalTasks;

    checkBox.addEventListener("change", function () {
        if (checkBox.checked) {
            taskText.style.textDecoration = "line-through";
            taskText.style.color = "gray";
        }
        else {
            taskText.style.textDecoration = "none";
            taskText.style.color = "white";
        }

    });

    deleteButton.addEventListener("click", function () {
        li.remove();

        totalTasks--;
        taskCount.innerText = totalTasks;

    });

});