<template>
    <div>
        <Table 
            ref="menu" 
            :columns="columnsList" 
            :data="value" 
            highlight-row 
        ></Table>
    </div>
</template>

<script>

const useButton = (vm, h, currentRow, index) => {
    return h('Button', {
        props: {
            type: 'success'
        },
        style: {
            margin: '0 5px'
        },
        on: {
            'click': () => {
                vm.$emit('on-use', vm.value, index)
            }
        }
    }, '使用')
}

const editButton = (vm, h, currentRow, index) => {
    return h('Button', {
        props: {
            type: 'warning'
        },
        style: {
            margin: '0 5px'
        },
        on: {
            'click': () => {
                vm.$emit('on-edit', vm.value, index)
            }
        }
    }, '编辑')
}

const deleteButton = (vm, h, currentRow, index) => {
    return h('Poptip', {
        props: {
            confirm: true,
            title: '您确定要删除这条数据吗?',
            transfer: true
        },
        on: {
            'on-ok': () => {
                vm.value.splice(index, 1)
                vm.$emit('on-delete', vm.value, index)
            }
        }
    }, [
        h('Button', {
            style: {
                margin: '0 5px'
            },
            props: {
                type: 'error',
                placement: 'top'
            }
        }, '删除')
    ])
}

export default {
    name: 'MenuTable',
    props: {
        columnsList: Array,
        value: Array
    },
    methods: {
        init () {
            let handle = {
                title: '操作',
                align: 'center',
                width: 300,
                key: 'handle',
                render: (h, param) => {
                    let currentRowData = this.value[param.index]
                    let children = []
                    children.push(useButton(this, h, currentRowData, param.index))
                    children.push(editButton(this, h, currentRowData, param.index))
                    children.push(deleteButton(this, h, currentRowData, param.index))

                    return h('div', children)
                }
            }

            this.columnsList.push(handle)
        }
    },
    created () {
        this.init()
    }
}
</script>