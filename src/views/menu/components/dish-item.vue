<style lang="less">
    @import '../../../styles/common.less';
    @import './dish-item.less';
</style>

<template>
    <Card class="height-150px dish-item">
        <Row>
            <i-col span="10">
                <div class="dish-img-wrapper">
                    <img v-show="dish.img !== ''" class="dish-img" :src="dish.img" :alt="dish.name">
                </div>
            </i-col>
            <i-col span="12">
                <Row>
                    <h3>{{ dish.name }}</h3>
                </Row>
                <Row class="margin-top-40">
                    <p class="dish-avaliable" :class="stockClass">{{ stockInfo }}</p>
                </Row>
                <Row>
                    <p>库存: {{ dish.stock }}</p>
                </Row>
                <Row>
                    <p>价格: {{ dish.price }}</p>
                </Row>
            </i-col>
            <i-col span="2" class="dish-item-con">
                <a @click="requestEdit"><Icon type="compose" size="18"></Icon></a>
                <a @click="requestDelete"><Icon type="trash-a" size="18"></Icon></a>
                <p class="dish-item-like">
                    <span class="dish-item-like-num">{{ dish.likes }}</span>
                    <Icon type="android-favorite-outline" size="16" color="#ed3f14" class="dish-item-like-icon"/>
                </p>
                <Icon
                    v-if="isSorting"
                    class="dish-item-con-move"
                    type="arrow-move"
                    size="18"
                ></Icon>
            </i-col>
        </Row>
    </Card>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        dish: Object
    },
    computed: {
        ...mapState({
            isSorting: state => state.menu.isSorting
        }),
        stockInfo () {
            return this.dish.avaliable === 1 ? '已上架' : '未上架'
        },
        stockClass () {
            return this.dish.avaliable === 1 ? 'dish-avaliable-yes' : 'dish-avaliable-no'
        }
    },
    methods: {
        requestEdit () {
            this.$emit('request-edit', this.dish)
        },
        requestDelete () {
            this.$emit('request-delete', this.dish)
        }
    }
}
</script>

