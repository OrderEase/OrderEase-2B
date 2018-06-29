<style lang="less">
    @import '../../../styles/loading.less';
</style>

<template>
    <div :style="styleObj">
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>{{ spinText }}</div>
        </Spin>
        <Table :height="height" :columns="columns" :data="rankLikes"></Table>
    </div>
</template>

<script>
import Analytics from '@/api/analytics'

export default {
    name: 'likeTable',
    props: {
        styleObj: Object,
        height: String
    },
    data () {
        return {
            spinText: '加载中...',
            spinShow: true,
            rankLikes: [],
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
    created () {
        this.init()
    },
    methods: {
        async init () {
            try {
                this.rankLikes = await Analytics.getRankLikes()
                this.spinShow = false
            } catch (error) {
                this.spinText = '加载失败，请检查网络'
            }
        }
    }
}
</script>
