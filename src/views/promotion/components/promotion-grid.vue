<template>
    <Row :gutter="24">
        <i-col :sm="12" :md="8" class="margin-bottom-10" v-for="(promotion, index) in promotionsList" :key="index">
            <promotion-item
                :promotion="promotion"
                @request-edit="requestEdit"
                @request-delete="requestDelete"
            ></promotion-item>
        </i-col>
        <i-col :sm="12" :md="8" class="margin-bottom-10" v-if="showCreateItem">
            <create-promotion-item @on-click="requestAdd"></create-promotion-item>
        </i-col>
    </Row>
</template>

<script>
import PromotionItem from './promotion-item.vue'
import CreatePromotionItem from './create-promotion-item.vue'

export default {
    components: {
        PromotionItem,
        CreatePromotionItem
    },
    props: {
        showCreateItem: Boolean,
        promotionsList: Array
    },
    methods: {
        requestEdit (promotion) {
            this.$emit('request-edit', promotion)
        },
        requestDelete (promotion) {
            this.$emit('request-delete', promotion)
        },
        requestAdd () {
            this.$emit('request-add')
        }
    }
}
</script>
