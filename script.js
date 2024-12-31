// Get the DOM elements
const input = document.getElementById('task')
const addBtn = document.getElementById('addBtn')
const list = document.getElementById('taskList')

// Make a function to add a new task
function addTask() {
    // Get the text from the input 
    const taskText = input.value.trim();
    if (taskText == '') {   // If input is empty tell user to add something before adding the task
        alert("Please add a task")
        return
    }

    const task = document.createElement('li')   // Create a new HTML element. In this case, we want to create, add to, delete, and overall update a list.
    task.textContent = taskText                 // List items in HTML are called "li", so here we create a a li and assign its value with tasktext

    const checkbox = document.createElement('input')    // Same idea except were creating a input tag here
    checkbox.type = 'checkbox'                          // Saying we want it to be of type checkbox
    task.prepend(checkbox)                              // We want the checkbox to go on left of the task
    checkbox.classList.add('checkbox')

    const deletebox = document.createElement('button')  // Create button tag to remove tasks
    deletebox.textContent = 'Delete Task'               // Assign hardcoded value to button of 'Delete task'
    deletebox.classList.add('delete-btn')               // Assigning formatting with css class delete-btn
    task.appendChild(deletebox)                         // Want the delete button to go on right of the task

    // Append the task to the list
    list.appendChild(task);     // Each time this function is called we add the task to the list

    // Clear the input field
    input.value = '';       

    // Mark task as completed when checkbox is clicked
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
        task.classList.add('completed');
        } else {
        task.classList.remove('completed');
        }
    });

    // Delete task when the delete button is clicked
    deletebox.addEventListener('click', () => {
        list.removeChild(task);
    });
}

// Add task when button is clicked
addBtn.addEventListener('click', addTask);

// Add task when Enter is pressed
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
})