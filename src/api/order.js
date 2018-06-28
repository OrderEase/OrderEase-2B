import axios from 'axios'

let order = {}

const parseParams = (url, params) => {
    if (params === undefined) {
        return url
    } else {
        url += '?'

        for (let key in params) {
            url += key + '=' + params[key] + '&'
        }

        return url.slice(0, url.length - 1)
    }
}

order.getAll = (params) => {
    return new Promise((resolve, reject) => {
        let url = parseParams('/orders/buser', params)

        axios.get(url)
            .then(response => {
                resolve(response.data.orders)
            })
            .catch(error => {
                reject(error)
            })
    })
}

order.finishOrderItem = (orderId, orderItem) => {
    return new Promise((resolve, reject) => {
        axios.put('/orders/buser/oid/' + orderId, orderItem)
            .then(response => {
                resolve()
            })
            .catch(error => {
                if (error.response) {
                    reject(new Error(error.response.message))
                } else {
                    reject(error)
                }
            })
    })
}

export default order
