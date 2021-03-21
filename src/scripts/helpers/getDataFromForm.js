import UI from '../config/uiConfig'

const {
    inputTitle,
    inputBody
} = UI

function getDataFromForm() {
    return {
        title: inputTitle.value,
        body: inputBody.value,
    }
}

export default getDataFromForm