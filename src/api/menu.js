import axios from 'axios'

let menu = {}

menu.getAll = () => {
    return new Promise((resolve, reject) => {
        axios.get('/menus/')
            .then(response => {
                resolve(response.data.menus)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.get = (menuId) => {
    return new Promise((resolve, reject) => {
        axios.get('/menus/' + menuId)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.create = (menu) => {
    return new Promise((resolve, reject) => {
        axios.post('/menus/', menu)
            .then(response => {
                resolve(response.data.id)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.update = (updatedMenu) => {
    return new Promise((resolve, reject) => {
        axios.put('/menus/' + updatedMenu.id, updatedMenu)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.delete = (menuId) => {
    return new Promise((resolve, reject) => {
        axios.delete('/menus/' + menuId)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.getCategory = (menuId, categoryId) => {
    return new Promise((resolve, reject) => {
        axios.get('/menus/' + menuId + '/categories/' + categoryId)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.createCategory = (menuId, category) => {
    return new Promise((resolve, reject) => {
        axios.post('/menus/' + menuId + '/categories/', category)
            .then(response => {
                resolve(response.data.id)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.deleteCategory = (menuId, categoryId) => {
    return new Promise((resolve, reject) => {
        axios.delete('/menus/' + menuId + '/categories/' + categoryId)
            .then(response => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.updateCategory = (menuId, category) => {
    return new Promise((resolve, reject) => {
        axios.put('/menus/' + menuId + '/categories/' + category.id, category)
            .then(response => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.getDish = (menuId, categoryId, dishId) => {
    return new Promise((resolve, reject) => {
        axios.get('/menus/' + menuId + '/categories/' + categoryId + '/dishes/' + dishId)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.createDish = (menuId, categoryId, dish) => {
    return new Promise((resolve, reject) => {
        axios.post('/menus/' + menuId + '/categories/' + categoryId + '/dishes/', dish)
            .then(response => {
                resolve(response.data.id)
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.deleteDish = (menuId, categoryId, dishId) => {
    return new Promise((resolve, reject) => {
        axios.delete('/menus/' + menuId + '/categories/' + categoryId + '/dishes/' + dishId)
            .then(response => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

menu.updateDish = (menuId, categoryId, dish) => {
    return new Promise((resolve, reject) => {
        axios.put('/menus/' + menuId + '/categories/' + categoryId + '/dishes/' + dish.id, dish)
            .then(response => {
                resolve()
            })
            .catch(error => {
                reject(error)
            })
    })
}

export default menu
