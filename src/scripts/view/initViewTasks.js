import createTasksList from "../helpers/createTasksList";
import UI from '../config/uiConfig';
import apiServices from "../apiServices/apiServices";

const {taskList} = UI;

function initViewTasks() {
    apiServices.getDataTasks()
        .then(tasks => taskList.insertAdjacentHTML('afterbegin', createTasksList(tasks)))

    }



    export default initViewTasks