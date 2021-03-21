import renderNewTask from "../view/renderNewTask";

function onSubmitHandler(e) {
    e.preventDefault()
    renderNewTask(e.currentTarget)
}

export default onSubmitHandler
