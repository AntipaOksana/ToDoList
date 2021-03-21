

function validateForm(data) {
    return  Object.values(data).every(el => /[a-zа-я\d.,\+\-\*]{3}/gi.test(el))
}

export default validateForm