<style lang="less">
    @import '../../styles/common.less';
    @import './menu.less';
</style>

<template>
    <div class="menu">
        <Row>
            <i-col span="24">
                <Card>
                    <Row type="flex" justify="start">
                        <i-col span="3">
                            <Button type="primary" shape="circle" icon="plus">新建菜单</Button>
                        </i-col>
                    </Row>
                    <Row class="margin-top-20">
                        <i-col>
                            <MenuTable
                                class="menu-list-table"
                                v-model="tableData" 
                                :columns-list="columnsList" 
                                @on-use="handleUse"
                                @on-edit="handleEdit"
                                @on-delete="handleDel"
                            ></MenuTable>
                        </i-col>
                    </Row>
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
import MenuTable from './components/menu-table.vue'

export default {
    name: 'access_index',
    components: {
        MenuTable
    },
    data () {
        return {
            columnsList: [],
            tableData: []
        }
    },
    created () {
        // 可在此从服务端获取表格数据
        this.getData()
    },
    methods: {
        handleUse (val, index) {
            this.$Message.success('使用了第' + (index + 1) + '号菜单')
        },
        handleEdit (val, index) {
            this.$Message.success('编辑了第' + (index + 1) + '行数据')
        },
        handleDel (val, index) {
            this.$Message.success('删除了第' + (index + 1) + '行数据')
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
                    title: '菜单名称',
                    key: 'menuItem'
                },
                {
                    title: '上次编辑时间',
                    key: 'lastEditTime'
                }
            ]
            this.tableData = [
                {
                    menuItem: '春季菜单',
                    lastEditTime: '2018年05月29日11:15:54'
                },
                {
                    menuItem: '夏季菜单',
                    lastEditTime: '2018年05月29日11:15:54'
                },
                {
                    menuItem: '秋季菜单',
                    lastEditTime: '2018年05月29日11:15:54'
                },
                {
                    menuItem: '冬季菜单',
                    lastEditTime: '2018年05月29日11:15:54'
                }
            ]
        }
    }
}
</script>

<style>

</style>
