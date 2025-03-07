document.addEventListener("DOMContentLoaded", function () {
  const inputTask = document.getElementById("input-task");

  const submitBtn = document.getElementById("submit-btn");

  submitBtn.addEventListener("click", function () {
    const taskValue = inputTask.value;
    console.log(taskValue);
  });

  const submitItem = document.createElement("li");

  submitList.HTML = `${taskText} <button id="delete-btn">Delete</button>`;

  submitItem.appendChild(submitItem);

  const deleteButton = submitItem.querySelector("#delete-btn");
  deleteButton.addEventListener("click", function () {
    submitList.removeChild(submitItem);
  });
});
