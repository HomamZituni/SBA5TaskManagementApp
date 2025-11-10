
//Task Input Code 

let tasks = [];

function addTask(name, category, deadline, status) {
    const task = { name, category, deadline, status };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}



// Task Render Code

function renderTasks(tasksArray) {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    tasksArray.forEach(function(task, index) {
        const li = document.createElement("li");

        li.innerHTML = `
          <strong>${task.name}</strong><br>
          Category: ${task.category}<br>
          Deadline: ${task.deadline}<br>
        `;

        const statusDropdown = document.createElement("select");
        ["In Progress", "Completed", "Overdue"].forEach(status => {
            const option = document.createElement("option");
            option.value = status;
            option.textContent = status;
            statusDropdown.appendChild(option);
        });

        statusDropdown.value = task.status;

        statusDropdown.addEventListener("change", (event) => {
            task.status = event.target.value;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks(tasks);
        });

        li.appendChild(statusDropdown);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            tasks.splice(index, 1); 
            localStorage.setItem("tasks", JSON.stringify(tasks)); 
            renderTasks(tasks); 
        });
        li.appendChild(deleteBtn);

        taskListElement.appendChild(li);
    });
}


 

// Task Status Code

function updateTaskStatus(task) {
    if (new Date(task.deadline) < new Date()) {
        task.status = "Overdue";
    }
}


// Filter Tasks

function filterTasks(criteria) {
    return tasks.filter(task => task.status === criteria || task.category === criteria);
}


// Filter Drop Down
const filterDropdown = document.getElementById("filterStatus");

filterDropdown.addEventListener("change", (event) => {
  const selected = event.target.value;
const filtered = selected === "all" 
    ? tasks 
    : tasks.filter(task => task.status === selected);

  renderTasks(filtered);
});

// Local Storage

const savedTasks = localStorage.getItem("tasks");
if (savedTasks) {
    tasks = JSON.parse(savedTasks);
    renderTasks(tasks);
}

// Task Button Event Listener
document.getElementById('addtaskbtn').addEventListener('click', () => {
const name = document.getElementById('taskname').value;
const category = document.getElementById('taskcategory').value;
const deadline = document.getElementById('taskdeadline').value;
const status = document.getElementById('taskstatus').value;

if (!name || !category || !deadline) return;
const task = { name, category, deadline, status };
tasks.push(task);

localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
});





/*  Planning Code

Task Data /Add Task 
let tasks = [];

function addTask(taskName) {
  tasks.push(taskName);
  console.log(`Task "${taskName}" added.`);
}
addTask("groceries");
addTask("walk dog");
console.log(tasks);
*/

/*    Render Task List 
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




    /*       Update Task Status: 
    if (new Date(task.deadline) < new Date()) {
    task.status = "Overdue";
} */





/* Task Status Drop Down
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




/*  Task Filtering 

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

function addTask(task) {
    tasks.push(task); 
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
    renderTasks(tasks); 
}


statusDropdown.addEventListener("change", (event) => {
    task.status = event.target.value; 
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(tasks); 
});

*/


// Delete Button 
/* for each task create a new button called delete
set the text to delete 
when delete button clicked: 
remove the task at the current index from task list
save the update tasks list to the local storage
re render task list on screen, add deletebutton to the list item
add list item to the task list element on the page */


//All Tests passed