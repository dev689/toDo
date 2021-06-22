// Elements
const inputTask = document.getElementById('inputTask')
const addBtn = document.getElementById('addBtn')
const taskList = document.getElementById('taskList')

// Function
const createTask = (taskName) => {
    const task = document.createElement('li')
    const defaultStyle = 'style="text-decoration:none;"'
    const doneStyle = 'style="text-decoration:line-through;"'
    task.innerHTML = `<span ${defaultStyle}>${taskName}</span>`
    task.style.cursor = 'pointer'
    task.addEventListener('click', () => {
        if (task.innerHTML === `<span ${defaultStyle}>${taskName}</span>`){
            task.innerHTML = `<span ${doneStyle}>${taskName}</span>`
        } else {
            task.innerHTML = `<span ${defaultStyle}>${taskName}</span>`
        }
    })
    taskList.appendChild(task)
}

// Event listener
addBtn.addEventListener('click', (e) => {
    e.preventDefault()

    createTask(inputTask.value);
    inputTask.value = ""
})