<style lang="less">
    @import '../../styles/common.less';
    @import './menu.less';
</style>

<template>
    <div class="menu-editor">
        <Row>
            <i-col span="24">
                <Card>
                    <Row type="flex" justify="space-between">
                        <i-col span="8">
                            <Form :model="menuItem" :label-width="80">
                                <FormItem label="菜单名称">
                                    <Row>
                                        <i-col span="18">
                                            <Input v-model="menuItem.name" placeholder="输入..." />                                        </i-col>
                                        <i-col span="4" offset="1">
                                            <Button type="success">保存</Button>
                                        </i-col>
                                    </Row>
                                </FormItem>
                            </Form>
                        </i-col>
                        <i-col span="8">
                            <Button type="info">使用</Button>
                            <Button type="warning">管理类别</Button>
                            <Button type="error">删除菜单</Button>
                        </i-col>
                    </Row>
                </Card>
            </i-col>
        </Row>

        <Row class="margin-top-20">
            <Collapse
                class="menu-collapse"
                v-model="menuCollapse">
                <Panel
                    v-for="(content, index) in menuItem.content"
                    :key="index"
                    :name="content.category">

                    {{ content.category }}
                    
                    <a class="move-down"
                        v-if="index !== menuItem.content.length - 1"
                        @click.stop="moveDown(index)">
                        <Icon type="arrow-down-a" size="16"></Icon>
                    </a>
                    <a class="move-up"
                        v-if="index !== 0"
                        @click.stop="moveUp(index)">
                        <Icon type="arrow-up-a" size="16"></Icon>
                    </a>

                    <dish-grid
                        slot="content"
                        :menu-content="content"
                    ></dish-grid>
                </Panel>
            </Collapse>
        </Row>
    </div>
</template>

<script>
import DishGrid from './components/dish-grid.vue'
import Util from '@/libs/util'

export default {
    name: 'menu_editor',
    components: {
        DishGrid
    },
    data () {
        return {
            menuCollapse: [],
            menuItem: {}
        }
    },
    methods: {
        moveUp (index) {
            if (index !== 0) {
                this.menuCollapse = []

                let prevContent = this.menuItem.content[index - 1]
                let curContent = this.menuItem.content[index]

                Util.exchangeObject(prevContent, curContent)
            }
        },
        moveDown (index) {
            if (index !== this.menuItem.content.length - 1) {
                this.menuCollapse = []

                let curContent = this.menuItem.content[index]
                let nextContent = this.menuItem.content[index + 1]

                Util.exchangeObject(nextContent, curContent)
            }
        },
        getData () {
            this.menuItem = {
                name: '春季菜单',
                content: [
                    {
                        category: '荤菜',
                        dishes: [
                            {
                                id: 3910,
                                name: '毛血旺',
                                category: '荤菜',
                                img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2935073924,174907110&fm=58&bpow=680&bpoh=680',
                                price: 28.5,
                                stock: 99,
                                avaliable: 1,
                                likes: 4,
                                description: 'Hello 毛血旺'
                            },
                            {
                                id: 3920,
                                name: '鸡公煲',
                                category: '荤菜',
                                img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1739138823,1624312733&fm=27&gp=0.jpg',
                                price: 2.5,
                                stock: 99,
                                avaliable: 1,
                                likes: 10,
                                description: 'Hello 鸡公煲'
                            },
                            {
                                id: 1111,
                                name: '夫妻肺片',
                                category: '荤菜',
                                img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1905164004,1143377481&fm=27&gp=0.jpg',
                                price: 2.5,
                                stock: 99,
                                avaliable: 1,
                                likes: 10,
                                description: 'Hello 夫妻肺片'
                            },
                            {
                                id: 1121,
                                name: '爆肚',
                                category: '荤菜',
                                img: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4012425942,166764615&fm=27&gp=0.jpg',
                                price: 2.5,
                                stock: 99,
                                avaliable: 1,
                                likes: 10,
                                description: 'Hello 爆肚'
                            }
                        ]
                    },
                    {
                        category: '素菜',
                        dishes: [
                            {
                                id: 3910,
                                name: '西洋菜',
                                category: '素菜',
                                img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=562147887,3241256955&fm=27&gp=0.jpg',
                                price: 28.5,
                                stock: 99,
                                avaliable: 1,
                                likes: 4,
                                description: 'Hello 西洋菜'
                            },
                            {
                                id: 3920,
                                name: '娃娃菜',
                                category: '素菜',
                                img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1161728142,2680973728&fm=27&gp=0.jpg',
                                price: 2.5,
                                stock: 99,
                                avaliable: 1,
                                likes: 10,
                                description: 'Hello 娃娃菜'
                            }
                        ]
                    },
                    {
                        category: '豆制品',
                        dishes: [
                            {
                                id: 1111,
                                name: '豆腐串',
                                category: '豆制品',
                                img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2026208039,824549144&fm=27&gp=0.jpg',
                                price: 2.5,
                                stock: 99,
                                avaliable: 1,
                                likes: 10,
                                description: 'Hello 豆腐串'
                            }
                        ]
                    }
                ]
            }
        }
    },
    created () {
        this.getData()
    }
}
</script>
