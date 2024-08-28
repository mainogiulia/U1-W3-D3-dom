const buttonIsClicked = document.querySelector("#push");

buttonIsClicked.onclick = function () {
  const newTask = document.querySelector("#newtask input");
  if (newTask.value.length == 0) {
    alert("Please enter a task!");
  } else {
    const myTasks = document.querySelector("#tasks");
    myTasks.innerHTML += `<div class="task">
                            <span id="task-name">${newTask.value}</span>
                            <button class="delete">
                                <i class="far fa-trash-alt"></i>
                            </button>
                        </div>`;

    var deleteButton = document.querySelectorAll(".delete");
    for (var i = 0; i < deleteButton.length; i++) {
      deleteButton[i].onclick = function () {
        this.parentNode.remove();
      }; //this is the for to remove the task if the delete button is clicked
    } //this is the else to add the task if the task is entered
  } //this is the if to send an alert if the field is empty
}; //this is the main function
