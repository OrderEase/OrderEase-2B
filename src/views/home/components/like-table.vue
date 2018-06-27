<template>
    <div :style="styleObj">
        <Table :height="height" :columns="columns" :data="rankLikes"></Table>
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
        rankLikes () {
            return this.$store.state.restaurant.analytics.rankLikes
        }
    }
}
</script>
