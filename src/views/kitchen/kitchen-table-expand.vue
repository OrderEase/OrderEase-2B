<style lang="less" scoped>
    @import './kitchen.less';
</style>

<template>
    <div class="expand-row">
        <Row
            v-for="(item, index) in order.repackDishes"
            :key="index"
            class="margin-bottom-10"
        >
            <i-col span="2" offset="2">
                <div class="expand-row-dish-img-wrapper">
                    <img v-show="item.dish.img !== ''" :src="item.dish.img" alt="" class="expand-row-dish-img">
                </div>
            </i-col>
            <i-col span="2" offset="1" class="expand-row-col-align">
                <p class="expand-row-align">{{ item.dish.name }}</p>
            </i-col>
            <i-col span="2" offset="1" class="expand-row-col-align">
                <p class="expand-row-align">x {{ item.orderItem.quantity }}</p>
            </i-col>
            <i-col span="2" offset="1" class="expand-row-col-align">
                <p v-if="item.orderItem.urge === 1" class="expand-row-align expand-row-dish-urge">已催单</p>
                <p v-if="item.orderItem.urge === 0" class="expand-row-align">等待中</p>
            </i-col>
            <i-col span="1" offset="10" class="expand-row-col-align">
                <Button
                    type="primary"
                    size="small"
                    class="expand-row-finished-btn"
                    :disabled="item.orderItem.finished === 1"
                    @click="finishOneItem(item)"
                >完成</Button>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    props: {
        order: Object
    },
    methods: {
        finishOneItem (item) {
            this.$emit('finish-order-dishes', {
                id: this.order.id,
                repackDishes: [item]
            })
        }
    }
}
</script>