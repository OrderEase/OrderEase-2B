let restaurant = {}

let restrtInfo = {
    name: '点都德',
    description: '今天是5月17号，炎夏的太阳依旧晒得辣眼，我走在35℃的室外，喝完了今天的第一罐肥宅快乐水，依旧没有人给我买第二杯半价的冰淇淋奶茶，这个仇我记下了。下午我坐在空无一人的宿舍里，敲击着键盘，做着一个普通大学生的课程作业，突然手机震动了一下，是肥宅快乐网提醒我番剧更新了，我马上中途休息，躺上床看完了最新的动画。',
    // img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg',
    img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2673745879,1513325576&fm=27&gp=0.jpg',
    open: '09:00',
    close: '20:00'
}

restaurant.get = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject(new Error('无法获取店铺信息'))
            resolve(restrtInfo)
        }, 500)
    })
}

restaurant.update = (editedRestrtInfo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let key in editedRestrtInfo) {
                restrtInfo[key] = editedRestrtInfo[key]
            }
            resolve()
        }, 500)
    })
}

export default restaurant
