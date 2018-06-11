<template>
    <draggable
        element="Row"
        :list="category.dishes"
        :options="dishGridOptions"
        :component-data="getComponent()"
        @end="dishEndDrag">
        <i-col span="8" class="margin-bottom-10" v-for="(dish, index) in category.dishes" :key="index">
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

export default {
    components: {
        draggable,
        DishItem,
        CreateDishItem
    },
    props: {
        category: Object
    },
    data () {
        return {
            dishGridOptions: {
                filter: '.create-dish-wrap'
            }
        }
    },
    methods: {
        getComponent () {
            return {
                props: {
                    gutter: 24
                }
            }
        },
        dishEndDrag () {
            let info = this.category.dishes.reduce((total, dish, index) => {
                return total + '[' + index + '] ' + dish.name + ','
            }, '')
            this.$Message.info(info)
            this.$emit('dish-moved')
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
            this.$emit('request-delete', dish)
        }
    }
}
</script>
