import apiServices from "../apiServices/apiServices";

function deleteTask(btn) {

   const task = btn.closest('[data-id]')
    const taskId = task.dataset.id
    apiServices.deleteTask(taskId)
        .then((res) =>{
            if(typeof res === "object") {
                task.remove()
            }
        })
 }

 export default deleteTask