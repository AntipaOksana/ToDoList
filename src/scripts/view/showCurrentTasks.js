

export function showAllTasks(){
    const tasksElements = document.querySelectorAll('.newTaskElem')
    tasksElements.forEach((el) => {
            el.classList.remove('hidden')
    })
}

export function showCompletedTask() {
    const tasksElements = document.querySelectorAll('.newTaskElem')
    tasksElements.forEach((el) => {
        if(el.classList.contains('completed')){
            el.classList.remove('hidden')
        } else {
            el.classList.add('hidden')
        }
    })
}

export function showUncompletedTask() {
    const tasksElements = document.querySelectorAll('.newTaskElem')
    tasksElements.forEach((el) => {
        if(el.classList.contains('completed')){
            el.classList.add('hidden')
        } else {
            el.classList.remove('hidden')
        }
    })
}



