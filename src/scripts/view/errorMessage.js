import UI from '../config/uiConfig'
const {errorMsgElement} = UI;

export function showErrorMessage() {
    errorMsgElement.classList.remove('visibility-hidden')
}

export function hideErrorMessage() {
    errorMsgElement.classList.add('visibility-hidden')
}