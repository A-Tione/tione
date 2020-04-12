<template>
    <div class="cascader-item-content">
        <div class="left">
            <div class="label" v-for="(item, index) in recursionItem" :key="index" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :recursionItem="rightItems"></cascader-items>
        </div>
    </div>
</template>
f
<script>
    export default {
        name: 'cascaderItems',
        props: {
            recursionItem: {
                type: Array
            }
        },
        data() {
            return {
                leftSelected: null
            }
        },
        computed: {
            rightItems() {
                if (this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children
                } else  {
                    return null
                }
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .cascader-item-content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .left {
            border: 1px solid red;
        }
        .right {
            margin-top: -1px;
        }
    }

</style>