import validateForm from "../helpers/validateForm";
import getDataFromForm from "../helpers/getDataFromForm";
import {showErrorMessage, hideErrorMessage} from "./errorMessage";
import apiServices from "../apiServices/apiServices";
import createTaskElement from "../helpers/createNewElement";
import UI from "../config/uiConfig"
import checkAndShowCurrentTasks from "../helpers/checkAndShowCurrentTasks";

function renderNewTask(form) {
    const formData = getDataFromForm()

    if (!validateForm(formData)) {
        showErrorMessage()
        return
    }
    hideErrorMessage()
    apiServices.createNewTask({
        title: formData.title,
        body: formData.body,
        complete: false
    })
        .then((res) => {
           const taskElement = createTaskElement(res)
            UI.taskList.insertAdjacentHTML("afterbegin", taskElement)
        })
        .finally(() =>{
            checkAndShowCurrentTasks()
            form.reset()
        })


}

export default renderNewTask