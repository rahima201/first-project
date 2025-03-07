document.addEventListener("DOMContentLoaded", function () {
  const submitInput = document.getElementById("submit");

  const addSubmitButton = document.getElementById("addSubmitTask");

  const submitList = document.getElementById("submitList");
  addSubmitButton.style.backgroundColor = "red";

  addSubmitButton.addEventListener("click", function () {
    const submitText = submitInput.value;
    console.log(submitText);
    const submitTask = document.createElement("li");
    submitTask.innerHTML = `${submitText} <button id="delete-btn">Delete</button>`;

    // appending
    submitList.appendChild(submitTask);

    // delete

    const deleteButton = submitTask.querySelector("#delete-btn");
    deleteButton.addEventListener("click", function () {
      submitList.removeChild(submitTask);
    });
  });
});
