import {URL} from "../config/apiConfig"

class ApiServices {
    constructor(URL) {
        this.URL = URL
    }

    async changeTask(body, id) {
        try {
            let response = await fetch(`${this.URL}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            return await response.json()

        } catch (e) {
            return Promise.reject(e)
        }
    }


    async createNewTask(body) {
        try {
            let response = await fetch(this.URL, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            response = await response.json()
            return response


        } catch (e) {
            return Promise.reject(e)
        }

    }

    async getDataTasks() {
        try {
            let response = await fetch(this.URL)
            response = await response.json()
            return response
        } catch (e) {
            return Promise.reject(e)
        }
    }


    async deleteTask(id) {
        try {
            let response = await fetch(`${this.URL}/${id}`, {method: 'DELETE'})
            response = await response.json()
            return response

        } catch (e) {
            return Promise.reject(e)

        }

    }

}


export default new ApiServices(URL)