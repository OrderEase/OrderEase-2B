<template>
    <Row :gutter="24">
        <i-col span="8" class="margin-bottom-10" v-for="(dish, index) in menuContent.dishes" :key="index">
            <dish-item
                :dish="dish"
                @request-edit="requestEdit"
            ></dish-item>
        </i-col>
        <i-col span="8" class="margin-bottom-10">
            <create-dish-item
                :category="menuContent.category"
                @on-click="requestAdd"
            ></create-dish-item>
        </i-col>
    </Row>
</template>

<script>
import DishItem from './dish-item.vue'
import CreateDishItem from './create-dish-item.vue'

export default {
    components: {
        DishItem,
        CreateDishItem
    },
    props: {
        menuContent: Object
    },
    methods: {
        requestEdit (dish) {
            this.$emit('request-edit', dish)
        },
        requestAdd (category) {
            this.$emit('request-add', category)
        }
    }
}
</script>
