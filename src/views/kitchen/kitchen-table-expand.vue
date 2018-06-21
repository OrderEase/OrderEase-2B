<style lang="less" scoped>
    @import './kitchen.less';
</style>

<template>
    <div class="expand-row">
        <Row
            v-for="(item, index) in order.repackDishes"
            :key="index"
            class="margin-bottom-10">
            <i-col span="6" offset="4">
                <p class="expand-row-align">{{ item.dish.name }}</p>
            </i-col>
            <i-col span="6">
                <p class="expand-row-align">x {{ item.orderItem.quantity }}</p>
            </i-col>
            <i-col span="4" offset="4">
                <Button
                    v-if="item.orderItem.finished === 0"
                    type="primary"
                    size="small"
                    class="expand-row-finished-btn"
                    @click="finishOneItem(item)"
                >完成</Button>
                <p v-if="item.orderItem.finished === 1" class="align expand-row-finished-info">已完成</p>
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
                finished: this.order.finished,
                orderItems: this.order.orderItems,
                repackDishes: [item]
            })
        }
    }
}
</script>