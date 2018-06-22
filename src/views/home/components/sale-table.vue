<template>
    <div :style="styleObj">
        <Table :height="height" :columns="columns" :data="data"></Table>
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
            ],
            data: [
                { name: '麻辣香锅', value: 3421 },
                { name: '牛板筋', value: 2444 },
                { name: '香菇炖鸡', value: 1111 },
                { name: '油焖小龙虾', value: 910 },
                { name: '水煮肉片', value: 888 },
                { name: '白切鸡', value: 703 },
                { name: '土豆牛肉', value: 413 },
                { name: '手撕包菜', value: 242 },
                { name: '冰糖葫芦', value: 111 }
            ]
        }
    }
}
</script>
