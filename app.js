














/* Add Task Function pseudo code
let tasks = [];

function addTask(taskName) {
  tasks.push(taskName);
  console.log(`Task "${taskName}" added.`);
}
addTask("groceries");
addTask("walk dog");
console.log(tasks);
*/

/* function renderTasks: 
 clear current task list display
  for each task in tasks array:
    create a list item element
    set its text to the task’s name
    add it to the task list area

    function renderTasks(tasksarray) { const tasklistelement = document.getElementById('taskList'); 
    taskListElement.innerHTML = '';

    tasksArray.foreach(function(task))
    { const li= document.createElement("li");
     li.textContent = task;
     taskListElement.appendChild(li);
      }


    */

    /* Update Task Status: 
    if (new Date(task.deadline) < new Date()) {
    task.status = "Overdue";
} */

/* Add Drop Down
const option = document.createElement("option");
option.value = "In Progress";
option.textContent = "In Progress";
statusDropdown.appendChild(option);

statusDropdown.value = task.status;

statusDropdown.addEventListener("change", (event) => {
    task.status = event.target.value;
    renderTasks();
});

li.appendChild(statusDropdown);
;

const option = document.createElement("option");
option.value = "Completed";
option.textContent = "Completed";
statusDropdown.appendChild(option);

statusDropdown.value = task.status;

statusDropdown.addEventListener("change", (event) => {
    task.status = event.target.value;
    renderTasks();
});

li.appendChild(statusDropdown);
;

const option = document.createElement("option");
option.value = "Overdue";
option.textContent = "Overdue";
statusDropdown.appendChild(option);

statusDropdown.value = task.status;

statusDropdown.addEventListener("change", (event) => {
    task.status = event.target.value;
    renderTasks();
});

li.appendChild(statusDropdown);
;

*/ 

/*  Task Filter 
function filterTasks(criteria) {
return tasks.filter(task => task.status == criteria || task.category == criteria);
}
*/

/* const filterDropdown= document.getElementById("fitlerStatus");
filterDropdown.addEventListener("change", (event) => {
const selectedFilter = event.target.value;
const filteredTasks = filterTasks(selectedFilter);
renderTasks(filteredTasks);

} */

/* Local storage

const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks(tasks);
}
*/
