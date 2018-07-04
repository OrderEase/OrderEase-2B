import axios from 'axios'

let analytics = {}

analytics.getCountCard = () => {
    return new Promise((resolve, reject) => {
        axios.get('/analytics/count/card')
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.message)
                } else {
                    reject(error)
                }
            })
    })
}

analytics.getCountOrders = () => {
    return new Promise((resolve, reject) => {
        axios.get('/analytics/count/orders')
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.message)
                } else {
                    reject(error)
                }
            })
    })
}

analytics.getCountPayWay = () => {
    return new Promise((resolve, reject) => {
        axios.get('/analytics/count/payway')
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.message)
                } else {
                    reject(error)
                }
            })
    })
}

analytics.getCountFinishTime = () => {
    return new Promise((resolve, reject) => {
        axios.get('/analytics/count/finishtime')
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.message)
                } else {
                    reject(error)
                }
            })
    })
}

analytics.getRankLikes = () => {
    return new Promise((resolve, reject) => {
        axios.get('/analytics/rank/likes')
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.message)
                } else {
                    reject(error)
                }
            })
    })
}

analytics.getRankSales = () => {
    return new Promise((resolve, reject) => {
        axios.get('/analytics/rank/sales')
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.message)
                } else {
                    reject(error)
                }
            })
    })
}

analytics.getTurnover = (days) => {
    return new Promise((resolve, reject) => {
        axios.get('/analytics/turnover?days=' + days)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.message)
                } else {
                    reject(error)
                }
            })
    })
}

analytics.getSummary = () => {
    return new Promise((resolve, reject) => {
        axios.get('/analytics/summary')
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                if (error.response) {
                    reject(error.response.message)
                } else {
                    reject(error)
                }
            })
    })
}

export default analytics
