<style lang="less">
    @import './promotion-editor.less';
</style>

<template>
    <Modal v-model="syncEditting" width="380">
        <p slot="header">
            <Icon type="edit"></Icon>
            <span>编辑活动</span>
        </p>

        <Form :model="edittingPromotion" :label-width="80">
            <FormItem label="活动名称">
                <Input
                    v-model="edittingPromotion.name"
                    placeholder="输入..."
                    :disabled="saveLoading"
                />
            </FormItem>
            <FormItem label="活动类型">
                <Input
                    v-model="edittingPromotion.type"
                    placeholder="输入..."
                    :disabled="saveLoading"
                />
            </FormItem>
            <FormItem label="活动时间">
                <Row>
                    <i-col span="24">
                        <DatePicker
                            class="promotion-editor-date-time-range"
                            type="datetimerange"
                            format="yyyy-MM-dd HH:mm"
                            placeholder="选择时间段"
                            v-model="dateTimeRange"
                            @on-change="dateTimeRangeChanged"
                            :disabled="saveLoading"
                        ></DatePicker>
                    </i-col>
                </Row>
            </FormItem>
            <FormItem label="活动可叠加">
                <Row>
                    <i-col span="20">
                        <i-switch
                            v-model="edittingPromotion.mutiply"
                            size="large"
                            :disabled="saveLoading">
                            <span slot="open">是</span>
                            <span slot="close">否</span>
                        </i-switch>
                    </i-col>
                    <i-col span="4">
                        <Button
                            type="primary"
                            shape="circle"
                            icon="plus"
                            @click="addContent"
                            :disabled="saveLoading"
                        ></Button>
                    </i-col>
                </Row>
            </FormItem>
            <FormItem v-for="(content, index) in edittingPromotion.contentList" :key="index">
                <Row :gutter="16">
                    <i-col span="1" class="promotion-editor-content-label">满</i-col>
                    <i-col span="8">
                        <Input
                            v-model="content.each"
                            placeholder="输入..."
                            :disabled="saveLoading"
                        />
                    </i-col>
                    <i-col span="1" class="promotion-editor-content-label">减</i-col>
                    <i-col span="8">
                        <Input
                            v-model="content.payback"
                            placeholder="输入..."
                            :disabled="saveLoading"/></i-col>
                    <i-col span="1" class="promotion-editor-content-label">元</i-col>
                    <i-col span="1" offset="2">
                        <a @click="removeContent(index)"><Icon type="close" color="gray"></Icon></a>
                    </i-col>
                </Row>
            </FormItem>
        </Form>

        <div slot="footer">
            <Button
                type="success"
                size="large"
                long
                :loading="saveLoading"
                @click="save"
            >保存</Button>
        </div>
    </Modal>
</template>

<script>
import util from '@/libs/util.js'

export default {
    props: {
        editting: Boolean,
        promotion: Object
    },
    data () {
        return {
            syncEditting: this.editting,
            edittingPromotion: this.createEmptyPromotion(),
            dateTimeRange: [],
            saveLoading: false
        }
    },
    methods: {
        createEmptyPromotion () {
            return {
                name: '',
                type: '',
                start: '',
                end: '',
                mutiply: false,
                contentList: []
            }
        },
        dateTimeRangeChanged (dateTimeRange) {
            this.edittingPromotion.start = dateTimeRange[0]
            this.edittingPromotion.end = dateTimeRange[1]
        },
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
            let vm = this

            this.saveLoading = true

            setTimeout(() => {
                vm.saveSuccess()
            }, 1000)
        },
        saveSuccess () {
            util.deepCopyFromTo(this.edittingPromotion, this.promotion)
            this.saveLoading = false
            this.$Message.success('保存成功')

            if (this.promotion.new) {
                this.promotion.new = false
                this.edittingPromotion.new = false
                this.$emit('add-promotion', this.promotion)
            }
        },
        saveFailure (vm) {
            vm.saveLoading = false
            vm.$Message.error('保存失败')
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
            this.dateTimeRange = []
        }
    }
}
</script>

