<template>
    <div :style="styleObj">
        <Table :height="height" :columns="columns" :data="likeRank"></Table>
    </div>
</template>

<script>
export default {
    name: 'likeTable',
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
                    title: '点赞数',
                    key: 'value',
                    sortable: true
                }
            ]
        }
    },
    computed: {
        likeRank () {
            return this.$store.state.restaurant.analytics.likeRank
        }
    }
}
</script>
