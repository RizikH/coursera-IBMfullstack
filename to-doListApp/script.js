document.addEventListener("DOMContentLoaded", () => {
    function submitForm() {
        const formBtn = document.getElementById("submitFormBtn");

        formBtn.addEventListener("click", () => {
            const input = document.getElementById("taskInput");
            const taskText = input.value.trim();

            if (taskText !== "") {
                const ul = document.getElementById("todoList");


                // Create new list item
                const li = document.createElement("li");

                // Create task text element
                const span = document.createElement("span");
                span.textContent = taskText;

                // Create edit button
                const editButton = document.createElement("button");
                editButton.textContent = "Edit";
                editButton.onclick = () => editTask(span);

                // Create remove button
                const removeButton = document.createElement("button");
                removeButton.textContent = "Delete";
                removeButton.onclick = () => removeTask(li);

                // Append buttons and text to the list item
                li.appendChild(span);
                li.appendChild(editButton);
                li.appendChild(removeButton);

                // Append list item to the list
                ul.appendChild(li);

                // Clear the input field
                input.value = "";
            }
            else {
                alert("Please enter a valid task.");
            }
        });
    }

    function editTask(span) {
        const newTask = prompt("Edit your task", span.textContent);

        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim(); // Set the new task text
        }
    }

    function removeTask(li) {
        const ul = document.getElementById("todoList");

        ul.removeChild(li);
    }

    submitForm();
});
