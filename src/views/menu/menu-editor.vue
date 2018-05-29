<style lang="less">
    @import '../../styles/common.less';
</style>

<template>
    <div class="menu-editor">
        <Row>
            <Col span="24">
                <Card>
                    <p slot="title">
                        <Icon type="gear-a"></Icon>
                        基础
                    </p>
                    <Row type="flex" justify="space-between">
                        <Col span="8">
                            <Form :model="menuItem" :label-width="80">
                                <FormItem label="菜单名称">
                                    <Row>
                                        <Col span="18">
                                            <Input v-model="menuItem.name" placeholder="输入..."></Input>                                        </Col>
                                        <Col span="4" offset="1">
                                            <Button type="success">保存</Button>
                                        </Col>
                                    </Row>
                                </FormItem>
                            </Form>
                        </Col>
                        <Col span="8">
                            <Button type="info">使用</Button>
                            <Button type="primary">添加菜品</Button>
                            <Button type="warning">管理类别</Button>
                            <Button type="error">删除菜单</Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
    name: 'menu_editor',
    data () {
        return {
            menuItem: {
                name: '',
            }
        };
    },
    methods: {
        
    },
    created () {
        
    }
};
</script>

<style>

</style>
