function task() {
    const input = document.getElementById("myInput");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.innerText = taskText;
    listItem.style.color = "white"

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Erase Task";
    deleteButton.style.backgroundColor = "red";
    deleteButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(deleteButton);
    document.getElementById("myUL").appendChild(listItem);

    input.value = "";
}


