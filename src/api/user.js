let userInfo = {
    username: 'admin',
    password: 'password'
}

let user = {}

user.login = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userInfo.username === username && userInfo.password === password) {
                resolve()
            } else {
                reject(new Error('用户名或密码错误'))
            }
        }, 1000)
    })
}

user.logout = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

user.editPassword = (oldPassword, newPassword) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (oldPassword === userInfo.password) {
                userInfo.password = newPassword
                resolve()
            } else {
                reject(new Error('原密码错误'))
            }
        }, 1000)
    })
}
