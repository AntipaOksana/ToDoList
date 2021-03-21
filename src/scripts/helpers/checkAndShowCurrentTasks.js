import {showAllTasks, showCompletedTask, showUncompletedTask} from "../view/showCurrentTasks";
import {activeTab} from "../eventListeners/onClickTabHandler";

function checkAndShowCurrentTasks() {
    const tabAttr = activeTab.dataset.tab
    switch (tabAttr) {
        case 'all':
            showAllTasks()
            break;
        case 'completed':
            showCompletedTask()
            break;
        case'uncompleted':
            showUncompletedTask()
            break;

    }
}

export default checkAndShowCurrentTasks