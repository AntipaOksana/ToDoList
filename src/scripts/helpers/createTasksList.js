import createNewElement from "./createNewElement";

function createTasksList(tasks) {
        return tasks.map(task => createNewElement(task)).join('')


    }

    export default createTasksList