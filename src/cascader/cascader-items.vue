<template>
    <div class="cascader-item-content" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="(item, index) in recursionItem" :key="index" @click="leftSelected = item">
                {{item.name}}
                <span v-if="item.children"> > </span>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items :recursionItem="rightItems" :height="height"></cascader-items>
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
            },
            height: {
                type: String
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
    @import "../../styles/var";
    .cascader-item-content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .left {
            height: 100%;
            padding: .3em 0;
        }
        .right {
            height: 100%;
            border-left: 1px solid $border-color;
        }
        .label {
            padding: .3em 1em;
        }
    }

</style>