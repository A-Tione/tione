<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tTabsPane",
        inject: ['eventBus'], // 注入

        props: {
            name: {
                type: [String,Number],
                required: true
            }
        },

        data() {
            return {
                active: false,
            }
        },

        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name
            })
        },

        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    .tabs-pane {

    }
</style>