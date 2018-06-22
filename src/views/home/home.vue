<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";
</style>
<template>
    <div class="home-main">
        <Row :gutter="10">
            <i-col :md="24" :lg="8">
                <Row class-name="home-page-row1" :gutter="10">
                    <i-col :md="12" :lg="24" class="margin-bottom-10">
                        <Card>
                            <Row type="flex" class="restrt-infor">
                                <i-col span="8">
                                    <Row class-name="made-child-con-middle" type="flex" align="middle">
                                        <img class="avator-img" :src="avatorPath" />
                                    </Row>
                                </i-col>
                                <i-col span="16" style="padding-left:6px">
                                    <Row class-name="made-child-con-middle" type="flex" align="middle">
                                        <i-col span="24">
                                            <p class="card-restrt-infor-name">{{ restrt.name }}</p>
                                            <p class="card-restrt-infor-description">{{ restrt.description }}</p>
                                        </i-col>
                                    </Row>
                                </i-col>
                            </Row>
                            <div class="line-gray"></div>
                            <Row class="margin-top-8">
                                <i-col span="8"><p class="notwrap">营业时间:</p></i-col>
                                <i-col span="16" class="padding-left-8">{{ restrt.open }}-{{ restrt.close }}</i-col>
                            </Row>
                            <Row class="margin-top-8">
                                <i-col span="8"><p class="notwrap">当前状态:</p></i-col>
                                <i-col span="16" class="padding-left-8">
                                    <p v-if="restrtState" class="card-restrt-infor-state-open">营业中</p>
                                    <p v-if="!restrtState" class="card-restrt-infor-state-close">已打烊</p>
                                </i-col>
                            </Row>
                            <div class="card-restrt-infor-con">
                                <a @click="editRestrtInfo"><Icon type="compose" size="18"></Icon></a>
                            </div>
                        </Card>
                        <restrt-editor
                            :editting="isEditting"
                            :restrt="edittingRestrt"
                            @on-editting-change="syncEditting"
                        ></restrt-editor>
                    </i-col>
                    <i-col :md="12" :lg="24" :style="{marginBottom: '10px'}">
                        <Card>
                            <p slot="title" class="card-title">
                                <Icon type="android-checkbox-outline"></Icon>
                                待办事项
                            </p>
                            <a type="text" slot="extra" @click.prevent="addNewToDoItem">
                                <Icon type="plus-round"></Icon>
                            </a>
                            <Modal
                                v-model="showAddNewTodo"
                                title="添加新的待办事项"
                                @on-ok="addNew"
                                @on-cancel="cancelAdd">
                                <Row type="flex" justify="center">
                                    <Input v-model="newToDoItemValue" icon="compose" placeholder="请输入..." style="width: 300px" />
                                </Row>
                                <Row slot="footer">
                                    <Button type="text" @click="cancelAdd">取消</Button>
                                    <Button type="primary" @click="addNew">确定</Button>
                                </Row>
                            </Modal>
                            <div class="to-do-list-con">
                                <div v-for="(item, index) in toDoList" :key="'todo-item' + (toDoList.length - index)" class="to-do-item">
                                    <to-do-list-item :content="item.title"></to-do-list-item>
                                </div>
                            </div>
                        </Card>
                    </i-col>
                </Row>
            </i-col>
            <i-col :md="24" :lg="16">
                <Row :gutter="5">
                    <i-col :xs="24" :sm="12" :md="6" class="margin-bottom-10">
                        <infor-card
                            id-name="total_user_count"
                            :end-val="count.totalUser"
                            iconType="android-people"
                            color="#2d8cf0"
                            intro-text="今日客户数"
                        ></infor-card>
                    </i-col>
                    <i-col :xs="24" :sm="12" :md="6" class="margin-bottom-10">
                        <infor-card
                            id-name="new_user_count"
                            :end-val="count.newUser"
                            iconType="android-person-add"
                            color="#64d572"
                            :iconSize="50"
                            intro-text="今日新客数"
                        ></infor-card>
                    </i-col>
                    <i-col :xs="24" :sm="12" :md="6" class="margin-bottom-10">
                        <infor-card
                            id-name="turnover_count"
                            :end-val="count.turnover"
                            iconType="social-yen"
                            color="#ffd572"
                            intro-text="今日总营业额"
                        ></infor-card>
                    </i-col>
                    <i-col :xs="24" :sm="12" :md="6" class="margin-bottom-10">
                        <infor-card
                            id-name="dish_count"
                            :end-val="count.dish"
                            iconType="android-cart"
                            color="#f25e43"
                            intro-text="今日售出菜品数"
                        ></infor-card>
                    </i-col>
                </Row>
                <Row>
                    <Card :padding="0">
                        <p slot="title" class="card-title">
                            <Icon type="map"></Icon>
                            今日服务调用地理分布
                        </p>
                        <div class="map-con">
                            <i-col span="10">
                                <map-data-table :cityData="cityData" height="281" :style-obj="{margin: '12px 0 0 11px'}"></map-data-table>
                            </i-col>
                            <i-col span="14" class="map-incon">
                                <Row type="flex" justify="center" align="middle">
                                    <home-map :city-data="cityData"></home-map>
                                </Row>
                            </i-col>
                        </div>
                    </Card>
                </Row>
            </i-col>
        </Row>
        <Row :gutter="10" class="margin-top-10">
            <i-col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="android-map"></Icon>
                        上周每日来访量统计
                    </p>
                    <div class="data-source-row">
                        <visite-volume></visite-volume>
                    </div>
                </Card>
            </i-col>
            <i-col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="ios-pulse-strong"></Icon>
                        数据来源统计
                    </p>
                    <div class="data-source-row">
                        <data-source-pie></data-source-pie>
                    </div>
                </Card>
            </i-col>
            <i-col :md="24" :lg="8">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="android-wifi"></Icon>
                        各类用户服务调用变化统计
                    </p>
                    <div class="data-source-row">
                        <user-flow></user-flow>
                    </div>
                </Card>
            </i-col>
        </Row>
        <Row class="margin-top-10">
            <Card>
                <p slot="title" class="card-title">
                    <Icon type="ios-shuffle-strong"></Icon>
                    上周每日服务调用量(万)
                </p>
                <div class="line-chart-con">
                    <service-requests></service-requests>
                </div>
            </Card>
        </Row>
    </div>
</template>

<script>
import cityData from './map-data/get-city-value.js'
import homeMap from './components/map.vue'
import dataSourcePie from './components/dataSourcePie.vue'
import visiteVolume from './components/visiteVolume.vue'
import serviceRequests from './components/serviceRequests.vue'
import userFlow from './components/userFlow.vue'
import countUp from './components/countUp.vue'
import inforCard from './components/inforCard.vue'
import mapDataTable from './components/mapDataTable.vue'
import toDoListItem from './components/toDoListItem.vue'
import RestrtEditor from './components/restrt-editor.vue'
import { mapState } from 'vuex'
import Util from '@/libs/util.js'

export default {
    name: 'home',
    components: {
        homeMap,
        dataSourcePie,
        visiteVolume,
        serviceRequests,
        userFlow,
        countUp,
        inforCard,
        mapDataTable,
        toDoListItem,
        RestrtEditor
    },
    data () {
        return {
            isEditting: false,
            edittingRestrt: {},
            toDoList: [
                {
                    title: '去进货 50 斤大米'
                },
                {
                    title: '去进货 100 斤土豆'
                },
                {
                    title: '晚上8点去找老王清帐'
                },
                {
                    title: '去买个新的砧板'
                }
            ],
            count: {
                totalUser: 496,
                newUser: 128,
                turnover: 43805,
                dish: 3950
            },
            cityData: cityData,
            showAddNewTodo: false,
            newToDoItemValue: ''
        }
    },
    computed: {
        ...mapState({
            avatorPath: state => state.restaurant.info.img,
            restrt: state => state.restaurant.info,
            restrtState (state) {
                let now = new Date()
                let open = new Date()
                let close = new Date()
                open.setHours(...state.restaurant.info.open.split(':'))
                close.setHours(...state.restaurant.info.close.split(':'))
                return now >= open && now <= close
            }
        })
    },
    created () {
        this.getInfo()
    },
    methods: {
        async getInfo () {
            await this.$store.dispatch('restaurant/getInfo')
        },
        editRestrtInfo () {
            this.edittingRestrt = Util.deepCopy(this.$store.state.restaurant.info)
            this.isEditting = true
        },
        syncEditting (val) {
            this.isEditting = val
        },
        addNewToDoItem () {
            this.showAddNewTodo = true
        },
        addNew () {
            if (this.newToDoItemValue.length !== 0) {
                this.toDoList.unshift({
                    title: this.newToDoItemValue
                })
                setTimeout(() => {
                    this.newToDoItemValue = ''
                }, 200)
                this.showAddNewTodo = false
            } else {
                this.$Message.error('请输入待办事项内容')
            }
        },
        cancelAdd () {
            this.showAddNewTodo = false
            this.newToDoItemValue = ''
        }
    }
}
</script>
