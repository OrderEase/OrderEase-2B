import axios from 'axios'

let analytics = {}

analytics.getCountCard = () => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.BASE_URL + '/analytics/count/card')
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
        axios.get(process.env.BASE_URL + '/analytics/count/orders')
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
        axios.get(process.env.BASE_URL + '/analytics/count/payway')
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
        axios.get(process.env.BASE_URL + '/analytics/count/finishtime')
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
        axios.get(process.env.BASE_URL + '/analytics/rank/likes')
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
        axios.get(process.env.BASE_URL + '/analytics/rank/sales')
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
        axios.get(process.env.BASE_URL + '/analytics/turnover?days=' + days)
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
        axios.get(process.env.BASE_URL + '/analytics/summary')
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
