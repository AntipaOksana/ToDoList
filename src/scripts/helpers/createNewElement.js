 function createTaskElement({title, body, id, completed}) {
    return `<li class="newTaskElem ${completed ? 'completed' : 'uncompleted'}" data-completed=${completed} data-id=${id}>
<h3 class="taskTitle">${title}</h3>
<p class="taskParagraph">${body}</p>
<button class="deleteBtn" data-btn="delete">Delete</button>
<button class="complete" data-btn="isCompleted">${completed ? 'completed' : 'uncompleted'}</button>
</li>`
 }


 export default createTaskElement