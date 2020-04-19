<template>
    <div class="cascader-item-content" :style="{height: height}">
        <div class="left">
            <div class="label" v-for="(item, index) in recursionItem" :key="index" @click="onClickLabel(item)">
                {{item.name}}
                <span v-if="item.children"> > </span>
            </div>
        </div>
        <div class="right" v-if="rightItems">
            <cascader-items
                ref="right"
                :recursionItem="rightItems"
                :level="level+1"
                :height="height"
                :selected="selected"
                @update:selected="onUpdate">
            </cascader-items>
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
            },
            selected: {
                type: Array,
                default: () => {return []}
            },
            level: {
                type: Number,
                default: 0
            }
        },
        computed: {
            rightItems() {
                let currentSelected = this.selected[this.level]
                if (currentSelected && currentSelected.children) {
                    return currentSelected.children
                } else  {
                    return null
                }
            }
        },
        methods: {
            onClickLabel(item) {
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                copy.splice(this.level + 1)
                this.$emit('update:selected', copy)
            },
            onUpdate(item) {
                this.$emit('update:selected', item)
            }
        }
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
            border-left: 1px solid $border-color-light;
        }
        .label {
            padding: .3em 1em;
        }
    }

</style>