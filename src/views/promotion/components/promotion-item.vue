<style lang="less">
    @import '../../../styles/common.less';
</style>

<template>
    <Card class="height-150px">
        <Row>
            <i-col span="22">
                <Row>
                    <h3>活动名称: {{ promotion.name }}</h3>
                </Row>
                <Row class="margin-top-30">
                    <p>类型: {{ promotion.type }}</p>
                </Row>
                <Row>
                    <p>起始时间: {{ promotion.start | formatDateTime }}</p>
                </Row>
                <Row>
                    <p>终止时间: {{ promotion.end | formatDateTime }}</p>
                </Row>
            </i-col>
            <i-col span="2">
                <a @click="requestEdit"><Icon type="edit" size="16"></Icon></a>
                <a><Icon type="trash-a" size="20"></Icon></a>
            </i-col>
        </Row>
    </Card>
</template>

<script>
export default {
    props: {
        promotion: Object
    },
    filters: {
        formatDateTime(dateTime) {
            if (!dateTime) return '';

            let fillZero = (val) => val < 10 ? '0' + val : val

            let date = new Date(dateTime.date);
            let time = new Date(dateTime.time);
            
            let dateString = date.getFullYear() + '-' + fillZero(date.getMonth() + 1) + '-' + fillZero(date.getDate());
            let timeString = fillZero(time.getHours()) + ':' + fillZero(time.getMinutes());
            
            return dateString + ' ' + timeString;
        }
    },
    methods: {
        requestEdit () {
            this.$emit('request-edit', this.promotion)
        }
    }
}
</script>

