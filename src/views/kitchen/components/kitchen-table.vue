<template>
    <div>
        <Table 
            ref="dragable" 
            :columns="columnsList" 
            :data="value" 
            highlight-row 
        ></Table>
    </div>
</template>

<script>
import Sortable from 'sortablejs'

const finishButton = (vm, h, currentRow, index) => {
    return h('Button', {
        props: {
            type: 'primary'
        },
        style: {
            margin: '0 5px'
        },
        on: {
            'click': () => {
                vm.$emit('on-finish', vm.value, index)
            }
        }
    }, '完成')
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
    name: 'KitchenTable',
    props: {
        columnsList: Array,
        value: Array
    },
    methods: {
        startFunc (e) {
            this.$emit('on-start', e.oldIndex)
        },
        endFunc (e) {
            let movedRow = this.value[e.oldIndex]
            this.value.splice(e.oldIndex, 1)
            this.value.splice(e.newIndex, 0, movedRow)
            this.$emit('on-end', {
                value: this.value,
                from: e.oldIndex,
                to: e.newIndex
            })
        },
        chooseFunc (e) {
            this.$emit('on-choose', e.oldIndex)
        },
        init () {
            let handle = {
                title: '操作',
                align: 'center',
                width: 200,
                key: 'handle',
                render: (h, param) => {
                    let currentRowData = this.value[param.index]
                    let children = []
                    children.push(finishButton(this, h, currentRowData, param.index))
                    children.push(deleteButton(this, h, currentRowData, param.index))

                    return h('div', children)
                }
            }

            this.columnsList.push(handle)
        }
    },
    created () {
        this.init()
    },
    mounted () {
        var el = this.$refs.dragable.$children[1].$el.children[1]
        let vm = this
        Sortable.create(el, {
            onStart: vm.startFunc,
            onEnd: vm.endFunc,
            onChoose: vm.chooseFunc
        })
    }
}
</script>