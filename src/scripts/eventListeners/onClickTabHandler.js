 import switchTab from "../view/switchTab";
 import checkAndShowCurrentTasks from "../helpers/checkAndShowCurrentTasks";


export let activeTab = document.querySelector('.tab-active')

function onClickTabHandler({target}) {
     if(activeTab === target) {
         return
     }

     activeTab = switchTab(target, activeTab)

    checkAndShowCurrentTasks()

 }

 export default onClickTabHandler