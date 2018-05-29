<style lang="less">
    @import './promotion-editor.less';
</style>

<template>
    <div>
        <Modal v-model="syncEditting" width="380">
            <p slot="header">
                <Icon type="edit"></Icon>
                <span>编辑活动</span>
            </p>

            <Form :model="edittingPromotion" :label-width="80">
                <FormItem label="活动名称">
                    <Input v-model="edittingPromotion.name" placeholder="输入..." />
                </FormItem>
                <FormItem label="活动类型">
                    <Input v-model="edittingPromotion.type" placeholder="输入..." />
                </FormItem>
                <FormItem label="起始时间">
                    <Row>
                        <i-col span="11">
                            <DatePicker type="date" placeholder="Select date" v-model="edittingPromotion.start.date"></DatePicker>
                        </i-col>
                        <i-col span="2" style="text-align: center">-</i-col>
                        <i-col span="11">
                            <TimePicker type="time" placeholder="Select time" v-model="edittingPromotion.start.time"></TimePicker>
                        </i-col>
                    </Row>
                </FormItem>
                <FormItem label="终止时间">
                    <Row>
                        <i-col span="11">
                            <DatePicker type="date" placeholder="Select date" v-model="edittingPromotion.end.date"></DatePicker>
                        </i-col>
                        <i-col span="2" style="text-align: center">-</i-col>
                        <i-col span="11">
                            <TimePicker type="time" placeholder="Select time" v-model="edittingPromotion.end.time"></TimePicker>
                        </i-col>
                    </Row>
                </FormItem>
                <FormItem label="活动可叠加">
                    <Row>
                        <i-col span="20">
                            <i-switch v-model="edittingPromotion.mutiply" size="large">
                                <span slot="open">是</span>
                                <span slot="close">否</span>
                            </i-switch>
                        </i-col>
                        <i-col span="4">
                            <Button type="primary" shape="circle" icon="plus" @click="addContent"></Button>
                        </i-col>
                    </Row>
                </FormItem>
                <FormItem v-for="(content, index) in edittingPromotion.contentList" :key="index">
                    <Row :gutter="16">
                        <i-col span="1" class="promotion-editor-content-label">满</i-col>
                        <i-col span="8"><Input v-model="content.each" placeholder="输入..." /></i-col>
                        <i-col span="1" class="promotion-editor-content-label">减</i-col>
                        <i-col span="8"><Input v-model="content.payback" placeholder="输入..." /></i-col>
                        <i-col span="1" class="promotion-editor-content-label">元</i-col>
                        <i-col span="1" offset="2">
                            <a @click="removeContent(index)"><Icon type="close" color="gray"></Icon></a>
                        </i-col>
                    </Row>
                </FormItem>
            </Form>

            <div slot="footer">
                <Button type="success" size="large" long :loading="modal_loading" @click="save">保存</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
import util from '@/libs/util.js';

export default {
    props: {
        editting: Boolean,
        promotion: Object
    },
    data () {
        return {
            syncEditting: this.editting,
            edittingPromotion: JSON.parse(JSON.stringify(this.promotion))
        }
    },
    methods: {
        addContent () {
            this.edittingPromotion.contentList.push({
                each: null,
                payback: null
            })
        },
        removeContent (index) {
            this.edittingPromotion.contentList.splice(index, 1)
        },
        save () {
            util.deepCopyFromTo(this.edittingPromotion, this.promotion)
            this.$Message.success('保存成功')
        }
    },
    watch: {
        editting (val) {
            this.syncEditting = val
        },
        syncEditting (val) {
            this.$emit('on-editting-change', val)
        },
        promotion (val) {
            this.edittingPromotion = JSON.parse(JSON.stringify(this.promotion))
        }
    }
}
</script>

