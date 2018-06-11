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
                                            <Input
                                                v-model="menuItem.name"
                                                placeholder="输入..."
                                            />
                                        </i-col>
                                        <i-col span="4" offset="1">
                                            <Button
                                                type="success"
                                                @click="saveMenu"
                                            >保存</Button>
                                        </i-col>
                                    </Row>
                                </FormItem>
                            </Form>
                        </i-col>
                        <i-col span="4">
                            <Button
                                type="info"
                                :disabled="menuItem.used === 1"
                                @click="changeMenu"
                            >使用</Button>
                            <Button
                                type="primary"
                                @click="addCategory"
                            >添加类别</Button>
                            <Button
                                type="error"
                                @click="deleteMenu"
                            >删除菜单</Button>
                        </i-col>
                    </Row>
                </Card>
            </i-col>
        </Row>

        <Row class="margin-top-20">
            <draggable
                element="Collapse"
                class="menu-collapse"
                :options="{ filter: '.ivu-collapse-content' }"
                :list="menuItem.content"
                :component-data="getCategoryComponentData()"
                @start="categoryStartDrag"
                @end="categoryEndDrag">
                <Panel
                    v-for="(content, index) in menuItem.content"
                    :key="index"
                    :name="content.category">

                    {{ content.category }}
                    
                    <a class="category-delete"
                        @click.stop="categoryDelete(index)">
                        <Icon type="trash-a" size="18"></Icon>
                    </a>

                    <Icon class="category-move" type="arrow-move" size="18"></Icon>

                    <dish-grid
                        slot="content"
                        :menu-content="content"
                        @dish-moved="saveMenu"
                    ></dish-grid>
                </Panel>
            </draggable>
        </Row>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
import DishGrid from './components/dish-grid.vue'
import { mapState } from 'vuex'

export default {
    name: 'menu_editor',
    components: {
        draggable,
        DishGrid
    },
    data () {
        return {
            menuCollapse: []
        }
    },
    computed: {
        ...mapState ({
            menuItem: state => state.menu.edittingMenu
        })
    },
    watch: {
        '$route': 'setEdittingMenu'
    },
    created () {
        this.setEdittingMenu()
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
        async categoryEndDrag () {
            await this.saveMenu()
        },
        categoryDelete (index) {
            this.$Message.warning('delete ' + index)
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
            try {
                if (this.$route.params.id) {
                    await this.$store.dispatch('menu/updateMenu')
                } else {
                    let menu = await this.$store.dispatch('menu/createMenu')
                    this.$router.push({
                        replace: true,
                        path: '/menu/' + menu.id
                    })
                }
                this.$Message.success('保存成功')
            } catch (err) {
                this.$Message.error('保存失败')
            }
        },
        async changeMenu () {
            try {
                await this.$store.dispatch('menu/changeMenu', this.$route.params.id)
                this.$Message.success('更换成功')
            } catch (err) {
                this.$Message.error('更换失败')
            }
        },
        addCategory () {
            this.$store.commit('menu/addCategory')
        },
        async deleteMenu () {
            try {
                await this.$store.dispatch('menu/deleteMenu', this.$route.params.id)
                this.$Message.success('成功删除')
                this.$router.push({
                    replace: true,
                    path: '/menu/add'
                })
            } catch (err) {
                this.$Message.error('删除失败')
            }
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
