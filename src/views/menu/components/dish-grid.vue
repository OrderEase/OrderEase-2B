<template>
    <draggable
        element="Row"
        :list="category.dishes"
        :options="dishGridOptions"
        :component-data="getComponent()">
        <i-col
            v-for="(dish, index) in category.dishes"
            :key="index"
            span="8"
            class="margin-bottom-10">
            <dish-item
                :dish="dish"
                @request-edit="requestEdit"
                @request-delete="requestDelete"
            ></dish-item>
        </i-col>
        <i-col span="8" class="margin-bottom-10 create-dish-wrap">
            <create-dish-item
                :category="category"
                @on-click="requestAdd"
            ></create-dish-item>
        </i-col>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import DishItem from './dish-item.vue'
import CreateDishItem from './create-dish-item.vue'
import { mapState } from 'vuex'

export default {
    components: {
        draggable,
        DishItem,
        CreateDishItem
    },
    props: {
        category: Object
    },
    computed: {
        ...mapState({
            dishGridOptions (state) {
                return {
                    filter: '.create-dish-wrap',
                    disabled: !state.menu.isSorting
                }
            }
        })
    },
    methods: {
        getComponent () {
            return {
                props: {
                    gutter: 24
                }
            }
        },
        requestEdit (dish) {
            this.$emit('request-edit', {
                dish,
                category: this.category
            })
        },
        requestAdd (category) {
            this.$emit('request-add', category)
        },
        requestDelete (dish) {
            this.$emit('request-delete', {
                dish,
                category: this.category
            })
        }
    }
}
</script>
