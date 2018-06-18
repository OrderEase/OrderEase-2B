import Util from '@/libs/util.js'

let promotion = {}

let promotionsList = [
    {
        id: '1',
        theme: '端午节活动',
        begin: '2008-11-22 03:22',
        end: '2009-01-11 11:11',
        isend: 1,
        rules: [
            {
                id: '1',
                mode: 1,
                requirement: 11,
                discount: 3
            },
            {
                id: '2',
                mode: 1,
                requirement: 33,
                discount: 1
            }
        ]
    },
    {
        id: '2',
        theme: '中秋节活动',
        begin: '2015-11-22 03:22',
        end: '2016-01-11 12:12',
        isend: 0,
        rules: [
            {
                id: '3',
                mode: 2,
                requirement: 11,
                discount: 0.33
            },
            {
                id: '4',
                mode: 2,
                requirement: 33,
                discount: 1
            }
        ]
    },
    {
        id: '3',
        theme: '啥活动',
        begin: '2018-06-12 03:22',
        end: '2018-08-11 14:14',
        isend: 0,
        rules: [
            {
                id: '5',
                mode: 1,
                requirement: 33,
                discount: 1
            }
        ]
    }
]

let increasingPromotionId = 4

promotion.create = (promotion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let newPromotion = Util.deepCopy(promotion)
            newPromotion.id = '' + increasingPromotionId++

            promotionsList.push(newPromotion)
            resolve(newPromotion.id)
        }, 1000)
    })
}

promotion.getAll = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Util.deepCopy(promotionsList))
        }, 1000)
    })
}

promotion.get = (promotionId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let promotion = promotionsList.find(promotion => promotion.id === promotionId)
            resolve(Util.deepCopy(promotion))
        }, 1000)
    })
}

promotion.update = (promotion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let promotionIdx = promotionsList.findIndex(value => value.id === promotion.id)
            let rules = Util.deepCopy(promotionsList[promotionIdx].rules)
            promotionsList[promotionIdx] = Util.deepCopy(promotion)
            promotionsList[promotionIdx].rules = rules
            resolve()
        }, 1000)
    })
}

promotion.delete = (promotionId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let promotionIdx = promotionsList.findIndex(value => value.id === promotionId)
            promotionsList.splice(promotionIdx, 1)
            resolve()
        }, 1000)
    })
}

let increasingRuleId = 6

promotion.createRule = (promotionId, rule) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let promotion = promotionsList.find(value => value.id === promotionId)
            let newRule = Util.deepCopy(rule)
            newRule.id = '' + increasingRuleId++

            promotion.rules.push(newRule)
            resolve(newRule.id)
        }, 1000)
    })
}

promotion.updateRule = (promotionId, rule) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let promotion = promotionsList.find(value => value.id === promotionId)
            let ruleIdx = promotion.rules.findIndex(value => value.id === rule.id)
            promotion.rules[ruleIdx] = Util.deepCopy(rule)

            resolve()
        }, 1000)
    })
}

promotion.deleteRule = (promotionId, ruleId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let promotion = promotionsList.find(value => value.id === promotionId)
            let ruleIdx = promotion.rules.findIndex(value => value.id === ruleId)

            promotion.rules.splice(ruleIdx, 1)
            resolve()
        }, 1000)
    })
}

export default promotion
