<style scoped>
    .align {
        display: inline-block;
        font-size: 12px;
        padding: 2px 7px;
    }
    .expand-row-finished-info {
        color: #19be6b;
        border: 1px solid transparent;
        border-radius: 3px;
    }
</style>

<template>
    <div>
        <Row
            v-for="(item, index) in order.dishes"
            :key="index"
            class="margin-bottom-10">
            <i-col span="6" offset="4">
                <p class="align">{{ item.dish.name }}</p>
            </i-col>
            <i-col span="6">
                <p class="align">x {{ item.quantity }}</p>
            </i-col>
            <i-col span="4" offset="4">
                <Button
                    v-if="item.finished === 0"
                    type="primary"
                    size="small"
                    class="expand-row-finished-btn"
                >完成</Button>
                <p v-if="item.finished === 1" class="align expand-row-finished-info">已完成</p>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    props: {
        order: Object
    }
}
</script>