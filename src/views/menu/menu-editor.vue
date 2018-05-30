<style lang="less">
    @import '../../styles/common.less';
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
                            <Button type="primary">添加菜品</Button>
                            <Button type="warning">管理类别</Button>
                            <Button type="error">删除菜单</Button>
                        </i-col>
                    </Row>
                </Card>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {
    name: 'menu_editor',
    data () {
        return {
            menuItem: {
                name: ''
            }
        }
    }
}
</script>

<style>

</style>
