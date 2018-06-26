import axios from 'axios'

let user = {}

user.login = (username, password) => {
    return new Promise((resolve, reject) => {
        axios.post('/busers/session', { username, password })
            .then(response => {
                resolve(response.data.authority)
            })
            .catch(error => {
                if (error.response) {
                    reject(new Error(error.response.data.message))
                } else {
                    reject(error)
                }
            })
    })
}

user.logout = () => {
    return new Promise((resolve, reject) => {
        axios.put('/busers/session')
            .then(response => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

user.editPassword = (oldPassword, newPassword) => {
    return new Promise((resolve, reject) => {
        axios.put('/busers/password', { oldPassword, newPassword })
            .then(response => {
                resolve()
            })
            .catch(error => {
                if (error.response) {
                    reject(new Error(error.response.data.message))
                } else {
                    reject(error)
                }
            })
    })
}

export default user
