import deleteTask from "../view/deleteTask";
import switchCompleted from "../view/switchCompleted";

function onClickTasksListHandler({target}) {
    const btnAttr = target.dataset.btn

    switch (btnAttr) {
        case 'delete':
            deleteTask(target)
            break;
        case 'isCompleted' :
            switchCompleted(target)
            break;

    }


}

export default onClickTasksListHandler