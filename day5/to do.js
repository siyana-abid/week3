document.body.style.backgroundColor = "lightblue";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    let task = document.getElementById("task").value;

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();

    document.getElementById("task").value = "";
}

function showTasks() {
    let list = document.getElementById("list");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML +=
            "<li>" + tasks[i] +
            " <button onclick='deleteTask(" + i + ")'>Delete</button></li>";
    }
}

function deleteTask(i) {
    tasks.splice(i, 1);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    showTasks();
}

showTasks();