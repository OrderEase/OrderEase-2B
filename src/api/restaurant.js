import axios from 'axios'

let restaurant = {}

restaurant.get = () => {
    return new Promise((resolve, reject) => {
        axios.get('/restrt/')
            .then(response => {
                resolve(response.data)
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

restaurant.update = (editedRestrtInfo) => {
    return new Promise((resolve, reject) => {
        axios.put('/restrt/', editedRestrtInfo)
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

export default restaurant
