<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tTabsItem",
        inject: ['eventBus'], // 注入

        data() {
            return {
                active: false,
            }
        },

        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String,Number],
                required: true
            }
        },

        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
            })
        },

        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item {

    }
</style>