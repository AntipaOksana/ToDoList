
class UI {
    constructor() {
        this.form = document.forms['form']
        this.inputTitle = this.form.elements['title']
        this.inputBody = this.form.elements['body']
        this.taskList = document.querySelector('.task-list')
        this.errorMsgElement = document.querySelector('.error-msg')
        this.tabContainer = document.querySelector('.tabs')
    }
}

export default new UI()

