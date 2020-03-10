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
            this.checkChildren()
            this.selectTab()
        },

        methods: {
            checkChildren() {
                if (this.$children.length === 0) {
                    console && console.warn && console.warn('tabs没有子组件，应该有tabs-head和tabs-tabs-body')
                }
            },
            selectTab() {
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
    }
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>