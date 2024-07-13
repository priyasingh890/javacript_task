// Define an array called tasks containing several objects, each representing a task in the to-do list. Each task object should have properties such as id, description, dueDate, status, and any other relevant details.
let task=[]

//Create a class called Task to represent a task, and use this class to create objects for each task in the tasks array
class Task {
    constructor(id, description, dueDate, status) {
        this.id = id,
        this.description = description,
        this.dueDate = dueDate,
        this.status = status
    }
}

// addTask 
function addTask(id, description, dueDate, status) {
    const addTaskData = new Task(id, description, dueDate, status)
    task.push(addTaskData);
    
}
addTask(1, "Complete project report", "2024-07-20", "Pending");
addTask(2, "Attend team meeting", "2024-07-15", "Completed");
addTask(3, "Submit tax documents", "2024-07-18", "Pending");
addTask(4, "Book flight tickets", "2024-07-22", "Pending");
console.log(task);

// updateTask
function updateTask(id, status) {
    for ( let i in task){
        if ( task[i].id===id){
            task[i].status = status;  
        }
    }
}
updateTask(3, "completed" );
updateTask(4, "completed");
console.log(task);

// removeTask
function removeTask(id) {
    task = task.filter((removedata)=> removedata.id!==id)
}
removeTask(1);
removeTask(2);
console.log(task);

// displayTask
function displayTask() {
   for ( let i in task){
        console.log(`${task[i].description} - ${task[i].dueDate}(${task[i].status})`)
   } 
}
displayTask();
