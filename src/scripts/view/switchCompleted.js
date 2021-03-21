import apiServices from "../apiServices/apiServices";
import createTaskElement from "../helpers/createNewElement";
import checkAndShowCurrentTasks from "../helpers/checkAndShowCurrentTasks";

function switchCompleted(btn) {
   const task = btn.closest('[data-id]');
    const taskId = task.dataset.id
    const isCompletedTask = task.dataset.completed === 'true';

    apiServices.changeTask({completed: !isCompletedTask}, taskId)
        .then((res) => {
            task.insertAdjacentHTML("beforebegin", createTaskElement(res))
            task.remove()
        })
        .then(() => checkAndShowCurrentTasks())

 }

 export default switchCompleted