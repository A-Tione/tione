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

        created() {
            // this.$emit('update:selected', 'xxx')
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>