
//Task Input Code 

let tasks = [];

function addTask(name, category, deadline, status) {
const task = {
name: name,
category: category, 
deadline: deadline,
status: status
};
tasks.push(task);

console.log(`Task "${name}" added.`);
console.log(tasks); }




// Task Render Code

function renderTasks(tasksArray) {
const taskListElement = document.getElementById('taskList');
taskListElement.innerHTML= '';

tasksArray.forEach(function(task)
    { const li= document.createElement("li");

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


// Add Task

function addTask(name, category, deadline, status) {
    const task = { name, category, deadline, status };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}






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
