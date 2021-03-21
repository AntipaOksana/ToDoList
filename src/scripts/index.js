import '../styles/main.scss'
import UI from './config/uiConfig'
import onSubmitHandler from "./eventListeners/onSubmitHandler"
import onLoadHandler from "./eventListeners/onLoadHandler";
import onClickTasksListHandler from "./eventListeners/onClickTasksListHandler";
import onClickTabHandler from "./eventListeners/onClickTabHandler";


const {form, taskList, tabContainer} = UI;

window.addEventListener('DOMContentLoaded', onLoadHandler)
form.addEventListener('submit', onSubmitHandler)
taskList.addEventListener('click', onClickTasksListHandler)
tabContainer.addEventListener('click', onClickTabHandler)
