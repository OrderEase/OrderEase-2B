
<style lang="less">
    @import '../../../styles/common.less';
    @import './promotion-item.less';
</style>

<template>
    <Button class="height-150px create-promotion-item" long @click="onClick">
        <Row justify="center" align="middle">
            <i-col span="24">
                <p class="title">
                    <Icon type="plus" size="20" color="#9ea7b4"></Icon>
                    添加新任务
                </p>
            </i-col>
        </Row>
    </Button>
</template>

<script>
export default {
    methods: {
        onClick () {
            this.$emit('on-click')
        }
    }
}
</script>