<template>
    <div :style="styleObj">
        <Table :height="height" :columns="columns" :data="data"></Table>
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
            ],
            data: [
                { name: '牛板筋', value: 250 },
                { name: '香菇炖鸡', value: 141 },
                { name: '白切鸡', value: 138 },
                { name: '油焖小龙虾', value: 74 },
                { name: '土豆牛肉', value: 47 },
                { name: '冰糖葫芦', value: 45 },
                { name: '手撕包菜', value: 34 },
                { name: '麻辣香锅', value: 22 },
                { name: '水煮肉片', value: 15 }
            ]
        }
    }
}
</script>
