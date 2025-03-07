document.addEventListener("DOMContentLoaded", function () {
  const pressTask = document.getElementById("press");

  const addPressButton = document.getElementById("addPressButton");

  const pressButton = document.getElementById("pressButton");
  addPressButton.style.backgroundColor = "red";

  addPressButton.addEventListener("click", function () {
    const pressText = pressTask.value;
    console.log(pressText);
    const pressInput = document.createElement("li");
    pressInput.innerHTML = `${pressText} <button id="delete-btn">Delete</button>`;

    pressButton.appendChild(pressInput);

    const deleteButton = pressInput.querySelector("#delete-btn");
    deleteButton.addEventListener("click", function () {
      pressButton.removeChild(pressInput);
    });
  });
});
