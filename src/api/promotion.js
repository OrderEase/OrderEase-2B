import axios from 'axios'

let promotion = {}

promotion.create = (promotion) => {
    return new Promise((resolve, reject) => {
        axios.post('/promotions/', promotion)
            .then(response => {
                resolve(response.data.id)
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

promotion.getAll = () => {
    return new Promise((resolve, reject) => {
        axios.get('/promotions/')
            .then(response => {
                resolve(response.data.promotions)
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

promotion.get = (promotionId) => {
    return new Promise((resolve, reject) => {
        axios.get('/promotions/' + promotionId)
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

promotion.update = (promotion) => {
    return new Promise((resolve, reject) => {
        axios.put('/promotions/' + promotion.id, promotion)
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

promotion.delete = (promotionId) => {
    return new Promise((resolve, reject) => {
        axios.delete('/promotions/' + promotionId)
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

promotion.createRule = (promotionId, rule) => {
    return new Promise((resolve, reject) => {
        axios.post('/promotions/' + promotionId + '/rules', rule)
            .then(response => {
                resolve(response.data.id)
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

promotion.updateRule = (promotionId, rule) => {
    return new Promise((resolve, reject) => {
        axios.put('/promotions/' + promotionId + '/rules/' + rule.id, rule)
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

promotion.deleteRule = (promotionId, ruleId) => {
    return new Promise((resolve, reject) => {
        axios.delete('/promotions/' + promotionId + '/rules/' + ruleId)
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

export default promotion
