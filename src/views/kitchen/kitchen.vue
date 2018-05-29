<style lang="less">
    @import '../../styles/common.less';
    @import '../tables/components/table.less';
</style>

<template>
    <div>
        <Row>
            <Col span="24">
                <Card>
                    <KitchenTable 
                        v-model="tableData" 
                        :columns-list="columnsList" 
                        @on-start="handleOnstart1" 
                        @on-end="handleOnend1"
                        @on-delete="handleDel"
                        @on-finish="handleFinish"
                    ></KitchenTable>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import KitchenTable from './components/kitchen-table.vue';

export default {
    name: 'kitchen-table',
    components: {
        KitchenTable
    },
    data () {
        return {
            columnsList: [],
            tableData: [],
            table1: {
                hasDragged: false,
                isDragging: false,
                oldIndex: 0,
                newIndex: 0,
                draggingRecord: []
            }
        };
    },
    methods: {
        handleOnstart1 (from) {
            this.table1.oldIndex = from;
            this.table1.hasDragged = true;
            this.table1.isDragging = true;
        },
        handleOnend1 (e) {
            this.table1.isDragging = false;
            this.table1.draggingRecord.unshift({
                from: e.from + 1,
                to: e.to + 1
            });
        },
        handleDel (val, index) {
            this.$Message.success('删除了第' + (index + 1) + '行数据');
        },
        handleFinish (val, index) {
            this.$Message.success('完成了第' + (index + 1) + '行数据');
        },
        getData () {
            this.columnsList = [
                {
                    title: '序号',
                    type: 'index',
                    width: 80,
                    align: 'center'
                },
                {
                    title: '菜品名称',
                    key: 'dishItem'
                },
                {
                    title: '备注',
                    key: 'remarks'
                },
                {
                    title: '订单号',
                    key: 'orderId'
                },
                {
                    title: '桌号',
                    key: 'tableId'
                },
                {
                    title: '已点时间',
                    key: 'time'
                }
            ];
            this.tableData = [
                {
                    dishItem: '西湖醋鱼',
                    remarks: '无',
                    orderId: '123123',
                    tableId: 5,
                    time: '11:33'
                },
                {
                    dishItem: '九转大肠',
                    remarks: '骚猪许琦',
                    orderId: '22222',
                    tableId: 7,
                    time: '11:33'
                },
                {
                    dishItem: '大盘鸡',
                    remarks: '不要放葱',
                    orderId: '1111',
                    tableId: 2,
                    time: '11:33'
                },
                {
                    dishItem: '手抓饭',
                    remarks: '多点肉！',
                    orderId: '44444',
                    tableId: 5,
                    time: '11:33'
                },
                {
                    dishItem: '糖醋排骨',
                    remarks: '无',
                    orderId: '5555',
                    tableId: 6,
                    time: '11:33'
                },
                {
                    dishItem: '水煮肉',
                    remarks: '微辣',
                    orderId: '12sadf3',
                    tableId: 8,
                    time: '11:33'
                },
                {
                    dishItem: '担担面',
                    remarks: '中辣',
                    orderId: '12sdf3123',
                    tableId: 2,
                    time: '11:33'
                },
                {
                    dishItem: '豆腐脑',
                    remarks: '咸的',
                    orderId: '12adf3123',
                    tableId: 8,
                    time: '11:33'
                }
            ];
        }
    },
    created () {
        // 可在此从服务端获取表格数据
        this.getData();
    }
};
</script>
