<style lang="less">
    @import '../../../styles/common.less';
    @import './dish-item.less';
</style>

<template>
    <Card class="height-150px dish-item">
        <Row>
            <i-col span="10">
                <img class="dish-img" :src="dish.img" :alt="dish.name">
            </i-col>
            <i-col span="12">
                <Row>
                    <h3>{{ dish.name }}</h3>
                </Row>
                <Row class="margin-top-40">
                    <p>库存: {{ dish.stock }}</p>
                </Row>
                <Row>
                    <p>价格: {{ dish.price }}</p>
                </Row>
            </i-col>
            <i-col span="2">
                <a @click="requestEdit"><Icon type="edit" size="16"></Icon></a>
                <a @click="requestDelete"><Icon type="trash-a" size="20"></Icon></a>
            </i-col>
        </Row>
    </Card>
</template>

<script>
export default {
    props: {
        dish: Object
    },
    methods: {
        requestEdit () {
            this.$emit('request-edit', this.dish)
        },
        requestDelete () {
            this.$emit('request-delete', this.dish)
        }
    }
}
</script>

