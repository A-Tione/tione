<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "tTabs",
        props: {
            selected: {
                type: String,
                required: true,
                default() {
                    return ''
                }
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }

            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() { // 依赖
            return {
                eventBus: this.eventBus
            }
        },

        mounted() {
            this.$children.forEach(vm => { // 初始化item，找到item在组件中的位置
                if (vm.$options.name === 'tTabsHead') {
                    vm.$children.forEach(childVm => {
                        if (childVm.$options.name === 'tTabsItem' && childVm.name === this.selected) {
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>