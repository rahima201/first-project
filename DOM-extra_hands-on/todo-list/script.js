// Waits until the page is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Get the input field where users type tasks
  const taskInput = document.getElementById("task");

  // Get the "Add" button
  const addTaskbutton = document.getElementById("addTask");

  // Get the list where tasks will be added
  const taskList = document.getElementById("taskList");

  // When the "Add" button is clicked
  addTaskbutton.addEventListener("click", function () {
    const taskText = taskInput.value;
    //   console.log("taskText", taskText);

    // Create a new list item (task)
    const taskItem = document.createElement("li");

    // Add the task text and a "Delete" button to the list item
    taskItem.innerHTML = `${taskText} <button id="delete-btn">Delete</button>`;

    // Add the task item to the list
    taskList.appendChild(taskItem);

    // Get the "Delete" button inside the new task
    const deleteButton = taskItem.querySelector("#delete-btn");

    // When the "Delete" button is clicked
    //delete functionality
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(taskItem); // Remove the task from the list
    });
  });
});

// How it works:
// The script waits until the page is fully loaded.
// When you type a task and click "Add," a new task appears in the list with a "Delete" button.
// If you click "Delete," the task is removed from the list.
