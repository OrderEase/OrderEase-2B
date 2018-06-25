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
                            <Form
                                ref="menuForm"
                                :model="menuItem"
                                :label-width="80"
                                :rules="ruleValidate">
                                <FormItem label="菜单名称" prop="name">
                                    <Row>
                                        <i-col span="18">
                                            <Input
                                                v-model="menuItem.name"
                                                :disabled="saving"
                                                placeholder="输入..."
                                            />
                                        </i-col>
                                        <i-col span="4" offset="1">
                                            <Button
                                                type="success"
                                                :disabled="saving"
                                                @click="saveMenu"
                                            >保存</Button>
                                        </i-col>
                                    </Row>
                                </FormItem>
                            </Form>
                        </i-col>
                        <i-col span="8" class="menu-editor-con">
                            <Button
                                type="info"
                                :disabled="saving || !menuItem.id || menuItem.used === 1 || isSorting"
                                @click="changeMenu"
                            >使用</Button>
                            <Button
                                type="primary"
                                :disabled="saving || !menuItem.id || isSorting"
                                @click="createCategory"
                            >添加类别</Button>
                            <Button
                                v-if="!isSorting"
                                type="warning"
                                :disabled="saving || !menuItem.id"
                                @click="requestSort"
                            >排序</Button>
                            <Button
                                v-if="isSorting"
                                type="success"
                                :disabled="saving || !menuItem.id"
                                @click="completeSort"
                            >完成</Button>
                            <Button
                                type="error"
                                :disabled="saving || !menuItem.id || isSorting"
                                @click="deleteMenu"
                            >删除菜单</Button>
                        </i-col>
                    </Row>
                </Card>
            </i-col>
        </Row>

        <category-editor
            :editting="isEdittingCategory"
            :category="edittingCategory"
            @on-editting-change="syncEdittingCategory"
        ></category-editor>

        <Row class="margin-top-20">
            <draggable
                element="Collapse"
                class="menu-collapse"
                :options="categoryOptions"
                :list="menuItem.content"
                :component-data="getCategoryComponentData()"
                @start="categoryStartDrag">
                <Panel
                    v-for="(category, index) in menuItem.content"
                    :key="index"
                    :name="category.name">

                    {{ category.name }}
                    
                    <a class="category-edit"
                        @click.stop="editCategory(category)">
                        <Icon type="compose" size="18"></Icon>
                    </a>

                    <a class="category-delete"
                        @click.stop="deleteCategory(category)">
                        <Icon type="trash-a" size="18"></Icon>
                    </a>

                    <Icon
                        v-if="isSorting"
                        class="category-move"
                        type="arrow-move"
                        size="18"
                    ></Icon>

                    <dish-grid
                        slot="content"
                        :category="category"
                        @request-delete="deleteDish"
                        @request-add="createDish"
                        @request-edit="editDish"
                    ></dish-grid>
                </Panel>
            </draggable>
        </Row>

        <dish-editor
            :category="edittingDishCategory"
            :dish="edittingDish"
            :editting="isEdittingDish"
            @on-editting-change="syncEdittingDish"
        ></dish-editor>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import DishGrid from './components/dish-grid.vue'
import CategoryEditor from './components/category-editor.vue'
import DishEditor from './components/dish-editor.vue'
import { mapState } from 'vuex'

import Util from '@/libs/util.js'

export default {
    name: 'menu_editor',
    components: {
        draggable,
        DishGrid,
        CategoryEditor,
        DishEditor
    },
    data () {
        return {
            lastMenuTag: null,

            menuCollapse: [],
            saving: false,

            edittingCategory: {},
            isEdittingCategory: false,

            edittingDish: {},
            edittingDishCategory: {},
            isEdittingDish: false,

            ruleValidate: {
                name: [
                    {
                        required: true,
                        message: '菜单名称不能为空',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    computed: {
        ...mapState({
            categoryOptions (state) {
                return {
                    filter: '.ivu-collapse-content',
                    disabled: !state.menu.isSorting
                }
            },
            isSorting: state => state.menu.isSorting,
            menuItem: state => state.menu.edittingMenu
        })
    },
    watch: {
        '$route': 'routeChanged'
    },
    created () {
        this.routeChanged()
    },
    beforeRouteLeave (to, from , next) {
        if (this.isSorting) {
            this.$Message.info('请先保存排序')
            next(false)
        } else {
            next()
        }
    },
    methods: {
        inputChanged (value) {
            this.menuCollapse = value
        },
        getCategoryComponentData () {
            return {
                on: {
                    input: this.inputChanged
                },
                props: {
                    value: this.menuCollapse
                }
            }
        },
        categoryStartDrag () {
            this.menuCollapse = []
        },
        routeChanged () {
            if (this.isSorting) {
                if (this.$route.params.id !== this.lastMenuTag) {
                    this.$Message.info('请先保存排序')
                }
                if (this.lastMenuTag === 'add') {
                    this.$router.push({
                        name: 'menu_add',
                        replace: true
                    })
                } else {
                    this.$router.push({
                        name: 'menu_editor',
                        params: { id: this.lastMenuTag },
                        replace: true
                    })
                }
            }

            this.lastMenuTag = this.$route.params.id || 'add'
            this.setEdittingMenu()
        },
        setEdittingMenu () {
            this.menuCollapse = []
            if (this.$route.params.id) {
                this.$store.commit('menu/editMenuById', this.$route.params.id)
            } else {
                this.$store.commit('menu/editEmptyMenu')
            }
        },
        async saveMenu () {
            this.$refs['menuForm'].validate(async valid => {
                if (valid) {
                    try {
                        this.saving = true
                        if (this.$route.params.id) {
                            await this.$store.dispatch('menu/updateMenu')
                        } else {
                            let menuId = await this.$store.dispatch('menu/createMenu')
                            this.$router.push({
                                replace: true,
                                path: '/menu/' + menuId
                            })
                        }
                        this.saving = false
                        this.$Message.success('保存成功')
                    } catch (err) {
                        this.saving = false
                        this.$Message.error('保存失败')
                    }
                }
            })
        },
        async changeMenu () {
            this.saving = true
            try {
                await this.$store.dispatch('menu/changeMenu')
                this.$Message.success('更换成功')
            } catch (err) {
                this.$Message.error('更换失败')
            }
            this.saving = false
        },
        deleteMenu () {
            this.$Modal.confirm({
                title: '删除菜单',
                content: '<p>确定删除该菜单么？</p>',
                loading: true,
                onOk: async () => {
                    try {
                        await this.$store.dispatch('menu/deleteMenu')

                        this.$Message.success('成功删除')
                        this.$Modal.remove()
                        this.$router.push({
                            replace: true,
                            path: '/menu/add'
                        })
                    } catch (err) {
                        this.$Modal.remove()
                        this.$Message.error('删除失败')
                    }
                }
            })
        },
        syncEdittingCategory (value) {
            this.isEdittingCategory = value
        },
        createCategory () {
            this.isEdittingCategory = true
            this.edittingCategory = {
                name: '',
                rank: this.menuItem.content.length,
                dishes: []
            }
        },
        editCategory (category) {
            this.isEdittingCategory = true
            this.edittingCategory = category
        },
        deleteCategory (category) {
            this.$Modal.confirm({
                title: '删除类别',
                content: '<p>确定删除该类别么？</p>',
                loading: true,
                onOk: async () => {
                    try {
                        await this.$store.dispatch('menu/deleteCategory', category.id)
                        await this.$store.dispatch('menu/saveSort')

                        this.$Message.success('成功删除')
                        this.$Modal.remove()
                    } catch (err) {
                        this.$Message.error('删除失败')
                        this.$Modal.remove()
                    }
                }
            })
        },
        syncEdittingDish (value) {
            this.isEdittingDish = value
        },
        createDish (category) {
            this.isEdittingDish = true
            this.edittingDishCategory = category
            this.edittingDish = {
                name: '',
                img: '',
                price: 0,
                stock: 0,
                avaliable: 1,
                likes: 0,
                description: '',
                rank: category.dishes.length
            }
        },
        editDish ({ dish, category }) {
            this.isEdittingDish = true
            this.edittingDish = Util.deepCopy(dish)
            this.edittingDishCategory = category
        },
        deleteDish ({ dish, category }) {
            this.$Modal.confirm({
                title: '删除菜品',
                content: '<p>确定删除该菜品么？</p>',
                loading: true,
                onOk: async () => {
                    try {
                        await this.$store.dispatch('menu/deleteDish', {
                            categoryId: category.id,
                            dishId: dish.id
                        })
                        await this.$store.dispatch('menu/saveSort')

                        this.$Message.success('成功删除')
                        this.$Modal.remove()
                    } catch (err) {
                        this.$Modal.remove()
                        this.$Message.error('删除失败')
                    }
                }
            })
        },
        requestSort () {
            this.$store.commit('menu/startSort')
            this.categoryOptions.disabled = false
        },
        async completeSort () {
            this.$store.commit('menu/endSort')
            this.categoryOptions.disabled = true

            this.saving = true
            try {
                await this.$store.dispatch('menu/saveSort')
                this.$Message.success('保存顺序成功')
            } catch (err) {
                this.$Message.error('保存顺序失败')
            }
            this.saving = false
        }
    },
    beforeRouteUpdate (to, from, next) {
        if (to.params.id && !this.$store.getters['menu/getMenuById'](to.params.id)) {
            next({
                replace: true,
                path: '/menu/add'
            })
        }
        next()
    }
}
</script>
