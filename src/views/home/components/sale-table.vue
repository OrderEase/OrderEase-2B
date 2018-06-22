<template>
    <div :style="styleObj">
        <Table :height="height" :columns="columns" :data="saleRank"></Table>
    </div>
</template>

<script>
export default {
    name: 'saleTable',
    props: {
        styleObj: Object,
        height: String
    },
    data () {
        return {
            columns: [
                {
                    title: '菜品',
                    key: 'name'
                },
                {
                    title: '销量',
                    key: 'value',
                    sortable: true
                }
            ]
        }
    },
    computed: {
        saleRank () {
            return this.$store.state.restaurant.analytics.saleRank
        }
    }
}
</script>
