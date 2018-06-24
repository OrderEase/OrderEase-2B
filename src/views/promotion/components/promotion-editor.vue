<style lang="less">
    @import './promotion-editor.less';
</style>

<template>
    <Modal v-model="syncEditting" :mask-closable="false" width="380">
        <p slot="header">
            <Icon type="edit"></Icon>
            <span>编辑活动</span>
        </p>

        <Form
            ref="promotionForm"
            :model="edittingPromotion"
            :rules="ruleValidate"
            :label-width="80">

            <FormItem label="活动主题" prop="theme">
                <Input
                    v-model="edittingPromotion.theme"
                    placeholder="输入..."
                    :disabled="saveLoading"
                />
            </FormItem>
            <FormItem label="活动时间" prop="dateTimeRange">
                <DatePicker
                    v-model="edittingPromotion.dateTimeRange"
                    :editable="false"
                    :disabled="saveLoading"
                    @on-change="dateTimeRangeChanged"
                    type="datetimerange"
                    placeholder="请选择时间段"
                    format="yyyy-MM-dd HH:mm"
                    class="promotion-editor-date-time-range"
                ></DatePicker>
            </FormItem>
            <FormItem label="活动类型">
                <Row>
                    <i-col span="20">
                        <RadioGroup
                            v-model="edittingPromotion.mode"
                            @on-change="updateRules">
                            <Radio :label="1" :disabled="saveLoading">满减</Radio>
                            <Radio :label="2" :disabled="saveLoading">满折</Radio>
                        </RadioGroup>
                    </i-col>
                    <i-col span="4">
                        <Button
                            type="primary"
                            shape="circle"
                            icon="plus"
                            @click="addRule"
                            :disabled="saveLoading"
                        ></Button>
                    </i-col>
                </Row>
            </FormItem>
            <FormItem prop="rules">
                <FormItem
                    v-for="(rule, index) in edittingPromotion.rules"
                    :key="index"
                    class="promotion-editor-rule">
                    <Row :gutter="16">
                        <i-col span="1" class="promotion-editor-rule-label">满</i-col>
                        <i-col span="8">
                            <InputNumber
                                v-model="rule.requirement"
                                placeholder="输入..."
                                :disabled="saveLoading"
                            />
                        </i-col>
                        <i-col span="1" class="promotion-editor-rule-label">{{ rulesMiddleInfo }}</i-col>
                        <i-col span="8">
                            <InputNumber
                                v-if="edittingPromotion.mode === 1"
                                v-model="rule.discount"
                                :min="0"
                                :disabled="saveLoading"
                                placeholder="输入..."
                            />
                            <InputNumber
                                v-if="edittingPromotion.mode === 2"
                                v-model="rule.discount"
                                :min="0"
                                :max="1"
                                :disabled="saveLoading"
                                placeholder="输入..."
                            />
                        </i-col>
                        <i-col span="1" class="promotion-editor-rule-label">{{ rulesLastInfo }}</i-col>
                        <i-col span="1" offset="2">
                            <a @click="removeRule(index)"><Icon type="close" color="gray"></Icon></a>
                        </i-col>
                    </Row>
                </FormItem>
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
import Util from '@/libs/util.js'

export default {
    props: {
        promotion: Object,
        editting: Boolean
    },
    data () {
        return {
            saveLoading: false,
            syncEditting: this.editting,
            edittingPromotion: {},
            deletedRules: [],

            ruleValidate: {
                theme: [
                    {
                        type: 'string',
                        required: true,
                        message: '菜品名称不能为空',
                        trigger: 'blur'
                    }
                ],
                dateTimeRange: [
                    {
                        type: 'array',
                        len: 2,
                        required: true,
                        message: '请选择活动时间',
                        trigger: 'change'
                    },
                    {
                        validator (rule, value, callback, source, options) {
                            var errors = []
                            if (!value[0] || !value[1]) {
                                errors.push(new Error('请选择活动时间'))
                            }
                            callback(errors)
                        }
                    }
                ],
                rules: [
                    {
                        validator (rule, value, callback, source, options) {
                            let errors = []
                            if (value.length < 1) {
                                errors.push(new Error('至少要有一条优惠'))
                            }
                            callback(errors)
                        }
                    },
                    {
                        validator (rule, value, callback, source, options) {
                            var errors = []
                            let reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
                            let warnMessage = '请检查金额是否符合规范 (小数点后最多 2 位)'

                            value.forEach((rule, index) => {
                                if (!reg.test(rule.requirement)) {
                                    errors.push(new Error(warnMessage))
                                }
                                if (rule.mode === 1) {
                                    if (!reg.test(String(rule.discount))) {
                                        errors.push(new Error(warnMessage))
                                    }
                                } else {
                                    if (rule.discount < 0 || rule.discount > 1) {
                                        errors.push(new Error('折扣范围只能为 0 ~ 1'))
                                    }
                                }
                            })

                            callback(errors)
                        }
                    }
                ]
            }
        }
    },
    computed: {
        rulesMiddleInfo () {
            return this.edittingPromotion.mode === 1 ? '减' : '打'
        },
        rulesLastInfo () {
            return this.edittingPromotion.mode === 1 ? '元' : '折'
        }
    },
    watch: {
        promotion (val) {
            this.deletedRules = []
            this.edittingPromotion = val
            this.edittingPromotion.dateTimeRange = [val.begin, val.end]
            this.$set(this.edittingPromotion, 'mode', this.edittingPromotion.rules[0].mode)
        },
        editting (val) {
            this.syncEditting = val
        },
        syncEditting (val) {
            this.$emit('on-editting-change', val)
        }
    },
    methods: {
        dateTimeRangeChanged (dateTimeRange) {
            this.edittingPromotion.begin = dateTimeRange[0]
            this.edittingPromotion.end = dateTimeRange[1]
        },
        updateRules (value) {
            this.edittingPromotion.rules.forEach((rule, index) => {
                rule.mode = value
            })
        },
        addRule () {
            this.edittingPromotion.rules.push({
                requirement: 0,
                discount: 0,
                mode: this.edittingPromotion.mode
            })
        },
        removeRule (index) {
            this.deletedRules = this.deletedRules.concat(this.edittingPromotion.rules.splice(index, 1))
        },
        async save () {
            this.saveLoading = true
            this.$refs['promotionForm'].validate(async valid => {
                if (valid) {
                    try {
                        let editedPromotion = Util.deepCopy(this.edittingPromotion)

                        delete editedPromotion.dateTimeRange
                        delete editedPromotion.mode

                        if (editedPromotion.id) {
                            await this.$store.dispatch('promotion/updatePromotion', {
                                promotion: editedPromotion,
                                deletedRules: Util.deepCopy(this.deletedRules)
                            })
                        } else {
                            await this.$store.dispatch('promotion/createPromotion', editedPromotion)
                        }

                        this.$Message.success('保存成功')
                        this.syncEditting = false
                    } catch (err) {
                        this.$Message.error('保存失败')
                    }
                }
                this.saveLoading = false
            })
        }
    }
}
</script>

