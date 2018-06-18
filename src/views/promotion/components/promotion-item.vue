<style lang="less">
    @import '../../../styles/common.less';
</style>

<template>
    <Card class="height-150px">
        <Row>
            <i-col span="22">
                <Row>
                    <h3>主题: {{ promotion.theme }}</h3>
                </Row>
                <Row class="margin-top-30">
                    <p>类型: {{ mode }}</p>
                </Row>
                <Row>
                    <p>起始时间: {{ promotion.begin }}</p>
                </Row>
                <Row>
                    <p>终止时间: {{ promotion.end }}</p>
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
        promotion: Object
    },
    computed: {
        mode () {
            return this.promotion.rules[0].mode === 1 ? '满减' : '满折'
        }
    },
    methods: {
        requestEdit () {
            this.$emit('request-edit', this.promotion)
        },
        requestDelete () {
            this.$emit('request-delete', this.promotion)
        }
    }
}
</script>

